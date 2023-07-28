/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 19:22:17 GMT
 */

import { Entity, UnknownObject } from '@alien-worlds/aw-core';
import { PermissionLevel } from '@alien-worlds/aw-antelope';

/**
 * Represents a `Unapprove` object.
 *
 * @class
 */
export class Unapprove implements Entity {
  /**
   * Constructs a new instance of the `Unapprove` class.
   *
   * @public
   * @constructor
   * @param string proposalName
   * @param PermissionLevel level
   * @param string dacId
   * @param string [id]
   * @returns `Unapprove` - An instance of the `Unapprove` class.
   */
  public constructor(
    public proposalName: string,
    public level: PermissionLevel,
    public dacId: string,
    public id?: string
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Unapprove` class to a JSON object.
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
   * Creates an instance of the `Unapprove` class.
   *
   * @static
   * @public
   * @param string proposalName
   * @param PermissionLevel level
   * @param string dacId
   * @returns `Unapprove` An instance of the `Unapprove` class.
   */
  public static create(
    proposalName: string,
    level: PermissionLevel,
    dacId: string,
    id?: string,
    rest?: UnknownObject
  ): Unapprove {
    const entity = new Unapprove(proposalName, level, dacId, id);
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Unapprove {
    return new Unapprove('', PermissionLevel.getDefault(), '');
  }
}
