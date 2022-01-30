const fs = require('fs');
const http = require('http');

const port = process.env.PORT || 3000;

const server  = http.createServer((req, res)=>{
    
    res.setHeader('Content-Type', 'text/html')
    console.log(req.url)
    if(req.url == '/'){
        res.statusCode = 200;
        const data = fs.readFileSync('websitemain.html'); 
        res.end(data.toString());
    }
    else if(req.url == '/about'){
        res.statusCode = 200;
        res.end('<h1>Node Js 101 with VS Code & Azure Devops</h1> <p> Learn and explore the world of Node Js, VS Code and Azure Devops  with this workshop!!Node.js is an open source, cross-platform runtime environment for developing server-side and networking applications. Node.js applications are written in JavaScript, and can be run within the Node.js runtime on OS X, Microsoft Windows, and Linux. Node.js also provides a rich library of various JavaScript modules which simplifies the development of web applications using Node.js to a great extent. Visual Studio Code is a source-code editor made by Microsoft. Microsoft Azure is a cloud computing service operated by Microsoft for application management via Microsoft-managed data centers. DevOps is a software development practice that promotes collaboration between development and operations, resulting in faster and more reliable software delivery. Commonly referred to as a culture, DevOps connects people, process, and technology to deliver continuous value.</p>');

    }
    else if(req.url == '/contact'){
        res.statusCode = 200;
        res.end('<h1> Ananya Ghosh</h1> <p> email@gmail.com</p>');
    } 
    else{
        // res.harry();
        res.statusCode = 404;
        res.end('<h1> Not Found</h1> <p> Hey this page was not found on this server</p>');
    }
    
})

server.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);

});