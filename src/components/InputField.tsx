import { ChangeEventHandler, FC } from "react";

// interface A {
//   foo: string;
// }
// type B = {foo: string} & {bar: number};

// type A = {foo: string}
// type B = {bar: number} & A

// interface InputFieldProps extends B {
interface InputFieldProps {
  val: number;
  max: number;
  min: number;
  step?: number;
  setVal: (v: number) => void;
  label: string;
}

const InputField: FC<InputFieldProps> = (props) => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const newValue = parseInt(event.currentTarget.value, 10);
    props.setVal(newValue);
  };

  return (
    <label>
      {props.label}
      <input
        type="number"
        value={props.val}
        min={props.min}
        max={props.max}
        step={props.step}
        onChange={handleChange}
      />
    </label>
  );
};

export default InputField;
{
  /* <label htmlFor="some-input"> */
}
