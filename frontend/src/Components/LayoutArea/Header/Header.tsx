import Menu from "../Menu/Menu";
import Routing from "../Routing/Routing";
import "./Header.css";
import imgShop from "../../../Assest/shop.png"
function Header(): JSX.Element {
    return (
        <div className="Header">
            <div className="H1">
                <h2 className="H2">RAMI - LEVI</h2>
              
                {/* <img src= {imgShop}/> */}
              
                               </div>
			
            <Menu/>
           
        </div>
    );
}

export default Header;
