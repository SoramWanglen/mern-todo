import React from 'react';

const List = ({todos, deleteTodo}) => {

    let cnt = 0;

    return (
        <ul>
            {
                (todos && todos.length) ?

                todos.map((todo) => 
                         
                          <div><li key = {todo._id}>  {todo.action} </li> 

                          <button key = {cnt++} onClick={() => deleteTodo(todo._id)}>
                              Delete Todo
                          </button> 
                          
                          <p></p> 
                          </div>)
                :                 
                <li>Empty, Add some work!</li>

            }

        </ul>
    )
}

export default List;