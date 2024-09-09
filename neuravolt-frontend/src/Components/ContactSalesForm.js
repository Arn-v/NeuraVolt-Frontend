import { useState } from "react";



function ContactSalesForm()
{
    const [contactSalesFormData , setContactSalesFormData ] = useState( {
                                                                            name: "" , 
                                                                            organization: "" , 
                                                                            businessEmail: "" , 
                                                                            phoneNumber: "" , 
                                                                            contactMessage: "" , 
                                                                        })



    function changeHandler(event)
    {
        setContactSalesFormData ( (prevState) => { 
                                            return{ 
                                                ...prevState , 
                                                [event.target.name]:event.target.value 
                                                //no checkbox type input field... so no validation 
                                            }
                                            
                                        })
    }


    // event handler - arrow 
    const submitHandler = (event) => {
        event.preventDefault() ; 

        console.log("Contact Sales Form Data") ; 
        console.log(contactSalesFormData) ; 

    }


    





    return(

        <div>
            <form onSubmit={submitHandler} className="contact-sales-form">

                <div className="contact-fields-container">

                    <div className="input-container" >
                        <label htmlFor="name">Name</label>
                        <input type="text" onChange={changeHandler} name="name" value={contactSalesFormData.name} id="name"></input>
                    </div>

                    <div className="input-container">
                        <label htmlFor="organization">Organization</label>
                        <input type="text" onChange={changeHandler} name="organization" value={contactSalesFormData.organization}  id="organization"></input>
                    </div>

                    <div>
                        <div>
                            <label htmlFor="business-email">Business Email</label>
                            <input type="text" onChange={changeHandler} name="businessEmail" value={contactSalesFormData.businessEmail} id="business-email"></input>
                        </div>

                        <div>
                            <label htmlFor="phone-number">Phone Number</label>
                            <input type="text" onChange={changeHandler} name="phoneNumber" value={contactSalesFormData.phoneNumber} id="phone-number"></input>
                        </div>
                    </div>

                    <div className="input-container">
                        <label htmlFor="message">How can we help ?</label>
                        {/* <input type="text" onChange={changeHandler} name="contactMessage" value={contactSalesFormData.contactMessage} id="message"></input> */}
                        <textarea type="text" onChange={changeHandler} name="contactMessage" value={contactSalesFormData.contactMessage} id="message"> </textarea>
                    </div>

                </div>

                <div className="contact-btn-container">
                    <button>Submit</button>

                </div>

            </form>

        </div>
    )
}


export default ContactSalesForm ; 