const net = require('net');
const stdin = process.stdin;

// const credentials = {
//   port: 3001,
//   host: "135.23.223.133"
// }

// const name = "Justin";

// const client = net.createConnection(credentials, () => {
//   console.log("We have connected!!");
// });

// client.setEncoding('utf8');
// stdin.setEncoding('utf8');
// // to say something to the server use client.write()
// client.write(`${name} has connected!`);

// client.on('data', (data) => {
//   console.log(data);
// })

// stdin.on('data', (input) => {
//   client.write(`${name}:  ${input}`);
// })

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