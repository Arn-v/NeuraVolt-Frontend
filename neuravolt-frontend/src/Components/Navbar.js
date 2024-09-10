import { NavLink, useNavigate } from "react-router-dom";
import neuravoltLogo from "../assets/logo.svg" ; 
import { FiUser } from "react-icons/fi";






function Navbar( {page})
{

    const navigate = useNavigate() ; 

    function contactClickHandler(){
       navigate('/contact-sales') ; 
    }


    function loginClickHandler(){ 
        navigate("/login") ; 
    }







    return(

        <nav>
            <div className="navbar">


               <div className="nav-container">

                    <div className="logo-container">
                        <NavLink to="/"><img src={neuravoltLogo} className="nv-logo" alt="NeuraVolt Logo"></img></NavLink>             
                    </div>

                    <div className="nav-links">
                        <NavLink className="nav-link" to="">Products</NavLink>
                        <NavLink className="nav-link" to=""> Pricing </NavLink>
                        <NavLink className="nav-link" to=""> About Us </NavLink>
                        {/* <NavLink className="nav-link" to=""> Contact Us </NavLink> */}
                    </div>


                    <div className="nav-btn-container">
                        { 
                        page==="home" ? ( <><button className="contact-btn nav-btn"  onClick={contactClickHandler}>Contact Sales</button>   <button className="login-btn nav-btn" onClick={loginClickHandler}> <FiUser className="user-icon" size={17}/> <span>Log In</span></button> </> ) 
                                        : page==="contact-sales" ? <button className="login-btn nav-btn" onClick={loginClickHandler}><FiUser size={19}/> <span id="login-only">Log In</span></button>  : <button className="contact-btn nav-btn" onClick={contactClickHandler}>Contact Sales</button> 
                                    
                        }

                        {/* <button onClick={signupClickHandler}>Sign Up</button> 
                        <button onClick={loginClickHandler}>Log In</button>  */}

                    </div>

                </div>

            </div>

        </nav>
    )


}


export default Navbar ; 