import { prisma } from "../config/prisma";

async function findEditors() {
  return prisma.editor.findMany({
    orderBy: {
      createdAt: "desc" as const,
    },
  });
}

async function findEditorById(id: string) {
  return prisma.editor.findUnique({
    where: {
      id,
    },
  });
}

async function createEditor(data: {
  name: string;
  city: string;
  isAvailable: boolean;
  ratePerMinute: number;
}) {
  return prisma.editor.create({
    data,
  });
}

async function updateEditor(
  id: string,
  data: {
    name?: string;
    city?: string;
    isAvailable?: boolean;
    ratePerMinute?: number;
  }
) {
  return prisma.editor.update({
    where: {
      id,
    },
    data,
  });
}

async function deleteEditor(id: string) {
  return prisma.editor.delete({
    where: {
      id,
    },
  });
}

export { findEditors, findEditorById, createEditor, updateEditor, deleteEditor };
