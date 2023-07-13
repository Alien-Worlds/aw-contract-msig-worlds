/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Wed, 12 Jul 2023 11:57:24 GMT
 */

import { 
  ContractDelta, 
  ContractDeltaModel, 
  Repository, 
  injectable, 
} from '@alien-worlds/api-core';

import { DataDocumentType } from '../../data/dtos/msig-worlds-delta.dto';
import { DataEntityType } from '../../domain/entities/msig-worlds-delta';

/**
 * @description This abstract class represents a repository for `msig.worlds` contract deltas.
 */
@injectable()
export abstract class MsigWorldsDeltaRepository extends Repository<
  ContractDelta<DataEntityType, DataDocumentType>,
  ContractDeltaModel
> {
  public static Token = 'MSIG_WORLDS_DELTA_REPOSITORY';
}
