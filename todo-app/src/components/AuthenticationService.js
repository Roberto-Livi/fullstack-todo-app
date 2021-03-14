import axios from 'axios'
class AuthenticationService {
    registerSuccessfulLogin = (username, password) => {
        let basicAuthHeader = "Basic " + window.btoa(username + ":" + password)
        console.log("Register Successful Login");
        sessionStorage.setItem('authenticatedUser', username);
        this.setupAxiosInterceptors(basicAuthHeader)
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

    setupAxiosInterceptors = (basicAuthHeader) => {
        axios.interceptors.request.use(
            (config) => {
                if(this.isUserLoggedIn()) {
                    config.headers.authorization = basicAuthHeader
                }
                return config
            }
        )
    }
}

export default new AuthenticationService()