/* eslint-disable import/no-anonymous-default-export */
export default (io:any, socket:any) => {
    const createdMessage = (msg: any) => {
      
      socket.broadcast.emit("newIncomingMessage", msg);
    };
    
  
    socket.on("createdMessage", createdMessage);
  };