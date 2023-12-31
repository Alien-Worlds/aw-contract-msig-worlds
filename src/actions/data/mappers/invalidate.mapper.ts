/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 19:22:17 GMT
 */

import { MapperImpl } from '@alien-worlds/aw-core';
import { MongoDB, MongoMapper } from '@alien-worlds/aw-storage-mongodb';
import { Invalidate } from '../../domain/entities';
import {
  InvalidateMongoModel,
  InvalidateRawModel,
} from '../dtos/invalidate.dto';

// Mongo Mappers
export class InvalidateMongoMapper extends MongoMapper<
  Invalidate,
  InvalidateMongoModel
> {
  constructor() {
    super();

    this.mappingFromEntity.set('account', {
      key: 'account',
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('dacId', {
      key: 'dac_id',
      mapper: (value: string) => value,
    });
  }

  public toEntity(mongoModel: InvalidateMongoModel): Invalidate {
    const { account, dac_id, _id, ...rest } = mongoModel;

    return Invalidate.create(
      account || '',
      dac_id || '',
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}

// Raw mappers
export class InvalidateRawMapper extends MapperImpl<
  Invalidate,
  InvalidateRawModel
> {
  public fromEntity(entity: Invalidate): InvalidateRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: InvalidateRawModel): Invalidate {
    const { account, dac_id, ...rest } = rawModel;

    return Invalidate.create(account || '', dac_id || '', undefined, rest);
  }
}
