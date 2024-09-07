import { useState } from 'react'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { Signup } from './pages/signup';
import { Signin } from './pages/Signin';
import { SigninSuccess } from './pages/SigninSuccess';
import { RecoilRoot, useRecoilValue } from "recoil"
import {Dashboard} from './pages/Dashboard';


function App() {


  return (
   <>  
    <BrowserRouter>
        <Routes>
          
          <Route path="/signup" element={<Signup/>} />
          <Route path="/signin" element={<Signin/>} />
          <Route path="/usercreated" element={<SigninSuccess/>} />
          <Route path="/dashboard" element={<Dashboard/>} />

        </Routes>
      </BrowserRouter>

    </>
    
  )
}

export default App
