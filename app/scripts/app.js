(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
        });
        
        $stateProvider
            .state('home', {
                url: '/',
                template: '<div>Home</div>'
        });
        
    }
    
angular 
    .module('blocChat', ['ui.router', 'firebase'])
    .config(config);
})();