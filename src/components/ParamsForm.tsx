import { FC } from "react";
import InputField from "./InputField";

import { useDispatch, useSelector } from "react-redux";

import { selectTransparency } from "../redux-store";
import { selectNumberOfFigures } from "../redux-store";


interface ParamsFormProps {
  className: string;
}

const ParamsForm: FC<ParamsFormProps> = (props) => {
  const dispatch = useDispatch();
  const number = useSelector(selectNumberOfFigures);
  const transparency = useSelector(selectTransparency);

  function handleNumberChange (value: number): void {
    dispatch({ type: "number-change", value });
  };

  function handleTransparencyChange (value: number): void {
    dispatch({ type: "transparency-change", value });
  };

  return (
    <form>
      <InputField
        label="number of figures"
        value={number}
        min={1}
        max={100}
        setValue={handleNumberChange}
      />
      <InputField
        label="ephemerality"
        value={transparency}
        min={1}
        max={100}
        step={5}
        setValue={handleTransparencyChange}
      />
    </form>
  );
};

export default ParamsForm;
