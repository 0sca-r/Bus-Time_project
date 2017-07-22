function myFunction(favcolor) {
    var col = document.getElementById("favcolor").value;
    document.body.style.background = col;
};





//get stops dropdown element from DOM
var busElement = document.getElementById("route_d");
var stopsElement = document.getElementById("stops_d");
var timesElement = document.getElementById("times_d");

var busSelected = '';

//function triggered onchange (from html)
function getStops() {
    alert("testing  ")
    //clear previous selection
    stopsElement.innerHTML = '';
    //get current bus selection
    busSelected = busElement.options[busElement.selectedIndex].value;
    
    // enter in bus stops how ever many there are stops (a loop will do this)
    for (var i = 0; i < eval(busSelected).busStops.length; i++) {
        stopsElement.insertAdjacentHTML('beforeend', '<option>'+eval(busSelected).busStops[i]+'</option>')
    }
}

    
    
//on load
getStops()
getTimes()




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
          

