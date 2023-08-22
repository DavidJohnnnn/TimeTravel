import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';

const Main = () => {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/About' component={About}></Route>
      <Route exact path='/Contact' component={Contact}></Route>
    </Routes>
  );
}

export default Main;