import React from "react";

type PropsInputBMI = {
  type: string;
  placeholder: string;
  labelText: string;
  name: string;
  setSetter: (value: number) => void;
};

export default function Input({
  type,
  placeholder,
  labelText,
  name,
  setSetter,
}: PropsInputBMI) {
  return (
    <div className="input-group">
      <label className="label" htmlFor="">
        {labelText}
      </label>
      <input
        className="input"
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={(e) => setSetter(Number(e.target.value))}
        //defaultValue=
        min={0}
      />
    </div>
  );
}
