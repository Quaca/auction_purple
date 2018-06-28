import Component from '@ember/component';

export default Component.extend({
    bidService: Ember.inject.service('bid-service'),
    
    // currentPath: getOwner(this).lookup('controller:application').currentPath,
    // currentPath.get('controller').set('model', data)

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
                let item_id = this.item.id;
                let bid = this.get('bid');
                
    
                let params = {
                    "item_id": item_id,
                    "bid_price": bid
                }
    
                this.get('bidService').postBid(params).then(
                    (data) => {
                        swal({
                            title:"",
                            text: "Posted",
                            type: "success",
                            button: "Aww yiss!",
                        });
                        
                }

            ).catch(() => {
                    swal({
                        title:"",
                        text: "Enter a litle bit more",
                        type: "error",
                        button: "Aww yiss!",
                    });
                });
            }

            this.sendAction('refresh');
            this.set('bid', '');

        }
    }
});
