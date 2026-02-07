import Aboutsec from "./aboutsec";
import Exp from "./exp";
import Wedo from "./wedo";
import WhyChoose from "./whychoose";

const About=()=>{
    return(
    <div className="select-none">
        <div>
            <Aboutsec />
        </div>
        <div className="select-none">
            <WhyChoose />
          
        </div>
        <div className="select-none">
              <Exp />
        </div>
    </div>
    )
}
export default About;
