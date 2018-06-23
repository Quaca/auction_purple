package models.helpers;

import models.User;
import play.data.validation.Constraints;

public class RegisterForm {

    @Constraints.Required
    private String firstName;
    @Constraints.Required
    private String lastName;
    @Constraints.Required
    private String email;
    @Constraints.Required
    private String password;


    public RegisterForm(){}

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public User createAccount(){
        User newUser = new User(this.firstName, this.lastName, this.email, this.password);
        return newUser;
    }
}
