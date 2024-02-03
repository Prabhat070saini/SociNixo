const express = require("express");
const app = express();
const mongoosedb = require("./config/database");
require("dotenv").config();
mongoosedb.connect();
// fdj
const PORT = process.env.PORT || 4000;
app.get('/', (req, res) => {
    return res.json({
        success: true,
        message: "server running successfully"
    })
});
app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`);
})