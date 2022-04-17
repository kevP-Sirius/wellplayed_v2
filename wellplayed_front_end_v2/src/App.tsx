import { Routes,Route } from "react-router-dom"
import { useEffect } from 'react';
import Login from './components/login'
import Signup from './components/signup'
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
                <Route path="/signup" element={<Signup />} />
            </Routes>
       
    </div>
    </>
  )
}

export default App;
