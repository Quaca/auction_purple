import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({

    userService: Ember.inject.service('user-service'),

    errorMessage: null,

    init() {
        this._super(...arguments);
        this.set('errorMEssage', null);
    },

    actions:{

        register(){
            let firstName = this.get('firstName');
            let lastName = this.get('lastName');
            let email = this.get('email');            
            let password = this.get('password');
            

            let params = {
                "firstName": firstName,
                "lastName": lastName,
                "email": email,
                "password": password
            }

            this.get('userService').register(params).then(
                () => {
                    this.get('userService').login(params).then(
                        (user) => {
                            this.get('userService').setCookie('user', JSON.stringify(user));
                            this.transitionToRoute('index');
                        }
                    )
                }
            )
            .catch(
                (error) => {
                    this.set('errorMessage', error.responseText)
                }
            )
        }
    }
});
