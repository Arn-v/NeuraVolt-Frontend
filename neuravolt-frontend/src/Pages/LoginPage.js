import LoginForm from "../Components/LoginForm";
import Navbar from "../Components/Navbar";


function LoginPage()
{
    return(

        <div className="login-page">

            
            <Navbar page={"login"} />


            <div className="login-section">

                <LoginForm />

            </div>



        </div>
    ) ; 
}

export default LoginPage ; 