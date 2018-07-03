package models.helpers;

import com.google.inject.Inject;
import services.ItemService;

public class MaxBid {

    @Inject public ItemService itemService;

    private double maxBid;
    private double numOfBids;

    public double getNumOfBids() {
        return numOfBids;
    }

    public void setNumOfBids(double numOfBids) {
        this.numOfBids = numOfBids;
    }

    public double getMaxBid() {
        return maxBid;
    }

    public void setMaxBid(Double maxBid) {

        if(maxBid==null){
            this.maxBid = 0;
        }
        else {
            this.maxBid = maxBid;

        }

    }

}
