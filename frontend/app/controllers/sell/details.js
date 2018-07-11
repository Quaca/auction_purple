import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';

export default Controller.extend({

    itemService: Ember.inject.service('item-service'),
    
    name:null,
    categories: alias('model.categories'),
    subcategories: null,
    imageUploadPercentage: 0,
    description:null,
    selectedCategory: null,
    selectedSubcategory: null,
    
    init() {
        this._super(...arguments);
        this.images = [];
    },


    actions:{

        addImage(image) {
            this.get('images').pushObject(image);
        },

        selectCategory(option){
            this.set('selectedCategory', option.target.value)

            let params = {
                "id" : this.get('selectedCategory')
            }

            this.get('itemService').getSubCategories(params).then(
                (result) => {
                    this.set('subcategories', result);
                }
            ).catch(
                (err) => {
                    console.log(err);
                }
            );
        },

        selectSubcategory(option){

            this.set('selectedSubcategory', option.target.value)

        },

        update(){
            let params = {
                'name': this.get('name'),
                'category': this.get('selectedCategory'),
                'subcategory': this.get('selectedSubcategory'),
                'description': this.get('description'),
                'imagePaths': JSON.stringify(this.get('images'))
            }
            this.send('postDetails', params)
            
        },

        updateDetailsBack(){
            console.log('updated from details back')
            this.send('update')
            this.transitionToRoute('sell')
        },

        updateDetailsNext(){
            console.log('updated from details next')
            this.send('update')
            this.transitionToRoute('sell.price')
        }

    }
});
