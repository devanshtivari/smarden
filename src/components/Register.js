import React, {  useContext,  useState } from 'react'
import HandleContext from '../context/HandleContext';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Register() {

    const navigate=useNavigate()
    const context = useContext(HandleContext);
    const {Register,success}=context;

    const [showHide, setShowHide] = useState('');
    const [credentials, setCredentials] = useState({full_name:"",email:"",phone_num:"",college_name:"",course_name:"",company_name:"",designation:"",password:"",con_password:"",address:""})


    const handleShowHide = (e) => {
        const user = e.target.value;
        console.log(user);
        setShowHide(user);
    }

    const handleChange=(e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        

        const formData = new FormData();

        Object.entries(credentials).forEach(entry => {
            console.log(entry);

            const [key, value] = entry;
            console.log(key);
            console.log(value);
            formData.append(key, JSON.stringify(value));
        })
        
        Register(formData);
        success && success==true?navigate('/'):toast.error('Something Went Wrong')
    }

    return (
    <div className="hold-transition register-page">
  <div className="register-box">
    <div className="register-logo">
      <a href="../../index2.html"><b>Smar</b>Den</a>
    </div>
    <div className="card">
    <div className="card-body register-card-body">
                            <p className="Register-box-msg">Register a new membership</p>
                            <form  id='form' onSubmit={handleSubmit}>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Full name" onChange={handleChange} name='full_name' value={credentials.full_name} required/>
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-user" />
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="email" className="form-control" placeholder="Email" onChange={handleChange} name='email' value={credentials.email} required/>
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-envelope" />
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Phone No." onChange={handleChange} name='phone_num' value={credentials.phone_num} required/>
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-phone" />
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <select name="profession" id="" className='form-control' placeholder='Select Your Profession' onChange={handleShowHide}>
                                        <option value="">--Select Your Profession--</option>
                                        <option value="student">Student</option>
                                        <option value="professional">Professional</option>
                                    </select>
                                </div>
                                {showHide === 'student' && (
                                    <>
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" placeholder="College Name" onChange={handleChange} name='collegeName' value={credentials.collegeName}/>
                                            <div className="input-group-append">
                                                <div className="input-group-text">
                                                    <span className="fas fa-school" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" placeholder="Course Name" onChange={handleChange} name='courseName' value={credentials.courseName}/>
                                            <div className="input-group-append">
                                                <div className="input-group-text">
                                                    <span className="fas fa-pen" />
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}
                                {showHide === 'professional' && (
                                    <>
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" placeholder="Company Name" onChange={handleChange} name='companyName' value={credentials.companyName}/>
                                            <div className="input-group-append">
                                                <div className="input-group-text">
                                                    <span className="fas fa-building" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" placeholder="Designation" onChange={handleChange} name='designation' value={credentials.designation}/>
                                            <div className="input-group-append">
                                                <div className="input-group-text">
                                                    <span className="fas fa-building" />
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}

                                <div className="input-group mb-3">
                                    <input type="password" className="form-control" placeholder="Password" onChange={handleChange} name='password' value={credentials.password} required minLength={6}/>
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-lock" />
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="password" className="form-control" placeholder="Confirm Password" onChange={handleChange} name='con_password' value={credentials.con_password} required minLength={6}/>
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-lock" />
                                        </div>
                                    </div>
                                </div>

                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Address" onChange={handleChange} name='address' value={credentials.address} required/>
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-home" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-8">
                                        <div className="icheck-primary">
                                            <input type="checkbox" id="agreeTerms" name="terms" defaultValue="agree" />
                                            <label htmlFor="agreeTerms">
                                                I agree to the <Link to="/">terms</Link>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <button type="submit" className="btn btn-primary btn-block">Register</button>
                                    </div>
                                </div>
                            </form>

                            <Link to="/login" className="text-center">I already have a membership</Link>
                        </div>
    </div>
  </div>
</div>

    )
}


// export default class Register extends Component {
//
//     render() {

//
//         return (

//         )
//     }
// }
