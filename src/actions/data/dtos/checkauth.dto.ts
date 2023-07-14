/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 19:22:17 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} CheckauthMongoModel
 */
export type CheckauthMongoModel = {
  _id?: MongoDB.ObjectId;
  proposal_name?: string;
  dac_id?: string;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} CheckauthRawModel
 */
export type CheckauthRawModel = {
  proposal_name?: string;
  dac_id?: string;
  [key: string]: unknown;
};

