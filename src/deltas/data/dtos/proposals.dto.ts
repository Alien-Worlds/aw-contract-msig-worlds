/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Wed, 12 Jul 2023 11:57:24 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';
import { BytesMongoModel, Pair, BytesRawModel } from '@alien-worlds/eosio-contract-types';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} ProposalsMongoModel
 */
export type ProposalsMongoModel = {
  _id?: MongoDB.ObjectId;
  id?: number;
  proposal_name?: string;
  proposer?: string;
  packed_transaction?: BytesMongoModel;
  earliest_exec_time?: Date;
  modified_date?: Date;
  state?: number;
  metadata?: Pair[];
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} ProposalsRawModel
 */
export type ProposalsRawModel = {
  id?: number;
  proposal_name?: string;
  proposer?: string;
  packed_transaction?: BytesRawModel;
  earliest_exec_time?: Date;
  modified_date?: Date;
  state?: number;
  metadata?: Pair[];
  [key: string]: unknown;
};

