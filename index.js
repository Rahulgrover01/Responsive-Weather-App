const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a66a27911cmsh01c0eae735444cap1021fcjsn35585edd557e',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));