package controllers;

import com.fasterxml.jackson.databind.JsonNode;
import com.google.inject.Inject;
import models.Bid;
import models.Item;
import models.User;
import play.db.jpa.Transactional;
import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Result;
import services.BidService;
import services.ItemService;
import services.UserService;

import java.util.Date;
import java.util.UUID;

public class BidController extends Controller {
    @Inject public BidService bidService;
    @Inject public UserService userService;
    @Inject public ItemService itemService;


    @Transactional
    public Result postBid(){
        JsonNode json = request().body().asJson();
        System.out.print("Json:" + json);
        Bid bid = new Bid();
        String sessionUser=session("logged");
        User user = userService.get(UUID.fromString(sessionUser));
        Item item = itemService.getItem(UUID.fromString(json.get("item_id").asText()));
        bid.setUser(user);
        bid.setItem(item);
        bid.setDate(new Date());
        bid.setBidPrice(Double.parseDouble(json.get("bid_price").asText()));
        if (bidService.postBid(bid)){
            return ok(Json.toJson(bid));
        }
        else {
            return badRequest("Ne valja");
        }
    }

    @Transactional
    public Result getMaxBid(){
        JsonNode json = request().body().asJson();
        Item item = itemService.getItem(UUID.fromString(json.get("id").asText()));
        JsonNode jsonObject = Json.toJson(bidService.getMaxBid(item));
        return ok(jsonObject);
    }

}
