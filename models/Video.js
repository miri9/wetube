import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
	fileUrl: {
		type: String,
		required: "file URL is required"
	},
	title: {
		type: String,
		required: "File is required"
	},
	description: String,
	views: {
		type: Number,
		default: 0
	},
	createdAt: {
		type: Date,
		default: Date.now
	},
	comments: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Comment"
		}
	],
	creator: {
		type: mongoose.Schema.Types.ObjectID,
		ref: "User"
	}
});

const model = mongoose.model("Video", VideoSchema);
export default model;
