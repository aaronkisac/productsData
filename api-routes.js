// api-routes.js
// Initialize express router
let router = require('express').Router();
mockData = require('./products');
var cors = require('cors');


// var productController = require('./productController');
var whitelist = ['https://products-data.herokuapp.com']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
// Set default API response
router.get('/', cors(corsOptions),function (req, res) {
  res.json({
    status: 'API Its Working',
    message: 'Welcome to API!',
  });
});

router.get('/allProducts',cors(corsOptions),(function (req, res) { res.json(mockData) }))
 
router.get('/searchProduct&searchKeyword=:searchKeyword',cors(corsOptions),(
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


router.get('/getCategoryList',cors(corsOptions),(function (req, res) { 
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

router.get('/getProductsByCategory&categoryId=:categoryId',cors(corsOptions),(
  function (req, res) { 
    const id=req.params.categoryId
    let productsByCategory=[];
    mockData.forEach(insideItem =>insideItem.id==id&&productsByCategory.push(insideItem.items))
    
res.json(productsByCategory)  
}))
router.get('/getProductDetails&productId=:productId',cors(corsOptions),(
  function (req, res) { 
const id=req.params.productId;
let productsById=[];
mockData.forEach(item =>item.items.map(insideItem=>insideItem.id==id&&productsById.push(insideItem)))
res.json(productsById) 
 }))
module.exports = router;
