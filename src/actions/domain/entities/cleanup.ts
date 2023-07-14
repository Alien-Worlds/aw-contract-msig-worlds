/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 19:22:17 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";

/**
 * Represents a `Cleanup` object.
 *
 * @class
 */
export class Cleanup implements Entity {
  /**
   * Constructs a new instance of the `Cleanup` class.
   *
   * @public
   * @constructor
   * @param string proposalName
   * @param string dacId
   * @param string [id]
   * @returns `Cleanup` - An instance of the `Cleanup` class.
   */
  public constructor(
    public proposalName: string,
    public dacId: string,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Cleanup` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      proposalName: this.proposalName,
      dacId: this.dacId,
    };
  }

  /**
   * Creates an instance of the `Cleanup` class.
   *
   * @static
   * @public
   * @param string proposalName
   * @param string dacId
   * @returns `Cleanup` An instance of the `Cleanup` class.
   */
  public static create(
    proposalName: string,
    dacId: string,
    id?: string,
    rest?: UnknownObject
  ): Cleanup {
    const entity = new Cleanup(
      proposalName,
      dacId,
      id,
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Cleanup {
    return new Cleanup(
      '',
      '',
    );
  }
}

