import HeroSection from "../Components/HeroSection";
import Navbar from "../Components/Navbar";
import FAQsection from "../Components/FAQsection" ; 
import DashboardPreviewSection from "../Components/DashboardPreviewSection";



function HomePage()
{
    return(

        <div>

            <Navbar page={"home"}/>


            <HeroSection />


            <DashboardPreviewSection />


            <FAQsection />


        </div>

    ) ; 

    
}


export default HomePage ; 
