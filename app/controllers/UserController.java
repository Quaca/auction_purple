package controllers;

import models.User;
import models.helpers.LoginForm;
import models.helpers.RegisterForm;
import play.data.Form;
import play.data.FormFactory;
import play.db.jpa.Transactional;
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

        if(service.register(form.get()).getSuccessful() == true){
            return ok("Radi");
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
                return ok("Logged");
            }
        }
        return badRequest("Email or password are wrong");


    }
}
