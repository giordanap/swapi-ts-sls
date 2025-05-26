import jwt from "jsonwebtoken";

class AuthController {
  private secretKey: string;

  constructor() {
    this.secretKey = process.env.JWT_SECRET || "mySecretKey";
  }

  login(username: string, password: string) {
    if (username === "test" && password === "123456") {
      const token = jwt.sign({ username }, this.secretKey, { expiresIn: "1h" });
      return { token, user: { username } };
    } else {
      throw new Error("Credenciales inválidas");
    }
  }

  validateToken(token: string) {
    try {
      const decoded = jwt.verify(token, this.secretKey);
      return decoded;
    } catch (error) {
      throw new Error("Token inválido");
    }
  }
}

export default new AuthController();
