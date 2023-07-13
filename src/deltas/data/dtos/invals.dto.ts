/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Wed, 12 Jul 2023 11:57:24 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} InvalsMongoModel
 */
export type InvalsMongoModel = {
  _id?: MongoDB.ObjectId;
  account?: string;
  last_invalidation_time?: Date;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} InvalsRawModel
 */
export type InvalsRawModel = {
  account?: string;
  last_invalidation_time?: Date;
  [key: string]: unknown;
};

