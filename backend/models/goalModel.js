const mongoose = require('mongoose')

const goalSchema = mongoose.Schema(
{
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    text:{
        type: String,
        required: [true, 'Please add a text value'],
    },
    articleImage:{
        type: String,
        required: false,
    },
    eventDate:{
        type: Date,
        required: false,
    },
    watering:{
        type: Boolean,
        required:true
    },
    fertilizing:{
        type: Boolean,
        required:false
    }
},
{
    timestamps: false,
}
)

module.exports = mongoose.model('Goal', goalSchema)