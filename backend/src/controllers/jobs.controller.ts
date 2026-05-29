import type { Request, Response } from "express";
import { listJobs } from "../services/jobs.service";
import { sendSuccess } from "../utils/http-response";

async function getJobsController(req: Request, res: Response) {
  const status =
    typeof req.query.status === "string" ? req.query.status : undefined;
  const jobs = await listJobs(status);

  sendSuccess(res, jobs);
}

export { getJobsController };
