package controllers;

import org.apache.commons.mail.DefaultAuthenticator;
import org.apache.commons.mail.Email;
import org.apache.commons.mail.SimpleEmail;
import play.mvc.Controller;
import play.mvc.Result;


public class Test extends Controller {


    public Result sendSimpleEmail() {

        String userName = "ferid2203@gmail.com";
        String password = "ferid123";

        String fromAddress="ferid2203@gmail.com";
        String toAddress =  "domex85@gmail.com";
        String subject = "Test Mail";
        String message = "Halo momake";

        try {
            Email email = new SimpleEmail();
            email.setHostName("smtp.gmail.com");
            email.setSmtpPort(465);
            email.setAuthenticator(new DefaultAuthenticator(userName, password));
            email.setSSLOnConnect(true);
            email.setFrom(fromAddress);
            email.setSubject(subject);
            email.setMsg(message);
            email.addTo(toAddress);
            email.send();

        }catch(Exception ex) {
            System.out.println("Unable to send email");
            System.out.println(ex);
        }
        return ok();
    }

}
