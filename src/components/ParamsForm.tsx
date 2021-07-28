import { FC } from "react";
import InputField from "./InputField";

interface ParamsFormProps {
  valObjNum: number;
  valTransp: number;
  setObjNum: (value: number) => void;
  setTransp: (value: number) => void;
}

const ParamsForm: FC<ParamsFormProps> = (props) => {
  return (
    <form>
      <InputField
        label="num of figures"
        val={props.valObjNum}
        min={1}
        max={100}
        setVal={props.setObjNum}
      />
      <InputField
        label="transparency"
        val={props.valTransp}
        min={1}
        max={1200}
        step={10}
        setVal={props.setTransp}
      />
    </form>
  );
};

export default ParamsForm;
