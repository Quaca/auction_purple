package models.helpers;

import scala.Int;

public class MaxBid {

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

//        if(numOfBids != 0){
//            this.maxBid = Double.parseDouble(maxBid.toString());
//        }
//        else {
//            this.maxBid = 0;
//        }

    }


}
