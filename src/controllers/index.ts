import { Request, Response } from "express";
import { RootService } from "../services";

class RootController {
  public async get(req: Request, res: Response) {
    const rootService = new RootService();

    const folhas = await rootService.get();

    res.send(folhas);
  }
}

export { RootController };
