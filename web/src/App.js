import React, { useState } from 'react';
import './App.scss';
import Polygons from './components/Polygons/Polygons';
import LandingPage from './components/pages/LandingPage/LandingPage';
import AboutMe from './components/pages/AboutMe/AboutMe';
import Navigation from './components/navigation/Navigation/Navigation';
import { Switch, Route } from 'react-router-dom';
import SocialMedia from './components/SocialMedia/SocialMedia';
import ContactMe from './components/pages/ContactMe/ContactMe';


function App() {
  return (
    <>
    <Polygons />
    <Navigation />
    <SocialMedia />
    <Switch>
      <Route exact path="/" component={ LandingPage } />
      <Route exact path="/aboutme" component={ AboutMe } />
      <Route exact path="/contactme" component={ ContactMe } />
    </Switch>
    </>
  );
}

export default App;
