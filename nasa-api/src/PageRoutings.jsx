import React from 'react';
import {BrowserRouter,Route,Routes} from "react-router-dom"; 
import APOD from './Pages/APOD';
import NavBar from './Components/NavBar';
import SingleAPOD from './Components/SingleAPOD';
import SearchResults from './Components/SearchResults';

const PageRoutings = () => {

  const today = new Date().toISOString().slice(0, 10)

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<SingleAPOD date={today} />} />
        <Route path="/apod" element={<APOD/>}/>
        <Route path="/apod/:date" element={<SingleAPOD/>}/>
        <Route path="/apod/:startDate/:endDate" element={<SearchResults/>}/>
        <Route path="/apod/:startDate" element={<SingleAPOD/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default PageRoutings;
