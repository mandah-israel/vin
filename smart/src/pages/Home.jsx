import ban from "../../src/img/ban.jpg";
import pix from "../../src/img/pix.jpg";
import spy from "../../src/img/spy.jpg";
import smart from "../../src/img/smart.jpg";
import style from "../../src/img/style.jpg";
import xim from "../../src/img/xim.jpg";
import vin from "../../src/img/vin.jpg";
import pay from "../../src/img/pay.webp";
import Header from "../Component/Header";


 

const Home = ()=>{
    return(
        <div>
            <div className="fin">
            <Header/>
             <h1>Home Page</h1> 
            </div>
            <div className="img">
                <h3>Browse Our Handcrafted Goodness</h3>
                <button><a href="#">Shop all</a></button>
           </div>
           <div className="vin">
            <h2>Featured Product</h2>
            </div>
            <div className="kin">
                <div className="pen">
                    <img src={pix} alt="" />
                </div>
                <div className="pen">
                    <img src={spy} alt="" />
                </div>
                <div className="pen">
                    <img src={smart} alt="" />
                </div>
                <div className="pen">
                    <img src={style} alt="" />
                </div>
                <div className="pen">
                    <img src={xim} alt="" />
                </div>
                <div className="pen">
                    <img src={vin} alt="" />
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

export default Home