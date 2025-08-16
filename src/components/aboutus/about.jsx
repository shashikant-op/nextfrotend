import Aboutsec from "./aboutsec";
import Exp from "./exp";
import Wedo from "./wedo";
import WhyChoose from "./whychoose";

const About=()=>{
    return(
    <div>
        
        <div>
            <Aboutsec />
        </div>
        <div>
            <WhyChoose />
          
        </div>
        <div>
              <Exp />
        </div>
        <div>
            <Wedo />
        </div> 
    </div>
    )
}
export default About;
