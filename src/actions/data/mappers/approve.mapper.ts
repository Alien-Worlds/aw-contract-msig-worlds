/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:14:46 GMT
 */

import { MapperImpl } from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { PermissionLevel, PermissionLevelMongoMapper, PermissionLevelRawMapper } from '@alien-worlds/eosio-contract-types';
import { Approve  } from "../../domain/entities";
import { ApproveMongoModel, ApproveRawModel  } from "../dtos/approve.dto";

// Mongo Mappers
export class ApproveMongoMapper
  extends MapperImpl<Approve, ApproveMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('proposalName', { 
      key: 'proposal_name', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('level', { 
      key: 'level', 
      mapper: (value: PermissionLevel) => new PermissionLevelMongoMapper().fromEntity(value),
    });

    this.mappingFromEntity.set('dacId', { 
      key: 'dac_id', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('proposalHash', { 
      key: 'proposal_hash', 
      mapper: (value: string) => value,
    });

  }

  public toEntity(mongoModel: ApproveMongoModel): Approve {
    const { 
      proposal_name,
      level,
      dac_id,
      proposal_hash,
      _id,
      ...rest
    } = mongoModel;

    return Approve.create(
      proposal_name || '',
      level ? new PermissionLevelMongoMapper().toEntity(level) : PermissionLevel.getDefault(),
      dac_id || '',
      proposal_hash || '',
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class ApproveRawMapper
  extends MapperImpl<Approve, ApproveRawModel>
{
  public fromEntity(entity: Approve): ApproveRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: ApproveRawModel): Approve {
    const { 
      proposal_name,
      level,
      dac_id,
      proposal_hash,
      ...rest
    } = rawModel;

    return Approve.create(
      proposal_name || '',
      level ? new PermissionLevelRawMapper().toEntity(level) : PermissionLevel.getDefault(),
      dac_id || '',
      proposal_hash || '',
      undefined,
      rest
    );
  }
}

