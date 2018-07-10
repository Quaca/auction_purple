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
        });
    },
    getLastChance(){
        return $.ajax({
            method: 'GET',
            url: '/api/v1/getLastChance',
        });
    },
    getNewArrivals(){
        return $.ajax({
            method: 'GET',
            url: 'api/v1/getNewArrivals',
        })
    },

    getFeatureProducts(){
        return $.ajax({
            method: 'GET',
            url: '/api/v1/getFeatureProducts',
        })
    },

    getCategories(){
        return $.ajax({
            method: 'GET',
            url: '/api/v1/category'
        })
    },

    getSubCategories(params){
        return $.ajax({
            method: 'POST',
            url: '/api/v1/subCategory',
            cache: false,
            contentType: 'application/json',
            data:params ? JSON.stringify(params) : null,
        })
    },
    createItem(params){
        return $.ajax({
            method: 'POST',
            url: '/api/v1/createItem',
            cache: false,
            contentType: 'application/json',
            data:params ? JSON.stringify(params) : null,
        })
    },
    setImages(params){
        return $.ajax({
            method: 'POST',
            url: '/api/v1/setImages',
            cache: false,
            contentType: 'application/json',
            data:params ? JSON.stringify(params) : null,
        })
    },

    getPhotosForItem(params){
        return $.ajax({
            method:'GET',
            url:'/api/v1/photosForItem/'+ params.id,
        })
    }
    
});
