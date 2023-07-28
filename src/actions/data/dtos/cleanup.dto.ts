/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 19:22:17 GMT
 */

import { MongoDB } from '@alien-worlds/aw-storage-mongodb';

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
