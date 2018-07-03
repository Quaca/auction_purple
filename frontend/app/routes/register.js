import Route from '@ember/routing/route';
import Base from './base-route';

export default Base.extend({

    userService: Ember.inject.service('user-service'),

    resetController(controller, isExiting, transition) {
        if(isExiting){
            controller.set('errorMessage', null);
            controller.set('email', null);
            controller.set('password', null);
            controller.set('firstName', null);
            controller.set('lastName', null);
            
        }
    },
    
    setupController(controller, model) {
        this._super(controller, model);
        controller.set('model', model);
        const cookie = this.get('userService').getCookie('user');        
        if(cookie){
            this.transitionTo('index');
        }
    }
});
