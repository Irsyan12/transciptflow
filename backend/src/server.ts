import { app } from "./app";

function startServer(port = Number(process.env.PORT ?? 3001)) {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

export { startServer };
