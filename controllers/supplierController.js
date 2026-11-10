import Book from "../models/Book.js"

// ADD BOOK
export const addBook = async (req, res) => {
    try {
        const { title, author } = req.body;

        if (!title || !author) {
            return res.status(400).json({
                message: "Title and author are required"
            });
        }

        const book = await Book.create({
            title,
            author,
            supplier: req.user.id
        });

        res.status(201).json({
            message: "Book added successfully",
            book
        });

    } catch (err) {
        res.status(400).json({
            error: err.message
        });
    }
};


// VIEW SUPPLIER'S BOOKS
export const getSupplierBooks = async (req, res) => {
    try {
        const books = await Book.find({
            supplier: req.user.id
        });

        res.status(200).json(books);

    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
};


// UPDATE SUPPLIER'S BOOK
export const updateSupplierBook = async (req, res) => {
    try {
        const book = await Book.findOneAndUpdate(
            {
                _id: req.params.id,
                supplier: req.user.id
            },
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!book) {
            return res.status(404).json({
                message: "Book not found or you do not own this book"
            });
        }

        res.status(200).json({
            message: "Book updated successfully",
            book
        });

    } catch (err) {
        res.status(400).json({
            error: err.message
        });
    }
};


// DELETE SUPPLIER'S BOOK
export const deleteSupplierBook = async (req, res) => {
    try {
        const book = await Book.findOneAndDelete({
            _id: req.params.id,
            supplier: req.user.id
        });

        if (!book) {
            return res.status(404).json({
                message: "Book not found or you do not own this book"
            });
        }

        res.status(200).json({
            message: "Book deleted successfully"
        });

    } catch (err) {
        res.status(400).json({
            error: err.message
        });
    }
};