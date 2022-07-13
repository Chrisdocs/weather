
export async function getServerSidePropG(lat, lon){
	const LAT = lat;
	const LON = lon;

	const response = await fetch(`https://api.weather.gov/points/${LAT},${LON}`)
	const data = await response.json();

	if (!data) {
		return {
			notFound: true,
		}
	} else {
		return {
			notFound: false,
			data: data,
		}
	}
	
}

export async function getServerSidePropGptB(x, y){
	const gridX = x;
	const gridY = y;

	const response = await fetch(`https://api.weather.gov/gridpoints/EWX/${gridX},${gridY}/forecast`);
	const data = await response.json();

	if (!data) {
		return {
			notFound: true,
		}
	} else {
		return {
			notFound: false,
			data: data,
		}
	}
}