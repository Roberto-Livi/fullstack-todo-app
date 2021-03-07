import React, { Component } from 'react'

class ListTodos extends Component {

    state = {
        todos: [
            {id: 1, description: "Obtain AWS Developer Cert", done: false, targetDate: new Date()},
            {id: 2, description: "Go to Cancun", done: false, targetDate: new Date()},
            {id: 3, description: "Visit Japan", done: false, targetDate: new Date()}
        ]
    }
    render() {
        return(
            <div>
                <h1>List Todos</h1>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>description</th>
                                <th>Completed</th>
                                <th>Target Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.state.todos.map(
                                todo =>
                            <tr>
                                <td>{todo.description}</td>
                                <td>{todo.done.toString()}</td>
                                <td>{todo.targetDate.toString()}</td>
                            </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListTodos