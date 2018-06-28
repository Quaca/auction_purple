import Route from '@ember/routing/route';

export default Route.extend({

    userService: Ember.inject.service('user-service'),

    model(){

        let cookie = this.get('userService').getCookie('user');
        return Ember.RSVP.hash({cookie});

    },

    setupController(controller, model) {
        this._super(controller, model);
        controller.set('model', model);
        if(model.cookie){
            controller.set('loggedIn',true);
        }
        else{
            controller.set('loggedIn', false)
        }
    }
    
});