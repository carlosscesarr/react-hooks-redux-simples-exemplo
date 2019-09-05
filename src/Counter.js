import React from 'react';
import { useSelector } from 'react-redux';

const Counter = () => {
  const todos = useSelector(state => state.todos);
  return (
    <h2>Você tem {todos.length} todos</h2>
  )
}

export default Counter;