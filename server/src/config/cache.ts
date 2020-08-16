import { RedisOptions } from 'ioredis';
import AppError from '@shared/errors/AppError';

if (!process.env.REDIS_HOST || !process.env.REDIS_PORT) {
  throw new AppError('Missing Redis environment variables');
}

export enum CacheDriver {
  REDIS = 'redis',
}

interface IRedisConfig {
  driver: CacheDriver.REDIS;
  config: {
    [CacheDriver.REDIS]: RedisOptions;
  };
}

export default {
  driver: CacheDriver.REDIS,
  config: {
    [CacheDriver.REDIS]: {
      host: process.env.REDIS_HOST,
      port: Number(process.env.REDIS_PORT),
      password: process.env.REDIS_PASS || undefined,
    },
  },
} as IRedisConfig;
