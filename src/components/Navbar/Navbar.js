import React, { useState } from "react";
import "./Navbar.css";

const Navbar = (props) => {
  const [searchMode, setSerchMode] = useState(false);

  const handleSerchMode = () => {
    let mode = !searchMode;
    setSerchMode(mode);
  };

  return (
    <>
      <div className="navbar-container">
        <nav
          data-testid="navbarTestId"
          className="navbar fixed-top navbar-expand-lg navbar-light bg-light"
          aria-label="navbar"
        >
          <div className="container-fluid" id="navbarSupportedContent">
            <div>
              <ul className="navbar-nav mr-auto">
                <li className="nav-item " aria-label="Home button">
                  <a className="nav-link" href="./">
                    Home
                  </a>
                </li>
                <li className="nav-item" aria-label="Favorites button">
                  <a className="nav-link " href="./favorites">
                    Favorites
                  </a>
                </li>
              </ul>
            </div>

            <div className="search-form">
              <div id="customSwitchContainer1" className="custom-control custom-switch custom-switch-xl">
                
                <input
                  onClick={handleSerchMode}
                  type="checkbox"
                  className="custom-control-input"
                  id="customSwitch1"
                  aria-label="dual location search toggle button"
                />
                
                <label
                  data-testid="dualSearchBtn"
                  className="custom-control-label"
                  htmlFor="customSwitch1"
                >
                  Dual Location Search
                </label>
              </div>
              {searchMode ? (
                <div className="dual-search-form">
                  <form className="form-inline my-2 my-lg-0">
                    <input
                      onChange={props.onChangeSingle}
                      className="form-control mr-sm-6"
                      type="search"
                      placeholder="Search a location"
                      aria-label="Enter first location"
                      onKeyPress={props.handleDualEnter}
                    />
                    <input
                      onChange={props.onChangeDual}
                      className="form-control mr-sm-6"
                      type="search"
                      placeholder="Search a location"
                      aria-label="Enter second location"
                      onKeyPress={props.handleDualEnter}
                    />
                    <button
                      className="btn btn-outline-success my-2 my-sm-0"
                      type="button"
                      onClick={props.handleDualSubmit}
                      aria-label="search"
                    >
                      Search
                    </button>
                  </form>
                </div>
              ) : (
                <div className="single-search-container">
                  <form className="form-inline my-2 my-lg-0">
                    <input
                      onChange={props.onChangeSingle}
                      onKeyPress={props.handleEnter}
                      className="form-control mr-sm-2"
                      type="search"
                      placeholder="Search a location"
                      aria-label="Search a location"
                    />
                    <button
                      className="btn btn-outline-success my-2 my-sm-0"
                      type="button"
                      onClick={props.handleSearchSubmit}
                      aria-label="search"
                    >
                      Search
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
