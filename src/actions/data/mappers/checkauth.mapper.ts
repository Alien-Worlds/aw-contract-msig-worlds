/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Wed, 12 Jul 2023 11:57:24 GMT
 */

import { MapperImpl } from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { Checkauth  } from "../../domain/entities";
import { CheckauthMongoModel, CheckauthRawModel  } from "../dtos/checkauth.dto";

// Mongo Mappers
export class CheckauthMongoMapper
  extends MapperImpl<Checkauth, CheckauthMongoModel>
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

  public toEntity(mongoModel: CheckauthMongoModel): Checkauth {
    const { 
      proposal_name,
      dac_id,
      _id,
      ...rest
    } = mongoModel;

    return Checkauth.create(
      proposal_name || '',
      dac_id || '',
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class CheckauthRawMapper
  extends MapperImpl<Checkauth, CheckauthRawModel>
{
  public fromEntity(entity: Checkauth): CheckauthRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: CheckauthRawModel): Checkauth {
    const { 
      proposal_name,
      dac_id,
      ...rest
    } = rawModel;

    return Checkauth.create(
      proposal_name || '',
      dac_id || '',
      undefined,
      rest
    );
  }
}

