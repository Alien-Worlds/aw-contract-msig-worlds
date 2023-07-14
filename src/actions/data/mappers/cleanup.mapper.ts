/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:53:34 GMT
 */

import { MapperImpl } from '@alien-worlds/api-core';
import { MongoDB, MongoMapper } from '@alien-worlds/storage-mongodb';
import { Cleanup  } from "../../domain/entities";
import { CleanupMongoModel, CleanupRawModel  } from "../dtos/cleanup.dto";

// Mongo Mappers
export class CleanupMongoMapper
  extends MongoMapper<Cleanup, CleanupMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('proposalName', { 
      key: 'proposal_name', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('dacId', { 
      key: 'dac_id', 
      mapper: (value: string) => value,
    });

  }

  public toEntity(mongoModel: CleanupMongoModel): Cleanup {
    const { 
      proposal_name,
      dac_id,
      _id,
      ...rest
    } = mongoModel;

    return Cleanup.create(
      proposal_name || '',
      dac_id || '',
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class CleanupRawMapper
  extends MapperImpl<Cleanup, CleanupRawModel>
{
  public fromEntity(entity: Cleanup): CleanupRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: CleanupRawModel): Cleanup {
    const { 
      proposal_name,
      dac_id,
      ...rest
    } = rawModel;

    return Cleanup.create(
      proposal_name || '',
      dac_id || '',
      undefined,
      rest
    );
  }
}

