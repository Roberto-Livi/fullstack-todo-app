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
            .catch(error => this.handleError(error))
    }

    handleSuccessfulResponse = (response) => {
        this.setState({welcomeMessage: response.data.message})
    }

    handleError = (error) => {
        let errorMessage = '';
        // if(error.message) {
        //     errorMessage += error.message
        // }

        // if(error.response && error.response.data) {
        //     errorMessage += error.response.data.message
        // }

        error.message ? errorMessage += error.message : errorMessage += error.response.data.message

        this.setState({welcomeMessage: errorMessage})
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