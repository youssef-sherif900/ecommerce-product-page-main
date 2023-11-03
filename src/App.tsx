import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Body from './components/Body';
import { store } from './utility/store';
import { Provider } from 'react-redux';
import Carousel from './components/Carousel';

function App() {
  const [isMobile, setMobile] = useState(false);
  const [popup ,setPopup] = useState(true)
  const handelResize = () => {
    if (window.innerWidth <= 750) {
      console.log(window.innerWidth)
      setMobile(true);
    } else {
      setMobile(false);
    }
  };
  useEffect(() => {
    window.addEventListener("load", handelResize);
  });
  return (
    <Provider store={store}>
    <div className="App">
      <NavigationBar isMobile={isMobile} />
      <Carousel close={()=>setPopup(true)} popup={popup} />
      <Body isMobile={isMobile} openCarosel={()=>setPopup(false)}/>
    </div>
    </Provider>
  );
}

export default App;
