import Controller from '@ember/controller';
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
