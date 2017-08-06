 //CLASS
class Bus {
    constructor (name, stop, stopPositions, colour, nom_time, fri_time, sat_time, sun_time )  {
        this.name = name;
        this.stop = stop;
        this.stopPositions = stopPositions;
        this.colour = colour;
        this.nom_time = nom_time;
        this.fri_time = fri_time;
        this.sat_time = sat_time;
        this.sun_time = sun_time;
        this.nameDOM = document.getElementById("name");
        this.stopDOM = document.getElementById("stop");
        this.colourDOM = document.getElementById("colour");
        this.nom_timeDOM = document.getElementById("nom_time");
        this.fri_timeDOM = document.getElementById("fri_time");
        this.sat_timeDOM = document.getElementById("sat_time");
        this.sun_timeDOM = document.getElementById("sun_time");
        this.route_dDOM = document.getElementById("route_d");
        this.arrivalDOM = document.getElementById("arrival");

    }
            //    FUNCTIONS
    addContent() {
    this.nameDOM.innerHTML = this.name; 
    this.stopDOM.innerHTML = this.format_stop();
    this.colourDOM.innerHTML = this.colour;
        this.nom_timeDOM.innerHTML = this.nom_time;
        this.fri_timeDOM.innerHTML = this.format_times()
        this.sat_timeDOM.innerHTML = this.sat_time;
        this.sun_timeDOM.innerHTML = this.sun_time;
    }
    
    
}

var awapuni_bus = new Bus ("Awapuni", awapuniStops, stopCoordinates, "blue",awapuniTimesMonFri, awapuniTimesFri, awapuniTimesSat, awapuniTimesSun)
var rugby_bus = new Bus ("Rugby", rugbyStops, stopCoordinates, "blue",rugbyTimesMonFri, rugbyTimesFri, rugbyTimesSat, rugbyTimesSun)
var highbury_bus = new Bus ("Highbury", highburyStops, stopCoordinates, "blue",highburyTimesMonFri, highburyTimesFri, highburyTimesSat, highburyTimesSun)
var takaro_bus = new Bus ("Takaro", takaroStops, stopCoordinates, "blue",takaroTimesMonFri, takaroTimesFri, takaroTimesSat, takaroTimesSun)
var cloverlea_bus = new Bus ("Cloverlea", cloverleaStops, stopCoordinates, "blue",cloverleaTimesMonFri, cloverleaTimesFri, cloverleaTimesSat, cloverleaTimesSun)
var milson_bus = new Bus ("Milson", milsonStops, stopCoordinates, "blue",milsonTimesMonFri, milsonTimesFri, milsonTimesSat, milsonTimesSun)
var rhodes_bus = new Bus ("Rhodes", rhodesStops, stopCoordinates, "blue",rhodesTimesMonFri, rhodesTimesFri, rhodesTimesSat, rhodesTimesSun)
var roslyn_bus = new Bus ("rRoslyn", roslynStops, stopCoordinates, "blue",roslynTimesMonFri, roslynTimesFri, roslynTimesSat, roslynTimesSun)
var rangiora_bus = new Bus ("Rangiora", rangioraStops, stopCoordinates, "blue",rangioraTimesMonFri, rangioraTimesFri, rangioraTimesSat, rangioraTimesSun)
var brightwater_bus = new Bus ("Brightwater", brightwaterStops, stopCoordinates, "blue",brightwaterTimesMonFri, brightwaterTimesFri, brightwaterTimesSat, brightwaterTimesSun)
var fernlea_bus = new Bus ("Fernlea", fernleaStops, stopCoordinates, "blue",fernleaTimesMonFri, fernleaTimesFri, fernleaTimesSat, fernleaTimesSun)
var heights_bus = new Bus ("Heights", heightsStops, stopCoordinates, "blue",heightsTimesMonFri, heightsTimesFri, heightsTimesSat, heightsTimesSun)


var stops_dDOM = document.getElementById("stops_d")
var times_dDOM = document.getElementById("times_d")

var value = "";

function load_stops() {
    value = document.getElementById("route_d").value;
    value = value.toLowerCase() + "_bus";
    var content = "";
        //loop over array
        for (var i = 0; i < eval(value).stop.length; i++){
            content += '<option>' + eval(value).stop[i] + '</option>'
        }
        document.getElementById("stops_d").innerHTML = content;
}
function getTimes() {
    times_dDOM.innerHTML = '';
    var content = "";
    var x = stops_dDOM.selectedIndex;
    var day = get_day();

    for (var i = 0; i < day.length; i++){
        content += '<option>' + day[i][x] + '</option>'
    } 
    times_dDOM.innerHTML = content;
    createMarker(x);

}

function createMarker(index){
    //   This part functions simmilarly to get times, (as you can see the code is the same) based on stop selection this part converts the route to a useable object tag, and also formatts the Stop.
    value = document.getElementById("route_d").value;
    value = value.toLowerCase() + "_bus";
    name = document.getElementById("route_d").value.toLowerCase();
//    this "clears the board" and clears any previously established markers
        if (this.marker != null) {
            this.marker.setMap(null);
            this.marker = null;
        }
//    this creates the marker where the stop is, based on the route and stop selection from the DDM. 
        var stopPosition = eval(value).stopPositions[name][index];
        var stopName = eval(value).stop[index];
        this.marker = new google.maps.Marker({
            map: map,
            position: stopPosition, 
            title: stopName
        });
//        this zooms into the marker so you can see it
        map.setCenter(stopPosition);
        map.setZoom(15);
    }

//this function 
function get_day(){
    var d = new Date();
    var day = d.getDay();
    var x;
    
    switch(day) {
        case 0: 
            x = eval(value).sun_time;
            break;
        case 5:  x = eval(value).nom_time.push(eval(value).fri_time);
            break;
        case 6: x = eval(value).sat_time;
            break;
        default: x = eval(value).nom_time;
            break;       
    }
    return x
   
}

function get_arrival(){
    var d = new Date();
    var x = stops_dDOM.selectedIndex;
    var h = d.getHours();
    var m = d.getMinutes();
    h = checkTime(h)
    m = checkTime(m)
    var time = h + "." + m;
    console.log(time);
    var day = get_day();
    for (var i = 0; i < day.length; i++){
        
        if (time < day[i][x]) {
            var next = day[i][x];
            document.getElementById("arrival").innerHTML = next;
            console.log(next);
            return
        }

        
    }
  
}
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}


          //start jqery bullshit
//      $(document).ready(function(){
//          for(i = 1; i<20000; i++){
//          $('#header').hide(400).show(1100);}
//      });
//JQUERY STUFF
$(document).ready(function() {
   var square = {
        lat: -40.352,
        lng: 175.611
    }
   
   window.map = new google.maps.Map(document.getElementById('map'), {
       center: square,
       zoom:12
   });
});


///////RAINBOW THINGS, THIS CODE CHANGES THE COLOUR OF THE SITE BASED ON THINGS
function myFunction(favcolor) {
    var col = document.getElementById("favcolor").value;
    document.body.style.background = col;
};        




