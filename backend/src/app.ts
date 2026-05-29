import express from "express";
import { errorMiddleware } from "./middleware/error.middleware";
import { notFoundMiddleware } from "./middleware/not-found.middleware";
import { jobsRouter } from "./routes/jobs.routes";
import { reportersRouter } from "./routes/reporters.routes";
import { editorsRouter } from "./routes/editors.routes";

const app = express();

app.use(express.json());

app.get("/", (_req, res) => {
  res.json({
    success: true,
    message: "TranscriptFlow backend is running",
  });
});

app.use("/api/jobs", jobsRouter);
app.use("/api/reporters", reportersRouter);
app.use("/api/editors", editorsRouter);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

export { app };
