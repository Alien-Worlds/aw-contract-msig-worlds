/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 19:22:17 GMT
 */

import { MongoDB } from '@alien-worlds/aw-storage-mongodb';
import {
  PermissionLevelMongoModel,
  Pair,
  TransactionMongoModel,
  PermissionLevelRawModel,
  TransactionRawModel,
} from '@alien-worlds/aw-antelope';

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
