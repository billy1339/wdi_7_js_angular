angular.module('Demo', []);

// custom filter
angular.module('Demo').filter('everyOther', function() {
    //filters have to return a function.
    return function(param) {
        if (param) {
            var newString = [];
            var x = 0
            while (x < param.length) {
              var letter = param[x].toUpperCase();
              newString.push(letter)
              var y = x + 1
              newString.push(param[y]);
              x += 2;
            }
            return newString.join('') + " WDI BABY !!!!"
        }
    };
});
