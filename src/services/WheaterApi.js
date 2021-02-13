async function getLocationWeather(search) {

    const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=e0587d27e5b47cb13ba1b093e60738f7`;

    try{

        const response = await fetch(url);
        const jsonResponse = response.json();
        const results = await jsonResponse;
        
        return results;

    }catch(error){
        console.log(error);
    }

}

export {getLocationWeather};