import React, {Component} from 'react'

class LoginComponent extends Component {

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
            console.log('Successful')
            this.setState({ showSuccessMessage: true })
            this.setState({ hasLoginFailed: false})
        } else {
            console.log('failed')
            this.setState({ showSuccessMessage: false})
            this.setState({ hasLoginFailed: true })
        }
    }

    render() {
        return(
            <div>
            <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} />
            <ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage} />
                Username: <input type="text" name="username" value={this.state.username} onChange={(e) => this.handleChange(e)} />
                Password: <input type="password" name="password" value={this.state.password} onChange={(e) => this.handleChange(e)} />
                <button onClick={this.loginClicked}>Login</button>
            </div>
        )
    }
}

function ShowInvalidCredentials(props) {
    if(props.hasLoginFailed) {
        return <div>Invalid Credentials</div>
    } else {
        return null
    }
}

function ShowLoginSuccessMessage(props) {
    if(props.showSuccessMessage) {
        return <div>Login Successful</div>
    } else {
        return null
    }
}

export default LoginComponent