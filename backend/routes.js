
import express from "express";
const router = express.Router();

// * import routes ==================================

import UserRoutes from "./routes/UserRoutes.js"

// * initialize routes ==============================

router.use("/", UserRoutes);

// * ================================================

export default router;