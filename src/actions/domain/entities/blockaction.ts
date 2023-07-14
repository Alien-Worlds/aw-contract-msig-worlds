/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:53:34 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";

/**
 * Represents a `Blockaction` object.
 *
 * @class
 */
export class Blockaction implements Entity {
  /**
   * Constructs a new instance of the `Blockaction` class.
   *
   * @public
   * @constructor
   * @param string account
   * @param string action
   * @param string dacId
   * @param string [id]
   * @returns `Blockaction` - An instance of the `Blockaction` class.
   */
  public constructor(
    public account: string,
    public action: string,
    public dacId: string,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Blockaction` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      account: this.account,
      action: this.action,
      dacId: this.dacId,
    };
  }

  /**
   * Creates an instance of the `Blockaction` class.
   *
   * @static
   * @public
   * @param string account
   * @param string action
   * @param string dacId
   * @returns `Blockaction` An instance of the `Blockaction` class.
   */
  public static create(
    account: string,
    action: string,
    dacId: string,
    id?: string,
    rest?: UnknownObject
  ): Blockaction {
    const entity = new Blockaction(
      account,
      action,
      dacId,
      id,
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Blockaction {
    return new Blockaction(
      '',
      '',
      '',
    );
  }
}

