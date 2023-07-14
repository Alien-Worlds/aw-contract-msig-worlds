/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:53:34 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";

/**
 * Represents a `Cancel` object.
 *
 * @class
 */
export class Cancel implements Entity {
  /**
   * Constructs a new instance of the `Cancel` class.
   *
   * @public
   * @constructor
   * @param string proposalName
   * @param string canceler
   * @param string dacId
   * @param string [id]
   * @returns `Cancel` - An instance of the `Cancel` class.
   */
  public constructor(
    public proposalName: string,
    public canceler: string,
    public dacId: string,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Cancel` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      proposalName: this.proposalName,
      canceler: this.canceler,
      dacId: this.dacId,
    };
  }

  /**
   * Creates an instance of the `Cancel` class.
   *
   * @static
   * @public
   * @param string proposalName
   * @param string canceler
   * @param string dacId
   * @returns `Cancel` An instance of the `Cancel` class.
   */
  public static create(
    proposalName: string,
    canceler: string,
    dacId: string,
    id?: string,
    rest?: UnknownObject
  ): Cancel {
    const entity = new Cancel(
      proposalName,
      canceler,
      dacId,
      id,
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Cancel {
    return new Cancel(
      '',
      '',
      '',
    );
  }
}

