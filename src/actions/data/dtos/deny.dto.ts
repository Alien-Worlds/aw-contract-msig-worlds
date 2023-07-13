/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Wed, 12 Jul 2023 11:57:24 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';
import { PermissionLevelMongoModel, PermissionLevelRawModel } from '@alien-worlds/eosio-contract-types';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} DenyMongoModel
 */
export type DenyMongoModel = {
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
 * @typedef {Object} DenyRawModel
 */
export type DenyRawModel = {
  proposal_name?: string;
  level?: PermissionLevelRawModel;
  dac_id?: string;
  [key: string]: unknown;
};

