
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
import { AppProvider } from './AppContext';
import UserAuth from './UserAuth';
import UserManager from './components/UserManager';
import { Toaster } from 'react-hot-toast';
import UpdateUser from './components/UpdateUser';


function App() {
  let cartItems=30;
  const [loggedIn, setloggedIn] = useState(false);

  return (
    <div>
      <Toaster position='top-right'/>
      
      <BrowserRouter>
      <AppProvider>
      {/* <Link to="/login"> Login</Link>
      <Link to="/Signup"> Signup</Link>
      <Link to="/Contact_form"> Contact form</Link> */}

      <Navbar mycart={cartItems} />

      <Routes>
        <Route path="/home" element={<Home/>}/> 
        <Route path="/login" element={<Login/>}/> 
        <Route path="/Signup" element={<Signup/>}/> 
        <Route path="/event" element={<EventHandling/>}/>
        <Route path="/state" element={<StateManagement/>}/>  
        <Route path="/post" element={<Linkedin_post/>}/>  
        <Route path="/todo" element={<UserAuth><Todo/></UserAuth>}/>  
        <Route path="/chatting" element={<UserAuth><Chatting/></UserAuth>}/>  
        <Route path="/list" element={<ProductList/>}/>  
        <Route path="/chat" element={<Chat_Sir/>}/>  
        <Route path="/up" element={<Signup_Sir/>}/> 
        <Route path="/usermanager" element={<UserManager/>}/> 
        <Route path="/updateuser/:id" element={<UpdateUser/>}/> 
        <Route path="*" element={<NotFound/>}/> 
        <Route path="Contact_form" element={<Contact_form/>}/> 
        

        
        
        
      </Routes>
      </AppProvider>

      </BrowserRouter>
    </div>
  );
}

export default App;

