import React from 'react';
import {cleanup} from '@testing-library/react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

import FavoriteWeather from './FavoriteWeather.js';


afterEach(cleanup);

it('FavoriteWeather renders correctly', () => {

    const div = document.createElement("div");
    ReactDOM.render(<FavoriteWeather></FavoriteWeather>, div)
})


it("Weather component matches snapshot", () => {

    const favoriteWeather = renderer.create(<FavoriteWeather></FavoriteWeather>).toJSON();
    expect(favoriteWeather).toMatchSnapshot();

})