package repositories;

import models.Item;
import play.db.jpa.JPAApi;

import javax.inject.Inject;
import javax.inject.Singleton;

@Singleton
public class ItemRepository {

    @Inject private JPAApi api;

    public void test(Item item){
        api.em().persist(item);
    }
}
