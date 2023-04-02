const express = require("express")
let app = express()
app.get("/", (req, res)=>{
    res.send("Привет, мир!")
})

app.listen(3000)
