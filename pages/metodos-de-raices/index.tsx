import { CounterClockwiseClockIcon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

import { CodeViewer } from "@/components/playground/code-viewer"
import { MaxLengthSelector } from "@/components/playground/maxlength-selector"
import { ModelSelector } from "@/components/playground/model-selector"
import { PresetActions } from "@/components/playground/preset-actions"
import { PresetSave } from "@/components/playground/preset-save"
import { PresetSelector } from "@/components/playground/preset-selector"
import { MethodSelector } from "@/components/playground/method-selector"
import { PresetShare } from "@/components/playground/preset-share"
import { TemperatureSelector } from "@/components/playground/temperature-selector"
import { TopPSelector } from "@/components/playground/top-p-selector"
import { models, types } from "@/data/models"
import { presets } from "@/data/presets"
import { methods } from "@/data/methods"
import BisectionComponent from "@/components/chapter-1/bisection"
import { useState } from "react"

const methodComponents: any = {
  "Bisection": BisectionComponent,
  // "Newton Raphson": NewtonRaphsonComponent,
  // Add other method components here
};

export default function RootMethodsPage() {
  const [selectedMethod, setSelectedMethod] = useState(null);

  const MethodComponent = selectedMethod ? methodComponents[selectedMethod.name] : methodComponents["Bisection"];

  return (
    <>
      <div className="h-full flex-col md:flex">
        <div className="container flex flex-col items-start justify-between space-y-2 py-4 sm:flex-row sm:items-center sm:space-y-0 md:h-16">
          <div className="container flex flex-col items-start justify-between space-y-2 py-4 sm:flex-row sm:items-center sm:space-y-0 md:h-16">
            <h2 className="text-lg font-semibold">Métodos de Raíces</h2>
          </div>
          <div className="ml-auto flex w-full space-x-2 sm:justify-end">
            <MethodSelector methods={methods} onMethodSelect={setSelectedMethod} />
            <PresetSave />
            <div className="space-x-2 md:flex">
              <CodeViewer />
            </div>
          </div>
        </div>
        <Separator />
        <Tabs defaultValue="complete" className="flex-1">
          <div className="container h-full py-6">
            <div className="grid h-full items-stretch gap-6 md:grid-cols-[1fr_200px]">
              <div className="flex-col space-y-4 sm:flex md:order-2">
                <ModelSelector types={types} models={models} />
                <TemperatureSelector defaultValue={[0.56]} />
                <MaxLengthSelector defaultValue={[256]} />
                <TopPSelector defaultValue={[0.9]} />
              </div>
              <div className="md:order-1">
                <TabsContent value="complete" className="mt-0 border-0 p-0">
                  <div className="flex h-full flex-col space-y-4">
                    {MethodComponent && <MethodComponent />}
                    {/* <BisectionComponent /> */}
                  </div>
                </TabsContent>
                <TabsContent value="insert" className="mt-0 border-0 p-0">
                  <div className="flex flex-col space-y-4">
                    <div className="grid h-full grid-rows-2 gap-6 lg:grid-cols-2 lg:grid-rows-1">
                      <BisectionComponent />
                    </div>
                  </div>
                </TabsContent>
              </div>
            </div>
          </div>
        </Tabs>
      </div>
    </>
  )
}