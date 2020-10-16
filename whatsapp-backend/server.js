// importing
import express from "express";
import mongoose from "mongoose";
import Message from "./dbMessage.js";

// app config
const app = express();
const port = process.env.PORT || 9000;
// middleware

// DB (Database) config
const connection_url = `mongodb+srv://admin:<password>@cluster0.8bcd1.mongodb.net/whatsappdb?retryWrites=true&w=majority`;
mongoose.connect (connection_url,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true

});


// ??


// api route
//app.get("/", (req,res)=> res.status(200).send("hello world"));
app.get("/", (req,res)=> res.status(200).send("Mashfikur Rahman"));

app.post(`/api/v1/message/new`, (req, res) => {
    const dbMessage = req.body;

    Message.create(dbMessage, (err, data) => {
        if (err){
            res.status(500).send(err);
        } else{
            res.status (201).send(data);
        }
    });
});

// listen

app.listen(port, ()=> console.log(`listening on localhost: ${port}`));