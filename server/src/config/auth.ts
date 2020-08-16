import AppError from '@shared/errors/AppError';

if (!process.env.APP_SECRET) {
  throw new AppError('Missing {APP_SECRET} environment variable');
}

export default {
  jwt: {
    secret: process.env.APP_SECRET,
    expiresIn: '1d',
  },
};
