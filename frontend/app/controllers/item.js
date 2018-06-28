import Controller from '@ember/controller';
import baseController from './base-controller';

export default Ember.Controller.extend({

    actions:{
        refresh(){
            this.send('newBid');
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
