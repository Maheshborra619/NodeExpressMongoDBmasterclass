const mongoose = require("mongoose");

const BootCampSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'please enter name mahesh its mandatory'],
        trim: true,
        unique:true,
        maxlength:[50,'Name cannot be more than 50 Characters']
    },
    Slug:String,
    description:{
        type:String,
        required:[true,'please enter descipriton mahesh its mandatory'],
        trim: true,
        unique:true,
        maxlength:[500,'Name cannot be more than 500 Characters']
    },
    location:{
        type: {
            type: String, // Don't do `{ location: { type: String } }`
            enum: ['Point'], // 'location.type' must be 'Point'
            required: false
          },
          coordinates: {
            type: [Number],
            required: false,
            index: '2dsphere'
          },
          formatAddress: String,
          street:String,
          City:String,
          state:String,
          zipcode:String,
          country:String
    },
    Careers:{
        type:["String"],
        required:false,
        enum:[
            'ANGULAR',
            'MEAN',
            'JAVACRIPT',
            'REACT-NATIVE',
            'REACTJS'
        ]
    },
    averageRating:{
        type:Number,
        min:[1,"Please enter rating between 1 and 10"],
        max:[10,"Please enter rating between 1 and 10"],
    },
    averageCost:Number,
    photo:{
        type:String,
        default:'no-photo.jpg'
    },
    housing:{
        type:Boolean,
        default:false
    },
    job:{
        type:Boolean,
        default:false
    },
    married:{
        type:Boolean,
        default:false
    },
    CreatedAt:{
        type:Date,
        default:Date.now
    }
   
})

module.exports = mongoose.model('BootCamp',BootCampSchema);