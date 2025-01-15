const initialState = {
    tasks: [],
  };
  
  export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return { ...state, tasks: [...state.tasks, action.payload] };
      case 'DELETE_TASK':
        return { ...state, tasks: state.tasks.filter((task) => task.id !== action.payload) };
      case 'MARK_TASK_COMPLETED':
        return {
          ...state,
          tasks: state.tasks.map((task) =>
            task.id === action.payload ? { ...task, completed: true } : task
          ),
        };
      case 'UPDATE_TASK':
        return {
          ...state,
          tasks: state.tasks.map((task) =>
            task.id === action.payload.id
              ? { ...task, description: action.payload.description }
              : task
          ),
        };
      default:
        return state;
    }
  };
  