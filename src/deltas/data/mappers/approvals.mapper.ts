/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:14:46 GMT
 */

import { MapperImpl } from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { PermissionLevel, PermissionLevelMongoMapper, PermissionLevelRawMapper } from '@alien-worlds/eosio-contract-types';
import { Approvals,  Approval  } from "../../domain/entities";
import { ApprovalsMongoModel, ApprovalsRawModel,  ApprovalMongoModel, ApprovalRawModel  } from "../dtos/approvals.dto";

// Mongo Mappers
export class ApprovalsMongoMapper
  extends MapperImpl<Approvals, ApprovalsMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('proposalName', { 
      key: 'proposal_name', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('requestedApprovals', { 
      key: 'requested_approvals', 
      mapper: (values: Approval[]) => values.map(value => new ApprovalMongoMapper().fromEntity(value)),
    });

    this.mappingFromEntity.set('providedApprovals', { 
      key: 'provided_approvals', 
      mapper: (values: Approval[]) => values.map(value => new ApprovalMongoMapper().fromEntity(value)),
    });

  }

  public toEntity(mongoModel: ApprovalsMongoModel): Approvals {
    const { 
      proposal_name,
      requested_approvals,
      provided_approvals,
      _id,
      ...rest
    } = mongoModel;

    return Approvals.create(
      proposal_name || '',
      requested_approvals?.map(value => new ApprovalMongoMapper().toEntity(value)) || [],
      provided_approvals?.map(value => new ApprovalMongoMapper().toEntity(value)) || [],
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}

export class ApprovalMongoMapper
  extends MapperImpl<Approval, ApprovalMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('level', { 
      key: 'level', 
      mapper: (value: PermissionLevel) => new PermissionLevelMongoMapper().fromEntity(value),
    });

    this.mappingFromEntity.set('time', { 
      key: 'time', 
      mapper: (value: Date) => value,
    });

  }

  public toEntity(mongoModel: ApprovalMongoModel): Approval {
    const { 
      level,
      time,
      _id,
      ...rest
    } = mongoModel;

    return Approval.create(
      level ? new PermissionLevelMongoMapper().toEntity(level) : PermissionLevel.getDefault(),
      time || new Date(0),
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class ApprovalsRawMapper
  extends MapperImpl<Approvals, ApprovalsRawModel>
{
  public fromEntity(entity: Approvals): ApprovalsRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: ApprovalsRawModel): Approvals {
    const { 
      proposal_name,
      requested_approvals,
      provided_approvals,
      ...rest
    } = rawModel;

    return Approvals.create(
      proposal_name || '',
      requested_approvals?.map(value => new ApprovalRawMapper().toEntity(value)) || [],
      provided_approvals?.map(value => new ApprovalRawMapper().toEntity(value)) || [],
      undefined,
      rest
    );
  }
}

export class ApprovalRawMapper
  extends MapperImpl<Approval, ApprovalRawModel>
{
  public fromEntity(entity: Approval): ApprovalRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: ApprovalRawModel): Approval {
    const { 
      level,
      time,
      ...rest
    } = rawModel;

    return Approval.create(
      level ? new PermissionLevelRawMapper().toEntity(level) : PermissionLevel.getDefault(),
      time || new Date(0),
      undefined,
      rest
    );
  }
}

