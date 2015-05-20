var app=angular.module('myApp', ['ngMap']);
  app.controller('MarkerAnimations', function($scope) {
    $scope.neighborhoods = [
    ["Humannplatz Germany", "52.549061", "13.422975", "icon1", "<div>Humannplatz <b>Germany</b></div>"],
    ["Humboldt University of Berlin", "52.517683", "13.394393", "icon2", "<div><b>Humboldt</b> University of Berlin</div>"],
    ["Zoo Berlin", "52.5088241", "13.334207800000058", "icon3", "<div><b>ZOO</b>Berlin</div><br/><p></P>"],
    ["Brachvogelstraße","52.497622", "13.396110", "icon4", "<div><b>Brachvogelstraße</b>Berlin</div>"],
    ["Museum für Naturkunde","52.540211","13.362722","icon5","<div><b>Museum für Naturkunde</b>Berlin</div>"],
    ];console.log($scope.neighborhoods)
    $scope.mapa=function(){
        var A =52.520816;
        var F = 13.410186;
        var mapOptions = {
            zoom: 12,
            center: new google.maps.LatLng(A, F),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        $scope.addMarker(map, $scope.neighborhoods);
    }
    var marker =Array();
    var infowindow=false;
    var image=icon1 = new google.maps.MarkerImage("images/star.png");
$scope.addMarker=function (map, loc) {
    var icon1 = image;
    var icon2 = image;
    var icon3 = image;
    var icon4 = image;
    var icon5 = image;
    for(var i=0; i<loc.length; i++) {
        var locMark = loc[i];
        var myLatLng = new google.maps.LatLng(locMark[1], locMark[2]);
        marker[i]=new google.maps.Marker({
            position: myLatLng,
            map: map,
            animation: google.maps.Animation.DROP,
            icon: eval(locMark[3]),
            title: locMark[0]
        });
        marker[i].infoWindow=new google.maps.InfoWindow({
            content: locMark[4]
        });
        google.maps.event.addListener(marker[i], 'click', function(){      
            if(infowindow)
                infowindow.close();
            infowindow = this.infoWindow;
            infowindow.open(map, this);
        });
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