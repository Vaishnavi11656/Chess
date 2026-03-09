const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { authRouter } = require("./routes/auth.routes");
const { default: mongoose } = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/api/v1/auth", authRouter);
const MONGOOSE_URI = process.env.MONGOOSE_URI;

const PORT = process.env.PORT;

app.listen(PORT, () => console.log("server is listening on port", PORT));
mongoose
    .connect(MONGOOSE_URI)
    .then(() => console.log("Successfully connected to DB"))
    .catch((err) => console.log("Failed to connect to DB", err.message));