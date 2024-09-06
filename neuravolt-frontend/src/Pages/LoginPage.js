import LoginForm from "../Components/LoginForm";
import Navbar from "../Components/Navbar";


function LoginPage()
{
    return(

        <div>
            <Navbar page={"login"} />


            <LoginForm />

            LOGIN PAGE 
        </div>
    ) ; 
}

export default LoginPage ; 