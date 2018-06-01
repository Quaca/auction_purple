import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({

    userService: Ember.inject.service('user-service'),
    errorMessage: null,

    didInsertElement() {
        this.$('input').attr('value', this.get('null'));
    },
    

    actions:{

        change() {
            this.onChange();
        },

        login(){
            let email = this.get('email');
            let password = this.get('password');

            let params = {
                "email": email,
                "password": password
            }

            this.get('userService').login(params).then(
                () => this.transitionToRoute('index')
            )
            .catch(
                (error) => {
                    this.set('errorMessage', error.responseText)
                }
            );
        }
    }
    
});
