import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
    itemService: Ember.inject.service('item-service'),
    userService: Ember.inject.service('user-service'),

    model(){

        return Ember.RSVP.hash({
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

    setupController(controller) {
        this._super(controller);
        const cookie = this.get('userService').getCookie('user');        
        if(cookie){
            controller.set('currentUser',JSON.parse(cookie));
        }
    }
});


