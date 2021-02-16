import React from 'react';
import {cleanup} from '@testing-library/react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

import Weather from './Weather.js';


afterEach(cleanup);

it('Weather renders correctly', () => {

    const div = document.createElement("div");
    ReactDOM.render(<Weather></Weather>, div)
})


it("Weather component matches snapshot", () => {

    const weather = renderer.create(<Weather></Weather>).toJSON();
    expect(weather).toMatchSnapshot();

})