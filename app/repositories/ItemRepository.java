package repositories;

import models.Item;
import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Restrictions;
import play.db.jpa.JPAApi;

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
        return (Item) setCriteria().add(Restrictions.eq("id", id)).uniqueResult();

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

}
