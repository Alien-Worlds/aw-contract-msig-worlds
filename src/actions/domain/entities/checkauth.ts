/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:53:34 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";

/**
 * Represents a `Checkauth` object.
 *
 * @class
 */
export class Checkauth implements Entity {
  /**
   * Constructs a new instance of the `Checkauth` class.
   *
   * @public
   * @constructor
   * @param string proposalName
   * @param string dacId
   * @param string [id]
   * @returns `Checkauth` - An instance of the `Checkauth` class.
   */
  public constructor(
    public proposalName: string,
    public dacId: string,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Checkauth` class to a JSON object.
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
   * Creates an instance of the `Checkauth` class.
   *
   * @static
   * @public
   * @param string proposalName
   * @param string dacId
   * @returns `Checkauth` An instance of the `Checkauth` class.
   */
  public static create(
    proposalName: string,
    dacId: string,
    id?: string,
    rest?: UnknownObject
  ): Checkauth {
    const entity = new Checkauth(
      proposalName,
      dacId,
      id,
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Checkauth {
    return new Checkauth(
      '',
      '',
    );
  }
}

