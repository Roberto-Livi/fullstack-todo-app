import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from './Login'
import ListTodos from './ListTodos'
import Error from './Error'

class TodoApp extends Component {
    render() {
        return(
            <div className="TodoApp">
                <Router>
                    <Switch>
                        <Route path="/" exact component={Login} />
                        <Route path="/login" component={Login} />
                        <Route path="/todos" component={ListTodos} />
                        <Route component={Error} />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default TodoApp