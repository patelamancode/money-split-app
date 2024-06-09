// Creating an express server in nodejs:
const http = require("http");
const fs = require("fs");
const users = require("./MOCK_DATA.json");
const PORT = 8000;

const server = http.createServer((req, res) => {});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
