import React, { useContext, useState, useEffect } from 'react'
import { toast } from 'react-toastify';
import HandleContext from '../../context/HandleContext'

export default function ChangePassword() {

  const context = useContext(HandleContext);
  const { ChangePassword, response, success } = context;

  const [credentials, setCredentials] = useState({ old_pass: "", new_pass: "", conf_pass: "" })

  const handleChange=(e)=>{
    setCredentials({...credentials,[e.target.name]:e.target.value})
  }

  const handleClick = (e) => {
    e.preventDefault()
    const formData = new FormData();
    Object.entries(credentials).forEach(entry => {
      const [key, value] = entry;
      formData.append(key, JSON.stringify(value));
    })
    ChangePassword(formData)
    setCredentials({ old_pass: "", new_pass: "", conf_pass: "" })
    // success && success == false ?
    //   response && toast.success(response) : toast.error(response
    //   )
  }

  return (
    <>
      {/* <div className="card card-info mt-5" style={{width:'90%', float:'right'}}> */}
        {/* <div className="card-header">
          <h3 className="card-title">Change Your Password</h3>
        </div> */}
        <form className="form-horizontal" onSubmit={handleClick}>
          <div className="card-body">
            <div className="form-group row">
              {/* <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Old Password </label> */}
              <div className="col-sm-10">
                <input type="password" className="form-control" id="inputEmail3" placeholder="Old Password" name='old_pass' onChange={handleChange} value={credentials.old_pass} required/>
              </div>
            </div>
            <div className="form-group row">
              {/* <label htmlFor="inputPassword3" className="col-sm-2 col-form-label"> New Password  </label> */}
              <div className="col-sm-10">
                <input type="password" className="form-control" id="inputPassword3" placeholder="New Password" name='new_pass' onChange={handleChange} value={credentials.new_pass} required minLength={8}/>
              </div>
            </div>
            <div className="form-group row">
              {/* <label htmlFor="inputPassword3" className="col-sm-2 col-form-label"> Confirm Password </label> */}
              <div className="col-sm-10">
                <input type="password" className="form-control" id="inputPassword3" placeholder="Confirm Password" name='conf_pass' onChange={handleChange} value={credentials.conf_pass} required/>
              </div>
            </div>
            
          </div>
          <div className="card-footer"style={{background:'white'}}>
            <button type="submit" className="btn btn-primary" >Set Password</button>
            
          </div>
        </form>
      {/* </div> */}



    </>
  )
}
