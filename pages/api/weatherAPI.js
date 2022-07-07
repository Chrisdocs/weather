function API({ data }) {
  // render data...
}

export async function getServerSideProps() {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${API_KEY}`
  );
  const data = await res
    .json()
    .then((res) => {
      return { props: { data } };
    })
    .catch((err) => {
      console.log(err);
    });
}

export default API;
