const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config()

const app = express()
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("MongoDB connection")
    } catch (error) {
        throw error
    }
}

app.listen(8800, async () => {
    await connect()
    console.log("Backend connection")
});