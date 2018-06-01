package repositories;

import models.User;
import org.hibernate.Session;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;
import play.db.jpa.JPAApi;

import javax.inject.Inject;
import javax.inject.Singleton;

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

    public boolean checkEmail(String email){
        User user = (User)getSession().createCriteria(User.class)
                .add(Restrictions.eq("email", email))
                .uniqueResult();

        return user != null;
    }

    public User giveUser(String email){
        return (User)getSession().createCriteria(User.class)
                .add(Restrictions.eq("email", email))
                .uniqueResult();
    }


}
