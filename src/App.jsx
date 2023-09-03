
import './App.css';
import Home from './components/home';
import Signup from './components/Signup';
import Login from './components/Login';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';
import Contact_form from './components/Contact_form';
import EventHandling from './components/EventHandling';
import StateManagement from './components/StateManagement';
import Linkedin_post from './components/Linkedin_post';
import Todo from './components/Todo';

function App() {
  return (
    <div>
      
      <BrowserRouter>
      {/* <Link to="/login"> Login</Link>
      <Link to="/Signup"> Signup</Link>
      <Link to="/Contact_form"> Contact form</Link> */}

      <Navbar/>

      <Routes>
        <Route path="/home" element={<Home/>}/> 
        <Route path="/login" element={<Login/>}/> 
        <Route path="/Signup" element={<Signup/>}/> 
        <Route path="/event" element={<EventHandling/>}/>
        <Route path="/state" element={<StateManagement/>}/>  
        <Route path="/post" element={<Linkedin_post/>}/>  
        <Route path="/todo" element={<Todo/>}/>  
        
        

        <Route path="*" element={<NotFound/>}/> 
        <Route path="Contact_form" element={<Contact_form/>}/> 
        

        
        
        
      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;

