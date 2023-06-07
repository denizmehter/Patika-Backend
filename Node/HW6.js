const koa = require('koa');
const app = new koa();

app.use(ctx => {
    if(ctx.path === '/'){
        ctx.type = "text/html";
        ctx.body = '<h1>INDEX SAYFASINA HOSGELDINIZ</h1>';
      }
      else if(ctx.path === "/hakkimda"){
        ctx.type = "text/html"
        ctx.body = '<h1>HAKKIMDA SAYFASINA HOSGELDINIZ</h1>';
      }
      else if(ctx.path === "/iletisim"){
        ctx.type = "text/html"
        ctx.body = '<h1>İLETİSİM SAYFASINA HOSGELDINIZ</h1>';
      }
      else {
        ctx.type = "text/html"
        ctx.body = '<h1>404 SAYFA BULUNAMADI</h1>';
      }
});

app.listen(5000);