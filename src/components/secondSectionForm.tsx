import { useFormContext } from "./contexts/formContext";

export default function SecondSectionForm() {
  const { state, dispatch } = useFormContext();

  return (
    <div className="flex">
      <label htmlFor="description">Description:</label>

      <textarea
        rows={4}
        cols={50}
        value={state.form.description}
        placeholder="description..."
        onChange={(e) =>
          dispatch({
            type: "SET_FIELD",

            field: "description",

            value: e.target.value,
          })
        }
      ></textarea>
    </div>
  );
}
