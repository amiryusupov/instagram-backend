import express from "express";
import cors from "cors";
import api from "./api/routes";
import { serverConfig } from "./config/index";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", api);

app.listen(serverConfig.port, () => {
  console.log(`Server is running on http://localhost:${serverConfig.port}`);
});
