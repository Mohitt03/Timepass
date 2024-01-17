express = require("express");
dirname = require("dirname");

const app = express();
const port = 3000;

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.render("index.ejs")
})

app.listen(port, (req, res) => {
    console.log("Server is running on port 3000");
})