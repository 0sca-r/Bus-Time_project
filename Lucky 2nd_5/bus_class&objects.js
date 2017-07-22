 //CLASS
class Bus {
    constructor (name, stop, colour, nom_time, fri_time, sat_time, sun_time )  {
        this.name = name;
        this.stop = stop;
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
        this.stops_dDOM = document.getElementById("stops_d");
        this.times_dDOM = document.getElementById("times_d");
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
    
    format_stop(){
        var content = '<ul>';
        //loop over array
        for (var i = 0; i < this.stop.length; i++){
            content += '<li class ="stop b">' + this.stop[i] + '</li>'
        }
        content += '</ul>'
        return content
    }

    
    format_times(){
        var content_HTML_string_times = "<ul>"
           for (var i = 0; i < this.fri_time.length; i++){
            content_HTML_string_times += '<li class ="fri_time">' + this.fri_time[i] + '</li>'
        }
        content_HTML_string_times += '</ul>'
        return content_HTML_string_times 
    }
    
}

var awapuni_bus = new Bus ("Awapuni", awapuniStops, "blue",awapuniTimesMonFri, awapuniTimesFri, awapuniTimesSat, awapuniTimesSun)
var rugby_bus = new Bus ("Rugby", rugbyStops, "blue",rugbyTimesMonFri, rugbyTimesFri, rugbyTimesSat, rugbyTimesSun)
var highbury_bus = new Bus ("Highbury", highburyStops, "blue",highburyTimesMonFri, highburyTimesFri, highburyTimesSat, highburyTimesSun)
var takaro_bus = new Bus ("Takaro", takaroStops, "blue",takaroTimesMonFri, takaroTimesFri, takaroTimesSat, takaroTimesSun)
var cloverlea_bus = new Bus ("Cloverlea", cloverleaStops, "blue",cloverleaTimesMonFri, cloverleaTimesFri, cloverleaTimesSat, cloverleaTimesSun)
var milson_bus = new Bus ("Milson", milsonStops, "blue",milsonTimesMonFri, milsonTimesFri, milsonTimesSat, milsonTimesSun)
var rhodes_bus = new Bus ("Rhodes", rhodesStops, "blue",rhodesTimesMonFri, rhodesTimesFri, rhodesTimesSat, rhodesTimesSun)
var roslyn_bus = new Bus ("rRoslyn", roslynStops, "blue",roslynTimesMonFri, roslynTimesFri, roslynTimesSat, roslynTimesSun)
var rangiora_bus = new Bus ("Rangiora", rangioraStops, "blue",rangioraTimesMonFri, rangioraTimesFri, rangioraTimesSat, rangioraTimesSun)
var brightwater_bus = new Bus ("Brightwater", brightwaterStops, "blue",brightwaterTimesMonFri, brightwaterTimesFri, brightwaterTimesSat, brightwaterTimesSun)
var fernlea_bus = new Bus ("Fernlea", fernleaStops, "blue",fernleaTimesMonFri, fernleaTimesFri, fernleaTimesSat, fernleaTimesSun)
var heights_bus = new Bus ("Heights", heightsStops, "blue",heightsTimesMonFri, heightsTimesFri, heightsTimesSat, heightsTimesSun)


var stops_dDOM = document.getElementById("stops_d")
var times_dDOM = document.getElementById("times_d")

var value = "";

function load_stops() {
    value = document.getElementById("route_d").value
    value = value.toLowerCase() + "_bus"
    console.log(value);
    var content = "";
        //loop over array
        for (var i = 0; i < eval(value).stop.length; i++){
            content += '<option>' + eval(value).stop[i] + '</option>'
        }
        document.getElementById("stops_d").innerHTML = content;
}
function getTimes() {
    times_dDOM.innerHTML = '';
    var x = stops_dDOM.selectedIndex;
    var content = "";
    for (var i = 0; i < eval(value).nom_time.length; i++){
        content += '<option>' + eval(value).nom_time[i][x] + '</option>'
    } 
    times_dDOM.innerHTML = content;
}



function get_day(){
    var d = new Date();
    var i = 0;
    var day = d.getDay();
    if (day <= 4){
      day = eval(value).nom_time;
    }
    else if (day == 5){
      eval(value).nom_time.push(eval(value).fri_time)
      day = eval(value).nom_time;
    }
     else if (day == 6){ 
      day = eval(value).sat_time;
    }
        else{
      day = eval(value).sun_time;
    }
    return day
}

function get_arrival(){
    var d = new Date();
    var x = stops_dDOM.selectedIndex;
    var h = d.getHours();
    var m = d.getMinutes();
    h = checkTime(h)
    m = checkTime(m)
    var time = h + "." + m;
    console.log(time)
    var day = get_day()
    for (var i = 0; i < day.length; i++){
        
        if (time < day[i][x]) {
            var next = day[i][x];
            console.log(next);
            arrivalDOM.innerHTML = next;
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




///////RAINBOW THINGS, THIS CODE CHANGES THE COLOUR OF THE SITE BASED ON THINGS
function myFunction(favcolor) {
    var col = document.getElementById("favcolor").value;
    document.body.style.background = col;
};        




