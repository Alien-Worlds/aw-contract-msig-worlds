/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Wed, 12 Jul 2023 11:57:24 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} CleanupMongoModel
 */
export type CleanupMongoModel = {
  _id?: MongoDB.ObjectId;
  proposal_name?: string;
  dac_id?: string;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} CleanupRawModel
 */
export type CleanupRawModel = {
  proposal_name?: string;
  dac_id?: string;
  [key: string]: unknown;
};

