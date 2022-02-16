let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = function(data) {
  if (data === '\u0003') {
    process.exit();
  }
  if (data === 'w') {
    connection.write("Move: up");
    connection.write('Say: up');
  } else if (data === 'a') {
    connection.write("Move: left");
    connection.write('Say: left');
  } else if (data === 's') {
    connection.write("Move: down");
    connection.write('Say: down');
  } else if (data === 'd') {
    connection.write("Move: right");
    connection.write('Say: right');
  } else if (data === 'z') {
    connection.write('Say: Hello I am a snake ');
  } else if (data === 'x') {
    connection.write('Say: I am speed');
  }
};

module.exports = {
  setupInput
};