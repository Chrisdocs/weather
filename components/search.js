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