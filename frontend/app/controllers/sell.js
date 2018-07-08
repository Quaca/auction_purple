import Controller from '@ember/controller';

export default Controller.extend({

    name:null,
    category: null,
    subcategory:null,
    description:null,
    imagePaths:null,
    price:0,
    startDate:null,
    endDate:null,
    duration:0,

    actions:{
        ide(){
            console.log(this.get('price'))
            console.log(this.get('name'))
            console.log(this.get('category'))
            console.log(this.get('subcategory'))
            console.log(this.get('description'))
            console.log(this.get('startDate'))
            console.log(this.get('endDate'))
            console.log(this.get('duration'))
            console.log(this.get('imagePaths'))
        }
    }

});
