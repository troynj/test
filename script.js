async function displayLocation() {
  var tmObj = {
    setLocation: async function () {
      return await getLocation();
    },
  };
  var check = await tmObj.setLocation();
  console.log(check);
}

async function getLocation() {
  var city = "dallas";
  var apikey = "e5e80f690a1de46cd1c48d028667801f";
  var requestUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apikey}&units=imperial`;

  fetch(requestUrl)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      var coordinates = data.city.coord;
      console.log(coordinates);
      return { coordinates };
    });
}

displayLocation();
