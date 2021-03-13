import React, {Component} from 'react'
import AuthenticationService from './AuthenticationService.js'

class Login extends Component {

    state = {
        username: "",
        password: "",
        hasLoginFailed: false,
        showSuccessMessage: false
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    loginClicked = () => {
        if(this.state.username === 'livi' && this.state.password === 'l'){
            const { username, password } = this.state
            AuthenticationService.registerSuccessfulLogin(username, password);
            this.props.history.push(`/welcome/${username}`)
            // this.setState({ showSuccessMessage: true })
            // this.setState({ hasLoginFailed: false})
        } else {
            console.log('failed')
            this.setState({ showSuccessMessage: false})
            this.setState({ hasLoginFailed: true })
        }
    }

    render() {
        return(
            <div>
                <h1>Login</h1>
                <div className="container">
                {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                {this.state.showSuccessMessage && <div>Login Successful</div>}
                    Username: <input type="text" name="username" value={this.state.username} onChange={(e) => this.handleChange(e)} />
                    Password: <input type="password" name="password" value={this.state.password} onChange={(e) => this.handleChange(e)} />
                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                </div>
            </div>
        )
    }
}

export default Login