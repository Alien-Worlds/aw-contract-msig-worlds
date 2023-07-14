/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 19:22:17 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} ExecMongoModel
 */
export type ExecMongoModel = {
  _id?: MongoDB.ObjectId;
  proposal_name?: string;
  executer?: string;
  dac_id?: string;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} ExecRawModel
 */
export type ExecRawModel = {
  proposal_name?: string;
  executer?: string;
  dac_id?: string;
  [key: string]: unknown;
};

