import Component from '@ember/component';
import Ember from 'ember';
import { alias } from '@ember/object/computed';

export default Component.extend({

    itemService: Ember.inject.service('item-service'),


    classNames:['mt-5'],
    id:'custom-product',
    clicked:null,
    popularItems:null,
    lastChance:null,
    newArrivals:null,

    button1:true,
    button2:false,
    button3:false,

    actions:{
        button1Clicked(){
            this.set("button2", false);
            this.set("button3", false);
            this.set("button1", true);
        },
        button2Clicked(){
            this.set("button2", true);
            this.set("button3", false);
            this.set("button1", false);
        },
        button3Clicked(){
            this.set("button2", false);
            this.set("button3", true);
            this.set("button1", false);
        }
    },        

    init(){
            this.get('itemService').getPopularItems().then(popularItems => this.set('popularItems', popularItems));
            this.get('itemService').getLastChance().then(lastChance => this.set('lastChance', lastChance));
            this.get('itemService').getNewArrivals().then(newArrivals => this.set('newArrivals', newArrivals));
            
            this._super(...arguments);     
    },


});
