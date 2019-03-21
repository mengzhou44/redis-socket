const express = require("express");
const http = require("http");

const {setupSocketIO, sendMessageToClient} = require("./socket");
 
const app = express();
const server = http.createServer(app);

setupSocketIO(server);
 
app.use(express.json());

app.post('/message', (req,res)=> {
   
    sendMessageToClient({
        channelName: 'friends',  
        clientId: 5431, 
        message: "Hell0, 5431!"
      }
      );
    res.status(200).send();
});


server.listen(process.env.PORT | 3001, () => {
  console.log(`Listening on the port!`);
});





