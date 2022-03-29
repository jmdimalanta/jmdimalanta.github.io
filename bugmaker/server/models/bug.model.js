const mongoose = require('mongoose');

const BugSchema = new mongoose.Schema({

    title: {
        type: String,
        required: [true, 'The bug title is required!'],
        minlength: [3, "The bug's title must be at least 3 characters!"]
    },

    description: {
        type: String,
        required: [true, 'The bug description is required!'],
        minlength: [3, "The bug's description must be at least 3 characters long!"]
    },
    
    observed: {
        type: String,
        required: [true, 'Observed results is required!'],
    },

    expected: {
        type: String,
        required: [true, 'The expected results is required!']
    },

    reproRate: {
        type: Number,
        required: [true, 'The reproducibility rate is required!'],
        min: [0],
        max: [5]
    },

    platform: {
        type: String,
        required: [true, 'A platform is required!'],
        enum: [
            'iOS',
            'Android',
            'PC',
            'PlayStation',
            'Xbox',
            'Nintendo'
        ]
    }
}, {timestamps: true})

const Bug = mongoose.model('Bug', BugSchema);

module.exports = Bug;