package controllers;

import com.fasterxml.jackson.databind.JsonNode;
import models.Item;
import play.db.jpa.Transactional;
import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Result;
import services.ItemService;

import javax.inject.Inject;

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

}
