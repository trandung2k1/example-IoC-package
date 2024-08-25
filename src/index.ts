import DIContainer from 'inversion-of-control';
import { UserController } from './controllers';
import UserRepository from './repositories';
import { UserService } from './services';

// Setup container and resolve
const container = new DIContainer();
container.register('UserRepository', UserRepository);
container.register('UserService', UserService);
container.register('UserController', UserController);
const userController = container.resolveController<UserController>('UserController');

import express from 'express';
const app = express();
const port = 3000;
app.use(express.json());
app.get('/', userController.getUser.bind(userController));
app.listen(port);
