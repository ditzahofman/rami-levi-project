class AppConfig{
    public categoriesUrl = "http://localhost:3001/api/categories/"
    public productsBycategoriesUrl = "http://localhost:3001/api/products-by-categories/"
    public productsUrl = "http://localhost:3001/api/products/"
    public imageUrl = "http://localhost:3001/api/products/images/"
  
}
const appConfig = new AppConfig()
export default appConfig