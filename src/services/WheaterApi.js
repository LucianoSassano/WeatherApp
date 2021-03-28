
async function getLocationWeather(search) {

    const url = `${process.env.REACT_APP_OPEN_WEATHER_URL}/data/2.5/weather?q=${search}&units=metric&appid=${process.env.REACT_APP_API_KEY}`;

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

    const url = `${process.env.REACT_APP_OPEN_WEATHER_URL}/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly&appid=${process.env.REACT_APP_API_KEY}&units=metric`;

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

    const url = `${process.env.REACT_APP_OPEN_WEATHER_URL}/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_API_KEY}&units=metric`;

    const response = await fetch(url);
    const jsonResponse = response.json();
    const results = await jsonResponse;
    

    return results;

  } catch (error) {
    console.log(error);
  }
}

export { getLocationWeather, getLocationWeatherWeekly, getLocationWeatherFiveDays };
