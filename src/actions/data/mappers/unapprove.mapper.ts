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
} from '@alien-worlds/aw-antelope';
import { Unapprove } from '../../domain/entities';
import { UnapproveMongoModel, UnapproveRawModel } from '../dtos/unapprove.dto';

// Mongo Mappers
export class UnapproveMongoMapper extends MongoMapper<
  Unapprove,
  UnapproveMongoModel
> {
  constructor() {
    super();

    this.mappingFromEntity.set('proposalName', {
      key: 'proposal_name',
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('level', {
      key: 'level',
      mapper: (value: PermissionLevel) =>
        new PermissionLevelMongoMapper().fromEntity(value),
    });

    this.mappingFromEntity.set('dacId', {
      key: 'dac_id',
      mapper: (value: string) => value,
    });
  }

  public toEntity(mongoModel: UnapproveMongoModel): Unapprove {
    const { proposal_name, level, dac_id, _id, ...rest } = mongoModel;

    return Unapprove.create(
      proposal_name || '',
      level
        ? new PermissionLevelMongoMapper().toEntity(level)
        : PermissionLevel.getDefault(),
      dac_id || '',
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}

// Raw mappers
export class UnapproveRawMapper extends MapperImpl<
  Unapprove,
  UnapproveRawModel
> {
  public fromEntity(entity: Unapprove): UnapproveRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: UnapproveRawModel): Unapprove {
    const { proposal_name, level, dac_id, ...rest } = rawModel;

    return Unapprove.create(
      proposal_name || '',
      level
        ? new PermissionLevelRawMapper().toEntity(level)
        : PermissionLevel.getDefault(),
      dac_id || '',
      undefined,
      rest
    );
  }
}
