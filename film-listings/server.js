const express = require('express');
const axios = require('axios');
const next = require('next');
const routes = require('./routes');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 4000;
const app = next({ dev });
const handle = routes.getRequestHandler(app);

app.prepare()
.then(() => {
  const server = express();

  server.get('*', (req, res) => {
    return handle(req, res);
  })

  server.use(handle).listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  })
})
.catch((ex) => {
  console.error(ex.stack);
  process.exit(1);
});
