/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 19:22:17 GMT
 */

import {
  ContractAction,
  ContractActionModel,
  Repository,
  injectable,
} from '@alien-worlds/aw-core';

import { DataDocumentType } from '../../data/dtos/msig-worlds-action.dto';
import { DataEntityType } from '../../domain/entities/msig-worlds-action';

/**
 * @description This abstract class represents a repository for `msig.worlds` contract actions.
 */
@injectable()
export abstract class MsigWorldsActionRepository extends Repository<
  ContractAction<DataEntityType, DataDocumentType>,
  ContractActionModel
> {
  public static Token = 'MSIG_WORLDS_ACTION_REPOSITORY';
}
