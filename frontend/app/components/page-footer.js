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
                    this.set('successMessage', "Successfully subscribed");                    
                    this.set('errorMessage', null); 
                    this.set('email2', null);
                    // swal({
                    //     title: "Good job!",
                    //     text: "You clicked the button!",
                    //     icon: "success",
                    //     button: "Aww yiss!",
                    //   });
                    // }
            )
            .catch(
                (error) => {
                    this.set('errorMessage', error.responseText);
                    this.set('successMessage', null);
                    this.set('email2', null);
                    
                }
            );
        }
    }
});
