import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import init, { add } from "wasm-lib";
import { Button } from '@/components/ui/button';

export default function RootMethodsPage() {
  const [ans, setAns] = useState(0);

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1>Métodos de Raíces</h1>
        <p>Esta es la página general de métodos de raíces. Aquí encontrará información y herramientas interactivas relacionadas con los métodos de raíces.</p>
        {/* Link to the specific Bisection method page */}
        <Link href="/metodos-de-raices/bisection">
          Método de Bisección
        </Link>
        {/* Add links to other root-finding methods here */}
        <div className="card">
          <Button onClick={() => init().then(() => {
            setAns(add(ans, 69));
          })}>
            +69
          </Button>
          <p>
            {ans} + 69 = {ans}
          </p>
        </div>
      </div>
    </section>
  );
}
