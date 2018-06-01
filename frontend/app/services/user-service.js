import Service from '@ember/service';
import $ from 'jquery';

export default Service.extend({

    register(params){
        return $.ajax({
            method: 'POST',
            url: '/api/v1/register',
            data: params,
            success: function(){
                console.log("Register");
            }
        })
    },

    login(params){
        return $.ajax({
            method: 'POST',
            url: '/api/v1/login',
            data:params
        })
    }
});
