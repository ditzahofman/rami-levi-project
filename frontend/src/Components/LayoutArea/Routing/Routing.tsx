import { Route, Routes } from "react-router-dom";
import "./Routing.css";
import Home from "../../HomeArea/Home/Home";
import AddProduct from "../../ProductsArea/AddProduct/AddProduct";
import AllProducts from "../../ProductsArea/AllProducts/AllProducts";
import CategoriesSelect from "../../ProductsArea/CategoriesSelect/CategoriesSelect";
import ProductTable from "../../ProductsArea/ProductTable/ProductTable";


function Routing(): JSX.Element {
    return (
        <div className="Routing">
			<Routes>
            <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/new" element={<AddProduct/>}/>
                <Route path="/table_products" element={<ProductTable/>}/>
                {/* <Route path="/all" element={<AllProducts/>}/> */}
                <Route path="/categories" element={<CategoriesSelect/>}/>
            </Routes>
             
        </div>
    );
}

export default Routing;
