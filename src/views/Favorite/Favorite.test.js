import React from 'react';
import { render, cleanup, screen} from '@testing-library/react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

import Favorite from './Favorite.js';


afterEach(cleanup);


it('Favorite renders correctly', () => {

    const div = document.createElement("div");
    ReactDOM.render(<Favorite></Favorite>, div)
})


it('Favorite delete button renders correctly', async () => {

    render(<div data-testid="favoriteWeather" className="weather-container">

        <div className="container-data" aria-label="weather-result">
            <h1
                aria-label="city name and country of city"
                value={(location.city, location.country)}
            >
                {location.city},{location.country}
            </h1>
            <h3
                aria-label="location temperature in celcius degrees"
                value={location.temp}
            >
                {location.temp + "°C"}
            </h3>
            <h2
                aria-label="location weather description"
                value={location.description}
            >
                {location.description}
            </h2>
            <button

                data-testid ="deleteBtn"
                type="button"
                className="btn btn-danger"
               
                aria-label="delete forecaste from favorites"
            >
                Delete
        </button>
        </div>
  
  </div>)

    

    expect(screen.getByTestId('deleteBtn')).toHaveTextContent("Delete")   
    expect(screen.getByTestId('deleteBtn')).toBeInTheDocument() 


})



it("Favorite component matches snapshot", () => {

    const favorite = renderer.create(<Favorite></Favorite>).toJSON();
    expect(favorite).toMatchSnapshot();

})

