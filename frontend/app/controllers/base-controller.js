import Ember from 'ember';

export default Ember.Controller.extend({
    currentUser: null,
    logout(){
        this.set('currentUser', null)
        document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }
});
 