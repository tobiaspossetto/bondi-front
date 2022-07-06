import io from 'socket.io-client';

let socket = io('https://bondi-server.herokuapp.com/')

export default socket