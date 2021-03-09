import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Welcome extends Component {

    retrieveWelcomeMessage = () => {
            console.log("retrieve clicked");
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
            </>
        )
    }
}

export default Welcome