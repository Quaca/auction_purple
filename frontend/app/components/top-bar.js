import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({

    userService:Ember.inject.service('user-service'),

    actions:{
        logout(){
            this.get('userService').logout().then(() => {
                this.set('loggenId', false)
            }).catch((err) => {
                console.log('There was an error' + err);
            });
            document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            location.reload();
        }
    }
    
});
