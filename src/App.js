import logo from './logo.svg';
// import './App.css';
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HandleState from './context/HandleState';
import Dashboard from './components/Dashboard';
import Register from './components/Register';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import User from './components/UserDetails/User';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Groups from './components/Groups/Groups';
import Devices from './components/Devices/Devices';
import PushButton from './components/Switches/PushButton'
import ToggleButton from './components/Switches/ToggleButton'
import Sliders from './components/Switches/Sliders'
import ColorPicker from './components/Switches/ColorPicker'
import Notification from './components/Sensors/Notification'
import Gauges from './components/Sensors/Gauges'
import Widgets from './components/Sensors/Widgets'


function App() {
  return (
    <div className="wrapper" style={{height:'100vh'}}>
      <HandleState>
        <ToastContainer/>
      <BrowserRouter>
      <Routes>   
        <Route exact path="/register"  element={<Register  />}></Route>
        <Route exact path="/login" element={<Login  />}></Route>
        <Route exact path="/forgotpassword" element={<ForgotPassword />}></Route>
        <Route exact path="/" element={<Dashboard  />}></Route>
        <Route exact path="/user" text={"User Profile"} element={<User  />}></Route>
        
        <Route exact path="/groups" element={<Groups  />}></Route>
        <Route exact path="/devices" element={<Devices  />}></Route>
        <Route exact path="/pushbutton" element={<PushButton  />}></Route>
        <Route exact path="/togglebutton" element={<ToggleButton  />}></Route>
        <Route exact path="/sliders" element={<Sliders  />}></Route>
        <Route exact path="/colorpicker" element={<ColorPicker  />}></Route>
        <Route exact path="/notification" element={<Notification  />}></Route>
        <Route exact path="/gauges" element={<Gauges  />}></Route>
        <Route exact path="/widgets" element={<Widgets  />}></Route>
        </Routes>
        </BrowserRouter>
        </HandleState>
        
<aside className="control-sidebar control-sidebar-dark">
    
    </aside>
   
    </div>
  );
}

export default App;
