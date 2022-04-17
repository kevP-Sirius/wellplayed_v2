
import { useState,ChangeEvent } from "react"
import { Link } from "react-router-dom"
import './signup.scss'
let Signup =()=>{
    const initialState = {
        form:{
            login:'',
            email:'',
            password:'',

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
                            <input type="text" value={state.form.login} onChange={handleChange} className="form-control" id="id" placeholder="Enter username"/>
                        </div>
                        <div className="form-group inputPosition">
                            <label className="inputPosition" htmlFor="id">Email</label>
                            <input type="text" value={state.form.email} onChange={handleChange} className="form-control" id="id" placeholder="Enter email"/>
                        </div>
                        <div className="form-group inputPosition" >
                            <label className="inputPosition">Password</label>
                            <input type="password" value={state.form.password} onChange={handleChange} className="form-control" id="exampleInputPassword1" placeholder="Password"/>
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