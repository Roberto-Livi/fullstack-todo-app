import React, { Component } from 'react'

class ListTodos extends Component {

    state = {
        todos: [
            {id: 1, description: "Obtain AWS Developer Cert"},
            {id: 2, description: "Go to Cancun"},
            {id: 3, description: "Visit Japan"}
        ]
    }
    render() {
        return(
            <div>
                <h1>List Todos</h1>
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>description</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.state.todos.map(
                            todo =>
                        <tr>
                            <td>{todo.id}</td>
                            <td>{todo.description}</td>
                        </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ListTodos