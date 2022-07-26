// export async function getServerSidePropW(context){
// 	const city = context;
// 	const API_KEY = process.env.API_KEY;

// 	const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${API_KEY}`);
// 	const data = await response.json();
	
// 	if (!data) {
// 		return {
// 			notFound: true,
// 		}
// 	} else {
// 		return {
// 			notFound: false,
// 			data: data,
// 		}
// 	}
// }