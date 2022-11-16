import React, { useContext, useEffect } from 'react'
import Logo from '../images/Smarden_01.png'
import { Link } from 'react-router-dom'
import HandleContext from '../context/HandleContext'


export default function Menu() {
  const context = useContext(HandleContext);
  
  const { userProfile, user, userDetail } = context;
  useEffect(() => {
    user()
  }, [])

  let capital=userDetail.full_name;
  let word=capital && capital.toUpperCase();
  console.log(word);

  return (
    <div>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <Link to="" className="brand-link">
          <img src={Logo} alt="Smarden" className="brand-image img-circle elevation-3" style={{ opacity: '.8', marginTop: '5px' }} />
          <span className="brand-text font-weight-light" style={{ color: 'black', fontWeight: 'bolder', fontSize: 'x-large', color: 'white' }}>SmarDen</span>
        </Link>
        <div className="sidebar">
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
            </div>
            <div className="info">
              <Link to="" className="d-block">{word && word }</Link>
            </div>
          </div>
          
          <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
              <li className="nav-item ">
                <Link to="/user" className="nav-link ">
                  <i className='nav-icon' style={{ marginRight: '10px' }}>  <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                  </svg> </i>
                  <p>
                    User Profile
                  </p>
                </Link>
              </li>

              <li className="nav-item ">
                <Link to="/" className="nav-link ">
                  <i className="nav-icon fas fa-tachometer-alt" style={{ marginRight: '10px' }} />
                  <p>
                    Dashboard
                  </p>
                </Link>
              </li>
              <li className="nav-item ">
                <Link to="/groups" className="nav-link ">
                  <i className='nav-icon' style={{ marginRight: '10px' }}><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="bi bi-collection-fill" viewBox="0 0 16 16">
                    <path d="M0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zM2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1z" />
                  </svg></i>
                  <p>
                    Groups
                  </p>
                </Link>
              </li>
              <li className="nav-item ">
                <Link to="/devices" className="nav-link ">
                  <i className='nav-icon' style={{ marginRight: '10px' }}><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="bi bi-usb-symbol" viewBox="0 0 16 16">
                    <path d="m7.792.312-1.533 2.3A.25.25 0 0 0 6.467 3H7.5v7.319a2.5 2.5 0 0 0-.515-.298L5.909 9.56A1.5 1.5 0 0 1 5 8.18v-.266a1.5 1.5 0 1 0-1 0v.266a2.5 2.5 0 0 0 1.515 2.298l1.076.461a1.5 1.5 0 0 1 .888 1.129 2.001 2.001 0 1 0 1.021-.006v-.902a1.5 1.5 0 0 1 .756-1.303l1.484-.848A2.5 2.5 0 0 0 11.995 7h.755a.25.25 0 0 0 .25-.25v-2.5a.25.25 0 0 0-.25-.25h-2.5a.25.25 0 0 0-.25.25v2.5c0 .138.112.25.25.25h.741a1.5 1.5 0 0 1-.747 1.142L8.76 8.99a2.584 2.584 0 0 0-.26.17V3h1.033a.25.25 0 0 0 .208-.389L8.208.312a.25.25 0 0 0-.416 0Z" />
                  </svg></i>
                  <p>
                    Devices
                  </p>
                </Link>
              </li>
              <li className="nav-item ">
                <Link to="" className="nav-link ">
                  <i className='nav-icon' style={{ marginRight: '10px' }}><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" class="bi bi-toggle-on" viewBox="0 0 16 16">
<path d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/>
</svg></i>
                  <p>
                    Switches
                    <i className="fas fa-angle-left right" />
                  </p>
                </Link>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="/pushbutton" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Push Button</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/togglebutton" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Toggle Button</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/sliders" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Sliders</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/colorpicker" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Color Picker</p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item ">
                <Link to="" className="nav-link ">
                  <i className='nav-icon' style={{ marginRight: '10px' }}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-soundwave" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8.5 2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-1 0v-11a.5.5 0 0 1 .5-.5zm-2 2a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zm-6 1.5A.5.5 0 0 1 5 6v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm8 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm-10 1A.5.5 0 0 1 3 7v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5zm12 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5z" />
                  </svg></i>
                  <p>
                    Sensors
                    <i className="fas fa-angle-left right" />
                  </p>
                </Link>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="/notification" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Notification</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/gauges" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Gauges</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/widgets" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Widgets</p>
                    </Link>
                  </li>

                </ul>
              </li>







            </ul>
          </nav>
        </div>
      </aside>


    </div>
  )
}
