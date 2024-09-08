import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import ContactPage from "./Pages/ContactPage";
import DashboardPage from "./Pages/DashboardPage";
import Inbox from "./Pages/Dashboard/Inbox";
import Predictions from "./Pages/Dashboard/Predictions";
import Analytics from "./Pages/Dashboard/Analytics";
import DashboardHome from "./Pages/Dashboard/DashboardHome";


function App() 
{ 

  return(

    <div>
        <Routes>   
            <Route path="/" element={ <HomePage/> }  />
            <Route path="/login" element={ <LoginPage/> } />
            <Route path="/contact-sales" element={<ContactPage/> } />

            <Route path="/dashboard" element={<DashboardPage/> }>

              <Route index element={<DashboardHome />} />
              <Route path="inbox" element={ <Inbox/> }  />
              <Route path="predictions" element={<Predictions />}  />
              <Route path="analytics" element={<Analytics />}  />
              {/* <Route path="/consumer-reports" element=  />
              <Route path="/weather" element=  />
              <Route path="/api-keys" element=  />
              <Route path="/contact-us" element=  />
              <Route path="/profile" element=  />
              <Route path="/aetting" element=  /> */}

            </Route>

            <Route path="*" element={ <div>Page Not Found</div>} />
        </Routes>
    </div>
  )




   
}

export default App;
