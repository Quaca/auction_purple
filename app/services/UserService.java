package services;

import com.fasterxml.jackson.databind.JsonNode;
import models.Item;
import models.Subscriber;
import models.User;
import models.helpers.CustomError;
import models.helpers.LoginForm;
import models.helpers.PasswordResetToken;
import models.helpers.RegisterForm;
import play.libs.mailer.Email;
import play.libs.mailer.MailerClient;
import repositories.UserRepository;

import javax.inject.Inject;
import javax.inject.Singleton;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Singleton
public class UserService {

    @Inject private UserRepository repository;
    @Inject MailerClient mailerClient;


    public CustomError register(RegisterForm registerForm){

        CustomError customError = new CustomError();

        User newUser = registerForm.createAccount();
        if(repository.checkEmail(newUser.getEmail()) != null){
            customError.setSuccessful(false);
            customError.setMessage("Email already exists");
        }
        else if (validateEmail(newUser.getEmail()) == false){
            customError.setSuccessful(false);
            customError.setMessage("Email is invalid");
        }
        else {
            repository.register(newUser);
            customError.setSuccessful(true);
        }
        return customError;

    }

    public User login(LoginForm loginForm){

        CustomError customError = new CustomError();
        String salt = repository.getSalt(loginForm.getEmail());

        if(salt != null && repository.checkCredentials(loginForm.getEmail(),
                Passwords.hash(
                        loginForm.getPassword(),
                        salt.getBytes()))) {
            return repository.giveUser(loginForm.getEmail());
        }
        else {return null;}

    }

    private boolean validateEmail(String emailStr)
    {
        Matcher matcher = Pattern.compile("^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,6}$", Pattern.CASE_INSENSITIVE).matcher(emailStr);
        return matcher.find();
    }

    public Subscriber addSubscriber(Subscriber subscriber){
        if(repository.checkSubscriber(subscriber) == null) {
            repository.createSubscriber(subscriber);
            return subscriber;
        }
        else {
            return null;
        }
    }

    public User findUserByEmail(String email){
        return repository.checkEmail(email);
    }
    public User checkEmail(JsonNode jsonNode){
        return repository.checkEmail(jsonNode.get("email").textValue());
    }

    public User checkToken(String token){
        return repository.checkToken(token);
    }

    public User changePassword(User user, String token){
        repository.updateUser(user);
        repository.deleteToken(token);
        return user;
    }

    public PasswordResetToken addToken(PasswordResetToken token){
        repository.createToken(token);
        return token;
    }

    public void sendEmail(String receivingEmail, String token) {
        String cid = "1234";
        Email email = new Email()
                .setSubject("Reset password")
                .setFrom("auction.purple@gmail.com")
                .addTo(receivingEmail)
                .setBodyText("Hello")
                .setBodyHtml("<html><body><p>This is your token for changing password</p><p><a href='https://protected-savannah-98705.herokuapp.com/#/change-password?key="+token+"'>"+token+"</a></p></body></html>");
        mailerClient.send(email);
    }
}
