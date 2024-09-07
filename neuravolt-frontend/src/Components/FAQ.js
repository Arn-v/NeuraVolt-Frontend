import FAQdata from "../data/staticData" ; 
import Accordion from "./Accordion";

function FAQ()
{
    return (
        
        <div className="FAQ-container">

            { FAQdata.map( ( FAQ , i ) => {
                                        return ( <Accordion question={FAQ.question} answer={FAQ.answer} key={FAQ.i} /> ) ; 
                                    } 
                            ) 
            }

        </div>
    )
}


export default FAQ ; 