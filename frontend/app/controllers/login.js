import Controller from '@ember/controller';
import Ember from 'ember';
import baseController from './base-controller';


export default baseController.extend({

    userService: Ember.inject.service('user-service'),
    errorMessage: null,

    // didInsertElement() {
    //     this.$('input').attr('value', this.get('null'));
    // },
    

    actions:{

        // change() {
        //     this.onChange();
        // },

        login(){
            let email = this.get('email');
            let password = this.get('password');

            let params = {
                "email": email,
                "password": password
            }

            this.get('userService').login(params).then(
                (user) => {
                    this.get('userService').setCookie('user', JSON.stringify(user));
                    this.transitionToRoute('index');
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
