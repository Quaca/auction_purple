import Component from '@ember/component';

export default Component.extend({
    bidService: Ember.inject.service('bid-service'),
    

    actions:{
        postBid(){

            if(!this.user){
                swal({
                    title:"",
                    text: "You are not logged in",
                    type: "error",
                    button: "Aww yiss!",
                });
            }
            else{
                let user_id = this.user.id;
                let item_id = this.item.id;
                let bid = this.get('bid');
                
    
                let params = {
                    "user_id": user_id,
                    "item_id": item_id,
                    "bid_price": bid
                }
    
                this.get('bidService').postBid(params).then(
                    () => {
                        swal({
                            title:"",
                            text: "Posted",
                            type: "success",
                            button: "Aww yiss!",
                        });

                }).catch(() => {
                    swal({
                        title:"",
                        text: "Enter a litle bit more",
                        type: "error",
                        button: "Aww yiss!",
                    });
                });
            }
        }
    }
});
