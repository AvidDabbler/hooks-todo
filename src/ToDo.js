import React, { useState, useEffect } from 'react';

// todo: add in a <List /> component function

const initialToDo = [];

let id = 0;

const ToDo = () => {
    const [todos, setToDo] = useState(initialToDo);
    const [input, setInput] = useState('');
    
    const todoList = (todos) => {
        return (
            todos.map((todo) => {
            return (
                <div
                    id={`todo-${todo.id}-${todo.name}`}
                    className='todo-list flex px-2 py-1 w-1/2 justify-between'>
                    <input
                        className="px-3"
                        type='checkbox'
                        name={todo.name}
                        id={`id-${todo.id}`}
                        value={todo.name}
                        onChange={e => {
                            let div = document.getElementById(`todo-${todo.id}-${todo.name}`)
                            div.classList.contains('done') ? div.classList.remove('done') : div.classList.add('done')
                        }}
                    />
                        <p className='flex mr-auto pl-2'>{todo.name}</p>
                    <button 
                        className='rounded-sm border-2 px-2'
                        onClick={(e)=>{
                            let item = todos.find(el=>el.id == todo.id);
                            todos.splice(todos.indexOf(item, 0), 1)
                            setToDo([...todos]);
                        }}    
                    >-</button>
                </div>
        )}))
    }
    
    const addItem = (e) => {
            e.preventDefault();
            // todos.todo.push({id:{id},name:{input}})
            setToDo([...todos, {id,name: input}])
            id++
            setInput('')
    }
    
    return(
        <div className='flex flex-col w-5/6 m-auto py-2'>
            <h2>To Do</h2>
            <form className='todo-form flex py-2'>
                <input 
                    className='rounded-sm border-2' 
                    type='text'
                    onChange={e=>setInput(e.target.value)}
                    value={input}
                ></input>
                <button 
                    className='rounded-sm border-2 mx-3 px-2'
                    onClick={e=>addItem(e)}
                    >add</button>
            </form>
            {todoList(todos)}
        </div>
    )
}

export default ToDo