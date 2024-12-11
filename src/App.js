import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { library } from "@fortawesome/fontawesome-svg-core";
import {faCameraRetro,faBomb ,faCoffee,faHome,faPeopleGroup} from "@fortawesome/free-solid-svg-icons";
import NavBar from './components/NavBar';
import Products from './components/Products';
import AboutUs from './components/AboutUs';
import { HomePage } from './components/HomePage';
import DealerProfile from './components/DealerProfile';

library.add( faCameraRetro,faBomb,faCoffee,faHome,faPeopleGroup);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>ProductHive</h1>
      </header>

      <section>
      <div style={{ backgroundImage: "url(/images/bg.jpg)",
                    backgroundRepeat: 'no-repeat',
                    backgroundSize:'cover', minHeight:'100vh',minWidth:'75vw'}}> 
        <Router>
          <NavBar/>
          <Routes>
            <Route path='/' element={<HomePage/>}/>

            <Route path='/about' element={<AboutUs/>}/>

            <Route path='/products' element={<Products/>}/>
            <Route path='/dealers' element={<DealerProfile/>}/>
          </Routes>
        </Router>
      </div>
      </section>

      <footer className='footer'>
        <p>&copy;All Rights Reserved to Producthive.com </p>
      </footer>
    </div>
  );
}

export default App;
