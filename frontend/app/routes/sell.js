import Route from '@ember/routing/route';

export default Route.extend({

    actions:{
        post(value){
            this.controller.set('startDate',value.startDate);
            this.controller.set('endDate',value.endDate);
            this.controller.set('duration',value.duration);
            this.controller.set('startingPrice',value.price);
            this.controller.send('createItem')        
        },

        postPrice(value){
            this.controller.set('duration',value.duration);
            this.controller.set('startingPrice',value.price);
        },
        postDetails(value){
            this.controller.set('name', value.name);
            this.controller.set('category', value.category);
            this.controller.set('subcategory', value.subcategory);
            this.controller.set('description', value.description);
            this.controller.set('imagePaths', value.imagePaths);
        }
    }
});
