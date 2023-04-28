import dotenv from "dotenv";

dotenv.config();

const folhasProcessadas = [];

class RootService {
  public async get() {
    return {
      folhasProcessadas,
      totalSalarioLiquido: folhasProcessadas.reduce(
        (total, folha) => total + folha.liquido,
        0
      ),
    };
  }

  public async post(folhas) {
    folhasProcessadas.push(...folhas);
  }
}

export { RootService };
