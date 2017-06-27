function myFunction(favcolor) {
    var col = document.getElementById("favcolor").value;
    document.body.style.background = col;
};


function bus_selection{
//Cloverlea Object
var cloverleaBus = {
    busStops: ["MST", "Featherston", "Tremaine", "Benmore", "Bennett", "Aspiring", "Fairs Rd", "Ruahine", "MST"],
};

//Awapuni Object
var awapuniBus = {
    busStops: ["MST", "Park Rd", "College St", "Pitama Rd", "Maxwells Line", "College Street", "Rugby Street", "Ferguson St", "MST"]
}

//get stops dropdown element from DOM
var busElement = document.getElementById("bus");
var stopsElement = document.getElementById("stops");

//function triggered onchange (from html)
function getStops() {
    //clear previous selection
    stopsElement.innerHTML = '';
    //get current bus selection
    var  x = busElement.options[busElement.selectedIndex].value;
    
    // enter in bus stops how ever many there are stops (a loop will do this)
    for (var i = 0; i < eval(x).busStops.length; i++) {
        stopsElement.insertAdjacentHTML('beforeend', '<option>'+eval(x).busStops[i]+'</option>')
    }
}
//on load
getStops()
};




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
          

