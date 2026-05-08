import { useFormContext } from "./contexts/formContext";

export default function FirstSectionForm() {
  const { state, dispatch } = useFormContext();

  return (
    <>
      <label htmlFor="title">Title:</label>

      <input
        type="text"
        id="title"
        value={state.form.title}
        placeholder="title..."
        onChange={(e) =>
          dispatch({
            type: "SET_FIELD",

            field: "title",

            value: e.target.value,
          })
        }
      />
    </>
  );
}
