import { useEffect, useState } from "react";
import "./ProductsCard.css";
import productServices from "../../../Services/ProductService";
import ProductModel from "../../../Models/ProductModel";
import appConfig from "../../../Utils/Config";
interface productCardProps{
    product:ProductModel
}
function ProductsCard(props:productCardProps): JSX.Element {

    return (
        <div className="ProductsCard"> 
        <h2 >{props.product.name}</h2>
        <div className="imageProduct">    
<img src={appConfig.imageUrl+props.product.imageName}/>
</div>
<br/>
<hr/> 
<p><b> {props.product.price}₪</b></p>
<hr/>
   <p>{props.product.creationTime}</p>
  <p> {props.product.expirationTime}</p>
  <button >add to cart</button>

        </div>
    );
}

export default ProductsCard;
