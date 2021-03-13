import axios from 'axios'
class AuthenticationService {
    registerSuccessfulLogin = (username, password) => {
        console.log("Register Successful Login");
        sessionStorage.setItem('authenticatedUser', username);
        this.setupAxiosInterceptors()
    }

    logout = () => {
        sessionStorage.removeItem('authenticatedUser');
    }

    isUserLoggedIn = () => {
        let user = sessionStorage.getItem('authenticatedUser');
        if(user === null) {
            return false;
        } else {
            return true;
        }
    }

    getLoggedInUsername = () => {
        let username = sessionStorage.getItem('authenticatedUser');
        return true && username
    }

    setupAxiosInterceptors = () => {
        let username = 'user'
        let password = 'password'

        let basicAuthHeader = "Basic " + window.btoa(username + ":" + password)
        axios.interceptors.request.use(
            (config) => {
                if(this.isUserLoggedIn()) {
                    console.log(username)
                    config.headers.authorization = basicAuthHeader
                }
                return config
            }
        )
    }
}

export default new AuthenticationService()