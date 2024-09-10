import ContactSalesForm from "../Components/ContactSalesForm";
import Navbar from "../Components/Navbar";


function ContactSalesPage()
{

    return(
        <div className="contact-sales-page">


            <Navbar page={"contact-sales"} />


            <div className="contact-sales-section">

                {/* <div className="lets-talk-container">LETS TALK</div> */}



                <div className="contact-sales-form-container">

                    <h2>Contact Us</h2>

                    <ContactSalesForm />

                </div>


            </div>


        </div>
    )


}


export default ContactSalesPage ; 