//imports
import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import serverError from "./middleware/serverError.mjs";
import connectDB from "./db/conn.mjs";
import userRoutes from "./routes/userRoutes.mjs";
import gameRoutes from "./routes/gameRoutes.mjs";
import seedRoute from "./routes/seedRoute.mjs";

//setups
connectDB();
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

//middleware
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

//routes
app.use("/api/user", userRoutes);
app.use("/api/game", gameRoutes);
app.use("/seed", seedRoute);

//error handling middleware
app.use(serverError);

//listener
app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
