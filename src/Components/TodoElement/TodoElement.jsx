import styling from "./TodoElement.module.css";

export default function TodoElement({
  title,
  status,
  id,
  handleDelete,
  handleStatusChange
}) {
  return (
    <div className={styling.Ele}>
      {title} --------- Status: {status}
      <button onClick={() => handleStatusChange(id, status, title)}>
        Toggle
      </button>
      <button
        onClick={() => {
          handleDelete(id);
        }}
      >
        X
      </button>
    </div>
  );
}
