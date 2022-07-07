export async function getServerSideProp(context){
	const city = context;
	const API_KEY = '9dc28b8d1e5722385bf7444571e7bbcd';

	const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${API_KEY}`);
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