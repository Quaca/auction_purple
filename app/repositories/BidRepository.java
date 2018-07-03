package repositories;

import models.Bid;
import models.Item;
import models.helpers.MaxBid;
import org.hibernate.Session;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;
import org.hibernate.transform.Transformers;
import play.db.jpa.JPAApi;

import javax.inject.Inject;
import javax.inject.Singleton;
import javax.validation.constraints.Max;
import java.util.List;
import java.util.UUID;

@Singleton
public class BidRepository {

    @Inject
    private JPAApi api;

    private Session getSession(){
        return api.em().unwrap(Session.class);
    }


    public Bid postBid(Bid bid){
        getSession().persist(bid);
        return bid;
    }

    public MaxBid getMaxAndNumOfBids(Item item){
        return (MaxBid) getSession().createCriteria(Bid.class)
                .add(Restrictions.eq("item", item))
                .setProjection(Projections.projectionList()
                        .add(Projections.count("id").as("numOfBids"))
                        .add(Projections.max("bidPrice").as("maxBid")))
                .setResultTransformer(Transformers.aliasToBean(MaxBid.class))
                .uniqueResult();



//        (Bid)getSession().createCriteria(Bid.class)
//                .add(Restrictions.eq("item", item))
//                .addOrder(Order.asc("bidPrice"))
//                .setMaxResults(1)
//                .uniqueResult();
    }
}
