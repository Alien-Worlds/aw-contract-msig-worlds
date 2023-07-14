/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:53:34 GMT
 */

import {
  GetTableRowsOptions,
  Result,
  SmartContractService,
} from '@alien-worlds/api-core';

import { 
  ApprovalsRawModel,
  BlockedactnsRawModel,
  InvalsRawModel,
  ProposalsRawModel,
} from '../deltas/data/dtos';

export abstract class MsigWorldsContractService extends SmartContractService {
  public static Token = 'MSIG_WORLDS_CONTRACT_SERVICE';

  public abstract fetchApprovals(
    options?: GetTableRowsOptions
  ): Promise<Result<ApprovalsRawModel[], Error>>;
  public abstract fetchBlockedactns(
    options?: GetTableRowsOptions
  ): Promise<Result<BlockedactnsRawModel[], Error>>;
  public abstract fetchInvals(
    options?: GetTableRowsOptions
  ): Promise<Result<InvalsRawModel[], Error>>;
  public abstract fetchProposals(
    options?: GetTableRowsOptions
  ): Promise<Result<ProposalsRawModel[], Error>>;
}
