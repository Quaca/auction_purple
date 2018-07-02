import Controller from '@ember/controller';
import Ember from 'ember';
import baseController from './base-controller';


export default Ember.Controller.extend({

    
    loggedIn:false,
    actions:{
        play(){
            console.log(this.loggedIn);
            this.send('refreshApp');
        }
    }
});
