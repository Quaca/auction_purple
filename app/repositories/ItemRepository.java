package repositories;

import models.Category;
import models.Item;
import models.ItemPhoto;
import models.Subcategory;
import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Restrictions;
import play.db.jpa.JPAApi;
import play.libs.Json;
import sun.rmi.runtime.Log;

import javax.inject.Inject;
import javax.inject.Singleton;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.List;
import java.util.UUID;

@Singleton
public class ItemRepository {

    @Inject private JPAApi api;

    private void session(){
        api.em().unwrap(Session.class);
    }

    private Session getSession(){
        return api.em().unwrap(Session.class);
    }
    private Criteria setCriteria(){
        return getSession().createCriteria(Item.class);
    }

    public Date getCurrentDate(){

        Calendar c = new GregorianCalendar();
        c.set(Calendar.HOUR_OF_DAY, 0);
        c.set(Calendar.MINUTE, 0);
        c.set(Calendar.SECOND, 0);
        c.set(Calendar.MILLISECOND, 0);

        Date currentDate = c.getTime();

        return currentDate;
    }

    public void createItem(Item item){
        api.em().persist(item);
    }

    public void update(Item item){
        getSession().update(item);
    }

    public List<Item> getAllItems(){
        List<Item> list = setCriteria().list();
        return list;
    }

    public Item get(UUID id){
        Item item =(Item) setCriteria().add(Restrictions.eq("id", id)).uniqueResult();
        System.out.print(Json.toJson(item));
        return item;
    }

    public boolean delete(UUID id){
        Item item = (Item) setCriteria().add(Restrictions.eq("id", id)).uniqueResult();
        getSession().delete(item);
        return true;
    }

    public Item getLandingItem(){
        return (Item) setCriteria().addOrder(Order.desc("popularity")).setMaxResults(1).uniqueResult();
    }

    public List<Item> getPopularItems(){

        List<Item> popularItems = getSession().createCriteria(Item.class)
                .add(Restrictions.gt("popularity", 90)).setMaxResults(3)
                .addOrder(Order.asc("popularity"))
                .list();

        return popularItems;
    }


    public List<Item> getLastChance(){

        List<Item> lastChance = getSession().createCriteria(Item.class)
                .add(Restrictions.gt("endDate", getCurrentDate()))
                .addOrder(Order.asc("endDate"))
                .setMaxResults(8)
                .list();

        return lastChance;

    }

    public List<Item> getNewArrivals(){
        List<Item> newArrivals = getSession().createCriteria(Item.class)
                .addOrder(Order.desc("startDate"))
                .setMaxResults(8)
                .list();

        return newArrivals;
    }

    public List<Item> getFeatureProducts(){
        List<Item> featureProducts = getSession().createCriteria(Item.class)
                .addOrder(Order.desc("name"))
                .setMaxResults(4)
                .list();
        return featureProducts;
    }

    public Category getCategory(UUID id){
        return (Category) getSession().createCriteria(Category.class).add(Restrictions.eq("id", id)).uniqueResult();
    }

    public List<Category> getCategories(){
        List<Category> categories = getSession().createCriteria(Category.class)
                .list();
        return categories;
    }

    public Subcategory getSubcategory(UUID id){
        return (Subcategory) getSession().createCriteria(Subcategory.class).add(Restrictions.eq("id", id)).uniqueResult();
    }

    public List<Subcategory> getSubCategories(Category category){
        List<Subcategory> subcategories = getSession().createCriteria(Subcategory.class)
                .add(Restrictions.eq("category", category))
                .list();
        return subcategories;
    }

    public void addPhoto(ItemPhoto itemPhoto){
        api.em().persist(itemPhoto);

    }

}
