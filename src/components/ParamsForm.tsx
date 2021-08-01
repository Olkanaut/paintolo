import { FC } from "react";
import InputField from "./InputField";

interface ParamsFormProps {
  valObjNum: number;
  valTransp: number;
  // valSeed: number;
  setObjNum: (value: number) => void;
  setTransp: (value: number) => void;
  // setSeed: (value: number) => void;
  className: string;
}

const ParamsForm: FC<ParamsFormProps> = (props) => {
  return (
    <form>
      <InputField
        label="number of figures"
        val={props.valObjNum}
        min={1}
        max={100}
        setVal={props.setObjNum}
      />
      <InputField
        label="ephemerality"
        val={props.valTransp}
        min={1}
        max={10000}
        step={100}
        setVal={props.setTransp}
      />
      {/* <InputField
        label="seed"
        val={props.valSeed}
        min={1}
        max={10000}
        setVal={props.setSeed}
      /> */}
    </form>
  );
};

export default ParamsForm;
