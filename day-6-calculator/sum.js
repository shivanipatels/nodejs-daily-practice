
const sumRequestHandler=(req,res)=>{
  const body=[];
  req.on('data',chunk=>{
    body.push(chunk);
    // console.log(chunk);
  });

  req.on('end',()=>{
    const bodyStr=Buffer.concat(body).toString();
    const params=new URLSearchParams(bodyStr);
    const bodyObj=Object.fromEntries(params);
    // console.log(bodyObj);
    const result=Number(bodyObj.num1) + Number(bodyObj.num2);
    // console.log(result);

    res.write(`<html lang="en">
<head>
  <title>Calculator</title>
</head>
<body>
  <h1>sum = ${result}</h1>
</body>
</html>`);
return res.end();
  });


}

exports.sumRequestHandler=sumRequestHandler;