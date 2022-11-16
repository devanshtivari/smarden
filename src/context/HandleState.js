import React, { useState } from 'react'
import HandleContext from './HandleContext';
import axios from 'axios';
import Cookies from 'js-cookie'
import { toast } from 'react-toastify';


export default function HandleState(props) {

    const [userDetail, setUserDetail] = useState([])
    const [error, setError] = useState()
    const [success, setSuccess] = useState()
    const [category, setcategory] = useState([])
    const [response, setResponse] = useState()
    const [devices, setDevices] = useState([])
    const [switches, setSwitches] = useState([])
    const [toggleButton, setToggleButton] = useState([])
    const [sliders, setSliders] = useState([])
    const [colorPicker, setColorPicker] = useState([])
    const [notifications, setNotifications] = useState([])
    const [gauzes, setgauzes] = useState([])
    const [widgets, setWidgets] = useState([])

    let config = {
        headers: {
            'content-type': 'multipart/form-data',
            'Client-Service': 'smardenAPP',
            'Auth-Key': '256901zrAAZpqf67j4UyYF2Sqzo',
            "uid": Cookies.get('id'),
            "token": Cookies.get('num')
        }
    }
    let config2 = {
        'content-type': 'application/json',
        'Client-Service': 'smardenAPP',
        'Auth-Key': '256901zrAAZpqf67j4UyYF2Sqzo',
        "uid": Cookies.get('id'),
        "token": Cookies.get('num')
    }

    const url = 'https://iot.smarden.tech/api'

    let Register = (formData) => {
        axios.post(`https://login.smarden.tech/api/login/register`, formData, config).then((response) => {
            console.log(response);
            console.log(response.data.message);
            if (response.data.status == 200) {
                console.log(response.data.status);
                setSuccess(true);
            }
            toast.success(response.data.message)
           
        }).catch((e) => {
            console.log(e);
            
            console.log(e.response.data.message);
            setSuccess(false)
            toast.error(e.response.data.message)
        })
    }

    let ForgotPassword = (formData) => {
        axios.post(`http://iot.smarden.tech/api/login/forgotpassword`, formData, config).then((res) => {
            console.log(res);
            console.log(res.response.data);

        }).catch((e) => {
            console.log(e);
            console.log(e.response.data.status);
        
                toast.error(e.response.data.message)
        
        })
    }

    let user = async () => {
        const response = await fetch(`${url}/user/profile`, {
            method: "POST",
            headers: config2
        })
        const json = await response.json();
        console.log(json);
        setUserDetail(json.data.user)
        console.log(json.data.user);
    }

    const Group = async () => {
        const response = await fetch(`${url}/category/index`, {
            method: "POST",
            headers: config2
        })
        const json = await response.json();
        console.log(json);
        if (json.status == 200) {
            setcategory(json.data.category)
            console.log(json.data.category);
        }

    }
    
    const AddCategory = (formData) => {
        axios.post(`${url}/category/add`, formData, config).then((response) => {
            console.log(response);
        }).catch((e) => {
            console.log(e);
            toast.error(e.response.data.message)
        })
    }

    const EditCategory = (formData) => {
        axios.post(`${url}/category/edit`, formData, config).then((response) => {
            console.log(response);
        }).catch((e) => {
            console.log(e);
            toast.error(e.response.data.message)
        })
    }
    
    const DeleteCategory = (formData) => {    
        axios.post(`${url}/category/remove`, formData, config).then((response) => {
            console.log(response);
        }).catch((e) => {
            console.log(e);
            toast.error(e.response.data.message)
        })
    }

    const ChangePassword=(formData)=>{
        axios.post(`${url}/user/change_password`, formData, config).then((response) => {
            console.log('res');
            console.log(response);
            console.log(response.data.message);
            setResponse(response.data.message)
            toast.success(response.data.message)
            setSuccess(true)
        }).catch((e) => {
            console.log('e');
            console.log(e);
            console.log(e.response.data.message);
            setResponse(e.response.data.message)
            toast.error(e.response.data.message)
            setSuccess(false)
        })
    }

    const getAllDevices=async()=>{
        const response = await fetch(`${url}/device/index`, {
            method: "POST",
            headers: config2
        })
        const json = await response.json();
        setDevices(json.data.devices)
        console.log(json);
    }

    const AddDevice = (formData) => {
        axios.post(`${url}/device/add`, formData, config).then((response) => {
            console.log(response);
        }).catch((e) => {
            console.log(e);
            toast.error(e.response.data.message)
        })
    }

    const EditDevice = (formData) => {
        
        axios.post(`${url}/device/edit`, formData, config).then((response) => {
            
            console.log(response);
        }).catch((e) => {
            console.log(e);
            toast.error(e.response.data.message)
        })
    }

    const DeleteDevice = (formData) => {    
        axios.post(`${url}/device/remove`, formData, config).then((response) => {
            console.log(response);
            console.log(response.data.message);
        }).catch((e) => {
            console.log(e);
            console.log(e.response.data.message);
            toast.error(e.response.data.message)
        })
    }

    const GetPushButton = async () => {
        const response = await fetch(`${url}/switches/push_buttons`, {
            method: "POST",
            headers: config2
        })
        const json = await response.json();
        console.log(json);
       setSwitches(json.data.switches)
    }

    const AddPushButton = (formData) => {
        axios.post(`${url}/switches/addpushbutton`, formData, config).then((response) => {
            console.log(response);
        }).catch((e) => {
            console.log(e);
            toast.error(e.response.data.message)
        })
    }

    const EditPushButton = (formData) => {
        axios.post(`${url}/switches/editPushButton`, formData, config).then((response) => {
            console.log(response);
        }).catch((e) => {
            console.log(e);
            toast.error(e.response.data.message)
        })
    }

    const DeletePushButton = (formData) => {
        axios.post(`${url}/switches/removePushButton`, formData, config).then((response) => {
            console.log(response);
        }).catch((e) => {
            console.log(e);
            toast.error(e.response.data.message)
        })
    }

    const GetToggleButton = async () => {
        const response = await fetch(`${url}/switches/toggle_buttons`, {
            method: "POST",
            headers: config2
        })
        const json = await response.json();
        console.log(json);
       setToggleButton(json.data.switches)
    }

    const AddToggleButton = (formData) => {
        axios.post(`${url}/switches/addtogglebutton`, formData, config).then((response) => {
            console.log(response);
        }).catch((e) => {
            console.log(e);
            toast.error(e.response.data.message)
        })
    }

    const EditToggleButton = (formData) => {
        axios.post(`${url}/switches/edittogglebutton`, formData, config).then((response) => {
            console.log(response);
        }).catch((e) => {
            console.log(e);
            toast.error(e.response.data.message)
        })
    }

    const DeleteToggleButton = (formData) => {
        axios.post(`${url}/switches/removetogglebutton`, formData, config).then((response) => {
            console.log(response);
        }).catch((e) => {
            console.log(e);
            toast.error(e.response.data.message)
        })
    }

    const GetSliders = async () => {
        const response = await fetch(`${url}/switches/sliders`, {
            method: "POST",
            headers: config2
        })
        const json = await response.json();
        console.log(json);
      setSliders(json.data.switches);
    }

    const AddSlider= (formData) => {
        axios.post(`${url}/switches/addslider`, formData, config).then((response) => {
            console.log(response);
        }).catch((e) => {
            console.log(e);
            toast.error(e.response.data.message)
        })
    }

    const EditSlider = (formData) => {
        axios.post(`${url}/switches/editslider`, formData, config).then((response) => {
            console.log(response);
        }).catch((e) => {
            console.log(e);
            toast.error(e.response.data.message)
        })
    }

    const DeleteSlider = (formData) => {
        axios.post(`${url}/switches/removeslider`, formData, config).then((response) => {
            console.log(response);
        }).catch((e) => {
            console.log(e);
            toast.error(e.response.data.message)
        })
    }

    const GetColorPicker = async () => {
        const response = await fetch(`${url}/switches/colorpickers`, {
            method: "POST",
            headers: config2
        })
        const json = await response.json();
        console.log(json);
      setColorPicker(json.data.switches);
    }

    const AddColorPicker= (formData) => {
        axios.post(`${url}/switches/addcolorpicker`, formData, config).then((response) => {
            console.log(response);
        }).catch((e) => {
            console.log(e);
            toast.error(e.response.data.message)
        })
    }

    const EditColorPicker = (formData) => {
        axios.post(`${url}/switches/editcolorpicker`, formData, config).then((response) => {
            console.log(response);
        }).catch((e) => {
            console.log(e);
            toast.error(e.response.data.message)
        })
    }

    const DeleteColorPicker = (formData) => {
        axios.post(`${url}/switches/removecolorpicker`, formData, config).then((response) => {
            console.log(response);
        }).catch((e) => {
            console.log(e);
            toast.error(e.response.data.message)
        })
    }

    const GetNotifications = async () => {
        const response = await fetch(`${url}/sensors/notification`, {
            method: "POST",
            headers: config2
        })
        const json = await response.json();
        console.log(json);
       setNotifications(json.data.switches)
    }

    const AddNotification= (formData) => {
        axios.post(`${url}/sensors/addnotification`, formData, config).then((response) => {
            console.log(response);
        }).catch((e) => {
            console.log(e);
            toast.error(e.response.data.message)
        })
    }

    const EditNotification = (formData) => {
        axios.post(`${url}/sensors/editnotification`, formData, config).then((response) => {
            console.log(response);
        }).catch((e) => {
            console.log(e);
            toast.error(e.response.data.message)
        })
    }

    const DeleteNotification = (formData) => {
        axios.post(`${url}/sensors/removenotification`, formData, config).then((response) => {
            console.log(response);
        }).catch((e) => {
            console.log(e);
            toast.error(e.response.data.message)
        })
    }

    const GetGauze = async () => {
        const response = await fetch(`${url}/sensors/gauze`, {
            method: "POST",
            headers: config2
        })
        const json = await response.json();
        console.log(json);
       setgauzes(json.data.switches)
    }

    const AddGauze= (formData) => {
        axios.post(`${url}/sensors/addgauze`, formData, config).then((response) => {
            console.log(response);
        }).catch((e) => {
            console.log(e);
            toast.error(e.response.data.message)
        })
    }

    const EditGauze = (formData) => {
        axios.post(`${url}/sensors/editgauze`, formData, config).then((response) => {
            console.log(response);
        }).catch((e) => {
            console.log(e);
            toast.error(e.response.data.message)
        })
    }

    const DeleteGauze = (formData) => {
        axios.post(`${url}/sensors/removegauze`, formData, config).then((response) => {
            console.log(response);
        }).catch((e) => {
            console.log(e);
            toast.error(e.response.data.message)
        })
    }
    const GetWidget = async () => {
        const response = await fetch(`${url}/sensors/widget`, {
            method: "POST",
            headers: config2
        })
        const json = await response.json();
        console.log(json);
       setWidgets(json.data.switches)
    }

    const AddWidget= (formData) => {
        axios.post(`${url}/sensors/addwidget`, formData, config).then((response) => {
            console.log(response);
        }).catch((e) => {
            console.log(e);
            toast.error(e.response.data.message)
        })
    }

    const EditWidget = (formData) => {
        axios.post(`${url}/sensors/editwidget`, formData, config).then((response) => {
            console.log(response);
        }).catch((e) => {
            console.log(e);
            toast.error(e.response.data.message)
        })
    }

    const DeleteWidget = (formData) => {
        axios.post(`${url}/sensors/removewidget`, formData, config).then((response) => {
            console.log(response);
        }).catch((e) => {
            console.log(e);
            toast.error(e.response.data.message)
        })
    }

    return (
        <HandleContext.Provider value={{ Register, ForgotPassword, Group, AddCategory,EditCategory,DeleteCategory, user, ChangePassword,getAllDevices,AddDevice,EditDevice,DeleteDevice,GetPushButton,AddPushButton,EditPushButton,DeletePushButton,GetToggleButton,AddToggleButton,EditToggleButton,DeleteToggleButton,GetSliders,AddSlider,EditSlider,DeleteSlider,GetColorPicker,AddColorPicker,EditColorPicker,DeleteColorPicker,GetNotifications,AddNotification,EditNotification,DeleteNotification,GetGauze,AddGauze,EditGauze,DeleteGauze,GetWidget,AddWidget,EditWidget,DeleteWidget,devices,userDetail, success, category ,response,switches,toggleButton,sliders,colorPicker,notifications,gauzes,widgets}}>
            {props.children}
        </HandleContext.Provider>
    )
}
