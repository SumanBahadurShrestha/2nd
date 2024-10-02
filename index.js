const express  = require('express');
const dotenv = require('dotenv');
require ("./src/db/connect");
const salesRoute = require("./src/routes/sale");
const userRoutes = require("./src/routes/comment");
const stdRoutes = require("./src/routes/student");

const app = express()
dotenv.config();

const PORT = process.env.PORT || 3000;
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!")
});

app.use('/users', userRoutes);
app.use("/sales", salesRoute);
app.use("/students", stdRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})