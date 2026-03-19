const { url } = require("inspector");
const { sumRequestHandler } = require("./sum");

const reqstHandler=(req,res)=>{
  console.log(req.url, req.method);
  if(req.url === "/"){
    res.setHeader('Content-Type','text/html');
     res.write(`
      <html lang="en">
<head>
  <title>Calculator</title>
</head>
<body>
  <h1>welcom to calculator</h1>
  <a href="/cal">calculator</a>
</body>
</html>`);
return res.end();
  }else if(req.url.toLowerCase()=== '/cal'){
          res.setHeader('Content-Type','text/html');
    res.write(`<html lang="en">
<head>
  <title>Calculator</title>
</head>
<body>
  <h1>Here is the calculator</h1>
    <form action="/cal-result" method="POST">
      Enter 1st no :<input type="text" name="num1">
     Enter 2nd no : <input type="text" name="num2">
      <button type="submit" value="sum">Sum</button>
    </form>
</body>
</html>`);
return res.end();
  }else if(req.url.toLowerCase() === '/cal-result' && req.method === "POST"){
   return sumRequestHandler(req,res);
      

  }else {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Page Not Found</title></head>");
    res.write("<body><h1>Page Not Found</h1></body>");
    res.write("</html>");
    return res.end();
  }
}

exports.reqstHandler=reqstHandler;