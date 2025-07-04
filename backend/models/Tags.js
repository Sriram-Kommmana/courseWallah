import mongoose from "mongoose";

const tagsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    course:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
    },
})

export const Tags = mongoose.model('Tag', tagsSchema);