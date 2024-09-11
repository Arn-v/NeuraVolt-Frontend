import ContactSalesForm from "../Components/ContactSalesForm";
import Navbar from "../Components/Navbar";


function ContactSalesPage()
{

    return(
        <div className="contact-sales-page">


            <Navbar page={"contact-sales"} />


            <div className="contact-sales-section">

                <div className="lets-talk-container">

                    <h1>Let<span>’</span>s Talk </h1>

                    <p>If you have any questions about the subscription or our products. Contact our team by filling out the form.</p>

                    <div className="contact-btn-container">

                        <button className="call-us-btn">
                            <p>Call Us :</p>
                            <p>987654321</p>
                        </button>

                        <button className="email-us-btn">
                            <p>Email Us :</p>
                            <p>neuravolt06@gmail.com</p>
                        </button>

                    </div>
                    
                </div>



                <div className="contact-sales-form-container">

                    {/* <h2>Contact Us</h2> */}

                    <ContactSalesForm />

                </div>


            </div>


        </div>
    )


}


export default ContactSalesPage ; 