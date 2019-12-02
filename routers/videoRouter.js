import express from "express";
import routes from "../routes";
import { videos, getUpload, postUpload, videoDetail, getEditVideo, postEditVideo, deleteVideo } from "../controllers/videoController";
import { uploadVideo } from "../middlewares.js";

const videoRouter = express.Router();

// UPLOAD
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);
// VIDEO DETAIL
videoRouter.get(routes.videoDetail(), videoDetail);
// EDIT VIDEO
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);
//DELETE VIDEO
videoRouter.get(routes.deleteVideo(), deleteVideo);


export default videoRouter;