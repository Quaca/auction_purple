package controllers;

import models.User;
import models.helpers.LoginForm;
import models.helpers.RegisterForm;
import play.data.Form;
import play.data.FormFactory;
import play.db.jpa.Transactional;
import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Result;
import services.UserService;

import javax.inject.Inject;

public class UserController extends Controller {

    @Inject public UserService service;
    @Inject private FormFactory formFactory;

    @Transactional
    public Result register() {

        Form<RegisterForm> form = formFactory.form(RegisterForm.class).bindFromRequest();
        User user = form.get().createAccount();

        if(service.register(form.get()).getSuccessful() == true){
            return ok(Json.toJson(user));
        }
        else {
            return badRequest(service.register(form.get()).getMessage());
        }

    }

    @Transactional
    public Result login(){
        Form<LoginForm> form = formFactory.form(LoginForm.class).bindFromRequest();
        if (!form.hasErrors()){

            User user = this.service.login(form.get());
            if(user != null) {
                session("logged", user.toString());
                return ok(Json.toJson(user));
            }
        }
        return badRequest("Email or password are wrong");


    }

    public Result getCurrentUser(){
        String sessionUser=session("logged");
        if(sessionUser != null) {
            return ok(Json.toJson(sessionUser));
        } else {
            return ok("Not Logged In");
        }
    }

    public Result logout(){
        session().clear();
        return ok("Logged out");
    }
}
