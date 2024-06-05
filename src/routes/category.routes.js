const express = require('express');
const router = express.Router();
const {AllGetCategory, GetCategoryById, createCategory, UpdateCategory, DeleteCategory} = require('../controllers/postcategory.controller');
const verifyJWT = require('../middlewares/auth.middlewares');

router.use(verifyJWT)
router.route("/get-categories").get(AllGetCategory);
router.route("/get-category/:id").get(GetCategoryById);
router.route("/create-category").post(createCategory);
router.route("/update-category/:id").patch(UpdateCategory);
router.route("/delete-category/:id").delete(DeleteCategory);

module.exports = router;