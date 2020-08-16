import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import UpdateUserProfileService from '@modules/users/services/UpdateUserProfileService';
import ShowProfileService from '@modules/users/services/ShowProfileService';

export default class ProfileController {
  async show(request: Request, response: Response): Promise<Response> {
    const showProfile = container.resolve(ShowProfileService);
    const user = await showProfile.execute({ user_id: request.user.id });
    return response.json(classToClass(user));
  }

  async update(request: Request, response: Response): Promise<Response> {
    const { name, email, old_password, password } = request.body;
    const updateProfile = container.resolve(UpdateUserProfileService);

    const user = await updateProfile.execute({
      user_id: request.user.id,
      name,
      email,
      old_password,
      password,
    });

    return response.json(classToClass(user));
  }
}
