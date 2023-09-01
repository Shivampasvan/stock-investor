import React from 'react';
import {Routes,Route} from "react-router-dom";
import Homepage from '../Pages/Homepage/Homepage';
import Home from '../Pages/Home';
import Portfolio from '../Pages/Portfolio';
import Aboutus from '../Pages/Aboutus';
import Contactus from '../Pages/Contactus';


const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<Contactus />} />
    </Routes>
  )
}

export default AllRoutes