const express = require('express');
const router = express.Router();
const productController = require('../controllers/ProductController');
const { authMiddleware } = require('../middlewares/authMiddleware');

router.post('/create', productController.createProduct);
router.put('/update/:id', authMiddleware, productController.updateProduct);
router.delete('/delete/:id', authMiddleware, productController.deleteProduct);
router.get('/get-all', productController.getAllProducts);
router.get('/get-detail/:id', productController.getDetailsProduct);

module.exports = router;
