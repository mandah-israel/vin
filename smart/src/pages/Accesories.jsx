import Header from "../Component/Header";
import cap from "../../src/img/cap.jpg";
import fyn from "../../src/img/fyn.jpg";
import gym from "../../src/img/gym.jpg";
import style from "../../src/img/style.jpg";
import spy from "../../src/img/spy.jpg";
import vin from "../../src/img/vin.jpg";
import zip from "../../src/img/zip.jpg";
import pi from "../../src/img/pi.jpg";
import dev from "../../src/img/dev.jpg";
import ban from "../../src/img/ban.jpg";
import jin from "../../src/img/jin.jpg";
import xim from "../../src/img/xim.jpg";
import pink from "../../src/img/pink.jpg";
import pay from "../../src/img/pay.webp";


const Accesories =()=>{
    return(
        <div>
            <div className="fin">
               <Header/>
               <h1>Accessories</h1>
            </div>
            <div className="vin">
            <h2>Accessories</h2>
            </div>
            <div className="kin class">
                <div className="pen">
                    <img src={cap} alt="" />
                </div>
                <div className="pen">
                    <img src={fyn} alt="" />
                </div>
                <div className="pen">
                    <img src={gym} alt="" />
                </div>
                <div className="pen">
                    <img src={style} alt="" />
                </div>
                <div className="pen">
                    <img src={vin} alt="" />
                </div>
                <div className="pen">
                    <img src={zip} alt="" />
                </div>
                <div className="pen">
                    <img src={pi} alt="" className="vex"/>
                </div>
                <div className="pen">
                    <img src={dev} alt="" className="vex"/>
                </div>
                <div className="pen">
                    <img src={ban} alt="" className="vex"/>
                </div>
                <div className="pen">
                    <img src={jin} alt=""className="vex" />
                </div>
                <div className="pen">
                    <img src={xim} alt=""className="vex" />
                </div>
                <div className="pen">
                    <img src={pink} alt=""className="vex" />
                </div>
            </div>
            <div className="bill">
                <input type="text"placeholder="Email" />
                 <button>Folow on shop</button>
            </div>                                                                                      
                <footer>
                    <div className="pik ">
                    <p>Country/region</p>
                    <select name="country" id="" className="come">
                        <option value="Nigeria">Nigeria</option>
                        <option value="Ghana">Ghana</option>
                        <option value="Egypt">Egypt</option>
                        <option value="Togo">Togo</option>
                        <option value="Algeria">Algeria</option>
                    </select>
                </div>
                <img src={pay} alt="" />
                <p>&copy 2023,smart shopping powered by Shopify</p>
             </footer>
        </div>
    )
}

export default Accesories