import React from 'react';
import Router from './app/Router';
import Footer from './app/Footer';
import NavBar from './app/NavBar';
import { Menu, Modal, Button } from 'semantic-ui-react';
import MatrixRain from './app/MatrixRain';
import './App.css'; // Import your custom CSS file for styling

function App() {
  return (
    <div>
        <NavBar />
        <Router />
        <Footer />
    </div>
  );
}

export default App;
