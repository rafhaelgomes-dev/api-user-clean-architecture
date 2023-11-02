import { UserUseCase } from "../usecase/user.usecase";
import { Request } from "../../infra/adapters/Request.interface";

export class UserController {
  constructor(private readonly userUseCase: UserUseCase) {}

  saveUser = async (request: Request) => {
    try {
      const result = await this.userUseCase.saveUser(request.body);
      return {
        body: result,
        statusCode: 200
      }
    } catch (error) {
      return {
        body: (error as Error).message,
        statusCode: 400
      }
    }
  }
}