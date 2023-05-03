import { useEffect, useState } from "react";
import ProductModel from "../../../Models/ProductModel";
import "./AllProducts.css";
import productServices from "../../../Services/ProductService";
import ProductsCard from "../ProductsCard/ProductsCard";

function AllProducts(): JSX.Element {
    const [product, setProduct] = useState<ProductModel[]>([])
    useEffect(() => {
        productServices.getAllProducts()
            .then(p => setProduct(p))
            .catch(err => alert(err))
    }, [])
    return (
        <div className="AllProducts">
			{product.map(p=><ProductsCard key={p.categoryId} product={p}/>)}
        </div>
    );
}

export default AllProducts;
