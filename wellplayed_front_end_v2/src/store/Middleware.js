import {
    FIRST_TYPE,LOGIN_TYPE,SIGNUP_TYPE,ADD_MESSAGE,updateErrorMessage,connect,env,ipProd,messageList,addMessage
  } from '../store/reducer/appReducer';
  const axios = require('axios');
  const qs = require('qs');
  let baseUrlProd = `http://${ipProd}:8080`
  let baseUrlLocal = "http://localhost:8080"
let baseUrlToUse = env=="dev"?baseUrlLocal:baseUrlProd
  const Middleware = (store) => (next) => (action) => {
    next(action);
    switch (action.type) {
      case FIRST_TYPE: {
       
        break;
      }
      case LOGIN_TYPE: {
        let data =qs.stringify({
          username:action.data.login,
          password:action.data.password
        })
       
        axios.post(`${baseUrlToUse}/api/signin`,data).then(response=>{
          
          console.log(response)
          if(response.data.status==="200"){
            const user = JSON.stringify({...response.data})
            localStorage.setItem("user",JSON.stringify(user))
            store.dispatch(connect(response.data))
          }else{
            store.dispatch(updateErrorMessage(response.data))
          }     
        }).catch((error)=>{
          console.log(error)
        }).finally(()=>{
        })
      
        break;
      }
      case SIGNUP_TYPE: {
        let data =qs.stringify({
          username:action.data.login,
          email:action.data.email,
          role:action.data.role,
          password:action.data.password
        })
        console.log(`${baseUrlToUse}/api/signup`)
        
        axios.post(`${baseUrlToUse}/api/signup`,data).then(response=>{
          let data = {type:1,content:response.data.msg,status:0}
          store.dispatch(addMessage(data))
          console.log(response.data.msg)
          store.dispatch(updateErrorMessage(response.data))
          
        })
        break;
      }
      case ADD_MESSAGE: {
        
        console.log(action.data)
        // let currentMessageList = JSON.parse(localStorage.getItem('messageList'))
        // localStorage.setItem('messageList',messageList)
          
        
        
        
        break;
      }
      default:
        // next(action);
    }
  };
  
  export default Middleware;