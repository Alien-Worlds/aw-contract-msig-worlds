/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:14:46 GMT
 */

import { MapperImpl } from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { Blockedactns  } from "../../domain/entities";
import { BlockedactnsMongoModel, BlockedactnsRawModel  } from "../dtos/blockedactns.dto";

// Mongo Mappers
export class BlockedactnsMongoMapper
  extends MapperImpl<Blockedactns, BlockedactnsMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('id', { 
      key: 'id', 
      mapper: (value: number) => value,
    });

    this.mappingFromEntity.set('account', { 
      key: 'account', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('action', { 
      key: 'action', 
      mapper: (value: string) => value,
    });

  }

  public toEntity(mongoModel: BlockedactnsMongoModel): Blockedactns {
    const { 
      id,
      account,
      action,
      
      ...rest
    } = mongoModel;

    return Blockedactns.create(
      id.toString() || '0',
      account || '',
      action || '',
      
      rest
    );
  }
}


// Raw mappers
export class BlockedactnsRawMapper
  extends MapperImpl<Blockedactns, BlockedactnsRawModel>
{
  public fromEntity(entity: Blockedactns): BlockedactnsRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: BlockedactnsRawModel): Blockedactns {
    const { 
      id,
      account,
      action,
      ...rest
    } = rawModel;

    return Blockedactns.create(
      id.toString() || '0',
      account || '',
      action || '',
      
      rest
    );
  }
}

