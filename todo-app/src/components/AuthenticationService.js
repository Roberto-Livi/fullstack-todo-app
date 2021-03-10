class AuthenticationService {
    registerSuccessfulLogin = (username, password) => {
        console.log("Register Successful Login");
        sessionStorage.setItem('authenticatedUser', username);
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
}

export default new AuthenticationService()