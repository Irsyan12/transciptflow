import { findEditors, findEditorById, createEditor, updateEditor, deleteEditor } from "../repositories/editors.repository";

async function listEditors() {
  return findEditors();
}

async function addEditor(data: {
  name: string;
  city: string;
  isAvailable: boolean;
  ratePerMinute: number;
}) {
  return createEditor(data);
}

async function editEditor(id: string, data: {
  name?: string;
  city?: string;
  isAvailable?: boolean;
  ratePerMinute?: number;
}) {
  const editor = await findEditorById(id);
  if (!editor) {
    throw new Error("Editor not found");
  }
  return updateEditor(id, data);
}

async function removeEditor(id: string) {
  const editor = await findEditorById(id);

  if (!editor) {
    throw new Error("Editor not found");
  }

  return deleteEditor(id);
}

export { listEditors, addEditor, editEditor, removeEditor };
