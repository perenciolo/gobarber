import { container, InjectionToken } from 'tsyringe';

import cacheConfig, { CacheDriver } from '@config/cache';
import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';
import RedisCacheProvider from '@shared/container/providers/CacheProvider/implementations/RedisCacheProvider';

type IProviders = {
  [key in CacheDriver]: InjectionToken<ICacheProvider>;
};

const providers: IProviders = {
  [CacheDriver.REDIS]: RedisCacheProvider,
};

container.registerSingleton<ICacheProvider>(
  'CacheProvider',
  providers[cacheConfig.driver],
);
