import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';


import Navbar from './Navbar.js';

afterEach(cleanup);

it('Navbar renders correctly', () => {

    const div = document.createElement("div");
    ReactDOM.render(<Navbar></Navbar>, div)
})


it('Home button renders correctly', () => {

    const { getByTestId } = render(<Navbar></Navbar>)
    expect(getByTestId('navbarTestId')).toHaveTextContent('Home')
})

it('Favorites button renders correctly', () => {

    const { getByTestId } = render(<Navbar></Navbar>)
    expect(getByTestId('navbarTestId')).toHaveTextContent('Favorites')
})


it('Dual Location Search button renders correctly', () => {

    const { getByTestId } = render(<Navbar></Navbar>)
    expect(getByTestId('navbarTestId')).toHaveTextContent('Dual Location Search')
})

it('Dual Location Search button renders correctly', () => {

    const { getByTestId } = render(<Navbar></Navbar>)
    expect(getByTestId('navbarTestId')).toHaveTextContent('Search')
})

it('Dual Location Search Toggle Button click', () => {

    render(

        <div className="custom-control custom-switch">
            <input

                data-testid="dualSearchBtn"
                type="checkbox"
                className="custom-control-input"
                id="customSwitch1"
                aria-label="dual location search toggle button"
            />
            <label className="custom-control-label" htmlFor="customSwitch1">
                Dual Location Search
              </label>
        </div>

    )

    userEvent.click(screen.getByTestId('dualSearchBtn'))
    expect(screen.getByTestId('dualSearchBtn')).toBeChecked()

})



it("Navbar component matches snapshot", () => {

    const navbar = renderer.create(<Navbar></Navbar>).toJSON();
    expect(navbar).toMatchSnapshot();

})


