// use getServerSideProp to get data from forecast API
export async function getServerSideProp(lat, lon){
	const LAT = lat;
	const LON = lon;
	const API_KEY = process.env.API_KEY;

	console.log(LAT, LON)

	if (LAT !== null && LON !== null) {
	const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${LAT}&lon=${LON}&appid=${API_KEY}&units=imperial`);
	// const response = await fetch(`api.openweathermap.org/data/2.5/forecast/daily?lat=${LAT}&lon=${LON}&cnt=${7}&appid=${API_KEY}`)
	const data = await response.json();
	
	if (!data) {
		return {
			notFound: true,
		}
	}
	return {
		notFound: false,
		data: data,
	}
}
}
