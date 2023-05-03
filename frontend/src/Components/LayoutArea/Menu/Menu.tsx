import { NavLink } from "react-router-dom";
import "./Menu.css";
import shoppingCart from "../../../Assest/images/shop.png"


function Menu(): JSX.Element {
    return (
        <div className="Menu">
            <hr/>
            {/* <NavLink to={""}><img src={shoppingCart}/></NavLink> */}
			<NavLink to={"/home"}>Home  </NavLink>
            <NavLink to={"/categories"}>selectCategory </NavLink>
            {/* <NavLink to={"/all"}>All-Products  </NavLink> */}
            <NavLink to={"/new"}>Add new product  </NavLink>
            <NavLink to={"/table_products"}>table products </NavLink>
          
                   <hr/>
        </div>
    );
}

export default Menu;
