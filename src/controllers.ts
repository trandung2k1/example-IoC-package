import { Controller, Injectable } from 'inversion-of-control';
import { UserService } from './services';
import { Request, Response } from 'express';

@Controller()
@Injectable()
export class UserController {
    constructor(private userService: UserService) {}

    public getUser(req: Request, res: Response) {
        const result = this.userService.getUser();
        return res.json(result);
    }
}
