var http = require('http');
const server = http.createServer((req, res)=>{
    const url = req.url;

  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h2>INDEX SAYFASINA HOŞGELDİNİZ</h2>");
  } else if (url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h2>ABOUT SAYFASINA HOŞGELDİNİZ</h2>");
  } else if (url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h2>CONTACT SAYFASINA HOŞGELDİNİZ</h2>");
  }

  res.end();
})

server.listen(5000, () => {
    console.log("Sunucu başlatıldı");
})