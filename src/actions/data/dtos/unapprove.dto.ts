/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 19:22:17 GMT
 */

import { MongoDB } from '@alien-worlds/aw-storage-mongodb';
import {
  PermissionLevelMongoModel,
  PermissionLevelRawModel,
} from '@alien-worlds/aw-antelope';

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
