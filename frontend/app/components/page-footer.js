import Component from '@ember/component';

export default Component.extend({
    userService: Ember.inject.service('user-service'),
    successMessage: null,

    init() {
        this._super(...arguments);
        this.set('successMessage', null);
    },

    actions:{
        subscribe(){
            let email = this.get('email');
            let params = {
                "email": email
            }
            this.get('userService').subscribe(params).then(
                () => {
                    this.set('successMessage', "Successfully subscribed");
                }
            )
            .catch(
            );
        }
    }
});
