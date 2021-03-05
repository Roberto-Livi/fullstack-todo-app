import React, {Component} from 'react'

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
        if(this.state.username === 'robbie' && this.state.password === 'loslobos'){
            this.props.history.push("/welcome")
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
            {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
            {this.state.showSuccessMessage && <div>Login Successful</div>}
                Username: <input type="text" name="username" value={this.state.username} onChange={(e) => this.handleChange(e)} />
                Password: <input type="password" name="password" value={this.state.password} onChange={(e) => this.handleChange(e)} />
                <button onClick={this.loginClicked}>Login</button>
            </div>
        )
    }
}

export default Login