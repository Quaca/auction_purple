import Service from '@ember/service';
import $ from 'jquery';

export default Service.extend({

    getItem(params){
        return $.ajax({
            method:'GET',
            url:'/api/v1/item/'+ params.id,
        })
    },

    getLandingItem(){
        return $.ajax({
            method: 'GET',
            url: '/api/v1/getLandingItem',
        })
    },

    getPopularItems(){
        return $.ajax({
            method: 'GET',
            url: '/api/v1/getPopularItems',
            success: function(){
                console.log('popularItems');
            }   
        });
    },
    getLastChance(){
        return $.ajax({
            method: 'GET',
            url: '/api/v1/getLastChance',
            success: function(){
                console.log('lastChance');
            }
        });
    },
    getNewArrivals(){
        return $.ajax({
            method: 'GET',
            url: 'api/v1/getNewArrivals',
            success: function(){
                console.log('newArrivals');
            }
        })
    },

    getFeatureProducts(){
        return $.ajax({
            method: 'GET',
            url: '/api/v1/getFeatureProducts',
            success: function(){
                console.log('featureProducts');
            }
        })
    }
    
});
