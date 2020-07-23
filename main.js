var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var apiResult = JSON.parse(this.responseText);
        console.log(apiResult);

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

$("#hamburger").addEventListener("click", function() {
    var x = document.getElementById("#mobile-links");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
});