
// * Imports ================================================= //
import express from 'express'
import cors from "cors";
import connectDB from './configs/mongodb/mongodbConnect.js'
import router from "./routes.js";
// * ========================================================= //

// * PORT 
const PORT = 5000;

// * Initialize Express
const app = express();

// * initialize body-parser
app.use(express.json())

// * Cors
app.use(cors());

// * Connect MongoDb
connectDB()

// * routes
console.log("\x1b[36m", "Routes initializing");
app.use("/api/", router);

// * Listing to the PORT  ====================================== //

app.listen(
  PORT,
  console.log(
    `Server running on port http://localhost:${PORT}`
  )
)

// * ========================================================= //