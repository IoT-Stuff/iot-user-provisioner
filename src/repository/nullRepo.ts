import mongoose from 'mongoose';
import { UserRepository } from './repository';
import User from '../domain/user';


export class NullRepository implements UserRepository {
  constructor() {
  }

  async insert(user: User): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve(user);
    });
  }
}
