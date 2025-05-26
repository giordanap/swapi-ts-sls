import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import AuthController from "../controllers/auth.controller";

export const validateToken = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    const token = event.headers.authorization || event.headers.Authorization;
    if (!token) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Token no proporcionado" }),
      };
    }

    const decoded = AuthController.validateToken(token);
    return {
      statusCode: 200,
      body: JSON.stringify({ valid: true, decoded }),
    };
  } catch (error: any) {
    return {
      statusCode: 401,
      body: JSON.stringify({ valid: false, message: error.message }),
    };
  }
};
