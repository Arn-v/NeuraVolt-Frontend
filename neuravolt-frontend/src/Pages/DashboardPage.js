import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";

function DashboardPage()
{

    return(
        <div>
            <Sidebar />
            <Outlet />
        </div>
    )
}


export default DashboardPage ; 