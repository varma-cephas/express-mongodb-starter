const express = require("express");
const {run} = require("./db/connect")
const app = express();
const port = process.env.PORT;

run()
app.get("/", (req, res) => {
    res.send([{status:"successful"}])
})

app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`)
})