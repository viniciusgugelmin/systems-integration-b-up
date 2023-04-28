import { Request, Response } from "express";
import { RootService } from "../services";

class RootController {
  public async get(req: Request, res: Response) {
    const rootService = new RootService();

    const folhas = await rootService.get();

    res.send(folhas);
  }

  public async post(req: Request, res: Response) {
    const folhas = req.body;
    const rootService = new RootService();

    await rootService.post(folhas);

    res.send();
  }
}

export { RootController };
