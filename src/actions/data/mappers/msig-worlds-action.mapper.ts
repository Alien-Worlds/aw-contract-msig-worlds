/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 19:22:17 GMT
 */

import {
  Approve,
  Blockaction,
  Cancel,
  Checkauth,
  Cleanup,
  Deny,
  Exec,
  Invalidate,
  Propose,
  Unapprove,
} from '../../domain/entities';
import {
  ContractAction,
  MapperImpl,
  parseToBigInt,
} from '@alien-worlds/aw-core';

import { ApproveMongoMapper, ApproveRawMapper } from './approve.mapper';
import {
  BlockactionMongoMapper,
  BlockactionRawMapper,
} from './blockaction.mapper';
import { CancelMongoMapper, CancelRawMapper } from './cancel.mapper';
import { CheckauthMongoMapper, CheckauthRawMapper } from './checkauth.mapper';
import { CleanupMongoMapper, CleanupRawMapper } from './cleanup.mapper';
import { DenyMongoMapper, DenyRawMapper } from './deny.mapper';
import { ExecMongoMapper, ExecRawMapper } from './exec.mapper';
import {
  InvalidateMongoMapper,
  InvalidateRawMapper,
} from './invalidate.mapper';
import { ProposeMongoMapper, ProposeRawMapper } from './propose.mapper';
import { UnapproveMongoMapper, UnapproveRawMapper } from './unapprove.mapper';
import { MongoDB, MongoMapper } from '@alien-worlds/aw-storage-mongodb';
import { DataEntityType } from '../../domain/entities/msig-worlds-action';
import {
  MsigWorldsActionMongoModel,
  MsigWorldsActionRawModel,
  ApproveMongoModel,
  ApproveRawModel,
  BlockactionMongoModel,
  BlockactionRawModel,
  CancelMongoModel,
  CancelRawModel,
  CheckauthMongoModel,
  CheckauthRawModel,
  CleanupMongoModel,
  CleanupRawModel,
  DenyMongoModel,
  DenyRawModel,
  ExecMongoModel,
  ExecRawModel,
  InvalidateMongoModel,
  InvalidateRawModel,
  ProposeMongoModel,
  ProposeRawModel,
  UnapproveMongoModel,
  UnapproveRawModel,
} from '../dtos';
import { MsigWorldsActionName } from '../../domain/enums';

// Mongo Mapper
export class MsigWorldsActionMongoMapper extends MongoMapper<
  ContractAction<DataEntityType>,
  MsigWorldsActionMongoModel
> {
  public fromEntity(
    entity: ContractAction<DataEntityType>
  ): MsigWorldsActionMongoModel {
    let entityData;
    switch (entity.name) {
      case MsigWorldsActionName.Approve:
        entityData = new ApproveMongoMapper().fromEntity(
          entity.data as Approve
        );
        break;
      case MsigWorldsActionName.Blockaction:
        entityData = new BlockactionMongoMapper().fromEntity(
          entity.data as Blockaction
        );
        break;
      case MsigWorldsActionName.Cancel:
        entityData = new CancelMongoMapper().fromEntity(entity.data as Cancel);
        break;
      case MsigWorldsActionName.Checkauth:
        entityData = new CheckauthMongoMapper().fromEntity(
          entity.data as Checkauth
        );
        break;
      case MsigWorldsActionName.Cleanup:
        entityData = new CleanupMongoMapper().fromEntity(
          entity.data as Cleanup
        );
        break;
      case MsigWorldsActionName.Deny:
        entityData = new DenyMongoMapper().fromEntity(entity.data as Deny);
        break;
      case MsigWorldsActionName.Exec:
        entityData = new ExecMongoMapper().fromEntity(entity.data as Exec);
        break;
      case MsigWorldsActionName.Invalidate:
        entityData = new InvalidateMongoMapper().fromEntity(
          entity.data as Invalidate
        );
        break;
      case MsigWorldsActionName.Propose:
        entityData = new ProposeMongoMapper().fromEntity(
          entity.data as Propose
        );
        break;
      case MsigWorldsActionName.Unapprove:
        entityData = new UnapproveMongoMapper().fromEntity(
          entity.data as Unapprove
        );
        break;
    }

    const model: MsigWorldsActionMongoModel = {
      block_timestamp: entity.blockTimestamp,
      block_number: new MongoDB.Long(entity.blockNumber),
      global_sequence: new MongoDB.Long(entity.globalSequence),
      receiver_sequence: new MongoDB.Long(entity.receiverSequence),
      trx_id: entity.transactionId,
      action: {
        name: entity.name,
        account: entity.account,
        data: entityData,
      },
    };

    if (entity.id && MongoDB.ObjectId.isValid(entity.id)) {
      model._id = new MongoDB.ObjectId(entity.id);
    }

    return model;
  }

  public toEntity(
    mongoModel: MsigWorldsActionMongoModel
  ): ContractAction<DataEntityType> {
    let data;
    switch (mongoModel.action.name) {
      case MsigWorldsActionName.Approve:
        data = new ApproveMongoMapper().toEntity(
          mongoModel.action.data as ApproveMongoModel
        );
        break;
      case MsigWorldsActionName.Blockaction:
        data = new BlockactionMongoMapper().toEntity(
          mongoModel.action.data as BlockactionMongoModel
        );
        break;
      case MsigWorldsActionName.Cancel:
        data = new CancelMongoMapper().toEntity(
          mongoModel.action.data as CancelMongoModel
        );
        break;
      case MsigWorldsActionName.Checkauth:
        data = new CheckauthMongoMapper().toEntity(
          mongoModel.action.data as CheckauthMongoModel
        );
        break;
      case MsigWorldsActionName.Cleanup:
        data = new CleanupMongoMapper().toEntity(
          mongoModel.action.data as CleanupMongoModel
        );
        break;
      case MsigWorldsActionName.Deny:
        data = new DenyMongoMapper().toEntity(
          mongoModel.action.data as DenyMongoModel
        );
        break;
      case MsigWorldsActionName.Exec:
        data = new ExecMongoMapper().toEntity(
          mongoModel.action.data as ExecMongoModel
        );
        break;
      case MsigWorldsActionName.Invalidate:
        data = new InvalidateMongoMapper().toEntity(
          mongoModel.action.data as InvalidateMongoModel
        );
        break;
      case MsigWorldsActionName.Propose:
        data = new ProposeMongoMapper().toEntity(
          mongoModel.action.data as ProposeMongoModel
        );
        break;
      case MsigWorldsActionName.Unapprove:
        data = new UnapproveMongoMapper().toEntity(
          mongoModel.action.data as UnapproveMongoModel
        );
        break;
    }

    const {
      _id,
      block_timestamp,
      block_number,
      global_sequence,
      receiver_sequence,
      trx_id,
      action,
    } = mongoModel;

    return new ContractAction<DataEntityType>(
      _id.toString(),
      block_timestamp,
      parseToBigInt(block_number),
      action.account,
      action.name,
      parseToBigInt(global_sequence),
      parseToBigInt(receiver_sequence),
      trx_id,
      data
    );
  }
}

