import DashboardPreview from "../assets/DB prev.svg" ; 


function DashboardPreviewSection()
{

    return(

        <div className="dashboard-preview-section">


            <div className="dashboard-preview-container">
                

                <img className="dashboard-preview-img" src={DashboardPreview} alt="Dashboard Preview"></img>
                
            </div>

        </div>
    )
}

export default DashboardPreviewSection ; 