import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import ForgotPasswordPage from "./Pages/ForgotPasswordPage";


function App() 
{ 

  return(

    <div>
        <Routes>   
            <Route path="/" element={ <HomePage/> }  />
            <Route path="/login" element={ <LoginPage/> } />
            <Route path="/signup" element={ <SignupPage/> } />

            <Route path="/forgot-password" element={ <ForgotPasswordPage/> } />

            <Route path="*" element={ <div>Page Not Found</div>} />
        </Routes>
    </div>
  )




   
}

export default App;