// Processor Task Mapper
export class MsigWorldsActionProcessorTaskMapper extends MapperImpl<
  ContractAction<DataEntityType, MsigWorldsActionRawModel>,
  MsigWorldsActionRawModel
> {
  public fromEntity(
    entity: ContractAction<DataEntityType, MsigWorldsActionRawModel>
  ): MsigWorldsActionRawModel {
    throw new Error('method not implemented');
  }

  public toEntity(
    rawModel: MsigWorldsActionRawModel
  ): ContractAction<DataEntityType, MsigWorldsActionRawModel> {
    let data;
    switch (rawModel.name) {
      case MsigWorldsActionName.Approve:
        data = new ApproveRawMapper().toEntity(
          rawModel.data as ApproveRawModel
        );
        break;
      case MsigWorldsActionName.Blockaction:
        data = new BlockactionRawMapper().toEntity(
          rawModel.data as BlockactionRawModel
        );
        break;
      case MsigWorldsActionName.Cancel:
        data = new CancelRawMapper().toEntity(rawModel.data as CancelRawModel);
        break;
      case MsigWorldsActionName.Checkauth:
        data = new CheckauthRawMapper().toEntity(
          rawModel.data as CheckauthRawModel
        );
        break;
      case MsigWorldsActionName.Cleanup:
        data = new CleanupRawMapper().toEntity(
          rawModel.data as CleanupRawModel
        );
        break;
      case MsigWorldsActionName.Deny:
        data = new DenyRawMapper().toEntity(rawModel.data as DenyRawModel);
        break;
      case MsigWorldsActionName.Exec:
        data = new ExecRawMapper().toEntity(rawModel.data as ExecRawModel);
        break;
      case MsigWorldsActionName.Invalidate:
        data = new InvalidateRawMapper().toEntity(
          rawModel.data as InvalidateRawModel
        );
        break;
      case MsigWorldsActionName.Propose:
        data = new ProposeRawMapper().toEntity(
          rawModel.data as ProposeRawModel
        );
        break;
      case MsigWorldsActionName.Unapprove:
        data = new UnapproveRawMapper().toEntity(
          rawModel.data as UnapproveRawModel
        );
        break;
    }

    const {
      account,
      name,
      block_timestamp,
      block_number,
      global_sequence,
      recv_sequence,
      transaction_id,
    } = rawModel;

    return new ContractAction<DataEntityType, MsigWorldsActionRawModel>(
      '',
      block_timestamp,
      parseToBigInt(block_number),
      account,
      name,
      parseToBigInt(global_sequence),
      parseToBigInt(recv_sequence),
      transaction_id,
      data
    );
  }
}
