
import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },

   
    author: {
        type: String,
        required: true,
    },
});

const Book = mongoose.model("Book", bookSchema);

export default Book;


