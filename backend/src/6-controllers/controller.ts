import express, { Request, Response, NextFunction } from "express";
import logic from "../5-logic/logic";
import ProductModel from "../4-models/productModel";
import path from "path";

const router = express.Router(); // Capital R

// GET http://localhost:3001/api/_____
router.get("/products-by-categories/:categoryId", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const categoryId = +request.params.categoryId
const products = await logic.getProductsByCategory(categoryId)
response.json(products)
    }
    catch (err: any) {
        next(err);
    }
});
router.get("/products", async (request: Request, response: Response, next: NextFunction) => {
    try {      
const products = await logic.getProducts()
response.json(products)
    }
    catch (err: any) {
        next(err);
    }
});
router.post("/products", async (request: Request, response: Response, next: NextFunction) => {
    try {
        request.body.image =request.files?.image
        const product = new ProductModel(request.body)
const addedProduct = await logic.addProduct(product)
response.status(201).json(addedProduct)
    }
    catch (err: any) {
        next(err);
    }
});

router.put("/products/:id", async (request: Request, response: Response, next: NextFunction) => {
    try {
        request.body.image =request.files?.image
        request.params.id = request.body.id
        const product = new ProductModel(request.body)
const updateProduct = await logic.updateProduct(product)
response.status(201).json(updateProduct)
    }
    catch (err: any) {
        next(err);
    }
});

router.get("/categories", async (request: Request, response: Response, next: NextFunction) => {
    try {
const categories = await logic.getAllCategories()
response.json(categories)
    }
    catch (err: any) {
        next(err);
    }
});

router.get("/products/images/:imageName", async (request: Request, response: Response, next: NextFunction) => {
    try {
        // __dirname contains the full path to our current folder - controllers folder
        const imageName = request.params.imageName;
        const absolutePath = path.join(__dirname, "..", "1-assets", "images", imageName);
        response.sendFile(absolutePath);
    
    }
    catch (err: any) {
        next(err); // Catch-all middleware
    }
})

export default router;