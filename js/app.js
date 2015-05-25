var app=angular.module('myApp', ['ngMap']);
  app.controller('MarkerAnimations', function($scope) {
    //array of palces
    $scope.neighborhoods = [
    ["Humannplatz Germany", "52.54875699999999", "13.420661999999993", "icon1", "<div class='aling'>Humannplatz<b>Germany</b></div><br/><a href='http://www.yelp.com/biz/humannplatz-berlin' class='aling'>Web Site Humannplatz</a><br/><img src='http://cdn.c.photoshelter.com/img-get2/I0000P.PhuJ2D2gY/fit=1000x750/Subway-Berlin-34.jpg' class='images'></img>"],
    ["Humboldt University of Berlin", "52.517683", "13.394393", "icon2", "<div class='aling'><b>Humboldt</b> University of Berlin</div> <br/><a href='https://www.hu-berlin.de/de'> <p class='aling'>Web site Humboldt University of Berlin</p></a> <br/><img src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSKtAY9wbL9c53nvRY_aoJ20rGAiRYfReu8xrnvg7YkUZDDfgjH' class='images'>"],
    ["Zoo Berlin", "52.5088241", "13.334207800000058", "icon3", "<div class='aling'><b>ZOO  </b>  Berlin</div><br/><a href='http://www.zoo-berlin.de/de'><p class='aling'>Web site ZOO Berlin</p></a><img src='http://www.guiadealemania.com/wp-content/uploads/2012/05/zoo-berlin.png' class='images'></div>"],
    ["East Side Gallery","52.504341588222424","13.439855598144504", "icon4", "<div class='aling'><b>East Side Gallery  </b>  Berlin</div><br/><a href='http://www.eastsidegallery-berlin.de/' class='aling'> Web Site East Side Gallery</a> <br/><img src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRRCZF75VTfqOEl6JPtJAjdGWtrz9KnBwCoXaPj41QF9WzSRBIq' class='images'></img>"],
    ["Jewish Museum Berlin", "52.5023115","13.395446900000024","icon5","<div class='aling'><b>Jewish Museum  </b>  Berlin</div><br/><a href='http://www.jmberlin.de/main/EN/homepage-EN.php'> <p class='aling'>Web Site Jewish Museum</p></a><img src='https://bronwynvowles.files.wordpress.com/2011/10/jewish-museum-large.jpeg' class='images'></img>"],
    ];console.log($scope.neighborhoods)
    //fuction for search box and autocomplete 
    $scope.list=function(){
      var currencies = [
        { value: 'Humannplatz Germany', data: '1' },
        { value: 'Humboldt University of Berlin', data: '2' },
        { value: 'Zoo Berlin', data: '3' },
        { value: 'East Side Gallery', data: '4' },
        { value: 'Jewish MuseumBerlin', data: '5' }
      ];
      // setup autocomplete function pulling from currencies[] array
      $('#autocomplete').autocomplete({
        lookup: currencies,
      });
    }
    //function of add HTML code to DOM 
    $scope.select=function () {
        // body...
        var porId=document.getElementById("autocomplete").value;
        if (porId==="Humannplatz Germany") {
            console.log("Este es el primero")
          var thehtml = "<div class='contZoo container' id='delete'><div class='col-md-4'><img src='http://cdn.c.photoshelter.com/img-get2/I0000P.PhuJ2D2gY/fit=1000x750/Subway-Berlin-34.jpg' class='image'></div><div class='col-md-8'><b>Bienvenido Humannplatz Germany</b><div class='close'>X</div> <br/>Un gran lugar para tener un paseo con su perro, o simplemente tener una carrera.El patio es perfecto para los niños, ya que tiene una gran cantidad de variación, y hay un montón de árboles, por lo que incluso puede jugar Cuando el verano es agradable y caliente.</div></div>";
          $('.hola').html(thehtml);
        }else if(porId==="Humboldt University of Berlin"){
            console.log("este es el segundo")
          var thehtml = "<div class='contZoo container' id='delete'><div class='col-md-4'><img src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSKtAY9wbL9c53nvRY_aoJ20rGAiRYfReu8xrnvg7YkUZDDfgjH'class='image'></div><div class='col-md-8'><b>Humboldt University</b><div class='close'>X</div> <br/>La oficina de representación de la Universidad en la avenida Unter den Linden, el antiguo palacio del príncipe Heinrich, hace hoy un aspecto imponente y es una atracción para muchas personas.En el centro del campus tradicional Humanidades y Ciencias Sociales, Ciencias Económicas y de la teología tiene su sede, el Campus Norte une las ciencias de la vida, y en Adlershof campus son las matemáticas y las ciencias naturales.</div></div>";
          $('.hola').html(thehtml);
        }else if (porId==="Zoo Berlin"){
            console.log("este es el tercero")
          var thehtml = "<div class='contZoo container' id='delete'><div class='col-md-4'><img src='http://www.guiadealemania.com/wp-content/uploads/2012/05/zoo-berlin.png' class='image'></div><div class='col-md-8'><p><b>Bienvenido al zoológico de Berlín</b><div class='close'>X</div> <br/>El más zoológico ricos en especies en el mundo. Descubra el zoo de Berlín, el primer zoológico en Alemania, la gran variedad de fauna. Aquí viven no sólo los animales del zoológico exóticos como osos polares, elefantes, focas, leones o jirafas. Muchas razas en peligro de extinción de animales domésticos, se puede visitar con nosotros.</p></div></div>";
          $('.hola').html(thehtml);
        }else if (porId==="East Side Gallery"){
            console.log("este es el Cuarto")
          var thehtml = "<div class='contZoo container' id='delete'><div class='col-md-4'><img src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRRCZF75VTfqOEl6JPtJAjdGWtrz9KnBwCoXaPj41QF9WzSRBIq' class='image'></div><div class='col-md-8'><p><b>EAST SIDE GALLERY BERLIN</b><div class='close'>X</div> <br/>se encuentra en el espacio público, es accesible al público durante todo el día. - Para visitas especiales se pueden reservar aquí.  101 imágenes de gran formato pintados directamente sobre la pared son para la alegría de la caída del muro, para superar la Cortina de Hierro en Europa, la euforia por la libertad de la persecución, el espionaje y la falta de libertad, la esperanza de una mejor sociedad humana pacífica ganado. Para historias personales, los deseos y los sueños. </p> </div></div>";
          $('.hola').html(thehtml);
        }else if (porId==="Jewish MuseumBerlin"){
            console.log("este es el Quinto")
          var thehtml = "<div class='contZoo container' id='delete'><div class='col-md-4'><img src='https://bronwynvowles.files.wordpress.com/2011/10/jewish-museum-large.jpeg'class='image'></div><div class='col-md-8'><p><b>Jewish Museum Berlin</b><div class='close'>X</div> <br/>El Museo Judío de Berlín abrió sus puertas en septiembre de 2001. Dos años antes, el nuevo edificio vacío por el arquitecto Daniel Libeskind lo que una atracción visitante inesperado. En esta sección, se presenta el complejo de edificios en la imagen y el texto: El Edificio Antiguo - barroco Collegienhaus, lo posmoderno Libeskind edificio, el patio de cristal erigido en 2007 y la nueva Academia abrió sus puertas en 2012. Las circunstancias de la fundación del museo, el colecciones que se basa en, y las personas que han dirigido su desarrollo se pueden encontrar aquí.</p></div></div>";
          $('.hola').html(thehtml);
        }else{
            console.log("ha fallado")
        };
        //code of close div with information
        $(".close").click(function(event){
        event.preventDefault();
        $("#delete").hide(1000);
        $("#delete").hide("slow");
        });
    }
    //adding map of google api
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
    var newarray=[];
    var image=icon1 = new google.maps.MarkerImage("images/star.png");
    //add  markers and infowindow
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
            animation: google.maps.Animation.BOUNCE,
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
