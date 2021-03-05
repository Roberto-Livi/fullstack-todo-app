import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from './Login'
import Welcome from './Welcome'
import Error from './Error'

class TodoApp extends Component {
    render() {
        return(
            <div className="TodoApp">
                <Router>
                    <Switch>
                        <Route path="/" exact component={Login} />
                        <Route path="/login" component={Login} />
                        <Route path="/welcome/:name" component={Welcome} />
                        <Route component={Error} />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default TodoApp