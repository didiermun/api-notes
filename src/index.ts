import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import authRouter from './modules/auth/application/router';
import userRouter from './modules/user/application/router';
import noteRouter from './modules/note/application/router';
import todoRouter from './modules/todo/application/router';
import container from './IoC/container';

const API_PREFIX = '/api';
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(API_PREFIX, authRouter(container.cradle));
app.use(API_PREFIX, userRouter(container.cradle));
app.use(API_PREFIX, noteRouter(container.cradle));
app.use(API_PREFIX, todoRouter(container.cradle));

const port = process.env.PORT || 7000;

app.listen(port, () => {
  console.log(`Application started at port ${port}`);
});
