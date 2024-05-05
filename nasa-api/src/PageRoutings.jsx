import React, { useEffect, useState } from 'react';
import {BrowserRouter,Route,Routes} from "react-router-dom"; 
import APOD from './Pages/APOD';
import NavBar from './Components/NavBar';
import SingleAPOD from './Components/SingleAPOD';
import SearchResults from './Components/SearchResults';
import MediaSearch from './Pages/MediaSearch';
import Home from './Pages/Home';
import Login from './Login';
import Signup from './Signup';
import {auth} from './FireBase';

const PageRoutings = () => {

  const [user,setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const today = new Date().toISOString().slice(0, 10)

  return (
    <BrowserRouter>
      <NavBar user={user}/>
      <Routes>
        {/* <Route path="/" element={<SingleAPOD date={today} />} /> */}
        <Route path='/' element={<Home/>}/>
        <Route path="/apod" element={<APOD/>}/>
        <Route path="/apod/:date" element={<SingleAPOD/>}/>
        <Route path="/apod/:startDate/:endDate" element={<SearchResults/>}/>
        <Route path="/apod/:startDate" element={<SingleAPOD/>}/>
        <Route path='/media' element={<MediaSearch/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default PageRoutings;
