import Route from '@ember/routing/route';

export default Route.extend({

    resetController(controller, isExiting, transition) {
        if(isExiting){
            controller.set('errorMessage', null);
            controller.set('email', null); 
        }

        this._super(...arguments);
    },

    setupController(controller) {
        this._super(controller);
        this.set('successMessage', null);
        this.set('errorMessage', null);
        
    }
});
