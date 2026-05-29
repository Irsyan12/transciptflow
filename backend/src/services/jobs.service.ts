import { AppError } from "../utils/app-error";
import { findJobs } from "../repositories/jobs.repository";
import { isJobStatus, type JobStatus } from "../types/job";

async function listJobs(status?: string) {
  if (status && !isJobStatus(status)) {
    throw new AppError(400, `Invalid job status: ${status}`);
  }

  return findJobs(status as JobStatus | undefined);
}

export { listJobs };
