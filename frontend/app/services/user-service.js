import Service from '@ember/service';
import Ember from 'ember';  
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
    },

<<<<<<< 78f3a0ad048340d087ba0cb24899289c92758a64
    subscribe(params){
        return $.ajax({
            method: 'POST',
            url: '/api/v1/subscribe',
            cache: false,
            contentType: 'application/json',
            data:params ? JSON.stringify(params) : null,
        })
    },

    forgotPassword(params){
        return $.ajax({
            method: 'POST',
            url:'/api/v1/generateToken',
            cache: false,
            contentType: 'application/json',
            data:params ? JSON.stringify(params) : null,
        })
    },

    changePassword(params){
        return $.ajax({
            method:'POST',
            url:'/api/v1/changePassword',
            cache: false,
            contentType: 'application/json',
            data:params ? JSON.stringify(params) : null,
        })
    },

=======
>>>>>>> Sessions and cookies
    setCookie(cname,cvalue,exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires=" + d.toGMTString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    },    

    getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
});
