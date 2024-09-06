import { NavLink, useNavigate } from "react-router-dom";
import neuravoltLogo from "../assets/logo.svg" ; 



function Navbar( {page})
{

    const navigate = useNavigate() ; 

    function signupClickHandler(){
       navigate('/signup') ; 
    }


    function loginClickHandler(){ 
        navigate("/login") ; 
    }







    return(

        <nav>
            <div className="navbar">


               <div className="nav-container">

                    <div className="logo-container">
                        <NavLink to="/"><img src={neuravoltLogo} alt="NeuraVolt Logo"></img></NavLink>             
                    </div>

                    <div className="nav-links">
                        <NavLink className="nav-link" to=""> Solutions </NavLink>
                        <NavLink className="nav-link" to=""> Pricing </NavLink>
                        <NavLink className="nav-link" to=""> About Us </NavLink>
                        <NavLink className="nav-link" to=""> Contact Us </NavLink>
                    </div>


                    <div className="nav-btn-container">
                        { 
                        page==="home" ? ( <><button className="signup-btn nav-btn"  onClick={signupClickHandler}>Sign Up</button>   <button className="login-btn nav-btn" onClick={loginClickHandler}>Log In</button> </> ) 
                                        : page==="signup" ? <button className="login-btn nav-btn" onClick={loginClickHandler}>Log In</button>  : <button className="signup-btn nav-btn" onClick={signupClickHandler}>Sign Up</button> 
                                        
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