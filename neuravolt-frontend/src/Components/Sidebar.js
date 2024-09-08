import box from "../assets/sidebar/box.svg" ; 
import home from "../assets/sidebar/home.svg" ; 
import predictions from "../assets/sidebar/file-text.svg" ; 
import anaytics from "../assets/sidebar/layers.svg" ;  
import consumerReport from "../assets/sidebar/sliders.svg"  ; 
import weather from "../assets/sidebar/Cloud.svg" ; 
import contactUs from "../assets/sidebar/Mail.svg" ; 
import profile from "../assets/sidebar/User.svg" ; 
import setting from "../assets/sidebar/settings.svg" ; 
import { NavLink } from "react-router-dom";


function Sidebar()
{

    return(
        <div className="sidebar">







            <div className="logo-container"></div>




            <div className="burger-container"></div>






            <div className="service-content-container">

                <NavLink to="">
                    <div className="sidebar-item service">
                            <img src={home} alt="home"></img>
                            <p>Home</p>

                    </div>
                </NavLink>

                <NavLink to="">
                    <div className="sidebar-item service">
                            <img src={box} alt="box"></img>
                            <p>Inbox</p>

                    </div>
                </NavLink>


                <NavLink to="">
                    <div className="sidebar-item service">
                            <img src={predictions} alt="pred"></img>
                            <p>Predictions</p>

                    </div>
                </NavLink>

                <NavLink to="">
                    <div className="sidebar-item service">
                            <img src={anaytics} alt="analytics"></img>
                            <p>Analytics</p>

                    </div>
                </NavLink>


                <NavLink to="">
                    <div className="sidebar-item service">
                            <img src={consumerReport} alt="cr"></img>
                            <p>Consumer Report</p>

                    </div>
                </NavLink>

                <NavLink to="">
                    <div className="sidebar-item service">
                            <img src={weather} alt="weather"></img>
                            <p>Weather Impact Analysis</p>

                    </div>
                </NavLink>

                <NavLink to="">
                    <div className="sidebar-item service">
                            <img src={null} alt="key"></img>
                            <p>API Keys</p>

                    </div>
                </NavLink>



            </div>






            <div className="help-content-container">

                <NavLink to="">
                        <div className="sidebar-item help">
                                <img src={contactUs} alt=""></img>
                                <p>Contact Us</p>

                        </div>
                </NavLink>

                
                <NavLink to="">
                        <div className="sidebar-item help">
                                <img src={profile} alt=""></img>
                                <p>Profile</p>

                        </div>
                </NavLink>


                
                <NavLink to="">
                        <div className="sidebar-item help">
                                <img src={setting} alt=""></img>
                                <p>Settings</p>

                        </div>
                </NavLink>






            </div>





            <div className="profile-container"></div>





        </div>
    )
}


export default Sidebar ; 