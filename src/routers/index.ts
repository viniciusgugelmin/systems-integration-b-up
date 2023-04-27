import { Router } from "express";
import { RootController } from "../controllers";

const rootRouter = Router();
const rootController = new RootController();

rootRouter.get("/", (req, res) => {
  res.send("Hello from systems-integration-b-up");
});

rootRouter.get("/folha/listar", (req, res) => rootController.get(req, res));

export { rootRouter };
