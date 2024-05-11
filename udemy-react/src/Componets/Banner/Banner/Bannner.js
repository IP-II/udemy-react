import React from 'react';
import './banner.css'
import Samsung from '../../../Assets/Images/samsung.svg'
import Volkwagen from '../../../Assets/Images/volkswagen.svg'
import Citi from '../../../Assets/Images/citi.svg'
import Ericsson from '../../../Assets/Images/ericsson.svg'
import HP from '../../../Assets/Images/hewlett_packard_enterprise.svg'
import PG from '../../../Assets/Images/procter_gamble.svg'
import Cisco from '../../../Assets/Images/cisco.svg'
import Att from '../../../Assets/Images/att.svg'



const Banner = () => {
    return (
        <div className="consn11">
            <div className="consn12">
                <div className="consn13">
                    <p id="consn14">Trusted by 15,000 companies and milions of learners arounf the world</p>
                    {/* <p id="consn15">Leading companies use the same courses to help employees keep their skills fresh.</p> */}
                </div>
                <div className="consn16">
                    <div><img src={Volkwagen}alt="some startup logo" /></div>
                    <div><img src={Samsung} /></div>
                    <div><img src={Cisco} alt="some startup logo" /></div>
                    <div><img src={Att} alt="some startup logo" /></div>
                    <div><img src={PG}alt="some startup logo" /></div>
                    <div><img src={HP}alt="some startup logo" /></div>
                    <div><img src={Citi}alt="some startup logo" /></div>
                    <div><img src={Ericsson}alt="some startup logo" /></div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
