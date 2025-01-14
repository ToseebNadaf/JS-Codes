const URL = "";

// fetch(URL).then((response) => {
//   return response.json();
// }).then((data) => console.log(data))

const response = async () => {
  const response = await fetch(URL);
  const data = response.json();
  // console.log(data)
  return data
}

response().then(value => console.log(value)).catch((error) => console.log("Error"))