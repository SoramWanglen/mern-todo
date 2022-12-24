import axios from 'axios';
import React, {Component} from 'react'

import List from './List';
import Input from './Input';


import "./todo.css"
class Todo extends Component {

    state = {
        todos: [],
    }

    componentDidMount(){
        this.getTodos();
    }    
    
    getTodos = () => {
        axios.get('http://localhost:8001/api/todos')
        .then((res) => {
            if (res.data) {
                this.setState({todos: res.data});
                console.log(res.data, this.state.todos);
            }
        })    
        .catch((err) => console.log(err, "\n\nReact"));
    }

    deleteTodo = (id) => {
        console.log("\n\n In delete\n\n", id, "\n\n");
        fetch(`http://localhost:8001/api/delete/${id}`, {method: 'DELETE'})
        .then ((res) => {
            // console.log(res.data, "\n data in react\n\n");
            this.getTodos();
        })
        .catch((err) => console.log(err));  
    }

    render() {

        const {todos} = this.state;
        return (
            <div>
                <h1 className="cst">
                    Todos
                </h1>

                <Input getTodos = {this.getTodos} />
                <List todos = {todos} deleteTodo = {this.deleteTodo}></List>

            </div>
        )
    }
}

export default Todo;