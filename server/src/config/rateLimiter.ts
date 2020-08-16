import AppError from '@shared/errors/AppError';

if (!process.env.REDIS_HOST || !process.env.REDIS_PORT) {
  throw new AppError('Missing Redis environment variables');
}

export default {
  host: process.env.REDIS_HOST,
  port: Number(process.env.REDIS_PORT),
  password: process.env.REDIS_PASS || undefined,
};
