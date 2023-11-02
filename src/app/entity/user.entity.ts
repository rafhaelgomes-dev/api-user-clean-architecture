export class User {
  id?: number | string
  name: string;
  sobrenome: string;
  idade: number;
  constructor(name: string, sobrenome: string, idade: number, id?: string | number) {
    this.id = id;
    this.name = name;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }
}