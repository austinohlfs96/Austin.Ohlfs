import React, { useState } from 'react';
import Router from './app/Router';
import Footer from './app/Footer';
import NavBar from './app/NavBar';
import { Menu, Modal, Button } from 'semantic-ui-react'; // Assuming you're using Semantic UI for styling


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
