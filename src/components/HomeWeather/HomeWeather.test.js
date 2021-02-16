import React from 'react';
import { cleanup } from '@testing-library/react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

import HomeWeather from './HomeWeather.js';


afterEach(cleanup);


it('HomeWeather renders correctly', () => {

    const div = document.createElement("div");
    ReactDOM.render(<HomeWeather></HomeWeather>, div)
})




it("HomeWeather component matches snapshot", () => {

    const homeWeather = renderer.create(<HomeWeather></HomeWeather>).toJSON();
    expect(homeWeather).toMatchSnapshot();

})

