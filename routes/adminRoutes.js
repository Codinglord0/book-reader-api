import express from "express";

import protect from "../middleware/authMiddleware.js";
import authorize from "../middleware/roleMiddleware.js";

import {
    getAllUsers,
    changeUserRole,
    getAllBooks
} from "../controllers/adminController.js";

const router = express.Router();

router.use(protect, authorize("admin"));

router.get("/users", getAllUsers);
router.patch("/users/:id/role", changeUserRole);
router.get("/books", getAllBooks);

export default router;