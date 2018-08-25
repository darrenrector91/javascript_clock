var lat;
var long;
var api = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&APPID=749da4002db4023d33f77723c728f9ec"



    function startTime() {
        var d = new Date();
        
        var month = ['January','February','March','April','May','June','July','August','September','October','November','December'];
        var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                
        var dateString = (days[d.getDay()] + " " 
                        + (month[d.getMonth()]) + " " 
                        + d.getDate()+"," + " " + " " 
                        + d.getFullYear());var d = new Date();

        var h = d.getHours();
        var amPm = h >= 12 ? 'PM' : 'AM';
        h = h % 12;
        h = h ? h : 12;
        var m = d.getMinutes();
        var s = d.getSeconds();
        m = checkTime(m);
        s = checkTime(s);

        document.getElementById('time').innerHTML =
        h + ":" + m + ":" + s + amPm;

        var t = setTimeout(startTime, 500);

        document.getElementById("date").innerHTML = 
        dateString;
    }

    function checkTime(i) {
        if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
        return i;
    }
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else { 
            document.getElementById("coords").innerHTML = 
            "Geolocation is not supported by this browser.";
        }
    }

    function showPosition(position) {

        let lat = (position.coords.latitude).toString();
        let long = (position.coords.longitude).toString();
        let coordinates = (lat + "," + " " + long);
        console.log(coordinates);
        // console.log(lat + "," + " " + long);
        
        document.getElementById("coords").innerHTML = 
            "Latitude: " + lat + "<br>Longitude: " + long;

        return coordinates;
    }

