import React from "react";
import "../Navbar/Navbar.css";

const Navbar = (props) => {
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
            <form className="form-inline my-2 my-lg-0">
              <input
                onChange={props.onChange}
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
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
