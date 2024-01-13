const ProductService = require('../services/ProductService');
const JwtService = require('../services/JwtService');

const createProduct = async (req, res) => {
  try {
    const { name, image, type, price, countInStock, rating, description } = req.body;
    if (!name || !image || !type || !price || !countInStock) {
      return res.status(200).json({
        status: 'ERR',
        message: 'The input is required',
      });
    }
    const response = await ProductService.createProduct(req.body);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const data = req.body;
    if (!productId) {
      return res.status(200).json({
        status: 'ERR',
        message: 'The product Id is required',
      });
    }
    const response = await ProductService.updateProduct(productId, data);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    if (!productId) {
      return res.status(200).json({
        status: 'ERR',
        message: 'The product id is required',
      });
    }
    const response = await ProductService.deleteProduct(productId);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const response = await ProductService.getAllProduct();
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const getDetailsProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    if (!productId) {
      return res.status(200).json({
        status: 'ERR',
        message: 'The product Id is required',
      });
    }
    const response = await ProductService.getDetailsProduct(productId);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

// const deleteMany = async (req, res) => {
//   try {
//     const ids = req.body.ids;
//     if (!ids) {
//       return res.status(200).json({
//         status: 'ERR',
//         message: 'The ids is required',
//       });
//     }
//     const response = await UserService.deleteManyUser(ids);
//     return res.status(200).json(response);
//   } catch (e) {
//     return res.status(404).json({
//       message: e,
//     });
//   }
// };

// const refreshToken = async (req, res) => {
//   try {
//     let token = req.headers.token.split(' ')[1];
//     if (!token) {
//       return res.status(200).json({
//         status: 'ERR',
//         message: 'The token is required',
//       });
//     }
//     const response = await JwtService.refreshTokenJwtService(token);
//     return res.status(200).json(response);
//   } catch (e) {
//     return res.status(404).json({
//       message: e,
//     });
//   }
// };

// const logoutUser = async (req, res) => {
//   try {
//     res.clearCookie('refresh_token');
//     return res.status(200).json({
//       status: 'OK',
//       message: 'Logout successfully',
//     });
//   } catch (e) {
//     return res.status(404).json({
//       message: e,
//     });
//   }
// };
module.exports = {
  createProduct,
  updateProduct,
  deleteProduct,
  getAllProducts,
  getDetailsProduct,
};
