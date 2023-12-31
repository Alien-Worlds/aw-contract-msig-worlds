/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 19:22:17 GMT
 */

import { MongoDB } from '@alien-worlds/aw-storage-mongodb';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} BlockedactnsMongoModel
 */
export type BlockedactnsMongoModel = {
  _id?: MongoDB.ObjectId;
  id?: number;
  account?: string;
  action?: string;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} BlockedactnsRawModel
 */
export type BlockedactnsRawModel = {
  id?: number;
  account?: string;
  action?: string;
  [key: string]: unknown;
};
