import Service from '@ember/service';
import $ from 'jquery';

export default Service.extend({

    postBid(params){
        return $.ajax({
            method: 'POST',
            url: '/api/v1/postBid',
            cache: false,
            contentType: 'application/json',
            data:params ? JSON.stringify(params) : null
        })
    },
    getMaxBid(params){
        return $.ajax({
            method: 'POST',
            url: '/api/v1/getMaxBid',
            cache: false,
            contentType: 'application/json',
            data:params ? JSON.stringify(params) : null
        })
    }
});
