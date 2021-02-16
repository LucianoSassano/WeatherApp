import React from 'react';
import { cleanup } from '@testing-library/react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

import Home from './Home.js';


afterEach(cleanup);


it('Home renders correctly', () => {

    const div = document.createElement("div");
    ReactDOM.render(<Home></Home>, div)
})




it("Home component matches snapshot", () => {

    const home = renderer.create(<Home></Home>).toJSON();
    expect(home).toMatchSnapshot();

})

