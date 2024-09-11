import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";

function DashboardPage()
{

    return(
        <div className="dashboard-page">

            <Sidebar />

            <div className="dashboard-view">
                <Outlet />
            </div>

        </div>
    )
}


export default DashboardPage ; 