
    const apiKey = "c9359a1f61b87be725ec681ef80cd323";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    const searchbox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    const weathericon = document.querySelector(".weather-icon")
    searchbox.addEventListener("keypress",(event) => {
        if (event.key === "Enter"){
            event.preventDefault()
            searchBtn.click()
        }

    })

    
    async function checkweather(city){ /* async mtlb wait karna kitna time  */
        const response = await fetch(apiUrl + city +  `&appid=${apiKey}`); 
        
        if(response.status == 404){
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
        }
        else{
            
            var data = await response.json();
            
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round (data.main.temp) + "°C"; /* math . round will give in integer form */
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";
            
            if(data.weather[0].main == "Clouds"){
                weathericon.src = "images/clouds.png";
            }
            else if(data.weather[0].main == "Clear"){
                weathericon.src = "images/clear.png";
            }
            else if(data.weather[0].main == "Rain"){
                weathericon.src = "images/rain.png";
            }
            else if(data.weather[0].main == "Drizzle"){
                weathericon.src = "images/drizzle.png";
                
            }
            else if(data.weather[0].main == "Mist"){
                weathericon.src = "images/mist.png";
            }
            document.querySelector(".weather").style.display = "block"; /* we have hidden the content in css so to open the content when search the city name */
            
            document.querySelector(".error").style.display = "none"; 

    }
        }  
    searchBtn.addEventListener("click", () =>{
        checkweather(searchbox.value); /* searchbox. value will give the city name and will pass in the function - checkweather */
    })

    checkweather();
