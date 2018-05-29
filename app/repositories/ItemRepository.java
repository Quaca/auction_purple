package repositories;

import models.Item;
import models.ItemPhoto;
import net.sf.ehcache.search.expression.Or;
import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.criterion.Order;
<<<<<<< b960e14c022738ee71d217503417bd5c123699c8
=======
import org.hibernate.criterion.Projection;
import org.hibernate.criterion.ProjectionList;
import org.hibernate.criterion.Projections;
>>>>>>> Landing-page(2)
import org.hibernate.criterion.Restrictions;
import org.hibernate.transform.AliasToBeanConstructorResultTransformer;
import org.hibernate.transform.AliasToBeanResultTransformer;
import org.hibernate.transform.Transformers;
import play.db.jpa.JPAApi;

import javax.inject.Inject;
import javax.inject.Singleton;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.List;
import java.util.UUID;
<<<<<<< b960e14c022738ee71d217503417bd5c123699c8
=======
import java.util.stream.Collectors;
>>>>>>> Landing-page(2)

@Singleton
public class ItemRepository {

    @Inject private JPAApi api;

    private void session(){
        api.em().unwrap(Session.class);
    }

<<<<<<< b960e14c022738ee71d217503417bd5c123699c8
    private Session getSession(){
        return api.em().unwrap(Session.class);
    }
    private Criteria setCriteria(){
=======
    Session getSession(){
        return api.em().unwrap(Session.class);
    }
    Criteria setCriteria(){
>>>>>>> Landing-page(2)
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

    public List<Item> getPopularItems(){

<<<<<<< b960e14c022738ee71d217503417bd5c123699c8
=======
//        List<Item> popularItems = getSession().createCriteria(Item.class, "item")
//        .createAlias("item.photos", "photo")
//                .setProjection(Projections.projectionList()
//                                .add(Projections.property("name"))
//                                .add(Projections.property("startingPrice"))
//                                .add(Projections.property("photo.photoPath")))
//
//        .add(Restrictions.gt("popularity", 90)).setMaxResults(3)
//        .addOrder(Order.asc("popularity"))
//                //.setResultTransformer(new AliasToBeanResultTransformer(Item.class))
//        .list();
//        ProjectionList pList = Projections.projectionList();
//        pList.add(Projections.property("name"));
//        pList.add(Projections.property("startingPrice"));
//        pList.add(Projections.property("photo.photoPath"));
//
//        criteria.setProjection(pList);

>>>>>>> Landing-page(2)
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
<<<<<<< b960e14c022738ee71d217503417bd5c123699c8
=======
        Calendar c = new GregorianCalendar();
        c.set(Calendar.HOUR_OF_DAY, 0);
        c.set(Calendar.MINUTE, 0);
        c.set(Calendar.SECOND, 0);
        c.set(Calendar.MILLISECOND, 0);

        Date currentDate = c.getTime();
>>>>>>> Landing-page(2)
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
