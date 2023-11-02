import { User } from "../entity/user.entity";

export interface UserRepositoryInterface {
  getAll(): Promise<User[]>
  saveUser(user: User): Promise<User>
}