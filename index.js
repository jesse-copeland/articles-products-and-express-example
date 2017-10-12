const http = require('http');
const app = require('./app');

const port = process.env.PORT || 3000;

http.createServer(app).listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
