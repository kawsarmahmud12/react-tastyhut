import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Foods from './components/Foods';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
       <Header/>
       <Banner/>
       <Foods/>
       <Footer/>
    </div>
  );
};

export default App;