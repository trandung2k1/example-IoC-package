import { Injectable, Service } from 'inversion-of-control';
import UserRepository from './repositories';

@Service()
@Injectable()
export class UserService {
    constructor(private userRepository: UserRepository) {}

    public getUser(): string {
        return this.userRepository.find();
    }
}
