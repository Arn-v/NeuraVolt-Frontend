import LoginForm from "../Components/LoginForm";
import Navbar from "../Components/Navbar";


function LoginPage()
{
    return(

        <div className="login-page">

            
            <Navbar page={"login"} />



            <LoginForm />

            LOGIN PAGE 
        </div>
    ) ; 
}

export default LoginPage ; 