const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Home Page</title></head>");
    res.write("<body><h1>Home Page</h1></body>");
    res.write("</html>");
   return res.end();
  } else if (req.url === "/products") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Products Page</title></head>");
    res.write("<body><h1>Products Page</h1></body>");
    res.write("</html>");
   return res.end();
  } else {
     res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Page Not Found</title></head>");
    res.write("<body><h1>Page Not Found</h1></body>");
    res.write("</html>");
   return res.end();
  }

  
});

const  PORT = 3000;
server.listen(PORT, () => {
  console.log(` Server is running on port http://localhost:${PORT}`);
});
