import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';

const Main = () => {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' element={<Home />}></Route>
      <Route exact path='/About' element={<About />}></Route>
      <Route exact path='/Contact' element={<Contact />}></Route>
    </Routes>
  );
}

export default Main;