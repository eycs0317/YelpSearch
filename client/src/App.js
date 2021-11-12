import React from 'react'
import './App.css';
import Header from './components/Header'
import SearchBar from './components/SearchBar'
// import Display from './components/Display'
// import RestaurantDetail from './components/RestaurantDetail'
// import { Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
    <Header />
    <SearchBar />
    {/* <Routes>
        <Route path="/display" element={<Display />} />
        <Route path="/RestaurantDetail" element={<RestaurantDetail />} />
    </Routes> */}
    </div>
  );
}

export default App;
