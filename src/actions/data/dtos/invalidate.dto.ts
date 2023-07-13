/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Wed, 12 Jul 2023 11:57:24 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} InvalidateMongoModel
 */
export type InvalidateMongoModel = {
  _id?: MongoDB.ObjectId;
  account?: string;
  dac_id?: string;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} InvalidateRawModel
 */
export type InvalidateRawModel = {
  account?: string;
  dac_id?: string;
  [key: string]: unknown;
};

