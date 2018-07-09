package services;

import models.Category;
import models.Item;
import models.ItemPhoto;
import models.Subcategory;
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

    public Item getLandingItem(){return repository.getLandingItem();}

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
    public List<Category> getCategories(){
        return repository.getCategories();
    }

    public Subcategory getSubcategory(UUID id){
        return repository.getSubcategory(id);
    }

    public List<Subcategory> getSubCategories(UUID id){
        Category category = repository.getCategory(id);
        return repository.getSubCategories(category);
    }

    public void addPhoto(ItemPhoto itemPhoto){
        System.out.println("From service" + itemPhoto);
        this.repository.addPhoto(itemPhoto);
    }

//    public String updatePicture(ImageUploadForm imageUploadForm) throws Exception{
//
//    }

}
