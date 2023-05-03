import axios  from "axios";
import ProductModel from "../Models/ProductModel";
import { config } from "process";
import appConfig from "../Utils/Config";
import CategoryModel from "../Models/CategoryModel";

class ProductServices{

    public async getAllProducts():Promise<ProductModel[]>{
 const response = await axios.get(appConfig.productsUrl)
 const products=response.data
 return products

}


public async getProductsByCategory(categoryId:number):Promise<ProductModel[]>{
    const response = await axios.get(appConfig.productsBycategoriesUrl+categoryId)
    const products=response.data
    return products
   
   }
public async getAllCategories():Promise<CategoryModel[]>{
    const response = await axios.get(appConfig.categoriesUrl)
    const categories=response.data
    return categories
   
   }

   public async addProduct(product:ProductModel):Promise<ProductModel>{
const formData = new FormData()  
formData.append("name",product.name)
formData.append("categoryId",product.categoryId.toString()) 
formData.append("creationTime",product.creationTime)  
formData.append("expirationTime",product.expirationTime) 
formData.append("price",product.price.toString()) 
formData.append("image",product.image[0]) 
const response = await axios.post<ProductModel>(appConfig.productsUrl,formData)
const addedProduct= response.data
return addedProduct
   }
}


const productServices= new ProductServices()
export default productServices
