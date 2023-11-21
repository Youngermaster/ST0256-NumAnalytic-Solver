import React from 'react';
import Link from 'next/link';

export default function RootMethodsPage() {
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
      </div>
    </section>
  );
}
