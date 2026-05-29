import { prisma } from "../config/prisma";
import type { JobStatus } from "../types/job";

const jobInclude = {
  reporter: {
    select: {
      id: true,
      name: true,
      city: true,
      isAvailable: true,
      ratePerMinute: true,
      createdAt: true,
      updatedAt: true,
    },
  },
  editor: {
    select: {
      id: true,
      name: true,
      isAvailable: true,
      flatFee: true,
      createdAt: true,
      updatedAt: true,
    },
  },
} as const;

async function findJobs(status?: JobStatus) {
  const query = {
    orderBy: {
      createdAt: "desc" as const,
    },
    include: jobInclude,
    ...(status ? { where: { status } } : {}),
  };

  return prisma.job.findMany(query);
}

export { findJobs };
