/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:14:46 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';
import { PermissionLevelMongoModel, PermissionLevelRawModel } from '@alien-worlds/eosio-contract-types';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} UnapproveMongoModel
 */
export type UnapproveMongoModel = {
  _id?: MongoDB.ObjectId;
  proposal_name?: string;
  level?: PermissionLevelMongoModel;
  dac_id?: string;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} UnapproveRawModel
 */
export type UnapproveRawModel = {
  proposal_name?: string;
  level?: PermissionLevelRawModel;
  dac_id?: string;
  [key: string]: unknown;
};

