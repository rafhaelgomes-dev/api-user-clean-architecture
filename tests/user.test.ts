import { User } from "../src/app/entity/user.entity";
import { UserUseCase } from "../src/app/usecase/user.usecase";
import { UserRepositoryMemory } from "../src/infra/repository/user.repository";

describe('User', () => {
  test('Deve retornar usuários', async () => {
    const userRepository = new UserRepositoryMemory();
    const user = new UserUseCase(userRepository);
    const getUser = await user.getUser()
    expect(getUser).toEqual([{
      name: 'Rafhael',
      sobrenome: 'Gomes',
      idade: 21
    }])
  })

  test('Deve retornar uma lista vazia se não existir nenhum usuário', async () => {
    const userRepository = new UserRepositoryMemory();
    const user = new UserUseCase(userRepository);
    const getUser = await user.getUser()
    expect(getUser).toEqual([])
  })
})