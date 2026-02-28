const http = require("http");
const fs =require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Home Page</title></head>");
    res.write("<body><h1>Enter Your Details</h1>");
    res.write("<form action='/submit-details' method='POST'>");
    res.write(
      "<input type='text' name='name' placeholder='Enter your name' required><br>",
    );
    res.write(
      "<input type='email' name='email' placeholder='Enter your email' required><br>",
    );
    res.write("<button type='submit'>Submit</button>");
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/submit-details"  && req.method === "POST") {
     fs.writeFileSync("user-details.txt", "Shivani Patel"
    );
    res.statusCode=302;
    res.setHeader("Location",'/');
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

const PORT=3200;
server.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
