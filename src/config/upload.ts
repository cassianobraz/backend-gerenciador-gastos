/* eslint-disable @typescript-eslint/ban-types */
import path from 'path';
import crypto from 'crypto';
import multer, { StorageEngine } from 'multer';

const tmpFolder = path.resolve(__dirname, '..', '..', 'tmp', 'uploads');

interface IUploadConfig {
  driver: 's3' | 'disk';
  tmpFolder: string;
  uploadFolder: string;
  multer: {
    storage: StorageEngine;
  };
  config: {
    disk: {};
    aws: {
      bucket: string;
    };
  };
}

export default {
  driver: process.env.STORAGE_DRIVER,

  tmpFolder,
  uploadFolder: path.resolve(tmpFolder, 'uploads'),

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
    disk: {},
    aws: {
      bucket: 'appgobarber-vini',
    },
  },
} as IUploadConfig;
