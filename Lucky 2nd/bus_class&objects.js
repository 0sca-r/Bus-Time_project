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
    }
            //    FUNCTIONS
    addContent() {
    this.nameDOM.innerHTML = this.name; 
    this.stopDOM.innerHTML = this.format_stop();
    this.colourDOM.innerHTML = this.colour;
//        this.nom_time.innerHTML = this.nom_time;
//        this.fri_time.innerHTML = this.fri_time;
//        this.sat_time.innerHTML = this.sat_time;
//        this.sun_time.innerHTML = this.sun_time;
    }
    
    format_stop(){
        var content = '<ul>';
        //loop over array
        for (var i = 0; i < this.stop.length; i++){
            content += '<li b class ="stop">' + this.stop[i] + '</li b>'
        }
        content += '</ul>'
        return content
    }
//    reason the List is crap is you used a list for the nav bar so add another condidtional in the stylesheet
                
}

var awapuni_bus = new Bus ("Awapuni", awapuniStops, "blue",awapuniTimesMonFri, awapuniTimesFri, awapuniTimesSat, awapuniTimesSun)