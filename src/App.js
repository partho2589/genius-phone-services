
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Home/Navbar';
import Services from './Pages/Home/Services';
import Footer from './Pages/Shared/Footer/Footer';
import Login from './Pages/Shared/Login/Login';
import Register from './Pages/Shared/Register';
function App() {
  return (
    <div className='App '>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/services' element={<Services/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
