class AuthenticationService {
    registerSuccessfulLogin(username, password){
        console.log("Register Successful Login");
        sessionStorage.setItem('authenticatedUser', username);
    }
}

export default new AuthenticationService()