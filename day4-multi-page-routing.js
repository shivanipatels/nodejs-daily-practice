const http=require('http');


const server=http.createServer((req,res)=>{
  console.log(req.url);
  if(req.url==='/'){
    res.setHeader("Content-Type","text/html");
    res.write("<html>");
    res.write("<head><title>Home Page</title></head>");
    res.write("<body><h1>Welcome to Home Page</h1>");
    res.write("<a href='/'>Home</a>");
    res.write("<a href='/about'>About</a>");
    res.write("<a href='/contact'>Contact</a>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }else if(req.url==='/about'){
    res.setHeader("Content-Type","text/html");
    res.write("<html>");
    res.write("<head><title>About Page</title></head>");
    res.write("<body><h1>Welcome to About Page</h1>");
    res.write("<a href='/'>Home</a>");
    res.write("<a href='/about'>About</a>");
    res.write("<a href='/contact'>Contact</a>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }else if(req.url==='/contact'){
    res.setHeader("Content-Type","text/html");
    res.write("<html>");
    res.write("<head><title>Contact Page</title></head>");
    res.write("<body><h1>Welcome to Contact Page</h1>");
    res.write("<a href='/'>Home</a>");
    res.write("<a href='/about'>About</a>");
    res.write("<a href='/contact'>Contact</a>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }else{
    res.setHeader("Content-Type","text/html");
    res.write("<html>");
    res.write("<head><title>404 Not Found</title></head>");
    res.write("<body><h1>404 Not Found</h1></body>");
    res.write("</html>");
    return res.end();
  }
})



const PORT=3200;
server.listen(PORT,()=>{
  console.log(`server is running http://localhost:${PORT}`);
  
})