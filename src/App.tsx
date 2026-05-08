import FirstSectionForm from "./components/firstSectionForm";
import SecondSectionForm from "./components/secondSectionForm";
import ThirdSectionForm from "./components/thirdSectionForm";
import ControlSectionForm from "./components/controlSectionForm";
import TaskList from "./components/taskList";

import { FormContext } from "./components/contexts/formContext";

import { formReducer, initialState } from "./reducers/formReducer";

import { useReducer } from "react";

function App() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      <div className="container">
        <div className="task-form">
          <h1>Add your next task</h1>

          <form id="task-form">
            {state.step === 1 && <FirstSectionForm />}

            {state.step === 2 && <SecondSectionForm />}

            {state.step === 3 && <ThirdSectionForm />}

            <ControlSectionForm />
          </form>
        </div>

        <TaskList />
      </div>
    </FormContext.Provider>
  );
}

export default App;
