const express = require('express')
const router = express.Router();
const {getGoals, setGoal, updateGoal, deleteGoal} =require('../controllers/goalController')
const {protect} = require('../middleware/authMiddleware')
const multer = require("multer")
const Goal = require('../models/goalModel')


router.route('/').get(protect,getGoals).post(protect,setGoal)

// router.put('/:id',upload.single("articleImage"),updateGoal)
// router.delete('/:id',deleteGoal)
router.route('/:id').put(protect,updateGoal).delete(protect,deleteGoal)
 
module.exports =router