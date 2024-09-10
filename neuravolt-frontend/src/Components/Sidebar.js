import box from "../assets/sidebar/box.svg" ; 
import home from "../assets/sidebar/home (1).svg"
import predictions from "../assets/sidebar/file-text.svg" ; 
import anaytics from "../assets/sidebar/layers.svg" ;  
import consumerReport from "../assets/sidebar/sliders.svg"  ; 
import weather from "../assets/sidebar/Cloud.svg" ; 
import contactUs from "../assets/sidebar/Mail.svg" ; 
import profile from "../assets/sidebar/User.svg" ; 
import setting from "../assets/sidebar/settings.svg" ; 
import nvIcon from "../assets/logo.svg" ; 
import bolt from "../assets/blueBolt.svg" ; 
import { FaRegSmileBeam } from "react-icons/fa";
import { RiKey2Fill } from "react-icons/ri";


import { NavLink } from "react-router-dom";
import { useState } from "react";


function Sidebar()
{

    const [open , setOpen ] = useState(true) ;

    function sidebarHandler(){
        setOpen(!open) ; 
        console.log(open) ; 
    }



    return(
        <div className="sidebar">





            <div className="logo-container">
                {/* <img src={bolt} alt="bolt"></img> */}
                <img  className="nv-icon" src={nvIcon} alt="neuravolt"></img>
            </div>




            {/* <div className="toggle-container">
                <button onClick={sidebarHandler} className="sidebar-toggle-btn" >-</button>
            </div> */}






            <div className="service-content-container contents">

                <NavLink to="">
                    <div className="sidebar-item service">
                            <img id="home-icon" src={home} alt="home"></img>
                            <p>Home</p>

                    </div>
                </NavLink>

                <NavLink to="inbox">
                    <div className="sidebar-item service">
                            <img src={box} alt="box"></img>
                            <p>Inbox</p>

                    </div>
                </NavLink>


                <NavLink to="predictions">
                    <div className="sidebar-item service">
                            <img src={predictions} alt="pred"></img>
                            <p>Predictions</p>

                    </div>
                </NavLink>

                <NavLink to="analytics">
                    <div className="sidebar-item service">
                            <img src={anaytics} alt="analytics"></img>
                            <p>Analytics</p>

                    </div>
                </NavLink>


                <NavLink to="consumer-reports">
                    <div className="sidebar-item service">
                            <img src={consumerReport} alt="cr"></img>
                            <p>Consumer Report</p>

                    </div>
                </NavLink>

                <NavLink to="weather-impact-analysis">
                    <div className="sidebar-item service">
                            <img src={weather} alt="weather"></img>
                            <p>Weather Impact</p>

                    </div>
                </NavLink>

                <NavLink to="api-key">
                    <div className="sidebar-item service">
                            <RiKey2Fill  className="key-icon"/>
                            <p>API Keys</p>

                    </div>
                </NavLink>



            </div>






            <div className="help-content-container contents">

                <NavLink to="">
                        <div className="sidebar-item help">
                                <img src={contactUs} alt=""></img>
                                <p>Contact Us</p>

                        </div>
                </NavLink>

                
                <NavLink to="profile">
                        <div className="sidebar-item help">
                                <img src={profile} alt=""></img>
                                <p>Profile</p>

                        </div>
                </NavLink>


                
                <NavLink to="settings">
                        <div className="sidebar-item help">
                                <img src={setting} alt=""></img>
                                <p>Settings</p>

                        </div>
                </NavLink>






            </div>





            <div className="profile-container">
                <div><FaRegSmileBeam size={30} className="profile-icon" /></div>

                <div className="profile-text">
                    <p>Arnav Singh</p>
                    <p>arnv15@neura.com</p>
                </div>
            </div>





        </div>
    )
}


export default Sidebar ; 