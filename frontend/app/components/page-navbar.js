import Component from '@ember/component';

export default Component.extend({
    
    userService: Ember.inject.service('user-service'),
    isActive:false,

    didRender(){
        const cookie = this.get('userService').getCookie('user');
        if(cookie){
             this.set('isActive', true);
        }
        else{
            this.set('isActive', false);
        }
        this._super(...arguments);
    }

    
});
