import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Creators } from './../store/ducks/todos';
import { addTodo } from './../actions/todos';

function TodoList() {
    //const qty = 2; caso queira que o useSelector só rode quando esse valor se alterar, vamos passar
    //... esse valor para o useSelector como segundo parametro em chaves [qty]

    const [newTextTodo, setNewTextTodo] = useState('');
    const todos = useSelector(state => state.todos);//(state.todos.slice(0, qty),[qtys])
    const dispatch = useDispatch();

    function addNewTodo() {
        dispatch(Creators.addTodo(newTextTodo));
        setNewTextTodo('');
    }
    return (
        <div>
            <ul>
                {todos && todos.map(todo => (
                    <li key={todo.id}>{todo.text}</li>
                ))}
            </ul>
            <input
                type="text"
                value={newTextTodo}
                onChange={(e) => setNewTextTodo(e.target.value)}
            />
            <button onClick={addNewTodo}>Novo todo</button>
        </div>
    )
}

export default TodoList;
