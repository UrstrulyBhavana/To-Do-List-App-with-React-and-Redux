import React from 'react';
import AddTaskForm from './Redux/AddTaskForm';
import TodoList from './TodoList';

function App() {
  return (
    <div className="container">
      <h1 className="text-center mt-4">Todo List App With Redux</h1>
      <AddTaskForm />
      <TodoList />
    </div>
  );
}

export default App;
