import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, toggleTaskCompletion, editTask } from "../Redux/actions";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleEditTask = (id) => {
    const updatedTask = prompt("Edit your task:");
    if (updatedTask) {
      dispatch(editTask(id, updatedTask));
    }
  };

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div key={task.id} className="task">
          <span
            style={{
              textDecoration: task.completed ? "line-through" : "none",
            }}
          >
            {task.description}
          </span>
          <button onClick={() => dispatch(toggleTaskCompletion(task.id))}>
            {task.completed ? "Undo" : "Complete"}
          </button>
          <button onClick={() => handleEditTask(task.id)}>Edit</button>
          <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
