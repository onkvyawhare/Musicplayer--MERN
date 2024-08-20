import { addSong, listSong, removeSong } from "../controllers/songController.js";
import express from "express";
import upload from "../middlewares/multer.js";

const songRouter = express.Router();

songRouter.post('/add', upload.fields([{ name: 'image', maxCount: 1 }, { name: 'audio', maxCount: 1 }]), addSong);
songRouter.get('/list', listSong);
songRouter.delete('/remove', removeSong)
export default songRouter;