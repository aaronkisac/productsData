// api-routes.js
// Initialize express router
let router = require('express').Router();
mockData = require('./products');


// var productController = require('./productController');

// Set default API response
router.get('/', function (req, res) {
  res.json({
    status: 'API Its Working',
    message: 'Welcome to API!',
  });
});

router.get('/allProducts',(function (req, res) { res.json(mockData) }))
 
router.get("/searchProduct&searchKeyword=:searchKeyword",(
  function (req, res) { 
   
    const keyword=req.params.searchKeyword.toLowerCase();
    const filteredList = []
    mockData.map(item => {
      item.items.map(insideItem => {
        (insideItem.name.toLowerCase().search(keyword) > -1 || insideItem.description.toLowerCase().search(keyword) > -1) && filteredList.push(insideItem)
      })
    })
    res.send(filteredList)
  }))


router.get('/getCategoryList',(function (req, res) { 
  let categoryList=[];
  mockData.forEach(item => {
  categoryList.push({"id":item.id,
  "name":item.name,
  "image":item.image,
  "description":item.description
})
}
)
res.json(categoryList)
}))

router.get("/getProductsByCategory&categoryId=:categoryId",(
  function (req, res) { 
    const id=req.params.categoryId
    let productsByCategory=[];
    mockData.forEach(insideItem =>insideItem.id==id&&productsByCategory.push(insideItem.items))
    
res.json(productsByCategory)  
}))
router.get("/getProductDetails&productId=:productId",(
  function (req, res) { 
const id=req.params.productId;
let productsById=[];
mockData.forEach(item =>item.items.map(insideItem=>insideItem.id==id&&productsById.push(insideItem)))
res.json(productsById) 
 }))
module.exports = router;