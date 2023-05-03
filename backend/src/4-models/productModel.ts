import { UploadedFile } from "express-fileupload"
import joi from "joi"

class ProductModel{
public id:number
public name:string
public categoryId:number
public creationTime:string
public expirationTime:string
public price:number
public image:UploadedFile
public imageName:string

public constructor(product:ProductModel){
    this.id = product.id
    this.name = product.name
    this.categoryId = product.categoryId
    this.creationTime = product.creationTime
    this.expirationTime = product.expirationTime
    this.price = product.price
    this.image = product.image
    this.imageName = product.imageName
}

public static validationSchema=joi.object({
id:joi.number().optional().positive(),
name:joi.string(),
categoryId:joi.number().positive(),
creationTime:joi.string(),
expirationTime:joi.string(),
price:joi.number(),
image:joi.object().optional(),
imageName:joi.string().optional()
})

public validate():string{
  const result = ProductModel.validationSchema.validate(this)
  return result.error?.message  
}
}

export default ProductModel