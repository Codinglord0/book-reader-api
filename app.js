
import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import authRoutes from "./routes/authRoutes.js";
import bookRoutes from "./routes/bookRoutes.js";
import readerRoutes from "./routes/readerRoutes.js";
import supplierRoutes from "./routes/supplierRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

import dotenv from "dotenv";


dotenv.config()


const app = express();


app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcomeeee to the Book Reader API");
});

app.use("/api/auth", authRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/readers", readerRoutes);
app.use("/api/supplier", supplierRoutes);
app.use("/api/admin", adminRoutes);

export default app;



const books = [
    {
        id: 1,
        title: "Purple Hibiscus",
        author: "Chimamanda Ngozi Adichie"
    },
    {
        id: 2,
        title: "Harry Potter",
        author: "J.K. Rowling"
    },
    {
        id: 3,
        title: "Diary of a Wimpy Kid",
        author: "Jeff Kinney"
    }
];




app.get("/", (req, res) => {
    res.send("Welcomeeee to the Book Reader API");
});
 




const startServer = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);

        console.log("Mongodb connected succcessfully")

        app.listen(3000, () => {
    console.log("Book Reader API is running on port 3000");
});
    } catch (e) {
        console.log(e.message, "Could not connect to Mongodb")
    }
};

startServer()




// 200 - OK(request was sucessful)
// 201 - SUCESSFULLY CREATED(A new resource was sucessfully created)
// 202 - ACCEPTED (The request was accepted but hasn't been completed yet)
// 204 - No Content (The request suceeded, but there's no response body to return)

//     301 - MOVED PERMANENTLY
//     302 - FOUND
//     304 - NOT MODIFIED
//     307 - TEMPORARY REDIRECT
//     308 - PERMANENT REDIRECT

// 400 - BAD REQUEST 
// 401 - UNAUTHORIZED
// 403 - FORBIDDEN
// 404 - NOT FOUND
// 405 - METHOD NOT ALLOWED
// 408 - REQUEST TIMEOUT 
// 409 - CONFLICT
// 413 - CONTENT TOO LARGE 
// 415 - UNSUPPORTED MEDIA TYPE 
// 422 - UNPROCESSABLE CONTENT 
// 429 - TOO MANY REQUEST
     
//     500 - INTERNAL SERVER ERROR
//     501 - NOT IMPLEMENTED
//     502 - BAD GATEWAY
//     503 - SERVICE UNAVAILABLE
//     504 - GATEWAY TIMEOUT








