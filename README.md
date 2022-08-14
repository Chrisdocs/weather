This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

---
## Welcome to my weather app - WeatherGet!

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)	![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)![Chart.js](https://img.shields.io/badge/chart.js-F5788D.svg?style=for-the-badge&logo=chart.js&logoColor=white)	![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)

Thanks to 

![OpenWeatherAPI](https://img.shields.io/badge/-OpenWeather-orange)

for supplying the API!

and Matt The Dev's Youtube video which taught me a lot!

---
## About

This is a fairly straight forward weather app which pulls its data from OpenWeather.  By searching using a city name a user can see weather data for the queried city like; temperature, wind speeds, cloud cover and more.

It will also render a line graph to display the change in temperature over a 24 hour period.

## How It Works

The data for both the current and forecast information are fetched in two different functions which is then passed into the search component.  Using async functions the weather API is called first where the latitude and longitude are passed into the forecast API call to gather proper data matching the query.

That data is then assigned to corresponding variables which is used to render the information on the DOM.

By use of conditional ternary operators and error catching the user is prompted when a city is either entered incorrectly or non existent.

some of the text which is generated uses ternary operators to manipulate the way in which the data is displayed, like color coding based on temperature and wind speed.  or converting text to plural forms to match the sentence structure.

## Future Additions

There are a couple features I would like to add in the future.

- 5 day forecast.
- Cookie based or Geo based location "use my location" feature.
- Rain Chance information.
- using an API for the city list instead of a large json file.

---

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Thank you!