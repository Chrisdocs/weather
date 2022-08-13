import React from "react";
import cities from "../../lib/city.list.json";
import SearchBox from "../../components/search";
import WeatherCard from "../../components/WeatherCard";

export async function getServerSideProps(context) {
	const city = getCity(context.params.city);

	console.log(city);

	if (!city) {
		return {
			notFound: true,
		};
	}

	const res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${city.coord.lat}&lon=${city.coord.lon}&units=imperial&appid=${process.env.API_KEY}&exclude=minutely`);

	const data = await res.json();

	if (!data) {
		return {
			notFound: true,
		}
	}

  const slug = context.params.city;

  return {
    props: {
      slug: slug,
			data: data,
			city: city,
    },
  };
}

const getCity = param => {
	const cityParam = param.trim();
	const splitCity = cityParam.split("-");
	const id = splitCity[splitCity.length - 1];

	console.log("cityParam: ", cityParam);
	console.log("splitCity: ", splitCity);
	console.log("id: ", id);

	if(!id) {
		return null;
	}

	const city = cities.find(city => city.id.toString() == id);

	if (city) {
		return city;
	} else {
		return null;
	}
}

export default function City({ slug, data, city }) {

  return (
    <div>
			<SearchBox />
			<WeatherCard data={data} slug={slug} city={city}/>
    </div>
  );
}
