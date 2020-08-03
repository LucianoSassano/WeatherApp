import React, { useState } from "react";
import "../Navbar/Navbar.css";

const Navbar = (props) => {
  const [searchMode, setSerchMode] = useState(false);

  const handleSerchMode = () => {
    let mode = !searchMode;
    setSerchMode(mode);
  };

  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div  id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item ">
              <a className="nav-link" href="./">
                Home
              </a>
            </li>
            <a className="nav-link " href="./favorites">
              Favorites
            </a>
          </ul>
          <div className="searchForm">
            <div className="custom-control custom-switch">
              <input
                onClick={handleSerchMode}
                type="checkbox"
                className="custom-control-input"
                id="customSwitch1"
              />
              <label className="custom-control-label" htmlFor="customSwitch1">
                Dual Location Serch
              </label>
            </div>
            {searchMode ? (
              <form className="form-inline my-2 my-lg-0">
                <input
                  onChange={props.onChangeSingle}
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search a location"
                  aria-label="Search a location"
                  onKeyPress={props.handleDualEnter}
                />
                <input
                  onChange={props.onChangeDual}
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search a location"
                  aria-label="Search a location"
                  onKeyPress={props.handleDualEnter}
                />
                <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  type="button"
                  onClick={props.handleDualSubmit}
                >
                  Search
                </button>
              </form>
            ) : (
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
                >
                  Search
                </button>
              </form>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
