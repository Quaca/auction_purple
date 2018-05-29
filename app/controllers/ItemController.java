package controllers;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import models.Item;
import play.db.jpa.Transactional;
import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Result;
import scala.util.parsing.json.JSONObject;
import services.ItemService;

import javax.inject.Inject;
import java.util.List;
<<<<<<< b960e14c022738ee71d217503417bd5c123699c8
=======
import java.util.Set;
>>>>>>> Landing-page(2)
import java.util.UUID;

public class ItemController extends Controller {

    @Inject private ItemService service;

    private JsonNode giveJsonNode(){
        return request().body().asJson();
    }

    @Transactional
    public Result create(){
        if (giveJsonNode() == null){
            return badRequest();
        }
        Item item = service.addItem(Json.fromJson(giveJsonNode(), Item.class));
        JsonNode jsonObject = Json.toJson(item);

        return created(jsonObject);
    };

    @Transactional
    public Result update(){
        if (giveJsonNode() == null){
            return badRequest();
        }
        Item item = service.updateItem(Json.fromJson(giveJsonNode(), Item.class));
        JsonNode jsonObject = Json.toJson(item);

        return ok(jsonObject);
    }

    @Transactional(readOnly = true)
    public Result retrieve(String id){
        if (service.getItem(UUID.fromString(id)) == null){
            return notFound("Not found");
        }
        JsonNode jsonObject = Json.toJson(service.getItem(UUID.fromString(id)));
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
    public Result delete(String id){
        service.delete(UUID.fromString(id));
        return noContent();
    }

    @Transactional
    public Result getPopularItems(){
        JsonNode jsonObject = Json.toJson(service.getPopularItems());
        return ok(jsonObject);
    }

    @Transactional
    public Result getLastChance(){
        JsonNode jsonObject = Json.toJson(service.getLastChance());
        return ok(jsonObject);
    }

    @Transactional
    public Result getNewArrivals(){
        JsonNode jsonObject = Json.toJson(service.getNewArrivals());
        return ok(jsonObject);
    }

    @Transactional
    public Result getFeatureProducts(){
        JsonNode jsonObject = Json.toJson(service.getFeatureProducts());
        return ok(jsonObject);
    }
}
