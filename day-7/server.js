//third party module
const express = require("express"); 

 



 const app = express();

 app.use((req,res,next)=>{
  console.log("Middleware 1 executed",req.url, req.method);
   next();
 });

 app.use((req,res,next)=>{
  console.log("Middleware 2 executed",req.url, req.method);
   next();
 });

//  app.use((req,res,next)=>{
//   console.log("Middleware 3 executed",req.url, req.method);
//   res.send("<h1>Response from Middleware 3</h1>");
//    next();
//  });

app.get("/",(req,res,next)=>{
  console.log("Handling / for GET request",req.url, req.method);
  res.send(`<h1>Home Page</h1>`);
});

app.get("/contact-us",(req,res,next)=>{
  console.log("Handling /contact-us for GET request",req.url, req.method);
  res.send(`<h1>Contact Page</h1>
    <form action='/contact-us' method='POST'>
    Name:<input type="text" name="name"><br>
    Email:<input type="email" name="email"><br>
     <button type="submit">Submit</button>
      </form>
    `);
});

app.post("/contact-us",(req,res,next)=>{
  console.log("Handling /contact-us for POST request",req.url, req.method);
  res.send(`<h1>Thank you for contacting us!</h1>`);
});

 

  
 

 

 


 

 const PORT=3002;
 app.listen(PORT, () => {
   console.log(`Server is running on port http://localhost:${PORT}`);
 });
 