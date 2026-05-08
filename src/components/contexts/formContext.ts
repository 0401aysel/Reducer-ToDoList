import { createContext, useContext } from "react";

import type { State, TAction } from "../../reducers/formReducer";

interface FormDataContext {
  state: State;

  dispatch: React.Dispatch<TAction>;
}

export const FormContext = createContext<FormDataContext | null>(null);

export const useFormContext = () => {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error("Context error");
  }

  return context;
};
