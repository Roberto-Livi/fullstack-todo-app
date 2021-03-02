import React, {Component} from 'react'

class LoginComponent extends Component {

    state = {
        username: "",
        password: ""
    }

    handleUsernameChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {
        return(
            <div>
                Username: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                <button>Login</button>
            </div>
        )
    }
}

export default LoginComponent