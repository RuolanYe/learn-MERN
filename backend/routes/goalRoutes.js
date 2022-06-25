const express = require('express')
const router = express.Router();
const {getGoals, setGoal, updateGoal, deleteGoal} =require('../controllers/goalController')
const {protect} = require('../middleware/authMiddleware')
const multer = require("multer")
const Goal = require('../models/goalModel')

// store the image
// const storage = multer.diskStorage({
//     destination:(req, file, callback) => {
//         callback(null, "../../frontend/public/uploads/");
//     },
//     filename: (req, file, callback) =>{
//         callback(null,file.originalname);
//     },
// })

// const upload = multer({storage: storage});



// router.get('/',getGoals)
// router.post('/',upload.single("articleImage"),(req,res)=>{
//     console.log(req)
//     const newGoal = new Goal({
//         text: req.body.text,
//         articleImage: req.file.filename,
//         // user: req.body.user.id,
        
//     });

//     console.log(newGoal)

//     newGoal
//         .save()
//         .then(() => res.json('New image posted'))
//         .catch((err) => res.status(400).json(`Error:${err}`));
// });

router.route('/').get(protect,getGoals).post(protect,setGoal)

// router.put('/:id',upload.single("articleImage"),updateGoal)
// router.delete('/:id',deleteGoal)
router.route('/:id').put(protect,updateGoal).delete(protect,deleteGoal)
 
module.exports =router