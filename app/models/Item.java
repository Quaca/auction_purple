package models;

import org.h2.engine.User;
import org.hibernate.criterion.Restrictions;
import org.hibernate.jpa.HibernateEntityManager;
import play.db.jpa.JPA;

import javax.annotation.Generated;
import javax.persistence.*;
import javax.xml.crypto.Data;
import java.util.Date;
import java.util.List;
import java.util.UUID;
import javax.persistence.ManyToOne;

@Entity
@Table(name = "item")

public class Item {


    @Id
    @GeneratedValue
    @Column(name = "id")
    private UUID id;

    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private models.User user;

    @ManyToOne
    @JoinColumn(name = "subcategory_id", referencedColumnName = "id")
    private Subcategory subcategory;

    @Column(name = "name")
    private String name;

    @Column(name = "popularity")
    private int popularity;

    @Column(name = "description")
    private String description;

    @Column(name = "color")
    private String color;

    @Column(name = "size")
    private String size;

    @Column(name = "start_date")
    private Date startDate;

    @Column(name = "end_date")
    private Date endDate;

    @Column(name = "starting_price")
    private double startingPrice;

    @Column(name = "buy_now_price")
    private double buyNowPrice;

    @Column(name = "condition")
    private String condition;

    @OneToMany(mappedBy = "itemId")
    private List<ItemPhoto> photos;

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public models.User getUser() {
        return user;
    }

    public void setUser(models.User user) {
        this.user = user;
    }

    public Subcategory getSubcategory() {
        return subcategory;
    }

    public void setSubcategory(Subcategory subcategory) {
        this.subcategory = subcategory;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getPopularity() {
        return popularity;
    }

    public void setPopularity(int popularity) {
        this.popularity = popularity;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public double getStartingPrice() {
        return startingPrice;
    }

    public void setStartingPrice(double startingPrice) {
        this.startingPrice = startingPrice;
    }

    public double getBuyNowPrice() {
        return buyNowPrice;
    }

    public void setBuyNowPrice(double buyNowPrice) {
        this.buyNowPrice = buyNowPrice;
    }

    public String getCondition() {
        return condition;
    }

    public void setCondition(String condition) {
        this.condition = condition;
    }

    public List<ItemPhoto> getPhotos() {
        return photos;
    }

    public void setPhotos(List<ItemPhoto> photos) {
        this.photos = photos;
    }
}
