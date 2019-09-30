1 - Clone the project
2 - Install dependencies "npm i" || "yarn"
3 - Start the project "npm run dev" || "yarn dev"

if you didn't Install nodemon, do it at global. "npm i -g nodemon"  


End points for APIs

 GET :
- all our datas about products "http://localhost:8080/api/allProducts"
- this is result api of shearch products "http://localhost:8080/api/searchProduct&keyword=:{searchKeyword}"
- this api is for carousel "http://localhost:8080/api/getCategoryList"
- this api is all products belong to one category "http://localhost:8080/api/getProductsByCategory&categoryId=:{categoryId}"
- this api has details of one product "http://localhost:8080/api/getProductDetails&productId=:{productId}"


 GET :
- all our datas about products "https://products-data.herokuapp.com/api/allProducts"
- this is result api of shearch products "https://products-data.herokuapp.com/api/searchProduct&keyword=:{searchKeyword}"
- this api is for carousel "https://products-data.herokuapp.com/api/getCategoryList"
- this api is all products belong to one category "https://products-data.herokuapp.com/api/getProductsByCategory&categoryId=:{categoryId}"
- this api has details of one product "https://products-data.herokuapp.com/api/getProductDetails&productId=:{productId}"
