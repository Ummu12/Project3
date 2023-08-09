const http= require("http")

const server = http.createServer((req,res)=>{
if (req.url=="/"){
    res.write("App Home here")
    res.end()
}
else if(req.url=="/school"){
    res.write("School here")
    res.end()
}
else if (req.url=="/office"){
    res.write("office here")
    res.end()
}
 

})

server.listen(4000)
console.log("Server is running on port 4000..")