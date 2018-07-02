import Controller from '@ember/controller';
import {later} from '@ember/runloop'
import { alias } from '@ember/object/computed';

export default Ember.Controller.extend({

    item: alias('model.item'),
    // running: Ember.computed.gt('countdown', 0),


    // countdownStart: Ember.computed(function(){
    //     return new Date();
    // }),
    // countdownEnd: Ember.computed(function(){
    //     return this.get('item.endDate');
    // }),

    // countdown: Ember.computed('countdownStart', 'countdownEnd', function(){
    //     let rem = Math.ceil((new Date(this.get('countdownEnd') - this.get('countdownStart').getTime()).getTime())/1000);
    //     return rem > 0 ? rem : 0;
    // }),

    // date: Ember.computed('countdown', function(){
    //     let params = [];
    //     let count = this.get('countdown');

    //     let days = Math.floor(count/86400);
    //     count = count - days*86400;
    //     params.push(days);
    //     let hours = Math.floor(count/3600);
    //     count = count - hours*3600;
    //     params.push(hours);
    //     let minutes = Math.floor(count/60);
    //     count = count - minutes*60;
    //     params.push(minutes);
    //     let seconds = count;
    //     params.push(seconds);
        
    //     return params;
    // }),

    // start: function(){
    //     this.update();
    // },

    // update: function(){

    //     if(this.get('running')){
    //         later(this, function(){
    //             this.set('countdownStart', new Date());
    //             this.update();
    //         }, 1000);
    //     }
    // },

    actions:{
        refresh(){
            this.send('refreshApp');
        }
    }
    

    // websocket: Ember.inject.service(),

    // init:function(){
    //     const socket = this.get('websocket').socketFor('ws://http://localhost:9000/');
    //     this._super(...arguments);

    //     socket.on('open',this.myOpenHandler, this);
    // },

    // myOpenHandler(event) {
    //     console.log(`On open event has been called: ${event}`);
    //   },
    
});
