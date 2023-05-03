import { useForm } from "react-hook-form";
import "./AddProduct.css";
import mui, { Button, FilledInput, MenuItem, TextField } from "@mui/material"
import ProductModel from "../../../Models/ProductModel";
import productServices from "../../../Services/ProductService";
import CategoryModel from "../../../Models/CategoryModel";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function AddProduct(): JSX.Element {

    const [categories , setCategories] =useState<CategoryModel[]>([])
    useEffect(()=>{
        productServices.getAllCategories()
        .then(c=>setCategories(c))
        .catch(err=>alert(err))
    },[])
    const navigate = useNavigate()
    const {register ,handleSubmit}=useForm<ProductModel>()

    async function send(product:ProductModel){
try {
     await productServices.addProduct(product)
    navigate("/home")

} catch (err) {
    alert(err)
}
    }

    return (
        <div className="AddProduct">
			<form onSubmit={handleSubmit(send)}>
                <h2 className="h2-card">Add product</h2>
            <TextField className="textFiled" id="outlined-basic" label="name" variant="outlined" focused {...register("name")} />
            <TextField
          id="outlined-select-currency"
          select
          label="category"
          defaultValue="select"
          helperText="Please select your category"
          focused {...register("categoryId")}>
          {categories.map((option) => (
            <MenuItem key={option.categoryId} value={option.categoryId}>
              {option.categoryName}
            </MenuItem>
          ))}
        </TextField>
            <TextField className="textFiled" id="date" type="datetime-local"    label="Creation-Time" variant="outlined"  focused {...register("creationTime")}/>
            <TextField className="textFiled"id="date" type="datetime-local"   label="Expiration-Time" variant="outlined"  focused {...register("expirationTime")}/>
            
            <TextField className="textFiled"id="outlined-basic" label="price" variant="outlined"{...register("price")}focused />
           <input  type="file" accept="image/*" {...register("image")}/>
            <Button type="submit"  className="button">ADD</Button>
            </form>
        </div>
    );
}

export default AddProduct;
