/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:53:34 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';
import { PermissionLevelMongoModel, PermissionLevelRawModel } from '@alien-worlds/eosio-contract-types';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} ApproveMongoModel
 */
export type ApproveMongoModel = {
  _id?: MongoDB.ObjectId;
  proposal_name?: string;
  level?: PermissionLevelMongoModel;
  dac_id?: string;
  proposal_hash?: string;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} ApproveRawModel
 */
export type ApproveRawModel = {
  proposal_name?: string;
  level?: PermissionLevelRawModel;
  dac_id?: string;
  proposal_hash?: string;
  [key: string]: unknown;
};

