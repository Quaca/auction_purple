import Component from '@ember/component';
// import { inject } from '@ember/service';
// import { get } from '@ember/object';

export default Component.extend({
    userService: Ember.inject.service('user-service'),
    successMessage: null,
    errorMessage: null,
    // flashMessages: inject(),
    

    actions:{
        subscribe(){
            let email = this.get('email2');
            let params = {
                "email": email
            }
            // get(this, 'flashMessages').success('Success!')            
            this.get('userService').subscribe(params).then(
                () => {
                    this.set('email2', null);
                    swal({
                        title: "Success",
                        text: "You successfully subscribed to our newsletter",
                        type: "success",
                        button: "Aww yiss!",
                      });
                    }
            )
            .catch(
                (error) => {
                    this.set('email2', null);
                    swal({
                        title: "Error",
                        text: "You are already subscribed",
                        type: "error",
                        button: "Oh noez!",
                      });
                }
            );
        }
    }
});
