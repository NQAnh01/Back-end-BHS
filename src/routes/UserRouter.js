const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');
const { authMiddleware, authUserMiddleware } = require('../middlewares/authMiddleware');

router.get('/get-all', authMiddleware, userController.getAllUser);
router.get('/get-detail/:id', authUserMiddleware, userController.getDetailsUser);
router.post('/register', userController.createUser);
router.post('/log-in', userController.loginUser);
router.put('/update-user/:id', userController.updateUser);
router.delete('/delete-user/:id', authMiddleware, userController.deleteUser);

module.exports = router;
