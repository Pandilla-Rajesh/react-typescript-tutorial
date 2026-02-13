import React from 'react';
import './App.css';
import TodoList from './Components/TodoList/TodoList';
import { Approutes } from './Router/Approutes';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      {/* <TodoList /> */}
      <Approutes />
      <Outlet />
    </>
  );
}

export default App;
