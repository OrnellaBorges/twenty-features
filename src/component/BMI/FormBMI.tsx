import { useState } from "react";
import ButtonBMI from "./ButtonBMI";
import Input from "./Input";

type PropsFormData = {
  /* calculResult: (result: number) => void; */
  calculBMI: (weight: number, size: number) => void;
  setError: (value: boolean) => void;
};

export default function FormBMI({ calculBMI, setError }: PropsFormData) {
  const [weight, setWeight] = useState<number | null>(null);
  const [size, setSize] = useState<number | null>(null);

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("hello je suis dans le handleSubmitForm");

    // Récupérez les valeurs du formulaire
    /* const weightValue = parseFloat(e.currentTarget.elements["weight"].value);
    const sizeValue = parseFloat(e.currentTarget.elements["size"].value); */

    // si mes champs sont valide alor je fais le caluleBMI
    if (size !== null && size >= 1 && weight !== null && weight >= 1) {
      // Appelez la fonction de calcul
      setError(false);
      calculBMI(weight, size);
    } else {
      setError(true);
    }
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <Input
        name="size"
        type="number"
        placeholder="size"
        labelText="Votre taille en cm:"
        setSetter={setSize}
      />
      <Input
        name="weight"
        type="number"
        placeholder="weight"
        labelText="Votre poids en kg:"
        setSetter={setWeight}
      />
      <ButtonBMI />
    </form>
  );
}
