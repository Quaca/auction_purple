import Route from '@ember/routing/route';

export default Route.extend({
    itemService: Ember.inject.service('item-service'),
    
    model(){
        return Ember.RSVP.hash({
            categories: this.get('itemService').getCategories(),
        })
    },
    
});
