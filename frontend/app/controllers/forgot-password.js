import Controller from '@ember/controller';
import baseController from './base-controller';

export default baseController.extend({
    userService: Ember.inject.service('user-service'),
    successMessage: null,
    errorMessage: null,

    actions:{
        generateToken(){
            let email = this.get('email');
            let params = {
                "email": email
            }

            this.get('userService').forgotPassword(params).then(
                () => {
                    this.set('successMessage', "Token is sent to your email");
                }
            )
            .catch(
                (error) => {
                    this.set('errorMessage', error.responseText)
                }
            );
        }
    }
});
