var app=angular.module('myApp', ['ngMap']);
  app.controller('MarkerAnimations', function($scope) {
    $scope.neighborhoods = [
    ["Humannplatz Germany", "52.54875699999999", "13.420661999999993", "icon1", "<div class='aling'>Humannplatz<b>Germany</b></div><br/><a href='http://www.yelp.com/biz/humannplatz-berlin' class='aling'>Web Site Humannplatz</a><br/><img src='http://cdn.c.photoshelter.com/img-get2/I0000P.PhuJ2D2gY/fit=1000x750/Subway-Berlin-34.jpg' class='images'></img>"],
    ["Humboldt University of Berlin", "52.517683", "13.394393", "icon2", "<div class='aling'><b>Humboldt</b> University of Berlin</div> <br/><a href='https://www.hu-berlin.de/de'> <p class='aling'>Web site Humboldt University of Berlin</p></a> <br/><img src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSKtAY9wbL9c53nvRY_aoJ20rGAiRYfReu8xrnvg7YkUZDDfgjH' class='images'>"],
    ["Zoo Berlin", "52.5088241", "13.334207800000058", "icon3", "<div class='aling'><b>ZOO</b>Berlin</div><br/><a href='http://www.zoo-berlin.de/de'><p class='aling'>Web site ZOO Berlin</p></a><img src='http://www.guiadealemania.com/wp-content/uploads/2012/05/zoo-berlin.png' class='images'></div>"],
    ["East Side Gallery","52.504341588222424","13.439855598144504", "icon4", "<div class='aling'><b>East Side Gallery</b>Berlin</div><br/><a href='http://www.eastsidegallery-berlin.de/' class='aling'> Web Site East Side Gallery</a> <br/><img src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRRCZF75VTfqOEl6JPtJAjdGWtrz9KnBwCoXaPj41QF9WzSRBIq' class='images'></img>"],
    ["Jewish Museum Berlin", "52.5023115","13.395446900000024","icon5","<div class='aling'><b>Jewish Museum</b>Berlin</div><br/><a href='http://www.jmberlin.de/main/EN/homepage-EN.php'> <p class='aling'>Web Site Jewish Museum</p></a><img src='https://bronwynvowles.files.wordpress.com/2011/10/jewish-museum-large.jpeg' class='images'></img>"],
    ];console.log($scope.neighborhoods)
    $scope.mapa=function(){
        var A =52.520816;
        var F = 13.410186;
        var mapOptions = {
            zoom: 12,
            center: new google.maps.LatLng(A, F),
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

    }console.log(marker[0].title)

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