import Route from '@ember/routing/route';
import Base from './base-route';

export default Base.extend({
    resetController(controller, isExiting, transition) {
        if(isExiting){
            controller.set('errorMessage', null);
            controller.set('email', null);
            controller.set('password', null);
            controller.set('firstName', null);
            controller.set('lastName', null);
            
        }
    },
});
