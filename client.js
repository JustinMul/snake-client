const net = require('net');
const stdin = process.stdin;

const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log('You connected successfully');
    conn.write('Name: Jus');
    // conn.write("Move: up");
    // setTimeout(() =>{
    //   conn.write("Move: left");
    // },2000);
    
  });


  //returns error message for getting kicked
  conn.on("data", (data) => {
    console.log('connected user says:', data);
  });

  return conn;
};


module.exports = {
  connect
};