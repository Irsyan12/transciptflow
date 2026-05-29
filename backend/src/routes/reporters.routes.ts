import { Router } from "express";
import { asyncHandler } from "../utils/async-handler";
import { getReportersController } from "../controllers/reporters.controller";

const reportersRouter = Router();

reportersRouter.get("/", asyncHandler(getReportersController));

export { reportersRouter };
