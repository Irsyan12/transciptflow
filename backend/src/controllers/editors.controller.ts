import type { Request, Response } from "express";
import {
  listEditors,
  addEditor,
  editEditor,
  removeEditor,
} from "../services/editors.service";

import { sendSuccess } from "../utils/http-response";
import { AppError } from "../utils/app-error";

async function getEditorsController(_req: Request, res: Response) {
  const editors = await listEditors();

  sendSuccess(res, editors);
}

async function postEditorsController(req: Request, res: Response) {
  const { name, flatFee, isAvailable } = req.body;
  const editor = await addEditor({ name, flatFee, isAvailable });
  sendSuccess(res, editor, 201);
}

async function putEditorsController(req: Request, res: Response) {
  const id = req.params.id as string;
  if (!id) {
    throw new AppError(400, "ID is required");
  }
  const { name, flatFee, isAvailable } = req.body;
  const editor = await editEditor(id, { name, flatFee, isAvailable });
  sendSuccess(res, editor);
}

async function deleteEditorsController(req: Request, res: Response) {
  const id = req.params.id as string;
  if (!id) {
    throw new Error("ID is required");
  }
  await removeEditor(id);
  sendSuccess(res, {});
}

export {
  getEditorsController,
  postEditorsController,
  deleteEditorsController,
  putEditorsController,
};
