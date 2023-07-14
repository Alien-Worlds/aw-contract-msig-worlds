/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:14:46 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} BlockactionMongoModel
 */
export type BlockactionMongoModel = {
  _id?: MongoDB.ObjectId;
  account?: string;
  action?: string;
  dac_id?: string;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} BlockactionRawModel
 */
export type BlockactionRawModel = {
  account?: string;
  action?: string;
  dac_id?: string;
  [key: string]: unknown;
};

