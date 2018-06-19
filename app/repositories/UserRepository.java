package repositories;

import models.Bid;
import models.Item;
import models.Subscriber;
import models.User;
import models.helpers.PasswordResetToken;
import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;
import play.db.jpa.JPAApi;

import javax.inject.Inject;
import javax.inject.Singleton;
import java.util.UUID;

@Singleton
public class UserRepository {

    @Inject private JPAApi api;

    private Session getSession(){
        return api.em().unwrap(Session.class);
    }

    public User register(User user){
        getSession().persist(user);
        return user;
    }

    public User get(UUID id){
        return (User)getSession().createCriteria(User.class)
                .add(Restrictions.eq("id", id))
                .uniqueResult();
    }

    public boolean checkCredentials(String email, String hash){
        User user = (User)getSession().createCriteria(User.class)
                .add(Restrictions.eq("email", email))
                .add(Restrictions.eq("hash", hash))
                .uniqueResult();
        return user != null;
    }
    public String getSalt(String email){
        return (String) getSession().createCriteria(User.class)
                .add(Restrictions.eq("email", email))
                .setProjection(Projections.property("salt"))
                .uniqueResult();
    }

    public User checkEmail(String email){
        User user = (User)getSession().createCriteria(User.class)
                .add(Restrictions.eq("email", email))
                .uniqueResult();
        return user;
    }

    public void updateUser(User user){
        getSession().update(user);
    }

    public User checkToken(String token){
        PasswordResetToken passwordResetToken = (PasswordResetToken) getSession().createCriteria(PasswordResetToken.class)
                .add(Restrictions.eq("token", token))
                .uniqueResult();
        return passwordResetToken.getUser();
    }

    public void deleteToken(String token){
        PasswordResetToken passwordResetToken =(PasswordResetToken) getSession().createCriteria(PasswordResetToken.class)
                .add(Restrictions.eq("token", token))
                .uniqueResult();
        getSession().delete(passwordResetToken);


    }

    public User giveUser(String email){
        return (User)getSession().createCriteria(User.class)
                .add(Restrictions.eq("email", email))
                .uniqueResult();
    }

    public void createToken(PasswordResetToken token){
        getSession().persist(token);
    }

    public void createSubscriber(Subscriber subscriber){
        api.em().persist(subscriber);
    }

    public Subscriber checkSubscriber(Subscriber subscriber){
        Subscriber subscriber1 = (Subscriber) getSession().createCriteria(Subscriber.class)
                .add(Restrictions.eq("email", subscriber.getEmail()))
                .uniqueResult();
        return subscriber1;
    }
    public void deleteSubscriber(Subscriber subscriber){
        Subscriber subscriber1 = (Subscriber) getSession().createCriteria(Subscriber.class)
                .add(Restrictions.eq("email", subscriber.getEmail()))
                .uniqueResult();
        getSession().delete(subscriber1);
    }

    public void getBid(){
        Criteria criteria = getSession().createCriteria(Bid.class);
        Criteria bidCriteria = criteria.createCriteria("item");

    }


}
