import React from 'react'
import Menu from '../Menu'
import Header from '../Header'
import HandleContext from '../../context/HandleContext'
import { useContext, useEffect, useState } from 'react'
import { Edit } from '@mui/icons-material'
import CopyToClipboard from 'react-copy-to-clipboard'
import copy from "copy-to-clipboard";

export default function Devices() {

    const context = useContext(HandleContext);
    const { getAllDevices, devices, category, AddDevice, EditDevice, DeleteDevice, Group } = context;

    const [credentials, setCredentials] = useState({ device_name: '', })
    const [selectId, setSelectId] = useState({ cat_id: '' })
    const [deviceId, setDeviceId] = useState({ id: "" })

    const [newDeviceName, setNewDeviceName] = useState({ device_name: "" })
    

    const [copyText, setCopyText] = useState('')

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    const editChange = (e) => {
        setNewDeviceName({ ...newDeviceName, [e.target.name]: e.target.value })
    }
    let copyButton=document.getElementById('copyBtn')

    const copyToClipboard = (cop) => {
        copy(cop);
        copyButton.removeAttribute('title','Copy id')
        copyButton.setAttribute('title','Copied')
    }

    useEffect(() => {
        getAllDevices()
        Group();
    }, [])

    let count = 1;
    

    const add = (e) => {
        e.preventDefault();
        console.log('Add function called');
        console.log(credentials);
        let { device_name } = credentials;
        let formData = new FormData();
        formData.append('cat_id', selectId.cat_id)
        formData.append('device_name', device_name)
        AddDevice(formData);
        setCredentials({device_name:""})
        setSelectId({cat_id:""});
        setTimeout(() => {
            getAllDevices();
        }, 100);
    }

    const editButton = (e) => {
        e.preventDefault()
        let formData = new FormData();
        formData.append('id', deviceId.id)
        formData.append('cat_id', selectId.cat_id)
        formData.append('device_name',credentials.device_name)
        EditDevice(formData);
        setTimeout(() => {
            getAllDevices();
        }, 100);
    }

    const deleteButton = (id) => {
        console.log(id);
        console.log('deleting');
        let formData = new FormData();
        formData.append('id', id)
        var result = window.confirm("Are you sure you want to delete this group ?");
        if (result) {
            DeleteDevice(formData);
            setTimeout(() => {
                getAllDevices();
            }, 100);
        }
    }

    return (
        <>
            {/* Modal  */}
            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Edit Device</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form onSubmit={editButton}>
                        <div className="modal-body">
                            <div className="card-body">
                                <div className="form-group">
                                    <label>Select Group Name</label>
                                    <select className="form-control" onChange={(e) => { setSelectId({ cat_id: e.target.value }) }} required>
                                    <option value="">Group Name</option>
                                        {category ? category.map((e) => {
                                            return <option key={e.cat_id} value={e.cat_id}
                                            >{e.cat_name}</option>
                                        }) : console.log('no category')}

                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1" >Enter Device Name</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" placeholder="" name='device_name' value={credentials.device_name} required onChange={handleChange} />
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
                            <div className="col-md-7" style={{ marginRight: '60px' }}>
                                <div className="card card-secondary">
                                    <div className="card-header">
                                        <h3 className="card-title">List of Devices</h3>
                                    </div>
                                    <div className="card-body p-0">
                                        <table className="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th>Serial No.</th>
                                                    <th>Device Name</th>
                                                    <th>Device Id</th>
                                                    <th></th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {devices ? devices.map((e) => {
                                                    return <tr key={e.id}>
                                                        <td>{count++}</td>
                                                        <td>{e.device_name}</td>
                                                        <td >{e.device_id}</td>
                                                        <td><span title='Copy id' id='copyBtn' className='fa fa-copy' onClick={() => {
                                                            copyToClipboard(e.device_id);
                                                            console.log(e.device_id);
                                                        }} style={{ color: "#6c6c83", cursor: 'pointer' }}
                                                        ></span></td>
                                                        <td>
                                                            <button className='btn btn-info btn-xs' style={{ marginRight: '4px' }} data-toggle="modal" data-target="#exampleModalCenter" onClick={() => {
                                                                setDeviceId({ id: e.id })
                                                                console.log(e.id)
                                                            }}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                                                                    <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                                                                </svg>
                                                            </button>
                                                            <button className='btn btn-danger btn-xs' onClick={() => {
                                                                deleteButton(e.id)
                                                            }} >
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                                                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                                                                </svg></button>
                                                        </td>
                                                    </tr>

                                                }) : console.log('djo')}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card card-info">
                                    <div className="card-header">
                                        <h3 className="card-title">Create New Device</h3>
                                    </div>
                                    <form onSubmit={add}>
                                        <div className="card-body">
                                            <div className="form-group">
                                                <label>Select Group Name</label>
                                                <select className="form-control" onChange={(e) => { setSelectId({ cat_id: e.target.value }) }} required>
                                                    <option value="">Group Name</option>
                                                    {category ? category.map((e) => {
                                                        return <option key={e.cat_id} value={e.cat_id}
                                                        >{e.cat_name}</option>
                                                    }) : console.log('no category')}

                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1" >Enter Device Name</label>
                                                <input type="text" className="form-control" id="exampleInputEmail1" placeholder="" name='device_name' required value={credentials.device_name} onChange={handleChange} />
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
