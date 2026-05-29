import { Router } from "express";
import { asyncHandler } from "../utils/async-handler";
import { getJobsController } from "../controllers/jobs.controller";

const jobsRouter = Router();

jobsRouter.get("/", asyncHandler(getJobsController));

export { jobsRouter };
