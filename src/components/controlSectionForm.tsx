import { useFormContext } from "./contexts/formContext";

export default function ControlSectionForm() {
  const { state, dispatch } = useFormContext();

  return (
    <div className="controlBtns">
      {state.step > 1 && (
        <button
          type="button"
          onClick={() =>
            dispatch({
              type: "PREV_STEP",
            })
          }
        >
          Prev
        </button>
      )}

      {state.step < 3 && (
        <button
          type="button"
          onClick={() =>
            dispatch({
              type: "NEXT_STEP",
            })
          }
        >
          Next
        </button>
      )}

      {state.step === 3 && (
        <button
          type="button"
          onClick={() =>
            dispatch({
              type: "ADD_TASK",
            })
          }
        >
          Submit
        </button>
      )}
    </div>
  );
}
