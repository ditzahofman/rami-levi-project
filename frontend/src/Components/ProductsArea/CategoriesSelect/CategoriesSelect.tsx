import { ChangeEvent, useEffect, useState } from "react";
import "./CategoriesSelect.css";
import productServices from "../../../Services/ProductService";
import CategoryModel from "../../../Models/CategoryModel";
import ProductModel from "../../../Models/ProductModel";
import ProductsCard from "../ProductsCard/ProductsCard";
import { useNavigate } from "react-router-dom";
import { MenuItem, TextField } from "@mui/material";



function CategoriesSelect(): JSX.Element {
    const [categories, setCategories] = useState<CategoryModel[]>([])
    const [product, setProduct] = useState<ProductModel[]>([])
const navigate=useNavigate()

    useEffect(() => {
        productServices.getAllCategories()
            .then(c => setCategories(c))
            .catch(err => alert(err))
    }, [])

    async function getCategory(e:any) {
        const value =e.target.value
        
            productServices.getProductsByCategory(value)
                .then(p => setProduct(p))
                .catch(err => alert(err))
               
      
    }
    

    return (
        <div className="CategoriesSelect">
            <TextField className="SelectOption"
           multiline
           inputProps={{ style: { color: "green" } }}
          id="outlined-select-currency"
          select
          label="category"
          defaultValue="select"
        
          helperText="Please select your category"
          onChange={getCategory}
         >
          {categories.map((option) => (
            <MenuItem key={option.categoryId} value={option.categoryId}>
              {option.categoryName}
            </MenuItem>
          ))}
        </TextField>
        <hr />
        {/* {categories.map(c=><button value={c.categoryId} onClick={getCategory}>{c.categoryName}   |</button>)} */}
            
            <div className="cards">
            {product.map(p => <ProductsCard key={p.id} product={p} />)}
            </div>
        </div>
    );
}

export default CategoriesSelect;
