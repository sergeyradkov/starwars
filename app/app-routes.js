angular.module('starwars')
.config(function($stateProvider){
    
    $stateProvider
 /*   .state('home', {
        url:'',
        templateUrl: 'app/pages/home.html',

    })*/
    .state('pepole',{
        url:' ',
        templateUrl:'pages/people.html',
        controller: 'starWarsPeopleController',
        controllerAs: 'spp'
    })
        .state('person',{
        url:'/person: id',
        templateUrl:'pages/person.html',
        controller: 'starWarsPersonController',
        controllerAs: 'spr'
    })

})