const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3002
const postRouter = require('./routes/postRouter')
const userRouter = require('./routes/userRouter')
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))

app.use('/api/posts', postRouter)
app.use('/api/users', userRouter)


const mongoDB = "mongodb+srv://:@cluster0.gtl5z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(mongoDB, {useNewUrlParser: true});

const db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get("/", (req, res) => res.send("hello world"));
app.listen(PORT, () => console.log("connected"));
