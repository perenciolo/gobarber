import { RedisOptions } from 'ioredis';

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
      host: '127.0.0.1',
      port: 6379,
    },
  },
} as IRedisConfig;
