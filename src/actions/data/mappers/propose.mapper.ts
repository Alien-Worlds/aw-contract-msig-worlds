/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 19:22:17 GMT
 */

import { MapperImpl } from '@alien-worlds/aw-core';
import { MongoDB, MongoMapper } from '@alien-worlds/aw-storage-mongodb';
import {
  PermissionLevel,
  PermissionLevelMongoMapper,
  PermissionLevelRawMapper,
  Pair,
  PairMongoMapper,
  PairRawMapper,
  Transaction,
  TransactionMongoMapper,
  TransactionRawMapper,
} from '@alien-worlds/aw-antelope';
import { Propose } from '../../domain/entities';
import { ProposeMongoModel, ProposeRawModel } from '../dtos/propose.dto';

// Mongo Mappers
export class ProposeMongoMapper extends MongoMapper<
  Propose,
  ProposeMongoModel
> {
  constructor() {
    super();

    this.mappingFromEntity.set('proposer', {
      key: 'proposer',
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('proposalName', {
      key: 'proposal_name',
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('requested', {
      key: 'requested',
      mapper: (values: PermissionLevel[]) =>
        values.map(value => new PermissionLevelMongoMapper().fromEntity(value)),
    });

    this.mappingFromEntity.set('dacId', {
      key: 'dac_id',
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('metadata', {
      key: 'metadata',
      mapper: (values: Pair[]) =>
        values.map(value => new PairMongoMapper().fromEntity(value)),
    });

    this.mappingFromEntity.set('trx', {
      key: 'trx',
      mapper: (value: Transaction) =>
        new TransactionMongoMapper().fromEntity(value),
    });
  }

  public toEntity(mongoModel: ProposeMongoModel): Propose {
    const {
      proposer,
      proposal_name,
      requested,
      dac_id,
      metadata,
      trx,
      _id,
      ...rest
    } = mongoModel;

    return Propose.create(
      proposer || '',
      proposal_name || '',
      requested?.map(value =>
        new PermissionLevelMongoMapper().toEntity(value)
      ) || [],
      dac_id || '',
      metadata?.map(value => new PairMongoMapper().toEntity(value)) || [],
      trx
        ? new TransactionMongoMapper().toEntity(trx)
        : Transaction.getDefault(),
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}

// Raw mappers
export class ProposeRawMapper extends MapperImpl<Propose, ProposeRawModel> {
  public fromEntity(entity: Propose): ProposeRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: ProposeRawModel): Propose {
    const {
      proposer,
      proposal_name,
      requested,
      dac_id,
      metadata,
      trx,
      ...rest
    } = rawModel;

    return Propose.create(
      proposer || '',
      proposal_name || '',
      requested?.map(value => new PermissionLevelRawMapper().toEntity(value)) ||
        [],
      dac_id || '',
      metadata?.map(value => new PairRawMapper().toEntity(value)) || [],
      trx ? new TransactionRawMapper().toEntity(trx) : Transaction.getDefault(),
      undefined,
      rest
    );
  }
}
