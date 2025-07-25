import mongoose from "mongoose";

const subSectionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    timeDuration: {
        type: String,
    },
    description: {
        type: String,
    },
    videoUrl: {
        type: String,
    }
});

export const SubSection = mongoose.model('SubSection', subSectionSchema)