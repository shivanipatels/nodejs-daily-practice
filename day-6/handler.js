


 const fs =require("fs");
const { buffer, json } = require("stream/consumers");
const { URLSearchParams } = require("url");
 
 const requestHandler = ((req, res) => {
   console.log(req.url, req.method);
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

    const body=[];
    req.on("data", (chunk) => {
      console.log("Received chunk:", chunk.toString());
      body.push(chunk);
    });

    req.on("end",()=>{
      const fullBody=Buffer.concat(body).toString();
      console.log(fullBody);
     const params = new URLSearchParams(fullBody);
    //  const bodyObj={};
    //  for(const [key,value] of params.entries()){
    //   bodyObj[key]=value;
    //  }
    //  console.log(bodyObj);
    const bodyObject =Object.fromEntries(params);
    console.log(bodyObject);
    fs.writeFileSync("user-details.txt", JSON.stringify(bodyObject)
     );
    });

      
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

 module.exports=requestHandler;
 
 