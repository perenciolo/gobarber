import { container, InjectionToken } from 'tsyringe';

import uploadConfig, { StorageDriver } from '@config/upload';
import IStorageProvider from '@shared/container/providers/StorageProvider/models/IStorageProvider';
import DiskStorageProvider from '@shared/container/providers/StorageProvider/implementations/DiskStorageProvider';
import S3StorageProvider from '@shared/container/providers/StorageProvider/implementations/S3StorageProvider';

type IProviders = {
  [key in StorageDriver]: InjectionToken<IStorageProvider>;
};

const providers: IProviders = {
  [StorageDriver.DISK]: DiskStorageProvider,
  [StorageDriver.S3]: S3StorageProvider,
};

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  providers[uploadConfig.driver],
);
