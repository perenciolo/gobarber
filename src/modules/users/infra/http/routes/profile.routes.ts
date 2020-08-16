import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ProfileController from '@modules/users/infra/http/controllers/ProfileController';
import ensureAuthenticated from '@shared/infra/middlewares/ensureAuthenticated';

const profileRouter = Router();
const profileController = new ProfileController();

profileRouter.use(ensureAuthenticated);

profileRouter.get('/', profileController.show);
profileRouter.put(
  '/',
  celebrate({
    [Segments.BODY]: Joi.object({
      name: Joi.string().trim(),
      email: Joi.string().email().trim(),
      old_password: Joi.string().trim().empty(),
      password: Joi.string().trim().empty(),
      password_confirmation: Joi.string()
        .trim()
        .empty()
        .valid(Joi.ref('password')),
    }).with('old_password', ['password', 'password_confirmation']),
  }),
  profileController.update,
);

export default profileRouter;
