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
import { Deny } from '../../domain/entities';
import { DenyMongoModel, DenyRawModel } from '../dtos/deny.dto';

// Mongo Mappers
export class DenyMongoMapper extends MongoMapper<Deny, DenyMongoModel> {
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

  public toEntity(mongoModel: DenyMongoModel): Deny {
    const { proposal_name, level, dac_id, _id, ...rest } = mongoModel;

    return Deny.create(
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
export class DenyRawMapper extends MapperImpl<Deny, DenyRawModel> {
  public fromEntity(entity: Deny): DenyRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: DenyRawModel): Deny {
    const { proposal_name, level, dac_id, ...rest } = rawModel;

    return Deny.create(
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
