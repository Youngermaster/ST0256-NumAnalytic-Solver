"use client"

import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants, Button } from "@/components/ui/button"
import init, { add } from "wasm-lib";
import { useEffect, useState } from "react";

export default function IndexPage() {
  const [count, setCount] = useState(0);
  const [ans, setAns] = useState(0);


  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Beautifully designed components <br className="hidden sm:inline" />
          built with Radix UI and Tailwind CSS.
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Hablálo mi fafá
        </p>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Accessible and customizable components that you can copy and paste
          into your apps. Free. Open Source. And Next.js 13 Ready.
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          href={siteConfig.links.docs}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          Documentation
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline" })}
        >
          GitHub
        </Link>
        <div className="card">
          <Button onClick={() => init().then(() => {
            setAns(add(ans, 69));
          })}>
            +69
          </Button>
          <p>{ans} + 69 = {ans}</p>
        </div>
      </div>
    </section>
  )
}
