/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:14:46 GMT
 */

import { MapperImpl } from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { Invals  } from "../../domain/entities";
import { InvalsMongoModel, InvalsRawModel  } from "../dtos/invals.dto";

// Mongo Mappers
export class InvalsMongoMapper
  extends MapperImpl<Invals, InvalsMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('account', { 
      key: 'account', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('lastInvalidationTime', { 
      key: 'last_invalidation_time', 
      mapper: (value: Date) => value,
    });

  }

  public toEntity(mongoModel: InvalsMongoModel): Invals {
    const { 
      account,
      last_invalidation_time,
      _id,
      ...rest
    } = mongoModel;

    return Invals.create(
      account || '',
      last_invalidation_time || new Date(0),
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class InvalsRawMapper
  extends MapperImpl<Invals, InvalsRawModel>
{
  public fromEntity(entity: Invals): InvalsRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: InvalsRawModel): Invals {
    const { 
      account,
      last_invalidation_time,
      ...rest
    } = rawModel;

    return Invals.create(
      account || '',
      last_invalidation_time || new Date(0),
      undefined,
      rest
    );
  }
}

