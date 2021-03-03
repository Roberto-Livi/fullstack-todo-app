import React, {Component} from 'react'
import Login from './Login'
import Welcome from './Welcome'

class TodoApp extends Component {
    render() {
        return(
            <div className="TodoApp">
                <Login />
                <Welcome />
            </div>
        )
    }
}

export default TodoApp