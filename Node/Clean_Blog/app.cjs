const express = require('express');
const port = 3000;
const app = express();
const blog = { id: 1, title: "Blog title", description: "Blog description" };

app.listen(port, () => {
    console.log(`Uygulama ${port} Numaralı Portta Başladı!`);
})

app.get('/', (req,res) => {
    res.send(blog);
})