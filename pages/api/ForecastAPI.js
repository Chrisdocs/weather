// use getServerSideProp to get data from forecast API
export async function getServerSidePropF(lat, lon){
	const LAT = lat;
	const LON = lon;
	const API_KEY = process.env.API_KEY;

	const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${LAT}&lon=${LON}&appid=${API_KEY}&units=imperial`);
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
