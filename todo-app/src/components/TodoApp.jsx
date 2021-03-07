import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from './Login'
import Welcome from './Welcome'
import ListTodos from './ListTodos'
import Error from './Error'
import Header from './Header'
import Footer from './Footer'

class TodoApp extends Component {
    render() {
        return(
            <div className="TodoApp">
                <Router>
                    <Header />
                    <Switch>
                    <ListTodos />
                        <Route path="/" exact component={Login} />
                        <Route path="/login" component={Login} />
                        <Route path="/welcome/:name" component={Welcome} />
                        <Route path="/todos" component={ListTodos} />
                        <Route component={Error} />
                    </Switch>
                    <Footer />
                </Router>
            </div>
        )
    }
}

export default TodoApp