import Route from '@ember/routing/route';

export default Route.extend({
<<<<<<< f936bc15ae0b3378ca25315665c89f44d557bea6
    resetController(controller, isExiting, transition) {
        if(isExiting){
            controller.set('errorMessage', null);
            controller.set('email', null);
            controller.set('password', null);
            controller.set('firstName', null);
            controller.set('lastName', null);
            
        }
    }
=======
>>>>>>> Initial commit
});
