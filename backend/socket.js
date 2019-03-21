const redis = require("socket.io-redis");

const socketio = require("socket.io");

let socketServer;
let ioFriends, ioOrder;

const setupSocketIO = server => {
  socketServer = socketio(server);

  socketServer.adapter(
    redis({
      host: "127.0.0.1",
      port: 6379
    })
  );

  ioOrder = socketServer.of("order");
  
  ioOrder.on("connection", socket => {
    socket.on("join", (clientId, callback) => {
      socket.join(clientId);
      callback(`client ${clientId} is registered!`);
    });
  });

  ioFriends = socketServer.of("friends");

  ioFriends.on("connection", socket => {
    socket.on("join", (clientId, callback) => {
      socket.join(clientId);
      callback(`client ${clientId} is registered!`);
    });
  });

};

const sendMessageToClient = ({
    clientId, 
    message,
    channelName
   } 
    ) => {
        if (channelName === 'friends') {
            ioFriends.to(clientId).emit("message", message);
        } else {
            ioOrder.to(clientId).emit("message", message);
        } 
};

module.exports = {
  setupSocketIO,
  sendMessageToClient
};
