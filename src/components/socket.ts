import io from 'socket.io-client';

const socket = io('https://bondi-server.herokuapp.com/')

export default socket