import axios from 'axios'
class AuthenticationService {

    executeBasicAuthenticationService(username, password) {
        return axios.get('http://localhost:8080/basicauth', { headers: {authorization: this.createBasicAuthToken(username, password)}})
    }

    executeJwtAuthenticationService(username, password) {
        return axios.post('http://localhost:8080/authenticate', { username, password })
    }

    createBasicAuthToken = (username, password) => {
        return "Basic " + window.btoa(username + ":" + password)
    }

    registerSuccessfulLogin = (username, password) => {
        console.log("Register Successful Login");
        sessionStorage.setItem('authenticatedUser', username);
        this.setupAxiosInterceptors(this.createBasicAuthToken(username, password))
    }

    registerSuccessfulLoginForJwt = (username, token) => {
        sessionStorage.setItem('authenticatedUser', username);
        this.setupAxiosInterceptors(this.createJwtToken(token))
    }

    createJwtToken = (token) => {
        return "Bearer " + token
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

    setupAxiosInterceptors = (token) => {
        axios.interceptors.request.use(
            (config) => {
                if(this.isUserLoggedIn()) {
                    config.headers.authorization = token
                }
                return config
            }
        )
    }
}

export default new AuthenticationService()