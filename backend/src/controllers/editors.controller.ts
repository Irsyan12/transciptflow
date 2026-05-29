import type { Request, Response } from "express";
import { listEditors } from "../services/editors.service";
import { sendSuccess } from "../utils/http-response";

async function getEditorsController(_req: Request, res: Response) {
  const editors = await listEditors();

  sendSuccess(res, editors);
}

export { getEditorsController };
