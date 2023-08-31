
import './App.css';
import Home from './components/home';
import Signup from './components/Signup';
import Login from './components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';
import Contact_form from './Contact_form';

function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/login" element={<Login/>}/> 
        <Route path="/Signup" element={<Signup/>}/> 
        <Route path="*" element={<NotFound/>}/> 
        <Route path="/Contact_form" element={<Contact_form/>}/>
        
      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;

