package com.livi.rest.webservices.restfulwebservices.todo;

import java.util.Date;

public class Todo {

    private long id;
    private String username;
    private String description;
    private Date targetsDate;
    private boolean isDone;

    public Todo(long id, String username, String description, Date targetsDate, boolean isDone) {
        this.id = id;
        this.username = username;
        this.description = description;
        this.targetsDate = targetsDate;
        this.isDone = isDone;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getTargetsDate() {
        return targetsDate;
    }

    public void setTargetsDate(Date targetsDate) {
        this.targetsDate = targetsDate;
    }

    public boolean isDone() {
        return isDone;
    }

    public void setDone(boolean done) {
        isDone = done;
    }
}
