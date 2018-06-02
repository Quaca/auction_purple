import Route from '@ember/routing/route';

export default Route.extend({
    resetController(controller, isExiting, transition) {
        if(isExiting){
            controller.set('errorMessage', null);
            controller.set('email', null);
            controller.set('password', null);
            controller.set('firstName', null);
            controller.set('lastName', null);
            
        }
    }
});
