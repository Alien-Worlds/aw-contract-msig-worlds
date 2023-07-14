/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:14:46 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";
import { PermissionLevel } from '@alien-worlds/eosio-contract-types';

/**
 * Represents a `Approve` object.
 *
 * @class
 */
export class Approve implements Entity {
  /**
   * Constructs a new instance of the `Approve` class.
   *
   * @public
   * @constructor
   * @param string proposalName
   * @param PermissionLevel level
   * @param string dacId
   * @param string proposalHash
   * @param string [id]
   * @returns `Approve` - An instance of the `Approve` class.
   */
  public constructor(
    public proposalName: string,
    public level: PermissionLevel,
    public dacId: string,
    public proposalHash: string,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Approve` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      proposalName: this.proposalName,
      level: this.level,
      dacId: this.dacId,
      proposalHash: this.proposalHash,
    };
  }

  /**
   * Creates an instance of the `Approve` class.
   *
   * @static
   * @public
   * @param string proposalName
   * @param PermissionLevel level
   * @param string dacId
   * @param string proposalHash
   * @returns `Approve` An instance of the `Approve` class.
   */
  public static create(
    proposalName: string,
    level: PermissionLevel,
    dacId: string,
    proposalHash: string,
    id?: string,
    rest?: UnknownObject
  ): Approve {
    const entity = new Approve(
      proposalName,
      level,
      dacId,
      proposalHash,
      id,
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Approve {
    return new Approve(
      '',
      PermissionLevel.getDefault(),
      '',
      '',
    );
  }
}

