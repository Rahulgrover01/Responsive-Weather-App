const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a66a27911cmsh01c0eae735444cap1021fcjsn35585edd557e',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
	.then(response => response.json())
	.then((response) => {
        console.log(response)
        // cloud_pct.innerHTML= response.cloud_pct
        feels_like.innerHTML= response.feels_like
        humidity.innerHTML= response.humidity
        max_temp.innerHTML= response.max_temp
        min_temp.innerHTML= response.min_temp
        sunrise.innerHTML= response.sunrise
        sunset.innerHTML= response.sunset
        temp.innerHTML= response.temp
        wind_degrees.innerHTML= response.wind_degrees
    })
	.catch(err => console.error(err));