import { useState } from "react";
import { NavLink } from "react-router-dom";



function LoginForm()
{

    const [loginFormData , setLoginFormData ] = useState( {
                                                            email:"" , 
                                                            password:"" , 
                                                          })


    function changeHandler(event)
    {
        setLoginFormData ( (prevState) => { 
                                            return{ 
                                                ...prevState , 
                                                [event.target.name]:event.target.value 
                                            }
                                            
                                        })
    }


   function submitHandler(event)
   { 
       event.preventDefault() ; 

       console.log("User Login Data") ; 
       console.log(loginFormData) ; 
   }





   
    return(

        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="email">Enter Email</label>
                    <input type="text" onChange={changeHandler} name="email" id="email"></input>

                    <label htmlFor="password">Enter Password</label>
                    <input type="password" onChange={changeHandler} name="password" id="password"></input>

                </div>

                <div>
                    <button>Sign In</button>
                    <NavLink to="/forgot-password"> Forgot Password ? </NavLink>

                </div>
            </form>
        </div>
    )
}




export default LoginForm ; 