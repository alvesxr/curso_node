import app from "./app";
import "dotenv/config";

console.log("JWT_SECRET no server:", process.env.JWT_SECRET);

const port = 3000;
app.listen(port, () => {
  console.log(`Server está rodando na porta ${port}`);
  console.log(`http://localhost:${port}`);
});
