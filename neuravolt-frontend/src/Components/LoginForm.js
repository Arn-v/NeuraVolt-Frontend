import { useState } from "react";
import { NavLink } from "react-router-dom";



function LoginForm()
{

    const [loginFormData , setLoginFormData ] = useState( {
                                                            email:"" , 
                                                            neuraKey:"" , 
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

                    <div>
                        <label htmlFor="email">Enter Email</label>
                        <input type="text" onChange={changeHandler} name="email" id="email"></input>
                    </div>
                    

                    <div>
                        <label htmlFor="neura-key">Enter NeuraKey</label>
                        <input type="password" onChange={changeHandler} name="neuraKey" id="neura-key"></input>
                    </div>

                </div>

                <div>
                    <button>Sign In</button>
                    <NavLink to="/forgot-neurakey"> Forgot NeuraKey ? </NavLink>

                </div>
            </form>
        </div>
    )
}




export default LoginForm ; 