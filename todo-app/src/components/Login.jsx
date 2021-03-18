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
        let {username, password} = this.state
        // AuthenticationService.executeBasicAuthenticationService(username, password)
        // .then(() => {
        //     AuthenticationService.registerSuccessfulLogin(username, password);
        //     this.props.history.push(`/welcome/${username}`)
        // })
        // .catch(() => {
        //     console.log('failed')
        //     this.setState({ showSuccessMessage: false})
        //     this.setState({ hasLoginFailed: true })
        // })

        AuthenticationService.executeJwtAuthenticationService(username, password)
        .then((response) => {
            AuthenticationService.registerSuccessfulLoginForJwt(username, response.data.token);
            this.props.history.push(`/welcome/${username}`)
        })
        .catch(() => {
            console.log('failed')
            this.setState({ showSuccessMessage: false})
            this.setState({ hasLoginFailed: true })
        })
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