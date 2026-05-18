import { useFormContext } from "./contexts/formContext";

export default function TaskList() {
  const { state, dispatch } = useFormContext();

  return (
    <>
      {state.tasks.length > 0 && (
        <div className="task-list">
          <h1 className="task-list-title">Task-list</h1>

          <div className="tasks">
            {state.tasks.map((task) => (
              <div className="task" key={task.id}>
                <button
                  onClick={() => {
                    dispatch({
                      type: "CHANGE_STATUS",
                      payload: task.id,
                    });
                  }}
                  className={`taskStatus ${
                    task.status ? "completed" : "notCompleted"
                  }`}
                ></button>
                <button
                  className="removeTask"
                  onClick={() => {
                    dispatch({
                      type: "REMOVE_TASK",
                      payload: task.id,
                    });
                  }}
                >
                  X
                </button>
                <h2>{task.title}</h2>

                <p>
                  description:
                  {task.description}
                </p>

                <p>
                  deadline:
                  {task.deadline ? "Yes" : "No"}
                </p>

                <p>
                  expire date:
                  {task.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
