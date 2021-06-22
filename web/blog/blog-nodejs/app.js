const express = require("express");
const app = express();
const _PORT = 3000;

app.use("/app", index)
app.listen(_PORT, () => {
    console.log("The server listening on port " + _PORT);
})