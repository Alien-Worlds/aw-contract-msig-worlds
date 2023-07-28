/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 19:22:17 GMT
 */

import { MapperImpl } from '@alien-worlds/aw-core';
import { MongoDB, MongoMapper } from '@alien-worlds/aw-storage-mongodb';
import { Blockaction } from '../../domain/entities';
import {
  BlockactionMongoModel,
  BlockactionRawModel,
} from '../dtos/blockaction.dto';

// Mongo Mappers
export class BlockactionMongoMapper extends MongoMapper<
  Blockaction,
  BlockactionMongoModel
> {
  constructor() {
    super();

    this.mappingFromEntity.set('account', {
      key: 'account',
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('action', {
      key: 'action',
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('dacId', {
      key: 'dac_id',
      mapper: (value: string) => value,
    });
  }

  public toEntity(mongoModel: BlockactionMongoModel): Blockaction {
    const { account, action, dac_id, _id, ...rest } = mongoModel;

    return Blockaction.create(
      account || '',
      action || '',
      dac_id || '',
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}

// Raw mappers
export class BlockactionRawMapper extends MapperImpl<
  Blockaction,
  BlockactionRawModel
> {
  public fromEntity(entity: Blockaction): BlockactionRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: BlockactionRawModel): Blockaction {
    const { account, action, dac_id, ...rest } = rawModel;

    return Blockaction.create(
      account || '',
      action || '',
      dac_id || '',
      undefined,
      rest
    );
  }
}
