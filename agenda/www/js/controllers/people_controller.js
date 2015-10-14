(function(){
     var app = angular.module('peopleController', []);

     app.controller('peopleController',
          function($scope, $http) {
            var url = 'http://0.0.0.0:3000/api/people';

            $http.get(url)
              .success(function(people) {
                $scope.people = people;
                  } )
              .error(function(data) {
                         console.log( 'server side error occurred.' );
                          } ) ;
            
          }
     );
} ) ( );