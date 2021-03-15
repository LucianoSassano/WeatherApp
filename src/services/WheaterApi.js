
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

export {getLocationWeather};