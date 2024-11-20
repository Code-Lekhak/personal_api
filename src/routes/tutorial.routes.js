const express = require('express');
const router = express.Router();
const { 
  getAllTutorials, 
  createTutorial, 
  getTutorialById, 
  updateTutorial, 
  deleteTutorial 
} = require('../controllers/tutorial.controllers');
const verifyJWT = require('../middlewares/auth.middlewares');
const adminAccess = require('../middlewares/adminAuth.middlewares');

// Apply JWT middleware to protect routes
router.use(verifyJWT);

// Public routes
router.route("/get-tutorials").get(getAllTutorials);
router.route("/get-tutorial/:id").get(getTutorialById);

// Private routes
router.route("/create-tutorial").post(createTutorial);
router.route("/update-tutorial/:id").post(updateTutorial);

// Admin-only route
router.route("/delete-tutorial/:id").delete(adminAccess, deleteTutorial);

module.exports = router;
