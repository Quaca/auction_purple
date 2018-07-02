import Component from '@ember/component';
import {later} from '@ember/runloop';

export default Component.extend({

    run: true,

    didInsertElement() {
        this._super(...arguments);
        this.start();
    },
    willDestroyElement() {
        this.set('run', false);
        console.log('destroy');
        this._super(...arguments);
    },

    running: Ember.computed.gt('countdown', 0),


    countdownStart: Ember.computed(function(){
        return new Date();
    }),
    countdownEnd: Ember.computed(function(){
        return this.get('item.endDate');
    }),

    countdown: Ember.computed('countdownStart', 'countdownEnd', function(){
        let rem = Math.ceil((new Date(this.get('countdownEnd') - this.get('countdownStart').getTime()).getTime())/1000);
        return rem > 0 ? rem : 0;
    }),

    date: Ember.computed('countdown', function(){
        let params = [];
        let count = this.get('countdown');

        let days = Math.floor(count/86400);
        count = count - days*86400;
        params.push(days);
        let hours = Math.floor(count/3600);
        count = count - hours*3600;
        params.push(hours);
        let minutes = Math.floor(count/60);
        count = count - minutes*60;
        params.push(minutes);
        let seconds = count;
        params.push(seconds);
        
        return params;
    }),

    start: function(){
        this.update();
    },

    update: function(){

            if(this.get('running')){
                if(this.get('run')) {
                    later(this, function(){
                        this.set('countdownStart', new Date());
                        this.update();
                    }, 1000);
                }
            }
        
    },

});
