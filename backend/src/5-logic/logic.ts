import { OkPacket } from "mysql";
import dal from "../2-utils/dal";
import ProductModel from "../4-models/productModel";
import CategoryModel from "../4-models/category-model";
import { ResourceNotFoundErrorModel, ValidationErrorModel } from "../4-models/error-models";
import {v4 }from "uuid"


async function getAllCategories():Promise<CategoryModel[]>{
    
    const sql =`SELECT * FROM category`

    const categories= await dal.execute(sql)
    return categories
}

async function getProducts():Promise<ProductModel[]>{
    
    const sql =`SELECT p.* ,c.categoryName
    FROM products AS p  JOIN category AS c
    ON p.categoryId=c.categoryId 
   `

    const products= await dal.execute(sql)
    return products
}

async function getProductsByCategory(categoryId:number):Promise<ProductModel[]>{
    
    const sql =`SELECT p.* ,c.categoryName
    FROM products AS p  JOIN category AS c
    ON p.categoryId=c.categoryId 
    WHERE p.categoryId=${categoryId}`

    const products= await dal.execute(sql)
    return products
}

async function addProduct(product:ProductModel):Promise<ProductModel>{

    const error = product.validate()
    if(error){
        throw new ValidationErrorModel(error)
    }

    if(product.image){
     const extention = product.image.name.substring(product.image.name.lastIndexOf(".")) 
     product.imageName =v4()+extention
     await product.image.mv("./src/1-assets/images/"+product.imageName)
     delete product.image
    }
    const sql =`INSERT INTO products VALUES(
        DEFAULT,
        '${product.name}',
        '${product.categoryId}',
        '${product.creationTime}',
        '${product.expirationTime}',
        '${product.price}',
        '${product.imageName}'
    )`
const info:OkPacket = await dal.execute(sql)
product.id = info.insertId
return product
   
}

async function updateProduct(product:ProductModel):Promise<ProductModel>{

    const error = product.validate()
    if(error){
        throw new ValidationErrorModel(error)
    }

    if(product.image){
     const extention = product.image.name.substring(product.image.name.lastIndexOf(".")) 
     product.imageName =v4()+extention
     await product.image.mv("./src/1-assets/images/"+product.imageName)
     delete product.image
    }
    const sql =`UPDATE products SET
        DEFAULT,
       '${product.name}',
        '${product.categoryId}',
        '${product.creationTime}',
        '${product.expirationTime}',
        '${product.price}'
        '${product.imageName}'
    `
const info:OkPacket = await dal.execute(sql)
if(info.affectedRows===0) {
    throw new ResourceNotFoundErrorModel(product.id)
}
return product
 
}

async function deleteProduct(productId:number):Promise<void>{

    const sql=`DELETE FROM products
    WHERE products.productId = ${productId}`

    await dal.execute(sql)
}


export default {
    getProductsByCategory,
    getAllCategories,
    addProduct,
    getProducts,
    updateProduct
};
