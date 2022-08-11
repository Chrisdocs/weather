import react from "react";
import { useState } from "react";
import cities from "../lib/city.list.json";
import Link from "next/link";
import styles from "../styles/Home.module.scss";

export default function SearchBox() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const onChange = (e) => {
    const { value } = e.target;
    setQuery(value);

    let matchingCities = [];

    if (value.length > 3) {
      for (let city of cities) {
        if (matchingCities.length >= 7) {
          break;
        }

        const match = city.name.toLowerCase().startsWith(value.toLowerCase());

        if (match) {
          const cityData = {
            ...city,
            slug: `${city.name.toLowerCase().replace(/ /g, "-")}-${city.id}`,
          };
          matchingCities.push(cityData);
        }
      }
    }

    return setResults(matchingCities);
  };

	const onCitySelect = (e) => {
		setQuery("");
	};

  return (
    <div className={styles.searchContainer}>
      <div className={styles.titleDiv}>
        <h2>WeatherGet</h2>
      </div>
			<div className={styles.formContainer}>
				<input type="text" value={query} onChange={onChange} className={styles.input}/>
				{query.length > 3 && (
					<ul className={styles.citiesContainer}>
						{results.length > 0 ? (
							results.map((city) => (
								<li key={city.slug} className={styles.citiesList}>
									<Link href={`/location/${city.slug}`}>
										<a onClick={onCitySelect}>
											{city.name}
											{city.state ? `, ${city.state} ` : ""}
											<span> {city.country}</span>
										</a>
									</Link>
								</li>
							))
						) : (
							<li>no results found</li>
						)}
					</ul>
				)}
			</div>
    </div>
  );
}
// import React from "react";
// import { useState, useEffect } from "react";
// import styles from "../styles/Home.module.scss";
// import WeatherCard from "./WeatherCard";
// import Graph from "./Graph";
// import cities from "../lib/city.list.json";

// export async function getServerSideProps(context) {
//   const city = getCity(context.params.city);

//   console.log(city);

//   if (!city) {
//     return {
//       notFound: true,
//     };
//   }

//   const res = await fetch(
//     `https://api.openweathermap.org/data/2.5/onecall?lat=${city.coord.lat}&lon=${city.coord.lon}&units=imperial&appid=${process.env.API_KEY}&exclude=minutely`
//   );

//   const data = await res.json();

//   if (!data) {
//     return {
//       notFound: true,
//     };
//   }

//   const slug = context.params.city;

//   return {
//     props: {
//       slug: slug,
//       data: data,
//     },
//   };
// }

// const getCity = (param) => {
//   const cityParam = param.trim();
//   const splitCity = cityParam.split("-");
//   const id = splitCity[splitCity.length - 1];

//   if (!id) {
//     return null;
//   }

//   const city = cities.find((city) => city.id.toString() == id);

//   if (city) {
//     return city;
//   } else {
//     return null;
//   }
// };

// export default function Search({ slug, data }) {
//   const [query, setQuery] = useState("");
//   const [results, setResults] = useState([]);
// 	const [userSearch, setUserSearch] = useState(false);

// 	console.log(slug, data)

//   const onChange = (e) => {
//     const { value } = e.target;
//     setQuery(value);

//     let matchingCities = [];

//     if (value.length > 3) {
//       for (let city of cities) {
//         if (matchingCities.length >= 5) {
//           break;
//         }

//         const match = city.name.toLowerCase().startsWith(value.toLowerCase());

//         if (match) {
//           const cityData = {
//             ...city,
//             slug: `${city.name.toLowerCase().replace(/ /g, "-")}-${city.id}`,
//           };
//           matchingCities.push(cityData);
//         }
//       }
//     }

//     return setResults(matchingCities);
//   };

//   function handleSubmit(e) {
// 		console.log('submit')
// 		setUserSearch(true);
//   }

//   return (
//     <div className="search">
//         <input type="text" value={query} onChange={onChange} />
//         {query.length > 3 && (
//           <ul>
//             {results.length > 0 ? (
//               results.map((city) => (
//                 <li key={city.slug}>
//                   <button
// 										type='submit'
//                     onClick={handleSubmit}
//                     value={`${city.slug}`}
//                   >
//                     {city.name}
//                     {city.state ? `, ${city.state}` : ""}
//                     <span> {city.country}</span>
//                   </button>
//                 </li>
//               ))
//             ) : (
//               <li>no results found</li>
//             )}
//           </ul>
//         )}
// 				{userSearch === true ? (
// 					<div>
// 						Searched
// 					</div>
// 				) : (
// 					<div>
// 						<p>Please enter a valid search.</p>
// 					</div>
// 				)}
//     </div>
//   );
// }
