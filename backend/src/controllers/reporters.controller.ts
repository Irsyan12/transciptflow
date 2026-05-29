import type { Request, Response } from "express";
import { listReporters } from "../services/reporters.service";
import { sendSuccess } from "../utils/http-response";

async function getReportersController(_req: Request, res: Response) {
  const reporters = await listReporters();

  sendSuccess(res, reporters);
}

export { getReportersController };
