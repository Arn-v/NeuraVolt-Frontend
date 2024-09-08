import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import ContactPage from "./Pages/ContactPage";
import DashboardPage from "./Pages/DashboardPage";
import Inbox from "./Pages/Dashboard/Inbox";
import Predictions from "./Pages/Dashboard/Predictions";
import Analytics from "./Pages/Dashboard/Analytics";
import DashboardHome from "./Pages/Dashboard/DashboardHome";
import ConsumerReports from "./Pages/Dashboard/ConsumerReports";
import WeatherAnalysis from "./Pages/Dashboard/WeatherAnalysis";
import Profile from "./Pages/Dashboard/Profile";
import Settings from "./Pages/Dashboard/Settings";
import APIkey from "./Pages/Dashboard/APIkey";


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
              <Route path="consumer-reports" element={<ConsumerReports />}  />
              <Route path="weather-impact-analysis" element={<WeatherAnalysis />}  />
              <Route path="api-key" element={<APIkey />} />
              <Route path="profile" element={<Profile />}  />
              <Route path="settings" element={<Settings />} />

            </Route>

            <Route path="*" element={ <div>Page Not Found</div>} />
        </Routes>
    </div>
  )




   
}

export default App;
