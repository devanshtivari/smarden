import React from 'react'
import Menu from '../Menu'
import Header from '../Header'
import HandleContext from '../../context/HandleContext'
import { useContext, useEffect, useState } from 'react'
import { Typography, TextField, Box, Button } from '@mui/material'
import swal from 'sweetalert';



export default function Groups() {

    const context = useContext(HandleContext);
    const { Group, category, AddCategory, EditCategory, DeleteCategory } = context;
    const [credentials, setCredentials] = useState({ addCategory: "" })
    
    const [groupId, setGroupId] = useState({ id: "" })

    const initialState = { addCategory: "" }

    const clearState = () => {
        setCredentials({ ...initialState });
    };

    let count = 1;

    useEffect(() => {
        Group();
    }, [])

    useEffect(() => {
        Group();
    }, [])

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    

    const handleClick = (e) => {
        e.preventDefault();
        console.log(credentials);
        let { addCategory } = credentials
        let formData = new FormData();
        formData.append('cat_name', addCategory)
        AddCategory(formData)
        console.log(addCategory);
        setCredentials({addCategory:""})
        clearState();
        setTimeout(() => {   
            Group();
        }, 200);
    }

    const editButton = async (e) => {
        e.preventDefault()
        let formData = new FormData();
        console.log(groupId.id);
        console.log(credentials.addCategory);
        formData.append('cat_id', groupId.id)
        formData.append('cat_name',credentials.addCategory)
        EditCategory(formData);
        setTimeout(() => {   
            Group();
        }, 200);
    }

    const deleteButton = (id) => {
        console.log(id);
        console.log('deleting');
        let formData = new FormData();
        formData.append('cat_id', id)
        var result = window.confirm("Are you sure you want to delete this group ?");
        if (result) {
            DeleteCategory(formData);
            setTimeout(() => {   
                Group();
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
                            <h5 className="modal-title" id="exampleModalLongTitle">Edit Device</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form onSubmit={editButton}>
                        <div className="modal-body">
                            <div className="card-body">
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Enter Group Name</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" placeholder="" name='addCategory' value={credentials.addCategory} onChange={handleChange} required />
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary">Save changes</button>
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
                            <div classname="col-md-6" style={{ width: '40%', marginRight: '70px', marginLeft: '20px' }}>
                                <div className="card card-secondary">
                                    <div className="card-header">
                                        <h3 className="card-title">Groups</h3>
                                    </div>
                                    <div className="card-body p-0">
                                        <table className="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th>Serial No.</th>
                                                    <th>Group Name</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {category ? category.map((e) => {
                                                    return <tr key={e.cat_id}>
                                                        <td>{count++}</td>
                                                        <td>{e.cat_name}</td>
                                                        <td>
                                                            <button className='btn btn-info btn-xs' style={{ marginRight: '4px' }} data-toggle="modal" data-target="#exampleModalCenter" onClick={() => {
                                                        setGroupId({ id: e.cat_id })
                                                        console.log(e.cat_id)
                                                    }}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                                                                    <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                                                                </svg>
                                                            </button>
                                                            <button className='btn btn-danger btn-xs' onClick={() => {
                                                                deleteButton(e.cat_id)
                                                            }}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                                                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                                                                </svg></button>
                                                        </td>

                                                        {/* Modal  */}
                                                    </tr>

                                                }) : console.log('djo')}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="card card-info">
                                    <div className="card-header">
                                        <h3 className="card-title">Create Group</h3>
                                    </div>
                                    <form onSubmit={handleClick}>
                                        <div className="card-body">
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">Enter Group Name</label>
                                                <input type="text" className="form-control" id="exampleInputEmail1" placeholder="" name='addCategory' value={credentials.addCategory} onChange={handleChange} required />
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
