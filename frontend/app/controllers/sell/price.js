import Controller from '@ember/controller';

export default Controller.extend({

    duration:0,
    startDate: null,
    endDate: null,

    durationString: Ember.computed('duration', function(){
        if(this.get('duration')==21600000) return '6 hours'
        else if(this.get('duration')==43200000) return '12 hours'
        else if(this.get('duration')==86400000) return '1 day'
        else if(this.get('duration')==172800000) return '2 days'
        else if(this.get('duration')==259200000) return '3 days'
        else if(this.get('duration')==345600000) return '4 days'
        else if(this.get('duration')==518400000) return '5 days'
        else if(this.get('duration')==604800000) return '6 days'
        else if(this.get('duration')==691200000) return '7 days'
        else return 'Duration'
    }),


    actions:{
        updatePrice(){

            let params={
                "price": this.get('price'),
                "duration": this.get('duration')
            }
            this.send('postPrice', params);
            console.log('set from price');
            this.transitionToRoute('sell.details');
        },
        setDuration(value){
            this.set('duration', value.target.value*1000)
        },
        
        postItem(){
            console.log('price');
            this.set('startDate', new Date());
            this.set('endDate',this.get('startDate').getTime() + this.get('duration'));
            let params={
                "price": this.get('price'),
                "duration": this.get('duration'),
                "startDate": this.get('startDate'),
                "endDate": this.get('endDate')
            }
            this.send('post', params);
        }

    }

});
