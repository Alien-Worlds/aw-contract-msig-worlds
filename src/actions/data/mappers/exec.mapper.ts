/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Wed, 12 Jul 2023 11:57:24 GMT
 */

import { MapperImpl } from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { Exec  } from "../../domain/entities";
import { ExecMongoModel, ExecRawModel  } from "../dtos/exec.dto";

// Mongo Mappers
export class ExecMongoMapper
  extends MapperImpl<Exec, ExecMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('proposalName', { 
      key: 'proposal_name', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('executer', { 
      key: 'executer', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('dacId', { 
      key: 'dac_id', 
      mapper: (value: string) => value,
    });

  }

  public toEntity(mongoModel: ExecMongoModel): Exec {
    const { 
      proposal_name,
      executer,
      dac_id,
      _id,
      ...rest
    } = mongoModel;

    return Exec.create(
      proposal_name || '',
      executer || '',
      dac_id || '',
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class ExecRawMapper
  extends MapperImpl<Exec, ExecRawModel>
{
  public fromEntity(entity: Exec): ExecRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: ExecRawModel): Exec {
    const { 
      proposal_name,
      executer,
      dac_id,
      ...rest
    } = rawModel;

    return Exec.create(
      proposal_name || '',
      executer || '',
      dac_id || '',
      undefined,
      rest
    );
  }
}

