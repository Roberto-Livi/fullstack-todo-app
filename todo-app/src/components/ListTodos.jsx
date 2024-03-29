import React, { Component } from 'react'
import TodoDataService from '../api/TodoDataService.js'
import AuthenticationService from './AuthenticationService.js'
import moment from 'moment'

class ListTodos extends Component {

    state = {
        todos: [],
        message: null
    }

    componentDidMount() {
        this.refreshTodos()
    }

    deleteTodoClicked = (id) => {
        let username = AuthenticationService.getLoggedInUsername()
        TodoDataService.deleteTodo(username, id)
            .then(
                response => {
                    this.setState({message: `Delete of todo ${id}`})
                    this.refreshTodos()
                }
            )
    }

    updateTodoClicked = (id) => {
        this.props.history.push(`/todos/${id}`);
    }

    addTodoClicked = () => {
        this.props.history.push(`/todos/-1`);
    }

    refreshTodos = () => {
        let username = AuthenticationService.getLoggedInUsername()
        TodoDataService.retrieveAllTodos(username)
        .then(
            response => {
                this.setState({todos: response.data})
            }
        )
    }
    render() {
        return(
            <div>
                <h1>List Todos</h1>
                {this.state.message && <div className="alert alert-success">{this.state.message} Successful</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Target Date</th>
                                <th>Completed</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.state.todos.map(
                                todo =>
                            <tr key={todo.id}>
                                <td>{todo.description}</td>
                                <td>{moment(todo.targetDate).format('YYYY-MM-DD')}</td>
                                <td>{todo.done.toString()}</td>
                                <td><button onClick={() => this.updateTodoClicked(todo.id)} className="btn btn-success">Update</button></td>
                                <td><button onClick={() => this.deleteTodoClicked(todo.id)} className="btn btn-warning">Delete</button></td>
                            </tr>
                            )}
                        </tbody>
                    </table>
                    <div className="row">
                        <button className="btn btn-success" onClick={this.addTodoClicked}>Add</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListTodos