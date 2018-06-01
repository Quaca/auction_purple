import Route from '@ember/routing/route';

export default Route.extend({

    resetController(controller, isExiting, transition) {
        //empty by default
        //fires when route changes or model is refreshed
        // isExiting property true when exiting (obviously)

        if(isExiting){
            controller.set('errorMessage', null);
            controller.set('email', null);
            controller.set('password', null);
        }
        }
});
