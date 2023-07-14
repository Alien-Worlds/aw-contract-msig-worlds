/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:14:46 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';

import { ApproveMongoModel, ApproveRawModel } from './approve.dto';
import { BlockactionMongoModel, BlockactionRawModel } from './blockaction.dto';
import { CancelMongoModel, CancelRawModel } from './cancel.dto';
import { CheckauthMongoModel, CheckauthRawModel } from './checkauth.dto';
import { CleanupMongoModel, CleanupRawModel } from './cleanup.dto';
import { DenyMongoModel, DenyRawModel } from './deny.dto';
import { ExecMongoModel, ExecRawModel } from './exec.dto';
import { InvalidateMongoModel, InvalidateRawModel } from './invalidate.dto';
import { ProposeMongoModel, ProposeRawModel } from './propose.dto';
import { UnapproveMongoModel, UnapproveRawModel } from './unapprove.dto';

export type DataDocumentType =
  | ApproveMongoModel
  | BlockactionMongoModel
  | CancelMongoModel
  | CheckauthMongoModel
  | CleanupMongoModel
  | DenyMongoModel
  | ExecMongoModel
  | InvalidateMongoModel
  | ProposeMongoModel
  | UnapproveMongoModel;

export type DataRawType =
  | ApproveRawModel
  | BlockactionRawModel
  | CancelRawModel
  | CheckauthRawModel
  | CleanupRawModel
  | DenyRawModel
  | ExecRawModel
  | InvalidateRawModel
  | ProposeRawModel
  | UnapproveRawModel;

export type MsigWorldsActionMongoModel = {
  _id?: MongoDB.ObjectId;
  block_timestamp?: Date;
  block_number?: MongoDB.Long;
  global_sequence?: MongoDB.Long;
  receiver_sequence?: MongoDB.Long;
  trx_id?: string;
  action_hash?: string;
  action?: {
    account: string;
    name: string;
    data: DataDocumentType;
  };
};

export type MsigWorldsActionRawModel = {
  account: string;
  name: string;
  block_timestamp: Date;
  block_number: string;
  global_sequence: string;
  recv_sequence: string;
  transaction_id: string;
  data: DataRawType;
  [key: string]: unknown;
};

