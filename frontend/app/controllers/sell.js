import Controller from '@ember/controller';

export default Controller.extend({

    itemService: Ember.inject.service('item-service'),

    name:null,
    category: null,
    subcategory:null,
    description:null,
    imagePaths:null,
    startingPrice:0,
    startDate:null,
    endDate:null,
    duration:0,

    actions:{
        ide(){
            console.log(this.get('startingPrice'))
            console.log(this.get('name'))
            console.log(this.get('category'))
            console.log(this.get('subcategory'))
            console.log(this.get('description'))
            console.log(this.get('startDate'))
            console.log(this.get('endDate'))
            console.log(this.get('duration'))
            console.log(this.get('imagePaths'))
        },

        createItem(){
            let params = {
                "name": this.get('name'),
                "category": this.get('category'),
                "subcategory": this.get('subcategory'),
                "description": this.get('description'),
                "startingPrice": this.get('startingPrice'),
                "startDate": this.get('startDate'),
                "endDate": this.get('endDate')
            }

            this.get('itemService').createItem(params).then((result) => {
                console.log(result.id)
                let itemParams = {
                    "item_id": result.id,
                    "paths": this.get('imagePaths')
                }

                this.get('itemService').setImages(itemParams).then(() => {
                    swal({
                        title:"",
                        text: "Item successfully posted",
                        type: "success",
                        button: "Aww yiss!",
                    });  
                }).catch((err) => {
                   console.log(err) 
                });
            }).catch((err) => {
                console.log(err)
            });
        }
    }

});
