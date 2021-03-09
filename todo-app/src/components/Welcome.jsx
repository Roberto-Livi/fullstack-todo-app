import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import HelloWorldService from '../api/HelloWorldService.js'

class Welcome extends Component {

    state = {
        welcomeMessage: ''
    }

    retrieveWelcomeMessage = () => {
            // HelloWorldService.executedHelloWorldService()
            // .then(response => this.handleSuccessfulResponse(response))

            // HelloWorldService.executedHelloWorldBeanService()
            // .then(response => this.handleSuccessfulResponse(response))

            HelloWorldService.executedHelloWorldPathVariableService(this.props.match.params.name)
            .then(response => this.handleSuccessfulResponse(response))
    }

    handleSuccessfulResponse = (response) => {
        this.setState({welcomeMessage: response.data.message})
    }
    render() {
        return(
            <>
                <h1>Welcome!</h1>
                <div className="container">
                    Welcome {this.props.match.params.name}.
                    You can manage your todos <Link to="/todos">here</Link>
                </div>
                <div className="container">
                    Click here to get a customized welcome message.
                    <button onClick={this.retrieveWelcomeMessage} className="btn btn-success">Get Welcome Message</button>
                </div>
                <div className="container">
                    <h1>{this.state.welcomeMessage}</h1>
                </div>
            </>
        )
    }
}

export default Welcome