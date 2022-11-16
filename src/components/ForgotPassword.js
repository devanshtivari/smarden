import React, { useContext, useState } from 'react'
import {Link} from 'react-router-dom'
import HandleContext from '../context/HandleContext';


export default function ForgotPassword() {

    const context = useContext(HandleContext);
    const {ForgotPassword} =context;

    const [credentials, setCredentials] = useState({email:""})

    const handleChange=(e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value});
    }

    const handleClick=(e)=>{
        e.preventDefault();
        const {email}=credentials
        const formData = new FormData();
        formData.append('email_id',email);
        ForgotPassword(formData);

    }

    return (
        <div className='hold-transition login-page"'>
            <div className="login-box " style={{ margin: 'auto', marginTop: '50px' }}>
                <div className="login-logo">
                    <Link to="../../index2.html"><b>Smar</b>Den</Link>
                </div>
                <div className="card">
                    <div className="card-body login-card-body">
                        <p className="login-box-msg">You forgot your password? Here you can easily retrieve a new password.</p>
                        <form action="" method="post">
                            <div className="input-group mb-3">
                                <input type="email" className="form-control" name='email' value={credentials.email} placeholder="Email" onChange={handleChange} required='true'/>
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <button type="submit" onClick={handleClick} className="btn btn-primary btn-block">Request new password</button>
                                </div>
                            </div>
                        </form>
                        <p className="mt-3 mb-1">
                            <Link to="/login">Login</Link>
                        </p>
                        <p className="mb-0">
                            <Link to="/register" className="text-center">Register a new membership</Link>
                        </p>
                    </div>
                </div>
            </div>


        </div>
    )
}
