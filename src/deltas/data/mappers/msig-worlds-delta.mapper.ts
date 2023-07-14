/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:53:34 GMT
 */


import { 
  Approvals,
  Blockedactns,
  Invals,
  Proposals,
} from '../../domain/entities';
import { ContractDelta, MapperImpl, parseToBigInt } from '@alien-worlds/api-core';
import { MongoDB, MongoMapper } from '@alien-worlds/storage-mongodb';
import { DataEntityType } from '../../domain/entities/msig-worlds-delta';
import { MsigWorldsDeltaMongoModel, MsigWorldsDeltaRawModel } from '../dtos';
import { MsigWorldsTableName } from '../../domain/enums';
import { ApprovalsMongoMapper, ApprovalsRawMapper } from "./approvals.mapper";
import { BlockedactnsMongoMapper, BlockedactnsRawMapper } from "./blockedactns.mapper";
import { InvalsMongoMapper, InvalsRawMapper } from "./invals.mapper";
import { ProposalsMongoMapper, ProposalsRawMapper } from "./proposals.mapper";

// Mongo Mapper
export class MsigWorldsDeltaMongoMapper
  extends MongoMapper<ContractDelta<DataEntityType>, MsigWorldsDeltaMongoModel>
{
  public fromEntity(
    entity: ContractDelta<DataEntityType>
  ): MsigWorldsDeltaMongoModel {
    let entityData;
    switch (entity.table) {
      case MsigWorldsTableName.Approvals:
        entityData = new ApprovalsMongoMapper().fromEntity(
          entity.data as Approvals
        );
        break;
      case MsigWorldsTableName.Blockedactns:
        entityData = new BlockedactnsMongoMapper().fromEntity(
          entity.data as Blockedactns
        );
        break;
      case MsigWorldsTableName.Invals:
        entityData = new InvalsMongoMapper().fromEntity(
          entity.data as Invals
        );
        break;
      case MsigWorldsTableName.Proposals:
        entityData = new ProposalsMongoMapper().fromEntity(
          entity.data as Proposals
        );
        break;
    }

    return {
      _id: new MongoDB.ObjectId(entity.id),
      block_timestamp: entity.blockTimestamp,
      block_number: new MongoDB.Long(entity.blockNumber),
      code: entity.code,
      scope: entity.scope,
      table: entity.table,
      data: entityData,
      payer: entity.payer,
      primary_key: new MongoDB.Long(entity.primaryKey),
      present: entity.present,
    };
  }

  public toEntity(
    mongoModel: MsigWorldsDeltaMongoModel
  ): ContractDelta<DataEntityType> {
    let data;
    switch (mongoModel.table) {
      case MsigWorldsTableName.Approvals:
        data = new ApprovalsMongoMapper().toEntity(mongoModel.data);
        break;
      case MsigWorldsTableName.Blockedactns:
        data = new BlockedactnsMongoMapper().toEntity(mongoModel.data);
        break;
      case MsigWorldsTableName.Invals:
        data = new InvalsMongoMapper().toEntity(mongoModel.data);
        break;
      case MsigWorldsTableName.Proposals:
        data = new ProposalsMongoMapper().toEntity(mongoModel.data);
        break;
    }

    const {
      _id,
      block_number,
      code,
      scope,
      table,
      payer,
      primary_key,
      present,
      block_timestamp,
    } = mongoModel;

    return new ContractDelta<DataEntityType>(
      _id.toString(),
      parseToBigInt(block_number),
      code,
      scope,
      table,
      data,
      payer,
      parseToBigInt(primary_key),
      present,
      block_timestamp
    );
  }
}

// Processor Task Mapper
export class MsigWorldsDeltaProcessorTaskMapper extends MapperImpl<
  ContractDelta<DataEntityType, MsigWorldsDeltaRawModel>, 
    MsigWorldsDeltaRawModel
> {
  public fromEntity(
    entity: ContractDelta<DataEntityType, MsigWorldsDeltaRawModel>
  ): MsigWorldsDeltaRawModel {
    throw new Error('method not implemented');
  }

  public toEntity(
    rawModel: MsigWorldsDeltaRawModel
  ): ContractDelta<DataEntityType, MsigWorldsDeltaRawModel> {
    let data;
    switch (rawModel.table) {
      case MsigWorldsTableName.Approvals:
        data = new ApprovalsRawMapper().toEntity(rawModel.data);
        break;
      case MsigWorldsTableName.Blockedactns:
        data = new BlockedactnsRawMapper().toEntity(rawModel.data);
        break;
      case MsigWorldsTableName.Invals:
        data = new InvalsRawMapper().toEntity(rawModel.data);
        break;
      case MsigWorldsTableName.Proposals:
        data = new ProposalsRawMapper().toEntity(rawModel.data);
        break;
    }

    const {
      block_number,
      code,
      scope,
      table,
      payer,
      primary_key,
      present,
      block_timestamp,
    } = rawModel;

    return new ContractDelta<DataEntityType, MsigWorldsDeltaRawModel>(
      '',
      parseToBigInt(block_number),
      code,
      scope,
      table,
      data,
      payer,
      parseToBigInt(primary_key),
      present,
      block_timestamp,
    );
  }
}