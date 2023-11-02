import Express from 'express';
import { UserUseCase } from "../../app/usecase/user.usecase";
import { UserController } from "../../app/controller/user.controller";
import ExpressAdapter from "../adapters/express/express.adapter";
import { UserRepositoryMemory } from "../repository/user.repository";

const router = Express.Router();
const repository = new UserRepositoryMemory()
const userCase = new UserUseCase(repository);
router.post('/', (req, res) => {
  new ExpressAdapter(req, res).create(new UserController(userCase).saveUser)
})

export default router;