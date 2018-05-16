package services;

import com.amazonaws.services.dynamodbv2.xspec.S;
import models.Item;
import repositories.ItemRepository;

import javax.inject.Inject;
import javax.inject.Singleton;
import java.util.List;
import java.util.Set;

@Singleton
public class ItemService {
    @Inject private ItemRepository repository;


    public Item addItem(Item item){
        repository.createItem(item);
        return item;
    }

    public Item updateItem(Item item){
        repository.update(item);
        return item;
    }

    public Item getItem(int id){
        return repository.get(id);
    }

    public List<Item> getAllItems(){
        return repository.getAllItems();
    }

    public boolean delete(int id){
        if(repository.delete(id)){
            return true;
        }
        return false;
    }
}
