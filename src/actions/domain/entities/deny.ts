/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 19:22:17 GMT
 */

import { Entity, UnknownObject } from '@alien-worlds/aw-core';
import { PermissionLevel } from '@alien-worlds/aw-antelope';

/**
 * Represents a `Deny` object.
 *
 * @class
 */
export class Deny implements Entity {
  /**
   * Constructs a new instance of the `Deny` class.
   *
   * @public
   * @constructor
   * @param string proposalName
   * @param PermissionLevel level
   * @param string dacId
   * @param string [id]
   * @returns `Deny` - An instance of the `Deny` class.
   */
  public constructor(
    public proposalName: string,
    public level: PermissionLevel,
    public dacId: string,
    public id?: string
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Deny` class to a JSON object.
   *
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      proposalName: this.proposalName,
      level: this.level,
      dacId: this.dacId,
    };
  }

  /**
   * Creates an instance of the `Deny` class.
   *
   * @static
   * @public
   * @param string proposalName
   * @param PermissionLevel level
   * @param string dacId
   * @returns `Deny` An instance of the `Deny` class.
   */
  public static create(
    proposalName: string,
    level: PermissionLevel,
    dacId: string,
    id?: string,
    rest?: UnknownObject
  ): Deny {
    const entity = new Deny(proposalName, level, dacId, id);
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Deny {
    return new Deny('', PermissionLevel.getDefault(), '');
  }
}
