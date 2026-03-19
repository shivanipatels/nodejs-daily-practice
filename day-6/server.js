 const http = require("http");
const requestHandler = require("./handler");



 const server = http.createServer(requestHandler);


 const PORT=3200;
 server.listen(PORT, () => {
   console.log(`Server is running on port http://localhost:${PORT}`);
 });
 