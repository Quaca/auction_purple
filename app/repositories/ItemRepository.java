package repositories;

import com.amazonaws.services.dynamodbv2.xspec.S;
import models.Item;
import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;
import play.db.jpa.JPAApi;

import javax.inject.Inject;
import javax.inject.Singleton;
import java.util.List;

@Singleton
public class ItemRepository {

    @Inject private JPAApi api;

    public void createItem(Item item){
        api.em().persist(item);
    }

    public void update(Item item){
        api.em().unwrap(Session.class).update(item);
    }

    public List<Item> getAllItems(){
        List<Item> list = api.em().unwrap(Session.class).createCriteria(Item.class).list();
        return list;
    }

    public Item get(int id){
        return (Item) api.em().unwrap(Session.class).createCriteria(Item.class).add(Restrictions.eq("id", id)).uniqueResult();

    }

    public boolean delete(int id){
        Item item = (Item) api.em().unwrap(Session.class).createCriteria(Item.class).add(Restrictions.eq("id", id)).uniqueResult();
        api.em().unwrap(Session.class).delete(item);
        return true;
    }
}
