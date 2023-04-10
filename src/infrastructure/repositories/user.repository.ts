import { Repository,EntityRepository  } from 'typeorm';
import { User } from '../../domain/entities/user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async createUser(user: User): Promise<User> {
    return await this.save(user);
  }

  async getUserById(id: number): Promise<User> {
    return await this.findOne({where: {id}});
  }

  async updateUser(user: User): Promise<User> {
    return await this.save(user);
  }

  async deleteUser(id: number): Promise<void> {
    await this.delete(id);
  }

  async getUsers(): Promise<User[]> {
    return await this.find();
  }
}