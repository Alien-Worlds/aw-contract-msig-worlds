/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Wed, 12 Jul 2023 11:57:24 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";
import { PermissionLevel } from '@alien-worlds/eosio-contract-types';

/**
 * Represents a `Approvals` object.
 *
 * @class
 */
export class Approvals implements Entity {
  /**
   * Constructs a new instance of the `Approvals` class.
   *
   * @public
   * @constructor
   * @param string proposalName
   * @param Approval[] requestedApprovals
   * @param Approval[] providedApprovals
   * @param string [id]
   * @returns `Approvals` - An instance of the `Approvals` class.
   */
  public constructor(
    public proposalName: string,
    public requestedApprovals: Approval[],
    public providedApprovals: Approval[],
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Approvals` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      proposalName: this.proposalName,
      requestedApprovals: this.requestedApprovals,
      providedApprovals: this.providedApprovals,
    };
  }

  /**
   * Creates an instance of the `Approvals` class.
   *
   * @static
   * @public
   * @param string proposalName
   * @param Approval[] requestedApprovals
   * @param Approval[] providedApprovals
   * @returns `Approvals` An instance of the `Approvals` class.
   */
  public static create(
    proposalName: string,
    requestedApprovals: Approval[],
    providedApprovals: Approval[],
    id?: string,
    rest?: UnknownObject
  ): Approvals {
    const entity = new Approvals(
      proposalName,
      requestedApprovals,
      providedApprovals,
      id,
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Approvals {
    return new Approvals(
      '',
        []
,
        []
,
    );
  }
}

/**
 * Represents a `Approval` object.
 *
 * @class
 */
export class Approval implements Entity {
  /**
   * Constructs a new instance of the `Approval` class.
   *
   * @public
   * @constructor
   * @param PermissionLevel level
   * @param Date time
   * @param string [id]
   * @returns `Approval` - An instance of the `Approval` class.
   */
  public constructor(
    public level: PermissionLevel,
    public time: Date,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Approval` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      level: this.level,
      time: this.time,
    };
  }

  /**
   * Creates an instance of the `Approval` class.
   *
   * @static
   * @public
   * @param PermissionLevel level
   * @param Date time
   * @returns `Approval` An instance of the `Approval` class.
   */
  public static create(
    level: PermissionLevel,
    time: Date,
    id?: string,
    rest?: UnknownObject
  ): Approval {
    const entity = new Approval(
      level,
      time,
      id,
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Approval {
    return new Approval(
      PermissionLevel.getDefault(),
      new Date(0),
    );
  }
}

