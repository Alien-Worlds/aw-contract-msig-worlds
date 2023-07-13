/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Wed, 12 Jul 2023 11:57:24 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";

/**
 * Represents a `Invals` object.
 *
 * @class
 */
export class Invals implements Entity {
  /**
   * Constructs a new instance of the `Invals` class.
   *
   * @public
   * @constructor
   * @param string account
   * @param Date lastInvalidationTime
   * @param string [id]
   * @returns `Invals` - An instance of the `Invals` class.
   */
  public constructor(
    public account: string,
    public lastInvalidationTime: Date,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Invals` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      account: this.account,
      lastInvalidationTime: this.lastInvalidationTime,
    };
  }

  /**
   * Creates an instance of the `Invals` class.
   *
   * @static
   * @public
   * @param string account
   * @param Date lastInvalidationTime
   * @returns `Invals` An instance of the `Invals` class.
   */
  public static create(
    account: string,
    lastInvalidationTime: Date,
    id?: string,
    rest?: UnknownObject
  ): Invals {
    const entity = new Invals(
      account,
      lastInvalidationTime,
      id,
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Invals {
    return new Invals(
      '',
      new Date(0),
    );
  }
}

