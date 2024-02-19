import { BMIData } from "../../data/BMI_data";

type ResultBMI = {
  result: number | null;
  error: boolean;
};

export default function ResultBMI({ result, error }: ResultBMI) {
  const bmiDataElement = BMIData.find((element, index) => {
    if (result !== null) {
      if (Array.isArray(element.range)) {
        // Si element.range est un tableau, vous pouvez accéder aux éléments 0 et 1
        return result >= element.range[0] && result <= element.range[1];
      } else if (typeof element.range === "number") {
        // Si element.range est un nombre unique, vous pouvez le comparer directement
        return result >= element.range;
      }
    }
    return false;
  });

  return (
    <div className="info">
      {bmiDataElement && (
        <>
          <p className="bmi-value">{result}</p>
          <p style={{ color: bmiDataElement.color }} className="result">
            {bmiDataElement.name}
          </p>
        </>
      )}

      {result && !bmiDataElement && (
        <p>Veuillez rentrer des valeurs réalistes</p>
      )}
      {error && (
        <p style={{ color: "red" }}>Oops, il y a une erreur de saisie</p>
      )}
    </div>
  );
}
