import Controller from '@ember/controller';

export default Controller.extend({
    userService: Ember.inject.service('user-service'),

    queryParams:['key'],
    key:null,

    queryParam: Ember.computed.oneWay('key'),

    actions:{
        changePassword(){
            let password = this.get('password');
            let token = this.get('queryParam')

            let params = {
                "password": password,
                "token": token
            }

            this.get('userService').changePassword(params).then(
                () => {
                     this.transitionToRoute('login');                    
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
