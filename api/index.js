const express = require('express');
const app = express();
const cors = require("cors");
const port = 3001;

app.use(cors());
app.use(require('./src/route/index'));


app.listen(port, () => {
  console.log(`El servidor está corriendo en el puerto ${port}`)
})