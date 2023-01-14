async function displayLocation() {
    var tmObj = {
      // requestUrl: `https://app.ticketmaster.com`,
      // apiKey: [`9XshdGRWAPA44uov6ogAAGLaYkru76D3`, `apikey=${this[0]}`],
      // subGenreId: ["KZazBEonSMnZfZ7vFJA", `subGenreId=${this[0]}`],
      // searchBy: ['events', `/discovery/v2/${this[0]}/`],
      // keyword: ['',`keyword=${this[0]}`],
      // startDateTime: ['',`&startDateTime=${this[0]}`],
      // endDateTime: ['', `endDateTime=${this[0]}`],
      setLocation: async function() {
  
       return await getLocation()
        
        //return `latlong=${coord.lat}, ${coord.lon}`
      },
      setReqUrl: function () {
        var userSelection = getSelection()
        
        userSelection.forEach((el) =>{
          requestUrl.concat(this.el[1])
        })
    
        return requestUrl;
      }
    };

    var check = await tmObj.setLocation()
    console.log(check)
}

async function getLocation() {
    var coord = {}
    var city = getCity()
    var apikey = "e5e80f690a1de46cd1c48d028667801f";
    var requestUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apikey}&units=imperial`;
  
    fetch(requestUrl)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        var coordinates = data.city.coord;
        console.log(coordinates);
        return { coordinates }
     
      });
  
  }
  
  function getCity() { return "dallas"}
  displayLocation()