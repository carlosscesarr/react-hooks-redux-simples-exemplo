import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import TodoList from './components/TodoList';
import Counter from './components/Counter';

function App() {
  return (
    <Provider store={store}>
      <TodoList />
      <Counter />
    </Provider>
  )
}

export default App;