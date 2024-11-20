
const tutorialmodel = require("../models/tutorial/tutorialmodel");
const asyncHandler = require("../utils/asyncHandler");

// @desc    Get all tutorials created by the logged-in user
// @route   GET /api/tutorial/get-tutorials
// @access  Private
const getAllTutorials = asyncHandler(async (req, res) => {
  const tutorials = await tutorialmodel.find({ user_id: req.user._id });
  res.status(200).json({ 
    message: "All tutorials created by you",
    total_tutorials: tutorialmodel.length,
    tutorials,
  });
});

// @desc    Create a new tutorial
// @route   POST /api/tutorial/create-tutorial
// @access  Private
const createTutorial = asyncHandler(async (req, res) => {
  const { title, description, content, isPublished } = req.body;

  // Validation
  if (!title || !description || !content) {
    res.status(400);
    throw new Error("All fields are required.");
  }

  const tutorial = await tutorialmodel.create({
    title,
    description,
    content,
    isPublished,
    user_id: req.user._id,
  });

  res.status(201).json({ 
    message: "Tutorial created successfully", 
    tutorial,
  });
});

// @desc    Get tutorial by ID
// @route   GET /api/tutorial/get-tutorial/:id
// @access  Private
const getTutorialById = asyncHandler(async (req, res) => {
  const tutorial = await tutorialmodel.findById(req.params.id);

  if (!tutorial) {
    res.status(404);
    throw new Error("Tutorial not found.");
  }

  res.status(200).json(tutorial);
});

// @desc    Update tutorial by ID
// @route   POST /api/tutorial/update-tutorial/:id
// @access  Private
const updateTutorial = asyncHandler(async (req, res) => {
  const tutorial = await tutorialmodel.findById(req.params.id);

  if (!tutorial) {
    res.status(404);
    throw new Error("Tutorial not found.");
  }

  if (tutorial.user_id.toString() !== req.user._id) {
    res.status(403);
    throw new Error("You don't have permission to update this tutorial.");
  }

  const updatedTutorial = await tutorialmodel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json({ 
    message: "Tutorial updated successfully", 
    updatedTutorial,
  });
});

// @desc    Delete tutorial by ID
// @route   DELETE /api/tutorial/delete-tutorial/:id
// @access  Admin
const deleteTutorial = asyncHandler(async (req, res) => {
  const tutorial = await Tutorial.findById(req.params.id);

  if (!tutorial) {
    res.status(404);
    throw new Error("Tutorial not found.");
  }

  await tutorial.remove();
  res.status(200).json({ 
    message: "Tutorial deleted successfully", 
    tutorial,
  });
});

module.exports = {
  getAllTutorials,
  createTutorial,
  getTutorialById,
  updateTutorial,
  deleteTutorial,
};
