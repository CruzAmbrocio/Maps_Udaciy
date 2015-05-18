var app=angular.module('myApp', ['ngMap']);
  app.controller('MarkerAnimationsIterationCtrl', function($scope, $timeout) {
    $scope.neighborhoods = [
      new google.maps.LatLng(52.511467, 13.447179),
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
            icon:image
          });
        }, i * 200);
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