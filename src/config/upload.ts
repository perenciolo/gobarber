import path from 'path';
import crypto from 'crypto';
import multer from 'multer';
import AppError from '@shared/errors/AppError';

const tmpFolder = path.resolve(__dirname, '..', '..', 'tmp');

export enum StorageDriver {
  DISK = 'disk',
  S3 = 's3',
}

interface IUploadConfig {
  driver: StorageDriver;
  tmpFolder: string;
  uploadsFolder: string;
  multer: { storage: multer.StorageEngine };
  config: {
    disk: {
      uploadsUri: string;
    };
    aws: {
      region: string;
      bucket: string;
      bucketUri: string;
      acl: string;
    };
  };
}

if (
  !process.env.APP_API_URL ||
  (process.env.STORAGE_DRIVER === StorageDriver.S3 &&
    (!process.env.AWS_DEFAULT_REGION ||
      !process.env.AWS_S3_UPLOADS_BUCKET ||
      !process.env.AWS_S3_UPLOADS_ACL))
) {
  throw new AppError('Missing Environment variables');
}

export default {
  driver: process.env.STORAGE_DRIVER || StorageDriver.DISK,
  tmpFolder,
  uploadsFolder: path.resolve(tmpFolder, 'uploads'),
  multer: {
    storage: multer.diskStorage({
      destination: tmpFolder,
      filename(request, file, callback) {
        const fileHash = crypto.randomBytes(10).toString('hex');
        const fileName = `${fileHash}-${file.originalname}`;

        return callback(null, fileName);
      },
    }),
  },
  config: {
    disk: {
      uploadsUri: `${process.env.APP_API_URL}/files`,
    },
    aws: {
      region: process.env.AWS_DEFAULT_REGION,
      bucket: process.env.AWS_S3_UPLOADS_BUCKET,
      bucketUri: `https://${process.env.AWS_S3_UPLOADS_BUCKET}.s3.amazonaws.com`,
      acl: process.env.AWS_S3_UPLOADS_ACL,
    },
  },
} as IUploadConfig;
