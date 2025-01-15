import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../Redux/actions";

const TaskInput = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask({ id: Date.now(), description: task, completed: false }));
      setTask(""); // Clear input field
    }
  };

  return (
    <div className="task-input">
      <input
        type="text"
        placeholder="Add a new task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAddTask}>+</button>
    </div>
  );
};

export default TaskInput;
