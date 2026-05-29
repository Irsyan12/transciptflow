const JOB_STATUSES = [
  "NEW",
  "ASSIGNED",
  "TRANSCRIBED",
  "REVIEWED",
  "COMPLETED",
] as const;

type JobStatus = (typeof JOB_STATUSES)[number];

function isJobStatus(value: string): value is JobStatus {
  return JOB_STATUSES.includes(value as JobStatus);
}

export { JOB_STATUSES, type JobStatus, isJobStatus };