import 'reflect-metadata';

import AppError from '@shared/errors/AppError';

import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import UpdateUserProfileService from './UpdateUserProfileService';

let fakeHashProvider: FakeHashProvider;
let fakeUsersRepository: FakeUsersRepository;
let updateUserProfile: UpdateUserProfileService;

describe('UpdateUserProfileService', () => {
  beforeEach(() => {
    fakeHashProvider = new FakeHashProvider();
    fakeUsersRepository = new FakeUsersRepository();
    updateUserProfile = new UpdateUserProfileService(
      fakeUsersRepository,
      fakeHashProvider,
    );
  });

  it('should be able to update user profile', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@email.com',
      password: '123456',
    });

    const updatedUser = await updateUserProfile.execute({
      user_id: user.id,
      name: 'John Make',
      email: 'jmake@email.com',
    });

    expect(updatedUser.name).toBe('John Make');
    expect(updatedUser.email).toBe('jmake@email.com');
  });

  it('should not be able to update non-existing user profile', async () => {
    await expect(
      updateUserProfile.execute({
        user_id: 'non_valid_id',
        name: 'John Make',
        email: 'jmake@email.com',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to update another user email', async () => {
    await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@email.com',
      password: '123456',
    });

    const user = await fakeUsersRepository.create({
      name: 'Melandro',
      email: 'melandroe@email.com',
      password: '123456',
    });

    await expect(
      updateUserProfile.execute({
        user_id: user.id,
        name: 'John Make',
        email: 'johndoe@email.com',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to update user password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@email.com',
      password: '123456',
    });

    const updatedUser = await updateUserProfile.execute({
      user_id: user.id,
      name: 'John Make',
      email: 'jmake@email.com',
      old_password: '123456',
      password: 'new_pass',
    });

    expect(updatedUser.password).toBe('new_pass');
  });

  it('should not be able to update user password when old_password is not informed', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@email.com',
      password: '123456',
    });

    await expect(
      updateUserProfile.execute({
        user_id: user.id,
        name: 'John Make',
        email: 'jmake@email.com',
        password: 'new_pass',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to update user password when old_password is wrong', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@email.com',
      password: '123456',
    });

    await expect(
      updateUserProfile.execute({
        user_id: user.id,
        name: 'John Make',
        email: 'jmake@email.com',
        old_password: 'carlinhosdejesus',
        password: 'new_pass',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
