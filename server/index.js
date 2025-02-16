const ws=require("ws");
const server=ws.Server({port:"4000"});
server.on("connection",socket=>{
    socket.on("message",message=>{
        socket.send(`${message}`);
        console.log(message);
    })
})