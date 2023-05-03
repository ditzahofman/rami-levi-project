import { useEffect, useState } from "react";
import ProductModel from "../../../Models/ProductModel";
import "./ProductTable.css";
import productServices from "../../../Services/ProductService";
import ProductsCard from "../ProductsCard/ProductsCard";
import appConfig from "../../../Utils/Config";
import { Button, TextField } from "@mui/material";
import { NavLink } from "react-router-dom";

function ProductTable(): JSX.Element {
    const [product, setProduct] = useState<ProductModel[]>([])
    useEffect(() => {
        productServices.getAllProducts()
            .then(p => setProduct(p))
            .catch(err => alert(err))
    }, [])


    function deleteProduct():void{

    }
    return (
        <div className="ProductTable">
            
             <TextField className="textFiled" id="outlined-basic" label="Search product" variant="outlined"  />
            <table>
                <tr>
                    <th>Product-name</th>
                    <th>Category</th>
                    <th>Creation-Time</th>
                    <th>Expiration-Time</th>
                    <th>price</th>
                    <th>image</th>
                    <th>delete product</th>
                    <th>update product</th>
                </tr>
                {product.map(p => <tr key={p.categoryId}>
                    <td>{p.name}</td>
                    <td>{p.categoryName}</td>
                    <td>{p.creationTime}</td>
                    <td>{p.expirationTime}</td>
                    <td>{p.price}</td>
                    <td>
                        <img src={appConfig.imageUrl + p.imageName} />
                    </td>

                    <td>
                        <NavLink to={"/updte product"}>
                            <Button variant="text"  type="button" onClick={deleteProduct}>Delete Product</Button>
                        </NavLink>
                    </td>

                    <td><Button variant="text" type="button">Update Product</Button></td>
                </tr>)}

            </table>

        </div>
    );
}

export default ProductTable;
