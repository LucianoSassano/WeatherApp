import React, { useState, useEffect } from "react";
import "../Home/Home.css";
import Navbar from "../../components/Navbar";

const Home = () => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <>
       <Navbar/>
      <div className="Home-container">
        
      </div>
    </>
  );
};

export default Home;
