
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
import Chatting from './components/Chatting';
import ProductList from './components/ProductList';
import Chat_Sir from './components/Chat_Sir';
import Signup_Sir from './components/Signup_Sir';
import { useState } from 'react';

function App() {
  let cartItems=30;
  const [loggedIn, setloggedIn] = useState(false);

  return (
    <div>
      
      <BrowserRouter>
      {/* <Link to="/login"> Login</Link>
      <Link to="/Signup"> Signup</Link>
      <Link to="/Contact_form"> Contact form</Link> */}

      <Navbar mycart={cartItems} loggedIn={loggedIn} setloggedIn={setloggedIn}/>

      <Routes>
        <Route path="/home" element={<Home/>}/> 
        <Route path="/login" element={<Login setloggedIn={setloggedIn} />}/> 
        <Route path="/Signup" element={<Signup/>}/> 
        <Route path="/event" element={<EventHandling/>}/>
        <Route path="/state" element={<StateManagement/>}/>  
        <Route path="/post" element={<Linkedin_post/>}/>  
        <Route path="/todo" element={<Todo/>}/>  
        <Route path="/chatting" element={<Chatting/>}/>  
        <Route path="/list" element={<ProductList/>}/>  
        <Route path="/chat" element={<Chat_Sir/>}/>  
        <Route path="/up" element={<Signup_Sir/>}/> 
        <Route path="*" element={<NotFound/>}/> 
        <Route path="Contact_form" element={<Contact_form/>}/> 
        

        
        
        
      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;

