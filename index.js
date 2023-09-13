const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.json())


app.listen(5000, () => {

    console.log("\n\nservidor rodando\n\n")
})

app.route("/").get((req, res) => {

    res.send("FUNCIONOU HOSPEDADO NA VERCEU")
})

app.route("/:id").post((req, res) => {

    let a = req.params.id

    res.send(a)
})