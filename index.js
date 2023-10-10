const express = require('express');
const app = express();
const fetch = require('node-fetch');
 
app.set("view engine", "ejs");
app.use(express.static("public"));
const port = 3000;

app.get('/', (req, res) => {
    res.render('index.ejs');
});
app.get('/new', async(req, res) => {
    // let userWord = req.body.word;
    // console.log(userWord);
    let url = "https://www.dictionaryapi.com/api/v3/references/collegiate/json/voluminous?key=eb628839-f921-4616-8739-f19c8867b776";
    let response = await fetch(url);
    let result = await response.json();
    let definition = result[0].shortdef;
    res.render('new', {definition: definition });
});


app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
  });