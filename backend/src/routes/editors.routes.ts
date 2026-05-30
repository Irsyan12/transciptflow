import { Router } from "express";
import { asyncHandler } from "../utils/async-handler";
import {
  getEditorsController,
  postEditorsController,
  putEditorsController,
  deleteEditorsController,
} from "../controllers/editors.controller";

const editorsRouter = Router();

editorsRouter.get("/", asyncHandler(getEditorsController));
editorsRouter.post("/", asyncHandler(postEditorsController));
editorsRouter.put("/:id", asyncHandler(putEditorsController));
editorsRouter.delete("/:id", asyncHandler(deleteEditorsController));

export { editorsRouter };
