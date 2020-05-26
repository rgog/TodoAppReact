import React from 'react';
import logo from './logo.svg';
import { hot } from 'react-hot-loader'
import TodoList from "./todos/TodoList"
import './App.css';

const App =() => (
    <div className="App">
      <TodoList />
    </div>
  );

export default hot(module)(App);
