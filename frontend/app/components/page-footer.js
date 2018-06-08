import Component from '@ember/component';

export default Component.extend({
    userService: Ember.inject.service('user-service'),
    successMessage: null,
    errorMessage: null,
    

    actions:{
        subscribe(){
            let email = this.get('email2');
            let params = {
                "email": email
            }
            this.get('userService').subscribe(params).then(
                () => {
                    this.set('successMessage', "Successfully subscribed");                    
                    this.set('errorMessage', null);

                }
            )
            .catch(
                (error) => {
                    this.set('errorMessage', error.responseText);
                    this.set('successMessage', null);
                    
                }
            );
        }
    }
});
