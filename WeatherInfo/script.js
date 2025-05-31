const apiKey="d68c2d72767fb1876b8682a61f2ef9da";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");
async function checkWeather(city) {
	const response=await fetch(apiUrl + city + `&appid=${apiKey}`);
	if(response.status=="404"){
		document.querySelector(".error").style.display="block";
		document.querySelector(".weather").style.display="none";
	}
	else{
	var data=await response.json();
	console.log(data);
	document.querySelector(".city").innerHTML=data.name;
	document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C";
	document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
	document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";
	
	if(data.weather[0].main=="clouds"){
		weatherIcon.src="images/clouds.png";
	}
	else if(data.weather[0].main=="clear"){
		weatherIcon.src="images/clear.png";
	}
	else if(data.weather[0].main=="drizzle"){
		weatherIcon.src="images/drizzle.png";
	}
	else if(data.weather[0].main=="humidity"){
		weatherIcon.src="images/humidity.png";
	}
	else if(data.weather[0].main=="mist"){
		weatherIcon.src="images/mist.png";
	}
	else if(data.weather[0].main=="snow"){
		weatherIcon.src="images/snow.png";
	}

	document.querySelector(".weather").style.display="block";

	 }

}
searchBtn.addEventListener("click", ()=>{

	checkWeather(searchBox.value);
})


