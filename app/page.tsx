"use client"

import Link from "next/link"
import { Button, buttonVariants } from "@/components/ui/button"
import init, { add } from "wasm-lib"; // Asumiendo que wasm-lib es tu librería compilada
import { useState } from "react";
import { siteConfig } from "@/config/site"

export default function IndexPage() {
  const [ans, setAns] = useState(420);

  return (
    <section className="container mx-auto min-h-screen grid items-center gap-6 p-8">
      <div className="flex w-full flex-col items-center text-center">
        <h1 className="text-4xl font-bold leading-tight text-gray-800 md:text-5xl">
          Bienvenido a NumAnalytic Solver
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Tu herramienta interactiva de métodos numéricos potenciada por Rust y WebAssembly.
        </p>
        <div className="mt-4">
          <Button onClick={() => init().then(() => setAns(add(ans, 69)))}>
            Probar ahora
          </Button>
          <p className="mt-4 text-sm text-gray-500">
            Haz clic en "Probar ahora" para sumar 69 a {ans} utilizando Rust: resultado {ans + 69}
          </p>
        </div>
      </div>
      <div className="-mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Características Principales</h2>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Algoritmos numéricos precisos ejecutados en Rust</li>
            <li>Interactividad impulsada por WebAssembly para un rendimiento óptimo</li>
            <li>Visualizaciones gráficas avanzadas para una comprensión más profunda</li>
            <li>Documentación detallada y ejemplos prácticos</li>
          </ul>
          <div className="mt-6 flex w-full flex-col sm:flex-row gap-4">
            <Link
              target="_blank"
              rel="noreferrer"
              href={siteConfig.links.github}
              className={buttonVariants({ variant: "outline" })}
            >
              GitHub
            </Link>
            <Link
              target="_blank"
              rel="noreferrer"
              href={siteConfig.links.github}
              className={buttonVariants({ variant: "outline" })}
            >
              Documentación
            </Link>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Comienza a Explorar</h2>
          <p className="text-gray-600">
            Descubre los métodos de análisis numérico disponibles, prueba ejemplos interactivos y profundiza en el conocimiento de la materia.
          </p>
          <Link href="/metodos-de-raices" passHref>
            <Button className="mt-4 btn btn-accent">
              Métodos de Raíces
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
