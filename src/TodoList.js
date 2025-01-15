import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, markTaskAsCompleted } from './Redux/actions';

const TodoList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [updatedDescription, setUpdatedDescription] = useState('');

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleMarkTaskCompleted = (taskId) => {
    dispatch(markTaskAsCompleted(taskId));
  };

  const handleEditTask = (task) => {
    setEditingTaskId(task.id);
    setUpdatedDescription(task.description);
  };

  const handleSaveTask = (taskId) => {
    dispatch({
      type: 'UPDATE_TASK',
      payload: { id: taskId, description: updatedDescription },
    });
    setEditingTaskId(null);
  };

  return (
    <ul className="list-group">
      {tasks.map((task) => (
        <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
          {editingTaskId === task.id ? (
            <input
              type="text"
              className="form-control"
              value={updatedDescription}
              onChange={(e) => setUpdatedDescription(e.target.value)}
            />
          ) : (
            <span className={task.completed ? 'text-decoration-line-through' : ''}>
              {task.description}
            </span>
          )}

          <div>
            <button
              className="btn btn-success btn-sm me-2"
              onClick={() =>
                editingTaskId === task.id ? handleSaveTask(task.id) : handleMarkTaskCompleted(task.id)
              }
            >
              {editingTaskId === task.id ? 'Save' : 'Complete'}
            </button>
            <button
              className="btn btn-warning btn-sm me-2"
              onClick={() => handleEditTask(task)}
              disabled={editingTaskId === task.id}
            >
              Edit
            </button>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => handleDeleteTask(task.id)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
