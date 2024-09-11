import { NavLink } from "react-router-dom";


function DashboardHome()
{

    return(
        <div>
            {/* <h2>DASHBOARD HOME </h2> */}

            <div class="cooking-container">

                <h1>Cooking Our Website</h1>

                <p>We are going to launch our Product Very Soon. Stay Tuned.</p>

                <NavLink to="" className="btn">Beta Version</NavLink>

            </div>


        </div>
    )
}


export default DashboardHome ; 