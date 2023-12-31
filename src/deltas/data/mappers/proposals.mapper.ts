/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 19:22:17 GMT
 */

import { MapperImpl } from '@alien-worlds/aw-core';
import { MongoDB, MongoMapper } from '@alien-worlds/aw-storage-mongodb';
import {
  Bytes,
  BytesMongoMapper,
  BytesRawMapper,
  Pair,
  PairMongoMapper,
  PairRawMapper,
} from '@alien-worlds/aw-antelope';
import { Proposals } from '../../domain/entities';
import { ProposalsMongoModel, ProposalsRawModel } from '../dtos/proposals.dto';

// Mongo Mappers
export class ProposalsMongoMapper extends MongoMapper<
  Proposals,
  ProposalsMongoModel
> {
  constructor() {
    super();

    this.mappingFromEntity.set('id', {
      key: 'id',
      mapper: (value: number) => value,
    });

    this.mappingFromEntity.set('proposalName', {
      key: 'proposal_name',
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('proposer', {
      key: 'proposer',
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('packedTransaction', {
      key: 'packed_transaction',
      mapper: (value: Bytes) => new BytesMongoMapper().fromEntity(value),
    });

    this.mappingFromEntity.set('earliestExecTime', {
      key: 'earliest_exec_time',
      mapper: (value: Date) => value,
    });

    this.mappingFromEntity.set('modifiedDate', {
      key: 'modified_date',
      mapper: (value: Date) => value,
    });

    this.mappingFromEntity.set('state', {
      key: 'state',
      mapper: (value: number) => value,
    });

    this.mappingFromEntity.set('metadata', {
      key: 'metadata',
      mapper: (values: Pair[]) =>
        values.map(value => new PairMongoMapper().fromEntity(value)),
    });
  }

  public toEntity(mongoModel: ProposalsMongoModel): Proposals {
    const {
      id,
      proposal_name,
      proposer,
      packed_transaction,
      earliest_exec_time,
      modified_date,
      state,
      metadata,

      ...rest
    } = mongoModel;

    return Proposals.create(
      id.toString() || '0',
      proposal_name || '',
      proposer || '',
      packed_transaction
        ? new BytesMongoMapper().toEntity(packed_transaction)
        : Bytes.getDefault(),
      earliest_exec_time || new Date(0),
      modified_date || new Date(0),
      state || 0,
      metadata?.map(value => new PairMongoMapper().toEntity(value)) || [],

      rest
    );
  }
}

// Raw mappers
export class ProposalsRawMapper extends MapperImpl<
  Proposals,
  ProposalsRawModel
> {
  public fromEntity(entity: Proposals): ProposalsRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: ProposalsRawModel): Proposals {
    const {
      id,
      proposal_name,
      proposer,
      packed_transaction,
      earliest_exec_time,
      modified_date,
      state,
      metadata,
      ...rest
    } = rawModel;

    return Proposals.create(
      id.toString() || '0',
      proposal_name || '',
      proposer || '',
      packed_transaction
        ? new BytesRawMapper().toEntity(packed_transaction)
        : Bytes.getDefault(),
      earliest_exec_time || new Date(0),
      modified_date || new Date(0),
      state || 0,
      metadata?.map(value => new PairRawMapper().toEntity(value)) || [],

      rest
    );
  }
}
