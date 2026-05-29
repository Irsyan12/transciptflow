import { prisma } from "../config/prisma";

async function findEditors() {
  return prisma.editor.findMany({
    orderBy: {
      createdAt: "desc" as const,
    },
  });
}

export { findEditors };
