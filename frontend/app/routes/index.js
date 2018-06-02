import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
    itemService: Ember.inject.service('item-service'),
        

    model(){

        return Ember.RSVP.hash({
            popularItems: this.get('itemService').getPopularItems(),
            featureProducts: this.get('itemService').getFeatureProducts()
         })
    } 
});


