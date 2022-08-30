const express =  require ("express");
const route = require("./routes/apiRoutes");

const app = express();
app.use(express.json());
app.use(route);

app.listen(5000, ()=>console.log('server running....'));


module.exports = app;  