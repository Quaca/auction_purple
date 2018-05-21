import Controller from '@ember/controller';
<<<<<<< 27c22a56dc4a50813e90368857a859e7409be507
import Ember from 'ember';
import { alias } from '@ember/object/computed'
//import {service as itemService} from '../services/item-service';
export default Controller.extend({
    popularItems: alias('model.popularItems'),
    featureProducts: alias('model.featureProducts')
    // lastChanceItems: alias('model.lastChance'),
    // newArrivalsItems: alias('model.newArrivals'),
    
    

    // actions:{

    // },

    
});
=======

export default Controller.extend({

    model1: [
        {
            name:"Shoes",
            startPrice: 35,
            imgURL: "assets/images/shoes.png"
        },
        {
            name:"Minions",
            startPrice: 10,
            imgURL: "assets/images/min.jpg"
        },
        {
            name:"Patika",
            startPrice:25,
            imgURL: "assets/images/patika.jpg"
        }
    ],
    model2: [
        {
            name:"Car-Porsche",
            startPrice: 100000,
            imgURL: "assets/images/porse.jpg"
        },
        {
            name:"Minions",
            startPrice: 10,
            imgURL: "assets/images/min.jpg"
        },
        {
            name:"Ball for soccer",
            startPrice:30,
            imgURL: "assets/images/lopta.jpg"
        },
        {
            name:"Desktop computer",
            startPrice: 500,
            imgURL: "assets/images/komp.png"
        }
    ]
});
>>>>>>> Added static landing-page
