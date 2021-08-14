import { FC } from "react";
import InputField from "./InputField";

interface ParamsFormProps {
  numberOfFigures: number;
  transparency: number;
  setNumberOfFigures: (value: number) => void;
  setTransparency: (value: number) => void;
  className: string;
}

const ParamsForm: FC<ParamsFormProps> = (props) => {
  return (
    <form>
      <InputField
        label="number of figures"
        value={props.numberOfFigures}
        min={1}
        max={100}
        setValue={props.setNumberOfFigures}
      />
      <InputField
        label="ephemerality"
        value={props.transparency}
        min={1}
        max={100}
        step={5}
        setValue={props.setTransparency}
      />
    </form>
  );
};

export default ParamsForm;
