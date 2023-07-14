/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:14:46 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";
import { PermissionLevel, Pair, Transaction } from '@alien-worlds/eosio-contract-types';

/**
 * Represents a `Propose` object.
 *
 * @class
 */
export class Propose implements Entity {
  /**
   * Constructs a new instance of the `Propose` class.
   *
   * @public
   * @constructor
   * @param string proposer
   * @param string proposalName
   * @param PermissionLevel[] requested
   * @param string dacId
   * @param Pair[] metadata
   * @param Transaction trx
   * @param string [id]
   * @returns `Propose` - An instance of the `Propose` class.
   */
  public constructor(
    public proposer: string,
    public proposalName: string,
    public requested: PermissionLevel[],
    public dacId: string,
    public metadata: Pair[],
    public trx: Transaction,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Propose` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      proposer: this.proposer,
      proposalName: this.proposalName,
      requested: this.requested,
      dacId: this.dacId,
      metadata: this.metadata,
      trx: this.trx,
    };
  }

  /**
   * Creates an instance of the `Propose` class.
   *
   * @static
   * @public
   * @param string proposer
   * @param string proposalName
   * @param PermissionLevel[] requested
   * @param string dacId
   * @param Pair[] metadata
   * @param Transaction trx
   * @returns `Propose` An instance of the `Propose` class.
   */
  public static create(
    proposer: string,
    proposalName: string,
    requested: PermissionLevel[],
    dacId: string,
    metadata: Pair[],
    trx: Transaction,
    id?: string,
    rest?: UnknownObject
  ): Propose {
    const entity = new Propose(
      proposer,
      proposalName,
      requested,
      dacId,
      metadata,
      trx,
      id,
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Propose {
    return new Propose(
      '',
      '',
        []
,
      '',
        []
,
      Transaction.getDefault(),
    );
  }
}

