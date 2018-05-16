package controllers;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import models.Item;
import play.db.jpa.Transactional;
import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Result;
import services.ItemService;

import javax.inject.Inject;
import java.util.List;
import java.util.Set;

public class ItemController extends Controller {

    @Inject private ItemService service;

    @Transactional
    public Result create(){
        JsonNode json = request().body().asJson();
        if (json == null){
            return badRequest();
        }
        Item item = service.addItem(Json.fromJson(json, Item.class));
        JsonNode jsonObject = Json.toJson(item);

        return created(jsonObject);
    };

    @Transactional
    public Result update(){
        JsonNode json = request().body().asJson();
        if (json == null){
            return badRequest();
        }
        Item item = service.updateItem(Json.fromJson(json, Item.class));
        JsonNode jsonObject = Json.toJson(item);

        return ok(jsonObject);
    }

    @Transactional(readOnly = true)
    public Result retrieve(int id){
        if (service.getItem(id) == null){
            return notFound("Not found");
        }
        JsonNode jsonObject = Json.toJson(service.getItem(id));
        return ok(jsonObject);
    }

    @Transactional(readOnly = true)
    public Result listItems(){
        List<Item> items = service.getAllItems();
        ObjectMapper objectMapper = new ObjectMapper();
        JsonNode jsonDate = objectMapper.convertValue(items, JsonNode.class);
        return ok(jsonDate);
    }

    @Transactional
    public Result delete(int id){
        if (!service.delete(id)){
            return notFound("Not found");
        }
        return ok("Deleted");
    }
}
