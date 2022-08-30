const express =  require ("express");
const cors = require ("cors");
const route = require("./routes/apiRoutes");

const app = express();
app.use(cors());
app.use(express.json());
app.use(route);

app.listen(5000, ()=>console.log('server running....'));


module.exports = app;   