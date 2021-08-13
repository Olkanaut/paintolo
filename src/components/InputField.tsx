import { ChangeEventHandler, FC } from "react";

interface InputFieldProps {
  value: number;
  max: number;
  min: number;
  step?: number;
  setValue: (v: number) => void;
  label: string;
}

const InputField: FC<InputFieldProps> = (props) => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const newValue = parseInt(event.currentTarget.value, 10);
    props.setValue(newValue);
  };

  return (
    <label className="inputLabel">
      {props.label}
      <input
        type="number"
        value={props.value}
        min={props.min}
        max={props.max}
        step={props.step}
        onChange={handleChange}
      />
    </label>
  );
};

export default InputField;
