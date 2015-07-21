/**
 * Created by cnk on 5/21/2015.
 */


ChurchApp.factory('sessionService',function(){
    return {
        setData: function(key, value) {
            return sessionStorage.setItem(key, value);
        },
        getData: function(key){
            return sessionStorage.getItem(key)
        },
        destroyData: function(key){
            return sessionStorage.removeItem(key)
        }
    };

})