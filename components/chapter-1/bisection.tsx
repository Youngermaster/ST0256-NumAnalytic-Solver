import React, { useState } from 'react';
import init, { bisection_method } from "wasm-lib";
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input"

const BisectionComponent = () => {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [root, setRoot] = useState(null);

  const handleCalculate = async () => {
    await init();
    const root = bisection_method(parseFloat(a), parseFloat(b), 0.001, 100);
    setRoot(root);
  };

  return (
    <div className="min-h-[400px] flex-1 p-4 md:min-h-[700px] lg:min-h-[700px]">
      <h2>Método de Bisección</h2>
      <Input
        type="number"
        value={a}
        onChange={(e) => setA(e.target.value)}
        placeholder="Valor inicial a"
      />
      <Input
        type="number"
        value={b}
        onChange={(e) => setB(e.target.value)}
        placeholder="Valor inicial b"
      />
      <Button onClick={handleCalculate}>Calcular</Button>
      {root !== null && <p>Raíz encontrada: {root}</p>}
    </div>
  );
};

export default BisectionComponent;
