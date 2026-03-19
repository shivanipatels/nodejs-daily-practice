
const http=require('http');
const { reqstHandler } = require('./handler');

const server=http.createServer(reqstHandler);

const port=3500;
server.listen(port,()=>{
  console.log(`server running on address http://localhost:${port}`);
})