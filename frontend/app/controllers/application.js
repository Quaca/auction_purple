import Controller from '@ember/controller';
import Ember from 'ember';
import baseController from './base-controller';


export default Ember.Controller.extend({

    
    loggedIn:false,
    actions:{
        redirect(){
            console.log('iz app');
            location.reload();
            this.transitionToRoute('index');
        }
    }
});
