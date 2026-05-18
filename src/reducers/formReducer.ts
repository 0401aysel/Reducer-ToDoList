export interface ITask {
  id: number;
  title: string;
  description: string;
  deadline: boolean;
  date: string;
  status: boolean;
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
    status: false,
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
  | { type: "ADD_TASK" }
  | { type: "REMOVE_TASK"; payload: number }
  | { type: "CHANGE_STATUS"; payload: number };

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
    case "CHANGE_STATUS":
      return {
        ...state,

        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? {
                ...task,
                status: !task.status,
              }
            : task,
        ),
      };
    case "REMOVE_TASK":
      return {
        ...state,

        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    default:
      return state;
  }
}
