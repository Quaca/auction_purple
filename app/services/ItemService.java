package services;

import models.Item;
import repositories.ItemRepository;

import javax.inject.Inject;
import javax.inject.Singleton;
import java.util.List;
import java.util.UUID;

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

    public Item getItem(UUID id){
        return repository.get(id);
    }

    public List<Item> getAllItems(){
        return repository.getAllItems();
    }

    public boolean delete(UUID id){
        return repository.delete(id);
    }

    public List<Item> getPopularItems(){
        return repository.getPopularItems();
    }
    public List<Item> getLastChance() {
        return repository.getLastChance();
    }
    public List<Item> getNewArrivals(){
        return repository.getNewArrivals();
    }
    public List<Item> getFeatureProducts(){
        return repository.getFeatureProducts();
    }
}