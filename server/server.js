const express = require("express");
const app = express();
require("../database/db");

const PORT = process.env.PORT || 4000;
app.get("/", (req, res) => {
    res.status(200).json({ message: "Hello World!" });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
