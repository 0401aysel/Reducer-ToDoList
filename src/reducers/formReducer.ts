export interface ITask {
  id: number;
  title: string;
  description: string;
  deadline: boolean;
  date: string;
}

export interface State {
  step: number;
  form: ITask;
  tasks: ITask[];
}

export const initialState: State = {
  step: 1,

  form: {
    id: 0,
    title: "",
    description: "",
    deadline: false,
    date: "",
  },

  tasks: [],
};

export type TAction =
  | { type: "NEXT_STEP" }
  | { type: "PREV_STEP" }
  | {
      type: "SET_FIELD";
      field: string;
      value: string | boolean;
    }
  | { type: "ADD_TASK" };

export function formReducer(state: State, action: TAction): State {
  switch (action.type) {
    case "NEXT_STEP":
      return {
        ...state,
        step: state.step + 1,
      };

    case "PREV_STEP":
      return {
        ...state,
        step: state.step - 1,
      };

    case "SET_FIELD":
      return {
        ...state,

        form: {
          ...state.form,

          [action.field]: action.value,
        },
      };

    case "ADD_TASK":
      return {
        ...state,

        tasks: [
          ...state.tasks,

          {
            ...state.form,
            id: Date.now(),
          },
        ],

        form: initialState.form,

        step: 1,
      };

    default:
      return state;
  }
}
