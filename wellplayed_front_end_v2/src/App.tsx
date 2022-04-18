import { Routes,Route } from "react-router-dom"
import { useEffect } from 'react';
import Login from './components/login'
import SignupContainer from "./container/signupContainer";
const App = () => {

  
  useEffect(()=>{
    if(localStorage.getItem("user")!==null){
      
    }
  },[])

  return (
    <>
    <div className="container">
        
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignupContainer />} />
          <Route path="/dashboard" element={<>Dashboard</>} />
      </Routes>
       
    </div>
    </>
  )
}

export default App;
