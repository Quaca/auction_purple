import Route from '@ember/routing/route';
import Base from './base-route';

export default Base.extend({
    itemService: Ember.inject.service('item-service'),
    userService: Ember.inject.service('user-service'),
    bidService: Ember.inject.service('bid-service'),

    model(params){
        return Ember.RSVP.hash({
            item: this.get('itemService').getItem(params),
            // photos: this.get('itemService').getPhotosForItem(params),
            maxBid: this.get('bidService').getMaxBid(params),
         })
    },
    
    setupController(controller, model) {
        this._super(controller, model);
        controller.set('model', model);
        const cookie = this.get('userService').getCookie('user');        
        if(cookie){
            controller.set('currentUser',JSON.parse(cookie));
        }
    },
    
});
