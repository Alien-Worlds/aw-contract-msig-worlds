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
 * @typedef {Object} ApprovalsMongoModel
 */
export type ApprovalsMongoModel = {
  _id?: MongoDB.ObjectId;
  proposal_name?: string;
  requested_approvals?: ApprovalMongoModel[];
  provided_approvals?: ApprovalMongoModel[];
  [key: string]: unknown;
};

/**
 * @typedef {Object} ApprovalMongoModel
 */
export type ApprovalMongoModel = {
  _id?: MongoDB.ObjectId;
  level?: PermissionLevelMongoModel;
  time?: Date;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} ApprovalsRawModel
 */
export type ApprovalsRawModel = {
  proposal_name?: string;
  requested_approvals?: ApprovalRawModel[];
  provided_approvals?: ApprovalRawModel[];
  [key: string]: unknown;
};

/**
 * @typedef {Object} ApprovalRawModel
 */
export type ApprovalRawModel = {
  level?: PermissionLevelRawModel;
  time?: Date;
  [key: string]: unknown;
};
