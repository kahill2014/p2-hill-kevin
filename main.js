(function(){
    // Display slide-out ad after 3 seconds
    setTimeout(function(){
        document.getElementById("slide-ad").style.width = '20rem';
    }, 3000);

    // API to retrieve weather
    if (document.getElementById("weather-api")){
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var apiResult = JSON.parse(this.responseText);

                // Add city
                var cityNode = document.createTextNode(apiResult.name);
                document.getElementById("city").appendChild(cityNode);

                // Add weather
                var weatherNode = document.createTextNode(apiResult.weather[0].main);
                document.getElementById("weather").appendChild(weatherNode);
                
                // Add temperature
                var iconNode = "http://openweathermap.org/img/w/" + apiResult.weather[0].icon + ".png";
                document.getElementById("icon").src = iconNode;
            }
        };
        xmlhttp.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=53190,us&appid=6efff70fe1477748e31c17d1c504635f', true);
        xmlhttp.send();
    }
    
    // Open mobile menu when hamburger icon is clicked
    document.getElementById("hamburger").addEventListener("click", function() {
        var x = document.getElementById("mobile");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    }, false);

    // Hide slide-out ad when "submit" is clicked
    document.getElementById("submit-ad").addEventListener("click", function(){
        document.getElementById("slide-content").style.backgroundColor = '#8cc860';
        setTimeout(function(){
            document.getElementById("slide-ad").style.width = '0';
        }, 500)
    }, false);

    // Display thank you message after submitting adoption form
    document.getElementById("submit-adopt").addEventListener("click", function(e){
        e.preventDefault();
        document.getElementById("form").style.display = 'none';
        document.getElementById("thank-you").style.display = 'block';
    }, false);
})();
