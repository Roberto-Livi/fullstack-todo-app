package com.livi.rest.webservices.restfulwebservices.jwt.resource;

import java.io.Serializable;

public class  JwtTokenRequest implements Serializable {

    private static final long serialVersionUID = -5616176897013108345L;

    private String username;
    private String password;

//    {
//        "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsaXZpIiwiZXhwIjoxNjE2Njk4NjYxLCJpYXQiOjE2MTYwOTM4NjF9.b2oE3kY8-5vS-pxPaApnAs5xN3YElc9zDUjzdtbhRFgEIM5PfQCokUBtSG0Sy2l35i8DH6u_7cEA8NBtOoRHkg"
//    }

    public JwtTokenRequest() {
        super();
    }

    public JwtTokenRequest(String username, String password) {
        this.setUsername(username);
        this.setPassword(password);
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}