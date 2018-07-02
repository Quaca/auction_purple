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


    public boolean postBid(Bid bid){

        if (bid.getBidPrice() > bid.getItem().getStartingPrice()){
            if (bid.getBidPrice() > repository.getMaxAndNumOfBids(bid.getItem()).getMaxBid()) {

                if(bid.getDate().getTime() < bid.getItem().getEndDate().getTime()){
                    repository.postBid(bid);
                    return true;
                }
                else {
                    return false;
                }

            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }

    public MaxBid getMaxBid(Item item){
        return repository.getMaxAndNumOfBids(item);
    }
}
