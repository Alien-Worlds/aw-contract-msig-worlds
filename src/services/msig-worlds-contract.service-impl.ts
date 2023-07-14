/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:14:46 GMT
 */

import { 
  ApprovalsRawModel,
  BlockedactnsRawModel,
  InvalsRawModel,
  ProposalsRawModel,
} from '../deltas/data/dtos';
import { 
  EosRpcSourceImpl,
  EosSmartContractServiceImpl,
} from '@alien-worlds/eos';

import { MsigWorldsContractService } from './msig-worlds-contract.service';
import { GetTableRowsOptions, Result } from '@alien-worlds/api-core';

/**
 * A service class for interacting with the msig.worlds smart contract.
 * 
 * @class MsigWorldsContractServiceImpl
 * @extends {EosSmartContractServiceImpl}
 * @implements { MsigWorldsContractService}
*/
export class MsigWorldsContractServiceImpl
  extends EosSmartContractServiceImpl
  implements MsigWorldsContractService 
{
  /**
   * Creates an instance of MsigWorldsContractServiceImpl.
   * 
   * @constructor
   * @param {EosRpcSourceImpl} eosRpcSourceImpl - The EOS RPC source to use for interactions.
   * @param {string} serviceUrl - Service Url
   */
  constructor(eosRpcSourceImpl: EosRpcSourceImpl, serviceUrl: string) {
    super(eosRpcSourceImpl, serviceUrl, 'msig.worlds');
  }

  /**
   * A EosSmartContractServiceImpl for the approvals table.
   * 
   * @type {EosSmartContractServiceImpl}
   * @param {GetTableRowsOptions} options 
   */
  public async fetchApprovals (
    options?: GetTableRowsOptions
  ): Promise<Result<ApprovalsRawModel[], Error>> {
    const table_key = 'proposal_name';
    const tableRowOptions = {
      ...options,
      code: 'msig.worlds',
      table: 'approvals',
      table_key,
    };

    return options?.limit > 0
      ? await this.getMany<ApprovalsRawModel>(tableRowOptions)
      : await this.getAll<ApprovalsRawModel>(table_key, tableRowOptions);
  }
  /**
   * A EosSmartContractServiceImpl for the blockedactns table.
   * 
   * @type {EosSmartContractServiceImpl}
   * @param {GetTableRowsOptions} options 
   */
  public async fetchBlockedactns (
    options?: GetTableRowsOptions
  ): Promise<Result<BlockedactnsRawModel[], Error>> {
    const table_key = 'id';
    const tableRowOptions = {
      ...options,
      code: 'msig.worlds',
      table: 'blockedactns',
      table_key,
    };

    return options?.limit > 0
      ? await this.getMany<BlockedactnsRawModel>(tableRowOptions)
      : await this.getAll<BlockedactnsRawModel>(table_key, tableRowOptions);
  }
  /**
   * A EosSmartContractServiceImpl for the invals table.
   * 
   * @type {EosSmartContractServiceImpl}
   * @param {GetTableRowsOptions} options 
   */
  public async fetchInvals (
    options?: GetTableRowsOptions
  ): Promise<Result<InvalsRawModel[], Error>> {
    const table_key = 'account';
    const tableRowOptions = {
      ...options,
      code: 'msig.worlds',
      table: 'invals',
      table_key,
    };

    return options?.limit > 0
      ? await this.getMany<InvalsRawModel>(tableRowOptions)
      : await this.getAll<InvalsRawModel>(table_key, tableRowOptions);
  }
  /**
   * A EosSmartContractServiceImpl for the proposals table.
   * 
   * @type {EosSmartContractServiceImpl}
   * @param {GetTableRowsOptions} options 
   */
  public async fetchProposals (
    options?: GetTableRowsOptions
  ): Promise<Result<ProposalsRawModel[], Error>> {
    const table_key = 'id';
    const tableRowOptions = {
      ...options,
      code: 'msig.worlds',
      table: 'proposals',
      table_key,
    };

    return options?.limit > 0
      ? await this.getMany<ProposalsRawModel>(tableRowOptions)
      : await this.getAll<ProposalsRawModel>(table_key, tableRowOptions);
  }
}
