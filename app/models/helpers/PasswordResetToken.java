package models.helpers;

import models.User;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import java.util.Date;
import java.util.UUID;

@Entity
@Table(name = "tokens")
public class PasswordResetToken {

<<<<<<< HEAD
    public static final int EXPIRATION = 60 * 24;

=======
    private static final int EXPIRATION = 60 * 24;
>>>>>>> 34b68903fde89b4ba428e748aed91f84175ea0ba

    @Id
    @GeneratedValue
    @Column(name = "id")
    private UUID id;

    @Column(name = "token")
    private String token;

    @OneToOne(targetEntity = User.class, fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    private User user;

    @Column(name = "date")
    private Date date;


    public static int getEXPIRATION() {
        return EXPIRATION;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

}
