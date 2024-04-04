import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import MyNav from './components/MyNav';
import Header from './components/Header';
import About from './components/About';
import ChooseSec from './components/ChooseSec';
import Faq from './components/Faq';
import ContactSec from './components/ContactSec';
import Newslatters from './components/Newslatters';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import { useEffect, useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [load, setload] = useState(false);
  useEffect(() => {
    setload(true)
    setTimeout(() => {
      setload(false)
    }, 3000);
  }, [])
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);

  return (
    <>{load ? (<div className='position-fixed w-100 h-100 bg-white'>
      <div className="preloader-orbit-loading preload">
        <div className="cssload-inner cssload-one"></div>
        <div className="cssload-inner cssload-two"></div>
        <div className="cssload-inner cssload-three"></div>
      </div>
    </div>) : (<div>
      <div className='bg-hero d-flex flex-column'>
        <MyNav />
        <Header />
      </div >
      <About />
      <ChooseSec />
      <ContactSec />
      <Faq />
      <Newslatters />
      <Footer />
      <BackToTop />
    </div >)
    }</>
  );
}

export default App;
