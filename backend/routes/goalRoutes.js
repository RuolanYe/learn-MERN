const express = require('express')
const router = express.Router();
const {getGoals, setGoal, updateGoal, deleteGoal} =require('../controllers/goalController')
const {protect} = require('../middleware/authMiddleware')
const Goal = require('../models/goalModel')


router.route('/').get(protect,getGoals).post(protect,setGoal)
router.route('/:id').put(protect,updateGoal).delete(protect,deleteGoal)
// router.delete('/:id',deleteGoal) 

module.exports =router