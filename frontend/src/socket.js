import io from 'socket.io-client';
import {toast} from 'react-toastify';
 
let socketFriends, socketOrder;


export const setupSockets = ()=> {

    socketFriends = io('http://localhost:3001/friends');
    socketOrder = io('http://localhost:3001/order');

    socketFriends.on('connect', function () {
        console.log('friends socket connection is established.');
    });

    socketOrder.on('connect', function () {
        console.log('order socket connection is  established.');
    });

    socketFriends.on('message', data => {
        console.log('listening...');
        console.log(`Friends Message is received! ${data}`);
        toast.info(data);
    });

    socketOrder.on('message', data => {
        console.log('listening...');
        console.log(`Order Message is received! ${data}`);
        toast.info(data);
    });
}

export const joinSocketServer  = (clientId) => {
    socketFriends.emit('join', clientId, (confirmed)=> {
         console.log(confirmed);
    });

    socketOrder.emit('join', clientId, (confirmed)=> {
        console.log(confirmed);
   });
}

 

 