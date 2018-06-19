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
    getBid(params){
        return $.ajax({
            method: 'Post',
            url: '/api/v1/getBid',
            data:params
        })
    }
});
