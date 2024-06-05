const asyncHandler = require("../utils/asyncHandler");
const ApiError = require("../utils/ApiError");
const Category = require("../models/Posts_with_Auth/postcategory.models");


//@ User create for Category Name
//@router  get /api/category/get-categories
//@access private
const AllGetCategory = asyncHandler(async(req,res)=>{
    const category = await Category.find({user_id: req.user._id});
    res.status(200).json({message:"All category you made are here", category});
})

//@ User create for Category Name 
//@router  POST /api/category/create-category
//@access private
const createCategory = asyncHandler(async(req,res)=>{
    const {postcategory} = req.body;
    if(!postcategory) {
        res.status(400);
        throw new ApiError(400,"Filed is required")
    }

    const existsCatogory = await Category.findOne({postcategory});
    
      if (existsCatogory) {
        throw new ApiError(409, "Category Name already exists");
      }

    const category = await Category.create({
        postcategory,
        user_id: req.user.id
    });
    res.status(200).json({message:"All Get Category Create", category})
})

//@ User create for Category Name 
//@router  POST /api/category/get-category
//@access private
const GetCategoryById = asyncHandler(async(req,res)=>{
    const category = await Category.findById(req.params.id);
    if(!category){
        res.status(404).json({message:"Catagory is not found"});
        
    }
    res.status(200).json({message:"Get Category with Id", category})
});

//@ User create for Category Name 
//@router  POST /api/category/get-category
//@access private
const UpdateCategory = asyncHandler(async(req,res)=>{
    const category = await Category.findById(req.params.id);
    if(!category){
        res.status(404).json({message:"Catagory is not found"})
    }

    if(category.user_id.toString() !== req.user.id){
        res.status(403).json({message:"don't have permission to update"});
    }

    const UpdateCategory = await Category.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );
    res.status(200).json({message:"Updated your category", UpdateCategory})
})

//@ User create for Category Name 
//@router  POST /api/category/get-category
//@access private
const DeleteCategory = asyncHandler(async(req,res)=>{
    const category = await Category.findById(req.params.id);
    if(!category){
        res.status(404).json({message:"Catagory is not found"})
    }

    if(category.user_id.toString() !== req.user.id){
        res.status(403).json({message:"don't have permission to update"})
    }

    await Category.deleteOne({_id: req.params.id})
    res.status(200).json({message:"The Catagory has been removed from here successfuly", category})
})


//export modules while files
module.exports = {
    AllGetCategory,
    createCategory,
    GetCategoryById,
    UpdateCategory,
    DeleteCategory
  };
  