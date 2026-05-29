import { Router } from "express";
import { asyncHandler } from "../utils/async-handler";
import { getEditorsController } from "../controllers/editors.controller";

const editorsRouter = Router();

editorsRouter.get("/", asyncHandler(getEditorsController));

export { editorsRouter };
