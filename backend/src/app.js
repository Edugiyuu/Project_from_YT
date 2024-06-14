const express = require('express');
const app = express();
const port = 3001;

const cors = require('cors');
app.use(cors());

const routes = require('./routes');
app.use(express.json());
app.use('/api', routes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});