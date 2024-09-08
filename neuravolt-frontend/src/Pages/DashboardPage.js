import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";

function DashboardPage()
{

    return(
        <div className="dashboard-page">
            <Sidebar />
            <Outlet />
        </div>
    )
}


export default DashboardPage ; 