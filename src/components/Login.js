import React, { Component, useState } from 'react'
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom'
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';


export default function Login() {

    const url = 'https://iot.smarden.tech/api'

    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = credentials
        let config = {
            headers: {
                'content-type': 'multipart/form-data',
                'Client-Service': 'smardenAPP',
                'Auth-Key': '256901zrAAZpqf67j4UyYF2Sqzo',
            }
        }

        const formData = new FormData();
        formData.append('email', email)
        formData.append('password', password)
        try {

            axios.post(`${url}/login/login_check`, formData, config).then((response) => {
                console.log(response);
                if (response.data.status == 200) {
                    console.log(response.data.data);
                    navigate('/');
                    Cookies.set('id', response.data.data.user_id)
                    Cookies.set('num', response.data.data.token)
                    console.log(response.data.data.token);
                }
            }).catch((e) => {
                console.log(e);
                toast.error('Invalid Details')
            })

        } catch (error) {
            toast.warn('Something Went Wrong')

        }
    }



    return (
        <div className="hold-transition login-page" >
            <div className="login-box">
                <div className="login-logo">
                    <a href="../../index2.html"><b>Admin</b>LTE</a>
                </div>
                <div className="card">
                <div className="card-body">
                <p className="login-box-msg">Sign in to start your session</p>
                                <form id='form' >
                                    <div className="input-group mb-3">
                                        <input type="email" className="form-control" placeholder="Email" name='email' onChange={handleChange} value={credentials.email} />
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span className="fas fa-envelope" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Password" name='password' onChange={handleChange} />
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span className="fas fa-lock" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-4 mb-3">
                                            <button type="submit" onClick={handleSubmit} className="btn btn-primary btn-block">Login</button>
                                        </div>
                                    </div>
                                    <div className="input-group ">
                                        <Link to='/forgotpassword' >Forgot Password ?</Link>
                                    </div>
                                </form>

                            </div>
                </div>
            </div>
        </div>


    )
}