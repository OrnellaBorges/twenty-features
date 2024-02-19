import { useState } from "react";
import FormBMI from "./FormBMI";
import ResultBMI from "./ResultBMI";
import "./styleBMI.css";
import { BMIData } from "../../data/BMI_data";

export default function ContainerBMI() {
  const [error, setError] = useState<boolean>(false);
  const [resultBMI, setResultBMI] = useState<number | null>(null);

  const calculBMI = (weight: number, size: number) => {
    const BMI = (weight / Math.pow(size / 100, 2)).toFixed(1);
    console.log(BMI);
    // Ajoutez ici la logique pour traiter BMI et mettre à jour le résultat
    setResultBMI(parseFloat(BMI));
  };

  return (
    <div className="container">
      <h1>
        Calcule <span>IMC</span>
      </h1>
      <FormBMI calculBMI={calculBMI} setError={setError} />
      <ResultBMI result={resultBMI} error={error} />
    </div>
  );
}
