import dotenv from "dotenv";

dotenv.config();

class RootService {
  public async get(): Promise<string> {
    const apiA = process.env.API_A;

    return apiA;
  }
}

export { RootService };
