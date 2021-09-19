const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send("Thank You for calling me..And i know how to open node...");

})

app.listen(4300, () => {
    console.log("listening on port 4300 ");
})