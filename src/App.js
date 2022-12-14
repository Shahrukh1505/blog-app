
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from "react-router-dom"
import Home from "./pages/Home"
import CreatePost from './pages/CreatePost';
import Login from './pages/Login';
import { useState } from 'react';
import {signOut} from 'firebase/auth';
import { auth } from './firebase-config';

import { useNavigate } from 'react-router-dom';
function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const signUserOut = () => {
      signOut(auth).then(()=>{
        localStorage.clear();
        setIsAuth(false);
        window.location.pathname = "/login";
      })
      
  }
  return (
   <Router>
    <nav>
      <Link to = "/">Home</Link>
    
    {!isAuth ? <Link to = "/login">Login</Link> :(
        <>
         <Link to = "/createpost">Create Post</Link>
         <button onClick={signUserOut}>Log Out</button>
        </>
      )}
    </nav>
    <Routes>
      <Route path = "/" element={<Home isAuth = {isAuth}></Home>}></Route>
      <Route path = "/createpost" element={<CreatePost isAuth={isAuth}></CreatePost>}></Route>
      <Route path = "/login" element={<Login setIsAuth={setIsAuth}></Login>}></Route>
    </Routes>
   </Router>
  );
}

export default App;


// orfno3rwnf333333333333
// rf3rwf3wrf3wf
// f
// w3rf3w
// f3wf3wfwervewcvecvecvewcew
// cwefc
// wfc
