import React, { useState } from "react";
import Container from "./Components/cont";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import Aboutme from "./Components/Aboutme";
import ContactForm from "./Components/Contactme";

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />

        <Route path='/' exact component={Container} />
        <Route path='/about-me' exact component={Aboutme} />
        <Route path='/contact-me' exact component={ContactForm} />
      </BrowserRouter>
    </div>
  );
};

export default App;
