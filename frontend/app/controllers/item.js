import Controller from '@ember/controller';
import {later} from '@ember/runloop'
import { alias } from '@ember/object/computed';

export default Ember.Controller.extend({

    item: alias('model.item'),
    
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
