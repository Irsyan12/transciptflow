import {
  findEditors,
  findEditorById,
  createEditor,
  updateEditor,
  deleteEditor,
} from "../repositories/editors.repository";
import { AppError } from "../utils/app-error";

async function listEditors() {
  return findEditors();
}

async function addEditor(data: {
  name: string;
  flatFee: number;
  isAvailable?: boolean;
}) {
  if (!data.name || !data.flatFee) {
    throw new AppError(400, "name and flatFee are required");
  }
  return createEditor(data);
}

async function editEditor(
  id: string,
  data: {
    name?: string;
    flatFee?: number;
    isAvailable?: boolean;
  },
) {
  const editor = await findEditorById(id);
  if (!editor) {
    throw new AppError(404, "Editor not found");
  }
  return updateEditor(id, data);
}

async function removeEditor(id: string) {
  const editor = await findEditorById(id);

  if (!editor) {
    throw new AppError(404, "Editor not found");
  }

  return deleteEditor(id);
}

export { listEditors, addEditor, editEditor, removeEditor };
