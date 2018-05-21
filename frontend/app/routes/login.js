import Route from '@ember/routing/route';

export default Route.extend({
<<<<<<< f936bc15ae0b3378ca25315665c89f44d557bea6

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
        }
    }
=======
>>>>>>> Initial commit
});
