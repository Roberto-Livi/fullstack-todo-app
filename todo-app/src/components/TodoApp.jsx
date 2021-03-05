import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './Login'
import Welcome from './Welcome'


class TodoApp extends Component {
    render() {
        return(
            <div className="TodoApp">
                <Router>
                    <Route path="/" exact component={Login} />
                    <Route path="/login" component={Login} />
                    <Route path="/welcome" component={Welcome} />
                </Router>
            </div>
        )
    }
}

export default TodoApp