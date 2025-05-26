import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import AuthController from "../controllers/auth.controller";

export const login = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    const body = JSON.parse(event.body || "{}");
    const { username, password } = body;
    const result = AuthController.login(username, password);
    return {
      statusCode: 200,
      body: JSON.stringify(result),
    };
  } catch (error: any) {
    return {
      statusCode: 401,
      body: JSON.stringify({ message: error.message }),
    };
  }
};
