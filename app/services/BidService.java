package services;

import com.google.inject.Inject;
import models.Bid;
import models.Item;
import models.helpers.MaxBid;
import play.libs.Json;
import repositories.BidRepository;

import java.sql.Timestamp;
import java.util.Date;

public class BidService {

    @Inject public BidRepository repository;

    public String postBid(Bid bid){

        final boolean isAboveStartingPrice = bid.getBidPrice() > bid.getItem().getStartingPrice();
        final boolean isHighEnough = bid.getBidPrice() > repository.getMaxAndNumOfBids(bid.getItem()).getMaxBid();
        final boolean isBeforeEndTime = bid.getDate().getTime() < bid.getItem().getEndDate().getTime();

        if(isAboveStartingPrice  && isHighEnough  && isBeforeEndTime){
            repository.postBid(bid);
            return "Posted";
        }
        else if(!isBeforeEndTime){
            return "Auction has finished";
        }
        else if(!isHighEnough){
            return "It is lower than last bid";
        }
        else{
            return "It is lower than starting price";
        }


    }

    public MaxBid getMaxBid(Item item){
        return repository.getMaxAndNumOfBids(item);
    }
}
