import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import ContactPage from "./Pages/ContactPage";


function App() 
{ 

  return(

    <div>
        <Routes>   
            <Route path="/" element={ <HomePage/> }  />
            <Route path="/login" element={ <LoginPage/> } />
            <Route path="/contact-sales" element={<ContactPage/> } />

            <Route path="*" element={ <div>Page Not Found</div>} />
        </Routes>
    </div>
  )




   
}

export default App;
