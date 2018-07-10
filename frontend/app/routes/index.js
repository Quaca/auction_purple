import Route from '@ember/routing/route';
import Ember from 'ember';
import Base from './base-route';

export default Base.extend({
    itemService: Ember.inject.service('item-service'),
    userService: Ember.inject.service('user-service'),

    model(){
        return Ember.RSVP.hash({
            landingItem: this.get('itemService').getLandingItem(),
            popularItems: this.get('itemService').getPopularItems(),
            featureProducts: this.get('itemService').getFeatureProducts()
         })
    },

    resetController(controller, isExiting, transition) {
        if(isExiting){
            controller.set('errorMessage', null);
            controller.set('email', null);
            controller.set('password', null);
        }

        this._super(...arguments);
    },

    setupController(controller, model) {
        this._super(controller, model);
        controller.set('popularItems', model.popularItems);
        controller.set('landingItem', model.landingItem);
        controller.set('featureProducts', model.featureProducts);        
        const cookie = this.get('userService').getCookie('user');        
        if(cookie){
            controller.set('currentUser',JSON.parse(cookie));
        }
    }
});


