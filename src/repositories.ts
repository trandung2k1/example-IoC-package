import { Injectable, Repository } from 'inversion-of-control';

@Repository()
@Injectable()
class UserRepository {
    public find(): string {
        return 'User data';
    }
}

export default UserRepository;
