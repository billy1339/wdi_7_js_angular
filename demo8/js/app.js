// initialize the app
angular.module('Demo', []);

// custom filter
angular.module('Demo').filter('capitalize', function() {
    //filters have to return a function.
    return function(param) {
        if (param) {
            return param[0].toUpperCase() + param.slice(1);  //return param.toUpperCase();   this will uppercase all letters.
        }
    };
});
