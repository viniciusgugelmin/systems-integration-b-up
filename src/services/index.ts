import dotenv from "dotenv";

dotenv.config();

const folhasProcessadas = []

class RootService {
  public async get() {
    const apiA = process.env.API_A;

    return {
      folhasProcessadas,
      totalSalarioLiquido: folhasProcessadas.reduce((total,folha) => total + folha.liquido,0)
    };
  }
}

export { RootService };
