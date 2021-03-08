import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from './Login'
import Logout from './Logout'
import Welcome from './Welcome'
import ListTodos from './ListTodos'
import Error from './Error'
import Header from './Header'
import Footer from './Footer'
import AuthenticatedRoute from './AuthenticatedRoute'

class TodoApp extends Component {
    render() {
        return(
            <div className="TodoApp">
                <Router>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={Login} />
                        <Route path="/login" component={Login} />
                        <AuthenticatedRoute path="/welcome/:name" component={Welcome} />
                        <AuthenticatedRoute path="/todos" component={ListTodos} />
                        <AuthenticatedRoute path="/logout" component={Logout} />
                        <Route component={Error} />
                    </Switch>
                    <Footer />
                </Router>
            </div>
        )
    }
}

export default TodoApp