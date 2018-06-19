package services;

import com.google.inject.Inject;
import models.Bid;
import models.Item;
import models.helpers.MaxBid;
import play.libs.Json;
import repositories.BidRepository;

public class BidService {

    @Inject public BidRepository repository;


    public boolean postBid(Bid bid){
        System.out.println("AMAR" + Json.toJson(repository.getMaxBid(bid.getItem())));
        if (bid.getBidPrice() > repository.getMaxBid(bid.getItem()).getMaxBid()) {
            repository.postBid(bid);
            return true;
        }
        else {
            return false;
        }
    }

    public MaxBid getMaxBid(Item item){
        return repository.getMaxBid(item);
    }
}
