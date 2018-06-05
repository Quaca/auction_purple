package controllers;

import com.fasterxml.jackson.databind.JsonNode;
import models.Subscriber;
import models.User;
import models.helpers.LoginForm;
import models.helpers.PasswordResetToken;

import models.helpers.RegisterForm;
import play.data.Form;
import play.data.FormFactory;
import play.db.jpa.Transactional;
import play.libs.Json;
<<<<<<< 78f3a0ad048340d087ba0cb24899289c92758a64
import play.libs.mailer.Email;
import play.libs.mailer.MailerClient;
=======
>>>>>>> Sessions and cookies
import play.mvc.Controller;
import play.mvc.Result;
import services.UserService;

import javax.inject.Inject;
import java.util.Date;
import java.util.UUID;


public class UserController extends Controller {

    @Inject public UserService service;
    @Inject private FormFactory formFactory;

    @Transactional
    public Result register() {

        Form<RegisterForm> form = formFactory.form(RegisterForm.class).bindFromRequest();
        User user = form.get().createAccount();

        if(service.register(form.get()).getSuccessful() == true){
<<<<<<< 78f3a0ad048340d087ba0cb24899289c92758a64
            session("logged", user.toString());
            return ok(Json.toJson(user));

=======
            return ok(Json.toJson(user));
>>>>>>> Sessions and cookies
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

    @Transactional
    public Result generateToken(){

        JsonNode json = request().body().asJson();
        System.out.print(json);
        if (json == null){
            return badRequest("Please enter email before sending");
        }
        User user = service.checkEmail(json);
        if(user == null){
            return badRequest("Entered email is not valid");
        }

        PasswordResetToken token = new PasswordResetToken();
        Date date = new Date();
        token.setUser(user);
        token.setToken(UUID.randomUUID().toString());
        token.setDate((date));
        service.addToken(token);

        service.sendEmail(user.getEmail(), token.getToken());

        return ok();
    }

    @Transactional
    public Result changePassword(){
        JsonNode json = request().body().asJson();
        String password = json.get("password").textValue();
        String token = json.get("token").textValue();
        User user = service.checkToken(token);
        user.setPassword(password);
        service.changePassword(user,token);

        return ok(Json.toJson(user));
    }

    @Transactional
    public Result subscribe(){
        JsonNode json = request().body().asJson();
        if(service.addSubscriber(Json.fromJson(json, Subscriber.class)) != null){
            return created();
        }
        else {
            return badRequest("Email already subscribed");
        }
    }

<<<<<<< 78f3a0ad048340d087ba0cb24899289c92758a64
    @Transactional
=======
>>>>>>> Sessions and cookies
    public Result getCurrentUser(){
        String sessionUser=session("logged");
        if(sessionUser != null) {
            return ok(Json.toJson(sessionUser));
        } else {
            return ok("Not Logged In");
        }
    }

<<<<<<< 78f3a0ad048340d087ba0cb24899289c92758a64
    @Transactional
=======
>>>>>>> Sessions and cookies
    public Result logout(){
        session().clear();
        return ok("Logged out");
    }
<<<<<<< 78f3a0ad048340d087ba0cb24899289c92758a64


=======
>>>>>>> Sessions and cookies
}
