import React, { useContext, useEffect } from 'react'
import Menu from '../Menu'
import Header from '../Header'
import HandleContext from '../../context/HandleContext'
import './User.css'
import { Link } from 'react-router-dom'
import ChangePassword from './ChangePassword'


export default function User(text) {
    const context = useContext(HandleContext);
    const { userProfile, user, userDetail } = context;

    useEffect(() => {
        user()
    }, [])

    console.log(userDetail);
    let row = [userDetail]
    return (
        <>
            <Menu />
            <Header text={text}/>
            <div className="content-wrapper">
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">

                        </div>
                    </div>
                </section>
                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div classname="col-md-12" style={{ width: '100%' }}>
                                <div className="card card-primary  ">
                                    <div className="card-header">
                                        <h3 className="card-title">
                                            <i className="fas fa-user" style={{marginRight:'10px'}}/>
                                             User Info
                                        </h3>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-5 col-sm-3">
                                                <div className="nav flex-column nav-tabs h-100" id="vert-tabs-tab" role="tablist" aria-orientation="vertical">
                                                    <a className="nav-link active" id="vert-tabs-home-tab" data-toggle="pill" href="#vert-tabs-home" role="tab" aria-controls="vert-tabs-home" aria-selected="true">My Account</a>
                                                    <a className="nav-link" id="vert-tabs-profile-tab" data-toggle="pill" href="#vert-tabs-profile" role="tab" aria-controls="vert-tabs-profile" aria-selected="false">My MQTT</a>
                                                    <a className="nav-link" id="vert-tabs-messages-tab" data-toggle="pill" href="#vert-tabs-messages" role="tab" aria-controls="vert-tabs-messages" aria-selected="false">FAQs</a>
                                                    <a className="nav-link" id="vert-tabs-changepassword-tab" data-toggle="pill" href="#vert-tabs-changepassword" role="tab" aria-controls="vert-tabs-changepassword" aria-selected="false">Change Password</a>
                                                </div>
                                            </div>
                                            <div className="col-7 col-sm-9 ">
                                                <div className="tab-content" id="vert-tabs-tabContent">
                                                    <div className="tab-pane text-left fade show active" id="vert-tabs-home" role="tabpanel" aria-labelledby="vert-tabs-home-tab">
                                                        <div className="contents">
                                                            <div className='con'> Full Name :  </div>
                                                            <div > {userDetail.full_name}</div>
                                                        </div>
                                                        <div className="contents">
                                                            <div className='con'> Email :  </div>
                                                            <div > {userDetail.user_email}</div>
                                                        </div>
                                                        <div className="contents">
                                                            <div className='con'> Phone :  </div>
                                                            <div >{userDetail.user_phone}</div>
                                                        </div>
                                                        <div className="contents">
                                                            <div className='con'> Address :  </div>
                                                            <div >{userDetail.address}</div>
                                                        </div>
                                                        {userDetail.college_name && <div className="contents">
                                                            <div className='con'> College Name :  </div>
                                                            <div >{userDetail.college_name}</div>
                                                        </div>}
                                                        {userDetail.course_name && <div className="contents">
                                                            <div className='con'> Course Name :  </div>
                                                            <div >{userDetail.course_name}</div>
                                                        </div>}
                                                        {userDetail.company_name && <div className="contents">
                                                            <div className='con'> Company Name :  </div>
                                                            <div >{userDetail.company_name}</div>
                                                        </div>}
                                                        {userDetail.designation && <div className="contents">
                                                            <div className='con'> Designation :  </div>
                                                            <div >{userDetail.designation}</div>
                                                        </div>}
                                                    </div>

                                                    <div className="tab-pane fade" id="vert-tabs-profile" role="tabpanel" aria-labelledby="vert-tabs-profile-tab">
                                                        <div className="contents">
                                                            <div className='con' > Instance Username :  </div>
                                                            <div > {userDetail.user_name}</div>
                                                        </div>
                                                        <div className="contents">
                                                            <div className='con' > Instance Password :  </div>
                                                            <div > {userDetail.user_password}</div>
                                                        </div>
                                                        <div className="contents">
                                                            <div className='con'> Access key :  </div>
                                                            <div > {userDetail.access_key}</div>
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane fade" id="vert-tabs-messages" role="tabpanel" aria-labelledby="vert-tabs-messages-tab">
                                                        {/* <div className="contents">
                                                            <div> Instance Password :  </div>
                                                            <div className='con'> kkk</div>
                                                        </div>
                                                        <div className="contents">
                                                            <div> Access key :  </div>
                                                            <div className='con'> kkk</div>
                                                        </div>  */}
                                                    </div>
                                                    <div className="tab-pane fade" id="vert-tabs-changepassword" role="tabpanel" aria-labelledby="vert-tabs-changepassword-tab">
                                                        <ChangePassword />
                                                    </div>


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div classname="col-md-12" style={{ width: '100%' }}>
                                
                                <ChangePassword/>
                            </div> */}
                        </div>

                    </div>
                </section>
            </div>
        </>

    )
}
