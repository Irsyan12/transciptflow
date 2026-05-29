import type { Request, Response } from "express";
import {
  listEditors,
  addEditor,
  editEditor,
  removeEditor,
} from "../services/editors.service";

import { sendSuccess } from "../utils/http-response";

async function getEditorsController(_req: Request, res: Response) {
  const editors = await listEditors();

  sendSuccess(res, editors);
}

async function postEditorsController(
  req: Request,
  res: Response
) {
  const editor = await addEditor(req.body);

  sendSuccess(
    res,
    editor,
    201,
  );
}

async function deleteEditorsController(_req: Request, res: Response) {
  // Placeholder for future implementation of deleting an editor
  sendSuccess(res, { message: "Delete editor functionality not implemented yet." });
}

async function putEditorsController(_req: Request, res: Response) {
  // Placeholder for future implementation of updating an editor
  sendSuccess(res, { message: "Update editor functionality not implemented yet." });
}

export { getEditorsController, postEditorsController, deleteEditorsController, putEditorsController };
