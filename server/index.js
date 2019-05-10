const app = require("express")();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const server = require("http").Server(app);
const io = require("socket.io")(server);
const session = require("express-session");
const massive = require("massive");
require("dotenv").config();

server.listen(4000, () => console.log("Server Working, now FECK OFF!"));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  })
);

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
    console.log("here's your fecking Database");
  })
  .catch(err => console.log("Massive DB ===>", err));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", socket => {
  console.log("DRINK!");
  socket.emit("news", { hello: "world" });
  socket.on("my other event", function(data) {
    console.log(data);
  });
  socket.on("messages here", data => {
    socket.emit({ data: data });
  });
});
