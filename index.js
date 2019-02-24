import express from "express";
const app = express();

const PORT = 4000;

const handleListening = () => {
  console.log(`Listening on : http://localhost:${PORT}`);
};

const handleHome = (req, res) => {
  res.send("Welcome Home!!");
};

const handleProfile = (req, res) => {
  res.send("This is your Profile");
};

const myMiddleware = (req, res, next) => {
  console.log("Between");
  next();
};

app.use(myMiddleware);

app.get("/", handleHome);
app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
