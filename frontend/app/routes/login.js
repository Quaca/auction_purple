import Route from '@ember/routing/route';
import Base from './base-route';

export default Base.extend({

    userService: Ember.inject.service('user-service'),

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
            controller.set('currentUser', JSON.parse(cookie));
            this.transitionTo('index');
        }
    },

    actions:{
        ref(){
            this.refresh();
        }
    }

    
    
});
