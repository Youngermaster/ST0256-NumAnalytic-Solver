import React from 'react';
import Link from 'next/link';

export default function BisectionMethodPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1>Bisection Method</h1>
        <p>This is the Bisection method page. Here you will find information and interactive tools related to the Bisection method.</p>
        {/* Add more content and interactive tools related to the Bisection method */}
        <Link href="/">
          Back to home
        </Link>
      </div>
    </section>
  );
}
