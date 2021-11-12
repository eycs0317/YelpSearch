import React, { useState} from 'react'
import './App.css';
import Header from './components/Header'
import SearchBar from './components/SearchBar'
// import Display from './components/Display'
// import RestaurantDetail from './components/RestaurantDetail'
// import { Routes, Route, Link } from "react-router-dom";


function App() {

  function refreshPage() {
    window.location.reload(false);
  }


  return (
    <div className="App">
    <Header refreshPage={refreshPage}/>
    <SearchBar />
    <div id="map" className="map"></div>
    {/* <Routes>
        <Route path="/display" element={<Display />} />
        <Route path="/RestaurantDetail" element={<RestaurantDetail />} />
    </Routes> */}
    </div>
  );
}

export default App;
