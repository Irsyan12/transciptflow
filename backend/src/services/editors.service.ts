import { findEditors } from "../repositories/editors.repository";

async function listEditors() {
  return findEditors();
}

export { listEditors };
