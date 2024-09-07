import HeroSection from "../Components/HeroSection";
import Navbar from "../Components/Navbar";
import FAQsection from "../Components/FAQsection" ; 



function HomePage()
{
    return(

        <div>

            <Navbar page={"home"}/>


            <HeroSection />

            <FAQsection />


            HOMEPAGE 

        </div>

    ) ; 

    
}


export default HomePage ; 
