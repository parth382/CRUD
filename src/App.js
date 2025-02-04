// import logo from './logo.svg';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import './App.css';
import  {Navbar, Footer } from './Components/Layout';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/contact' element={ <Contact/> }/>
        <Route path='*' element={ <NotFound/> }/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
