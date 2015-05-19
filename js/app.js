var app=angular.module('myApp', ['ngMap']);
  app.controller('MarkerAnimationsIterationCtrl', function($scope, $timeout) {
    $scope.neighborhoods = [
      new google.maps.LatLng(52.5088241, 13.334207800000058),
      new google.maps.LatLng(52.549061, 13.422975),
      new google.maps.LatLng(52.497622, 13.396110),
      new google.maps.LatLng(52.517683, 13.394393)
    ];console.log($scope.neighborhoods)
    $scope.toggleBounce = function() {
      if (this.getAnimation() != null) {
        this.setAnimation(null);
      } else {
        this.setAnimation(google.maps.Animation.BOUNCE);
      }
    };
    var iterator=0;
    var numMark=0;
    var idMark="";

    var cont1= '<p class="InputSearch">hola que hace<p>';
    var infowindow = new google.maps.InfoWindow({
        content:cont1
    });
       google.maps.event.addListener($scope.neighborhoods[0],'click', function() {
        infowindow.open(map,$scope.neighborhoods[0]);
      });
    var image ="images/star.png"
    $scope.addMarker = function() {
      for (var i=0; i<$scope.neighborhoods.length; i++) {
        $timeout(function() {
          // add a marker this way does not sync. marker with <marker> tag
          new google.maps.Marker({
            position: $scope.neighborhoods[iterator++],
            map: $scope.map,
            draggable: false,
            animation: google.maps.Animation.DROP,
            icon:image,
            title:idMark
          });console.log($scope.neighborhoods[numMark++])
          if (iterator == 4){
            idMark="four";
            console.log(idMark)
            console.log(iterator)
          }else if (iterator==1){
            idMark="one";
            console.log(idMark)
            console.log(iterator)
          }else if (iterator==2){
            idMark="two";
            console.log(idMark)
            console.log(iterator)
          }else if (iterator==3){
            idMark="three";
            console.log(idMark)
            console.log(iterator)
          }else{
            console.log("un error")
          };
        }, i * 300);
      }
    }
  });
/*
myApp.directive('googleplace', function() {
    return {
        require: 'ngModel',
        scope: {
            ngModel: '=',
            details: '=',
        },
        link: function(scope, element, attrs, model) {
            var options = {
                types: [],
                componentRestrictions: {}
            };
            scope.gPlace = new google.maps.places.Autocomplete(element[0], options);
            google.maps.event.addListener(scope.gPlace, 'place_changed', function() {
                scope.$apply(function() {
                    scope.details = scope.gPlace.getPlace();
                    model.$setViewValue(element.val());
                });
            });
        }
    };
});
//myApp.factory('myService', function() {});
function MyCtrl($scope) {
    $scope.gPlace;
}*/



/*
myApp.directive('googleplace', function() {
    return {
        require: 'ngModel',
        scope: {
            ngModel: '=',
            details: '=',
        },
        link: function(scope, element, attrs, model) {
            var options = {
                types: [],
                componentRestrictions: {}
            };
            scope.gPlace = new google.maps.places.Autocomplete(element[0], options);
            google.maps.event.addListener(scope.gPlace, 'place_changed', function() {
                scope.$apply(function() {
                    scope.details = scope.gPlace.getPlace();
                    model.$setViewValue(element.val());
                });
            });
        }
    };
});
//myApp.factory('myService', function() {});
function MyCtrl($scope) {
    $scope.gPlace;
}*/