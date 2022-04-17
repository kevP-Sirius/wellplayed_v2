
import { useState,ChangeEvent } from "react"
import { Link } from "react-router-dom"
import './login.scss'
let Login =()=>{
    const initialState = {
        form:{
            login:'',
            password:''
        }
    }
    let [state,setState ]= useState(initialState)
    let handleChange =(event:ChangeEvent<HTMLInputElement>)=>{
        const { name, value }: { name: string; value: string } =event.target;

    }
    return(
        <>
            <div className="loginContainer">
                <div className="formContainer">
                    <form className="loginForm">
                        <div className="form-group inputPosition">
                            <label className="inputPosition" htmlFor="id">Login</label>
                            <input type="text" className="form-control" onChange={handleChange} id="login" name="password" value={state.form.login} placeholder="Enter username or email"/>
                        </div>
                        <div className="form-group inputPosition" >
                            <label className="inputPosition">Password</label>
                            <input type="password" className="form-control"  onChange={handleChange} value={state.form.password} id="password" name="password" placeholder="Password"/>
                        </div>
                        <div className="form-group inputPosition">
                        <Link className="nav-link active text-white"  to="/signup">S'inscrire</Link>
                        </div>
                        <button type="submit" className="btn btn-primary inputPosition">Connexion</button>
                    </form>
                
                </div>
            </div>
        </>
    )
}

export default Login;