import React from 'react'
import Menu from '../Menu'
import Header from '../Header'
import HandleContext from '../../context/HandleContext'
import { useContext, useEffect, useState } from 'react'
import '../Switches/Buttons.css'

export default function Groups() {

    const context = useContext(HandleContext);
    const { GetNotifications, notifications, AddNotification, devices, getAllDevices,DeleteNotification,EditNotification } = context;

    const [credentials, setCredentials] = useState({ switch_name: "", time_out: "",})
    const [time, setTime] = useState({time_unit :""})
    const [selectId, setSelectId] = useState({ device_id: "" })
    const [switchId, setSwitchId] = useState({ id: "" })

    const initialState = { sswitch_name: "", time_out: ""}

    const clearState = () => {
        setCredentials({ ...initialState });
    };

    let count = 1;

    notifications ? console.log(notifications) : console.log('nh');

    useEffect(() => {
       GetNotifications()
        getAllDevices()
    }, [])

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(credentials);
        let formData = new FormData();
        formData.append('device_id', selectId.device_id)
        formData.append('switch_name', credentials.switch_name)
        formData.append('time_out', credentials.time_out)
        formData.append('time_unit', time.time_unit)
       AddNotification(formData)
       setTimeout(() => {
           GetNotifications()
       }, 400);
       clearState();
    }

    const editButton = (e) => {
        e.preventDefault();
        console.log(credentials);
        let formData = new FormData();
        formData.append('id', switchId.id)
        formData.append('device_id', selectId.device_id)
        formData.append('switch_name', credentials.switch_name)
        formData.append('time_out', credentials.time_out)
        formData.append('time_unit', time.time_unit)
        EditNotification(formData)
        clearState()
        setTimeout(() => {
            GetNotifications()
        }, 400);
        clearState();

    }

    const deleteButton = (id) => {
        console.log(id);
        console.log('deleting');
        let formData = new FormData();
        formData.append('id', id)
        var result = window.confirm("Are you sure you want to delete this group ?");
        if (result) {
            DeleteNotification(formData);
            setTimeout(() => {
                GetNotifications()
            }, 200);
        }
    }

    return (
        <>
{/* Modal  */}
<div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Edit Button</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form onSubmit={editButton}>
                        <div className="modal-body">
                                        <div className="card-body">
                                        <div class="form-group">
                                                <label>Select Device </label>
                                                <select class="form-control" onChange={(e) => {setSelectId({ device_id: e.target.value }) }} required>
                                                    <option value="">Select Device</option>
                                                    {devices ? devices.map((e) => {
                                                        return <option key={e.device_id} value={e.device_id}>{e.device_name}</option>
                                                    }) : ''}
                                                </select>
                                            </div>        
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">Notification Name</label>
                                                <input type="text" className="form-control" id="exampleInputEmail1" placeholder="" name='switch_name' value={credentials.switch_name} onChange={handleChange} required/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">Time Out</label>
                                                <input type="text" className="form-control" id="exampleInputEmail1" placeholder="" name='time_out' value={credentials.time_out} onChange={handleChange} required/>
                                            </div>
                                            <div class="form-group">
                                                <label>Select Time Out Format</label>
                                                <select class="form-control" onChange={(e) => { setTime({ time_unit: e.target.value }) }} required>
                                                    <option value="">Select Time</option>
                                                    <option value="sec">Sec</option>
                                                    <option value="hour">Hour</option>
                                                </select>
                                            </div>
                                        </div>
                                        
                                    
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary" >Save changes</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
            {/*  */}
            <Menu />
            <Header />
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
                            <div className="col-md-8">
                                <div class="card card-secondary ">
                                    <div class="card-header">
                                        <h3 class="card-title">List of Notification Widget Created</h3>
                                        <div class="card-tools">
                                            {/* <button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fas fa-plus"></i> */}
                                            {/* </button> */}
                                        </div>

                                    </div>

                                    <div class="card-body">
                                        {notifications ? notifications.map((e) => {
                                            return <div className="card" key={e.id}>
                                                <div style={{display: 'flex',justifyContent: 'end',padding: "10px 9px 0px 0px"}}>
                                                <button className='btn btn-info btn-xs' style={{ marginRight: '4px' }} data-toggle="modal" data-target="#exampleModalCenter" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16" onClick={() => {
                                                        setSwitchId({ id: e.id })
                                                        console.log(e.id)
                                                    }}>
                                                        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                                                    </svg>
                                                </button>
                                                <button className='btn btn-danger btn-xs' onClick={() => {
                                                    deleteButton(e.id)
                                                }}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                                                    </svg>
                                                </button>
                                                </div>
                                                <div className="ButtonDetail contents">
                                                    <div className='con'>  S. NO. :  </div>
                                                    <div > {count++}</div>
                                                </div>
                                                <div className="ButtonDetail contents">
                                                    <div className='con'>  Group :  </div>
                                                    <div > {e.cat_name}</div>
                                                </div>
                                                <div className="ButtonDetail contents">
                                                    <div className='con'> Element Name :  </div>
                                                    <div > {e.switch_name}</div>
                                                </div>
                                                <div className="ButtonDetail contents">
                                                    <div className='con'> Element Id :  </div>
                                                    <div >{e.switch_uni_id}</div>
                                                </div>
                                                <div className="ButtonDetail contents">
                                                    <div className='con'> Publish On :  </div>
                                                    <div >{e.topic_second}</div>
                                                </div>
                                                
                                            </div>
                                            }) : <div>No Sliders Created</div>}


                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card card-info">
                                    <div className="card-header">
                                        <h3 className="card-title">Create New Notification Widget</h3>
                                    </div>
                                    <form onSubmit={handleSubmit}>
                                        <div className="card-body">
                                            <div class="form-group">
                                                <label>Select Device </label>
                                                <select class="form-control" onChange={(e) => {setSelectId({ device_id: e.target.value }) }} required>
                                                    <option value="">Select Device</option>
                                                    {devices ? devices.map((e) => {
                                                        return <option key={e.device_id} value={e.device_id}>{e.device_name}</option>
                                                    }) : ''}
                                                </select>
                                            </div>        
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">Notification Name</label>
                                                <input type="text" className="form-control" id="exampleInputEmail1" placeholder="" name='switch_name' value={credentials.switch_name} onChange={handleChange} required/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">Time Out</label>
                                                <input type="text" className="form-control" id="exampleInputEmail1" placeholder="" name='time_out' value={credentials.time_out} onChange={handleChange} required/>
                                            </div>
                                            <div class="form-group">
                                                <label>Select Time Out Format</label>
                                                <select class="form-control" onChange={(e) => { setTime({ time_unit: e.target.value }) }} required>
                                                    <option value="">Select Time</option>
                                                    <option value="sec">Sec</option>
                                                    <option value="hour">Hour</option>
                                                </select>
                                            </div>
                                            
                                        </div>
                                        <div className="card-footer">
                                            <button type="submit" className="btn btn-info" >Submit</button>
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </div>


        </>
    )
}
