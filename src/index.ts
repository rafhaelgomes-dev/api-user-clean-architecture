import express from 'express';
import router from './infra/http/user.http';
const app = express()

app.use(express.json());
app.use('/users', router);


app.listen('3000', () => {
  console.log('servidor rodando na porta 3000')
})