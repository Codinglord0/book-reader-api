import express from "express";
import protect from "../middleware/authMiddleware.js";
import authorize from "../middleware/roleMiddleware.js";

import {
    getReaderProfile
} from "../controllers/readerController.js";

const router = express.Router();

router.get(
    "/profile",
    protect,
    authorize("reader"),
    getReaderProfile
);

export default router;