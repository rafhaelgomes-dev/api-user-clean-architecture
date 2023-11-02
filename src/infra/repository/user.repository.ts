import { User } from "../../app/entity/user.entity";
import { UserRepositoryInterface } from "../../app/interface/user.interface";

export class UserRepositoryMemory implements UserRepositoryInterface {
  async saveUser(user: User): Promise<User> {
    const save = new User(user.name, user.sobrenome, user.idade, 1)
    return Promise.resolve(save);
  }
  getAll(): Promise<User[]> {
    const user = new User('Rafhael', 'Gomes', 21)
    return Promise.resolve([user]);
  }
}