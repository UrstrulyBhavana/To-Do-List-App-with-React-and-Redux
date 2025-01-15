export const addTask = (task) => {
    return {
      type: 'ADD_TASK',
      payload: task,
    };
  };
  
  export const deleteTask = (taskId) => {
    return {
      type: 'DELETE_TASK',
      payload: taskId,
    };
  };
  
  export const markTaskAsCompleted = (taskId) => {
    return {
      type: 'MARK_TASK_COMPLETED',
      payload: taskId,
    };
  };
  