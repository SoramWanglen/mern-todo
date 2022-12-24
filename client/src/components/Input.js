// import React, {useState, useEffect} from 'react';

// const Input = () => {

//     const [action, setAction] = useState('');

//     const addTodo = () => {
//         setAction(action);
//     }

//     return (
//         <div>
//             <input type = "text"
//                 value = {action} onChange={adddToDo} value = {action}
//             />
//         </div>   
//     )
// }

import React, {Component} from 'react';
import axios from 'axios';

class Input extends Component {

    state = {
        action: ''
    };

    addTodo = () => {

        const task = {
            action: this.state.action
        };

        if (task.action && task.action.length > 0) {

            axios.post('http://localhost:8001/api/create', task) // API's endpoint
                .then(res => {
                    if (res.data) {
                        this.props.getTodos();
                        this.setState({
                            action: '',
                        });
                    }
                })
                .catch(err => console.log(err));
        } else {
            console.log('Input is not valid');
        }

    }

    handleChange = (event) => {
        this.setState({
            action: event.target.value,
        })
    }

    render () {
        let {action} = this.state;

        return (
            <div>
                <input                  // Wrote here Input which was causing a infinte loop REMEMBER
                    type = "text"
                    onChange = {this.handleChange}
                    value = {action}  
                />

                <button onClick = {() => this.addTodo()}>
                    Add Todo
                </button>
            </div>
        )

    }

}

export default Input;