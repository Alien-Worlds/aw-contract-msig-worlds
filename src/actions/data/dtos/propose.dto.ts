/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Wed, 12 Jul 2023 11:57:24 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';
import { PermissionLevelMongoModel, Pair, TransactionMongoModel, PermissionLevelRawModel, TransactionRawModel } from '@alien-worlds/eosio-contract-types';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} ProposeMongoModel
 */
export type ProposeMongoModel = {
  _id?: MongoDB.ObjectId;
  proposer?: string;
  proposal_name?: string;
  requested?: PermissionLevelMongoModel[];
  dac_id?: string;
  metadata?: Pair[];
  trx?: TransactionMongoModel;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} ProposeRawModel
 */
export type ProposeRawModel = {
  proposer?: string;
  proposal_name?: string;
  requested?: PermissionLevelRawModel[];
  dac_id?: string;
  metadata?: Pair[];
  trx?: TransactionRawModel;
  [key: string]: unknown;
};

