import { Route, Routes } from 'react-router-dom';
// import './App.css';
import React, { useState } from 'react';
import { Homepage } from './pages/Home/Home';
import { Navbar } from 'react-bootstrap';
import { Header } from './layouts/Header';
import { Error } from './pages/Error/Error';
import { MyProvider } from './utils/ContextProvider';
import { Foater } from './layouts/Foater';
import { SectiAbout } from './pages/About/components/SectiAbout';
import { SectionConta } from './pages/Contact/components/SectionConta';
import { SectionShop } from './pages/Shop/components/SectionShop';


export const App = () => {
  return (
    <>


      <MyProvider>
        <Header />
        <Routes>
          <Route path="*" element={<Error />} />
          <Route path='/' element={<Homepage />} />
          <Route path='/about' element={<SectiAbout />} />
          <Route path='/contact' element={<SectionConta />} />
          <Route path='/Shop' element={<SectionShop/>}/>


        </Routes>

      </MyProvider>
      <Foater />

    </>
  );
};

