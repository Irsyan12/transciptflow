import { prisma } from "../config/prisma";

async function findReporters() {
  return prisma.reporter.findMany({
    orderBy: {
      createdAt: "desc" as const,
    },
  });
}

export { findReporters };
