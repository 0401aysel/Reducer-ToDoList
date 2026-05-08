import { useFormContext } from "./contexts/formContext";

export default function ThirdSectionForm() {
  const { state, dispatch } = useFormContext();

  return (
    <>
      <label htmlFor="deadline">Has deadline:</label>

      <input
        type="checkbox"
        checked={state.form.deadline}
        onChange={(e) =>
          dispatch({
            type: "SET_FIELD",

            field: "deadline",

            value: e.target.checked,
          })
        }
      />

      <br />

      <label htmlFor="date">Deadline date:</label>

      <input
        type="date"
        value={state.form.date}
        onChange={(e) =>
          dispatch({
            type: "SET_FIELD",

            field: "date",

            value: e.target.value,
          })
        }
      />
    </>
  );
}
