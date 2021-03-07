import React, { Component } from 'react'

class Header extends Component {
    render() {
        return(
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="/todos"className="navbar-brand">Todos</a></div>
                    <ul className="navbar-nav">
                        <li className="nav-link"><Link to="/welcome">Home</Link></li>
                        <li className="nav-link"><Link to="/todos">Todos</Link></li>
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        <li><Link className="nav-link" to="/login">Login</Link></li>
                        <li><Link className="nav-link" to="/logout">Logout</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header