package services;

import com.amazonaws.services.dynamodbv2.xspec.S;
import models.Item;
import repositories.ItemRepository;

import javax.inject.Inject;
import javax.inject.Singleton;

@Singleton
public class ItemService {
    @Inject private ItemRepository repository;


    public Item addItem(Item item){
        repository.test(item);
        return item;
    }
}
