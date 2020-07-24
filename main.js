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
    if (document.getElementById("submit-adopt")){
        document.getElementById("submit-adopt").addEventListener("click", function(e){
            e.preventDefault();
            document.getElementById("form").style.display = 'none';
            document.getElementById("thank-you").style.display = 'block';
        }, false);
    }
    
    // Accordion functionality
    let accTitle = document.getElementsByClassName("faq-heading");
		let accContent = document.getElementsByClassName("faq-content");
		let singleMode = true;
		
		for( let j=0; j<accContent.length; j++ ){
			let realHeight = accContent[j].offsetHeight;
			accContent[j].setAttribute("data-height", realHeight + "px");
			accContent[j].style.height = 0;
		}
		
		for( let i=0; i<accTitle.length; i++ ){
			accTitle[i].onclick = function(){
				let openedAcc = this.getAttribute('href').replace('#', '');

				if( this.classList.contains("active") ){
					this.classList.remove("active");
					document.getElementById(openedAcc).style.height = 0;
					
					return false;
				}
				
				if( singleMode ){						
					for(let k=0; k<accTitle.length; k++) {
						accTitle[k].classList.remove("active");
					}

					for(let j=0; j<accContent.length; j++) {
						accContent[j].style.height = 0;
					}
				}
				
				this.classList.add("active");
				
				document.getElementById(openedAcc).style.height = accContent[i].getAttribute("data-height");
				
				return false;
			}
		}
})();
