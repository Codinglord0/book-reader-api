import express from "express";

import protect from "../middleware/authMiddleware.js";
import authorize from "../middleware/roleMiddleware.js";

import {
    addBook,
    getSupplierBooks,
    updateSupplierBook,
    deleteSupplierBook
} from "../controllers/supplierController.js";

const router = express.Router();

router.use(protect, authorize("supplier"));

router.post("/books", addBook);
router.get("/books", getSupplierBooks);
router.patch("/books/:id", updateSupplierBook);
router.delete("/books/:id", deleteSupplierBook);

export default router;