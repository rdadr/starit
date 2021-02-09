import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import MainRouter from './Routes'
import './App.scss';
import HomeComponent from './Pages/Home/Components/HomeComponent'


function App() {

  return (
    <Router>
      <MainRouter/>
    </Router>
  );
}

export default App;
