const Product = require('../models/ProductModel');
const bcrypt = require('bcrypt');
const { genneralAccessToken, genneralRefreshToken } = require('./JwtService');

const createProduct = (newProduct) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { name, image, type, price, countInStock, rating, description } = newProduct;
      const checkProduct = await Product.findOne({
        name: name,
      });
      if (checkProduct !== null) {
        resolve({
          status: 'ERR',
          message: 'The name is already',
        });
      }
      const createdProduct = await Product.create({
        name,
        image,
        type,
        price,
        countInStock,
        rating,
        description,
      });
      if (createdProduct) {
        resolve({
          status: 'OK',
          message: 'SUCCESS',
          data: createdProduct,
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

const updateProduct = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkProduct = await Product.findOne({
        _id: id,
      });
      if (checkProduct === null) {
        resolve({
          status: 'ERR',
          message: 'The product is not defined',
        });
      }
      const updatedProduct = await Product.findByIdAndUpdate(id, data, { new: true });
      resolve({
        status: 'OK',
        message: 'SUCCESS',
        data: updatedProduct,
      });
    } catch (e) {
      reject(e);
    }
  });
};

const deleteProduct = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkProduct = await Product.findOne({
        _id: id,
      });
      if (checkProduct === null) {
        resolve({
          status: 'ERR',
          message: 'The product is not defined',
        });
      }

      await Product.findByIdAndDelete(id);
      resolve({
        status: 'OK',
        message: 'Delete product success',
      });
    } catch (e) {
      reject(e);
    }
  });
};

const getAllProduct = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const allProduct = await Product.find().sort({ createdAt: -1, updatedAt: -1 });
      resolve({
        status: 'OK',
        message: 'Success',
        data: allProduct,
      });
    } catch (e) {
      reject(e);
    }
  });
};

// const deleteManyUser = (ids) => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       await User.deleteMany({ _id: ids });
//       resolve({
//         status: 'OK',
//         message: 'Delete user success',
//       });
//     } catch (e) {
//       reject(e);
//     }
//   });
// };

const getDetailsProduct = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const product = await Product.findOne({
        _id: id,
      });
      if (product === null) {
        resolve({
          status: 'ERR',
          message: 'The product is not defined',
        });
      }
      resolve({
        status: 'OK',
        message: 'SUCESS',
        data: product,
      });
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  createProduct,
  updateProduct,
  deleteProduct,
  getAllProduct,
  getDetailsProduct,
};
