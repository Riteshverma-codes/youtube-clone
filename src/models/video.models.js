import mongoose, {Schema} from "mongoose";


const videoSchema = new Schema(
    {
        id: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true
        },
        title: {
            type: String,
            required: true,
            unique: true,
        },
        description: {
            type: String,
            required: true,
            unique: true
        },
        videoFile: {
            type: String,                   //cloudinary url
            required: true,
        },
        thumbnail: {
            type: String,                   //cloudinary url
            required: true,
        },
        duration: {
            type: Number,  
            required: true                 
        },
        views: {
            type: Number,  
            default: 0           
        },
        isPublished: {
            type: Boolean,  
            default: false           
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
    }, {timestamps: true})


export const Video = mongoose.model("Video", videoSchema)