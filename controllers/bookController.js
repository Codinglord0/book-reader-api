import Book from "../models/Book.js";

// GET ALL BOOKS
export const getBooks = async (req, res) => {
    try {
        const books = await Book.find();

        res.status(200).json(books);

    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
};


// GET ONE BOOK
export const getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);

        if (!book) {
            return res.status(404).json({
                message: "Book not found"
            });
        }

        res.status(200).json(book);

    } catch (err) {
        res.status(400).json({
            error: err.message
        });
    }
};


// UPDATE BOOK
export const updateBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!book) {
            return res.status(404).json({
                message: "Book not found"
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


// DELETE BOOK
export const deleteBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);

        if (!book) {
            return res.status(404).json({
                message: "Book not found"
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