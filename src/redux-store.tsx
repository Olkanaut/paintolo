import { createStore, Reducer } from "redux";

interface State {
  numberOfFigures: number;
  transparency: number;
}

interface StateProps {
  numberOfFigures: number;
  transparency: number;
}

export const mapStateToProps = (state: State): StateProps => {
  return {
    numberOfFigures: state.numberOfFigures,
    transparency: state.transparency,
  };
};

const initialState: State = { numberOfFigures: 5, transparency: 16 };

type Action =
  | { type: "transparency-change"; value: number }
  | { type: "number-change"; value: number };

export const paramsReducer: Reducer<State, Action> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "transparency-change":
      return {
        ...state,
        transparency: action.value,
      };
    case "number-change":
      return {
        ...state,
        numberOfFigures: action.value,
      };
    default:
      return state;
  }
};

export const store = createStore(paramsReducer);
