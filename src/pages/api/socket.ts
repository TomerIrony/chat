import { Server } from "socket.io";
import messageHandler from "../../utils/sockets/messageHandler";

export default function SocketHandler(req: any, res: any) {
  // It means that socket server was already initialised
  if (res.socket.server.io) {
    console.log("Already set up");
    res.end();
    return;
  }

  const io = new Server(res.socket.server);
  res.socket.server.io = io;

  
  




  // Define actions inside
  io.on("connection", (socket) => {
    socket.on("createdMessage", (msg) => {
      socket.broadcast.emit("newIncomingMessage", msg);
    })
    
  });

  console.log("Setting up socket");
  res.end();
}

