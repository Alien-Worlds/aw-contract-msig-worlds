/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Wed, 12 Jul 2023 11:57:24 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';

import { ApprovalsMongoModel, ApprovalsRawModel } from './approvals.dto';
import { BlockedactnsMongoModel, BlockedactnsRawModel } from './blockedactns.dto';
import { InvalsMongoModel, InvalsRawModel } from './invals.dto';
import { ProposalsMongoModel, ProposalsRawModel } from './proposals.dto';

export type DataDocumentType =
  | ApprovalsMongoModel
  | BlockedactnsMongoModel
  | InvalsMongoModel
  | ProposalsMongoModel;

export type DataRawType =
  | ApprovalsRawModel
  | BlockedactnsRawModel
  | InvalsRawModel
  | ProposalsRawModel;


export type MsigWorldsDeltaMongoModel = {
  _id?: MongoDB.ObjectId;
  block_number?: MongoDB.Long;
  code?: string;
  scope?: string;
  table?: string;
  data_hash?: string;
  data?: DataDocumentType;
  payer?: string;
  primary_key?: MongoDB.Long,
  present?: boolean;
  block_timestamp?: Date;
};

export type MsigWorldsDeltaRawModel = {
  block_timestamp: Date;
  block_number: string;
  code: string;
  scope: string;
  table: string;
  payer: string;
  primary_key: string;
  present: boolean;
  data: DataRawType;
};
