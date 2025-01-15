import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './actions';

const AddTaskForm = () => {
  const [taskDescription, setTaskDescription] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskDescription.trim()) {
      dispatch(
        addTask({
          id: Date.now(),
          description: taskDescription,
          completed: false,
        })
      );
      setTaskDescription('');
    }
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Enter a new task"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
      />
      <button className="btn btn-primary" onClick={handleAddTask}>
        Add
      </button>
    </div>
  );
};

export default AddTaskForm;
