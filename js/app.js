var app=angular.module('myApp', ['ngMap']);

it('should check ng-click', function() {
  expect(element(by.binding('count')).getText()).toMatch('0');
  element(by.css('button')).click();
  expect(element(by.binding('count')).getText()).toMatch('1');
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