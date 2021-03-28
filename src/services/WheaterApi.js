
async function getLocationWeather(search) {
 

  const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=e0587d27e5b47cb13ba1b093e60738f7`;


  try{

      const response = await fetch(url);
    
      let results;

      if(response.status == 200){

          const jsonResponse = response.json();
          
          results = await jsonResponse;
          

      }else{
          
          alert('Error : Location not found');
          results = [];
      }

     
      return results;

  }catch(error){
      console.log(error);
  }

}

async function getLocationWeatherWeekly(search) {
  try {
    const locationInfo = await getLocationWeather(search);

    const latitude = locationInfo.coord.lat;
    const longitude = locationInfo.coord.lon;

    const url = `http://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly&appid=e0587d27e5b47cb13ba1b093e60738f7&units=metric`;

    const response = await fetch(url);
    const jsonResponse = response.json();
    const results = await jsonResponse;
    

    return results;

  } catch (error) {
    console.log(error);
  }
}



async function getLocationWeatherFiveDays(search) {
  try {
    const locationInfo = await getLocationWeather(search);

    const latitude = locationInfo.coord.lat;
    const longitude = locationInfo.coord.lon;

    const url = `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=e0587d27e5b47cb13ba1b093e60738f7&units=metric`;

    const response = await fetch(url);
    const jsonResponse = response.json();
    const results = await jsonResponse;
    

    return results;

  } catch (error) {
    console.log(error);
  }
}

export { getLocationWeather, getLocationWeatherWeekly, getLocationWeatherFiveDays };
