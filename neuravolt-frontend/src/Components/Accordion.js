import { useState } from "react";
// import down from "../assets/chevron-down.svg" ; 
// import up from "../assets/Chevron up.svg" ; 
import down from "../assets/chevron-down.svg" ; 
import up from "../assets/Chevron up.svg" ; 

function Accordion( {question , answer })
{

    const [accordionOpen , setAccordianOpen ] = useState(false)  ;

    function clickHandler(){
        setAccordianOpen(!accordionOpen) ; 
    }

    return(
        <div className="accordion-container ">

            <div onClick={clickHandler}  className="question-container">
                <p>{question}</p>
                 <span> <img src={ accordionOpen ? up : down } alt="down-faq" size="2em"></img></span> 
                  {/* <span> <img src={  up  } className={`${!accordionOpen && 'rotate-180' }`} alt="down-faq" size="2em"></img></span>  */}

            </div>



            <div className={ accordionOpen ?  "faq-answer show" : "faq-answer" } >{answer} </div>

        </div>
    )
}

export default Accordion ; 