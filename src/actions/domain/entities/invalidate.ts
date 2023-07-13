/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Wed, 12 Jul 2023 11:57:24 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";

/**
 * Represents a `Invalidate` object.
 *
 * @class
 */
export class Invalidate implements Entity {
  /**
   * Constructs a new instance of the `Invalidate` class.
   *
   * @public
   * @constructor
   * @param string account
   * @param string dacId
   * @param string [id]
   * @returns `Invalidate` - An instance of the `Invalidate` class.
   */
  public constructor(
    public account: string,
    public dacId: string,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Invalidate` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      account: this.account,
      dacId: this.dacId,
    };
  }

  /**
   * Creates an instance of the `Invalidate` class.
   *
   * @static
   * @public
   * @param string account
   * @param string dacId
   * @returns `Invalidate` An instance of the `Invalidate` class.
   */
  public static create(
    account: string,
    dacId: string,
    id?: string,
    rest?: UnknownObject
  ): Invalidate {
    const entity = new Invalidate(
      account,
      dacId,
      id,
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Invalidate {
    return new Invalidate(
      '',
      '',
    );
  }
}

