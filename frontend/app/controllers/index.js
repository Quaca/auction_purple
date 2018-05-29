import Controller from '@ember/controller';
import Ember from 'ember';
import { alias } from '@ember/object/computed'
import baseController from './base-controller';
//import {service as itemService} from '../services/item-service';
export default baseController.extend({

    userService: Ember.inject.service('user-service'),

    popularItems: alias('model.popularItems'),
    featureProducts: alias('model.featureProducts'),
    landingItem: alias('model.landingItem'),

    actions:{
        logout(){          
            this.logout();
            this.transitionToRoute('login');
        }
    }

});