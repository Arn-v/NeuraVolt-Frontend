import { useState } from "react";
import { NavLink } from "react-router-dom";



function SignupForm()
{

    const [ signupFormData , setSignupFormData ] = useState( { firstName:"" , 
                                                               lastName:"" , 
                                                               email:"" , 
                                                               UserId:"" , 
                                                               password:"" , 
                                                               confirmPassword:"" , 
                                                             }
                                                           )


   // event handler function to UPDATE the state of form (state variable) parallely whenever any kind of i/p ( change) in our fields 
    function changeHandler(event)
    {
       setSignupFormData ( ( prevState) => {
                                                return {  
                                                    ...prevState , 

                                                    [event.target.name]:event.target.value     // update with new value in our signupFormData for  which input field change occurred 

                                                    //(no checkbox field so no validation)
                                             }
                                        })

    }


    function submitHandler(event){
        event.preventDefault() ;

        console.log("User SignUp Data") ; 
        console.log(signupFormData) ; 

    }



    return(

        <div>

            <form onSubmit={submitHandler}>    

                <div>
                    <label htmlFor="first-name" >First Name</label>
                    <input type="text" onChange={changeHandler} name="firstName" id="first-name" ></input>

                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" onChange={changeHandler} name="lastName" id="last-name" ></input>

                    <label htmlFor="email">Email</label>
                    <input type="text" onChange={changeHandler} name="email" id="email" ></input>

                    <label htmlFor="user-id">Gov ID</label>
                    <input type="text" onChange={changeHandler} name="UserId" id="user-id" ></input>

                    <label htmlFor="password">Enter Password</label>
                    <input type="password" onChange={changeHandler} name="password" id="password" ></input>

                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input type="password" onChange={changeHandler} name="confirmPassword" id="confirm-password" ></input>


                </div>


                <div>
                    <button >Sign Up</button>
                    <p>Already a Member ? <NavLink to="/login">Log in</NavLink> </p>
                </div>



            </form>

        </div>

    )
}



export default SignupForm ; 