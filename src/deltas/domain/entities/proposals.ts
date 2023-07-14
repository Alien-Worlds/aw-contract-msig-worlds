/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:53:34 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";
import { Bytes, Pair } from '@alien-worlds/eosio-contract-types';

/**
 * Represents a `Proposals` object.
 *
 * @class
 */
export class Proposals implements Entity {
  /**
   * Constructs a new instance of the `Proposals` class.
   *
   * @public
   * @constructor
   * @param string id
   * @param string proposalName
   * @param string proposer
   * @param Bytes packedTransaction
   * @param Date earliestExecTime
   * @param Date modifiedDate
   * @param number state
   * @param Pair[] metadata
   * @param string [id]
   * @returns `Proposals` - An instance of the `Proposals` class.
   */
  public constructor(
    public id: string,
    public proposalName: string,
    public proposer: string,
    public packedTransaction: Bytes,
    public earliestExecTime: Date,
    public modifiedDate: Date,
    public state: number,
    public metadata: Pair[],
    
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Proposals` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      id: this.id,
      proposalName: this.proposalName,
      proposer: this.proposer,
      packedTransaction: this.packedTransaction,
      earliestExecTime: this.earliestExecTime,
      modifiedDate: this.modifiedDate,
      state: this.state,
      metadata: this.metadata,
    };
  }

  /**
   * Creates an instance of the `Proposals` class.
   *
   * @static
   * @public
   * @param string id
   * @param string proposalName
   * @param string proposer
   * @param Bytes packedTransaction
   * @param Date earliestExecTime
   * @param Date modifiedDate
   * @param number state
   * @param Pair[] metadata
   * @returns `Proposals` An instance of the `Proposals` class.
   */
  public static create(
    id: string,
    proposalName: string,
    proposer: string,
    packedTransaction: Bytes,
    earliestExecTime: Date,
    modifiedDate: Date,
    state: number,
    metadata: Pair[],
    
    rest?: UnknownObject
  ): Proposals {
    const entity = new Proposals(
      id,
      proposalName,
      proposer,
      packedTransaction,
      earliestExecTime,
      modifiedDate,
      state,
      metadata,
      
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Proposals {
    return new Proposals('0',
      '',
      '',
      Bytes.getDefault(),
      new Date(0),
      new Date(0),
      0,
        []
,
    );
  }
}

