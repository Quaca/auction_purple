import Service from '@ember/service';
import $ from 'jquery';
import { get } from '@ember/object';

export default Service.extend({
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
