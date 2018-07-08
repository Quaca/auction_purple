package controllers;

import com.amazonaws.auth.AWSCredentials;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.typesafe.config.ConfigFactory;
import models.Item;
import play.db.jpa.Transactional;
import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Http;
import play.mvc.Result;
import services.ItemService;

import javax.inject.Inject;
import java.io.File;
import java.util.List;
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
    public Result getLandingItem(){
        JsonNode jsonObject = Json.toJson(service.getLandingItem());
        return ok(jsonObject);
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

    @Transactional
    public Result getCategories(){
        JsonNode jsonObject = Json.toJson(service.getCategories());
        return ok(jsonObject);
    }

    @Transactional
    public Result getSubCategories(){
        JsonNode json = request().body().asJson();
        JsonNode jsonObject = Json.toJson(service.getSubCategories(UUID.fromString(json.get("id").asText())));
        return ok(jsonObject);
    }

    @Transactional
    public Result upload(){

        AWSCredentials credentials = new BasicAWSCredentials(
                ConfigFactory.load().getString("aws.key"),
                ConfigFactory.load().getString("aws.secret")

                );
        AmazonS3Client s3client = new AmazonS3Client(credentials);


        Http.MultipartFormData<File> body = request().body().asMultipartFormData();
        Http.MultipartFormData.FilePart<File> picture = body.getFile("file");

        PutObjectRequest putObjectRequest = new PutObjectRequest(ConfigFactory.load().getString("aws.bucket"), picture.getFilename(), picture.getFile()).withCannedAcl(CannedAccessControlList.PublicRead);
        s3client.putObject(putObjectRequest);

        return ok(s3client.getUrl(ConfigFactory.load().getString("aws.bucket"), picture.getFilename()).toString());
    }
}
