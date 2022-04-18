
import { useState,ChangeEvent,SyntheticEvent} from "react"
import { Link } from "react-router-dom"
import './signup.scss'
let Signup =({updateErrorMessage,messageError,signup,messageStatus,ipProd}:{updateErrorMessage:Function,messageError:string,signup:Function,messageStatus:string,ipProd:string})=>{
    const initialState = {
        form:{
            login:'',
            email:'',
            password:'',

        }
    }
    let [state,setState ]= useState(initialState)
    let handleChange =(event:ChangeEvent<HTMLInputElement>)=>{
        const { name, value }: { name: string; value: string } = event.target;
        setState({
            ...state,
            form:{
                ...state.form,[name]:value
            }
        })
    }
    let handleSubmit =(event:SyntheticEvent)=>{
        event.preventDefault();
        let { login, email,password }:{ login: string, email: string ,password:string} = state.form;
        console.log(login,email,password);
        signup(state.form)
    }
    return(
        <>
            <div className="loginContainer">
                <div className="formContainer">
                    <form onSubmit={handleSubmit} className="loginForm">
                        <div className="form-group inputPosition">
                            <label className="inputPosition" htmlFor="id">Login</label>
                            <input type="text" value={state.form.login} onChange={handleChange} className="form-control" id="id" name="login" placeholder="Enter username"/>
                        </div>
                        <div className="form-group inputPosition">
                            <label className="inputPosition" htmlFor="id">Email</label>
                            <input type="text" value={state.form.email} onChange={handleChange} className="form-control" id="email" name="email" placeholder="Enter email"/>
                        </div>
                        <div className="form-group inputPosition" >
                            <label className="inputPosition">Password</label>
                            <input type="password" value={state.form.password} onChange={handleChange} className="form-control" id="password" name="password" placeholder="Password"/>
                        </div>
                        <div className="form-group inputPosition">
                        <Link className="nav-link active text-white"  to="/">Se connecter</Link>
                        </div>
                        <button type="submit" className="btn btn-primary inputPosition">Connexion</button>
                    </form>
                
                </div>
            </div>
        </>
    )
}

export default Signup;