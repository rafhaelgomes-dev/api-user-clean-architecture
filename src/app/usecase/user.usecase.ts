import { User } from "../entity/user.entity";
import { UserRepositoryInterface } from "../interface/user.interface";

export class UserUseCase {
  constructor(private readonly userRepository: UserRepositoryInterface) {}

  async getUser(): Promise<User[]> {
    const user = await this.userRepository.getAll();

    if (!user || !user?.length) return [];

    return user;
  }

  async saveUser(user: any): Promise<User> {
    if (!user.nome) throw new Error('Nome obrigatório');

    if (!user.idade) throw new Error('Idade obrigatório');

    if (!user.sobrenome) throw new Error('Sobrenome obrigatório');

    const save = await this.userRepository.saveUser(user);

    const result = {
      id: save.id,
      name: save.name,
      sobrenome: save.sobrenome,
      idade: save.idade
    }

    return result;
  }
}