
import { useEffect,useState,ChangeEvent, } from "react"
import {
    useSelector,
  } from 'react-redux'
import './headMessager.scss'
interface messageType {
    type:number,
    content:string,
    status:number
}
let HeadMessager =({messageList,addMessage,state,clearMessage}:{messageList:Array<messageType>,addMessage:Function,state:any,clearMessage:Function})=>{
    
    if(localStorage.getItem("messageList")!==null){
        let currentMessageList:Array<messageType>|Array<any> = JSON.parse(localStorage.getItem('messageList')||"[]")
    }
    const messageListHook = useSelector((state:any) => state.appReducer.messageList);
    useEffect(() => {
        if(messageListHook.length>0){
            setTimeout(() => {
                clearMessage()
    
            }, 3000);
        }
    }, [messageListHook]);
    
    
    return(
        <>
            <div className="messageHeaderContainer">
                
                        
                        
                {messageListHook.map((message:messageType,index:number)=>{
                    
                        let classToUse=""
                        switch (message.type) {
                        case 1:
                            classToUse="bg-primary text-white"
                            break;
                        case 2:
                            classToUse="bg-danger text-white"
                            break;
                        case 3:
                            classToUse="bg-success text-white"
                            break;
                        default:
                            classToUse="bg-primary text-white"
                            break;
                    }
                    return(
                        
                        <>  
                        <div key={index} className={`messageHeader ${classToUse}`}>
                       {message.content}
                         </div>
                        </>
                    ) 
                     
                    
                })
                
                }
               
            </div>
        </>
    )
}

export default HeadMessager;