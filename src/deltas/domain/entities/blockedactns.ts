/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:14:46 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";

/**
 * Represents a `Blockedactns` object.
 *
 * @class
 */
export class Blockedactns implements Entity {
  /**
   * Constructs a new instance of the `Blockedactns` class.
   *
   * @public
   * @constructor
   * @param string id
   * @param string account
   * @param string action
   * @param string [id]
   * @returns `Blockedactns` - An instance of the `Blockedactns` class.
   */
  public constructor(
    public id: string,
    public account: string,
    public action: string,
    
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Blockedactns` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      id: this.id,
      account: this.account,
      action: this.action,
    };
  }

  /**
   * Creates an instance of the `Blockedactns` class.
   *
   * @static
   * @public
   * @param string id
   * @param string account
   * @param string action
   * @returns `Blockedactns` An instance of the `Blockedactns` class.
   */
  public static create(
    id: string,
    account: string,
    action: string,
    
    rest?: UnknownObject
  ): Blockedactns {
    const entity = new Blockedactns(
      id,
      account,
      action,
      
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Blockedactns {
    return new Blockedactns('0',
      '',
      '',
    );
  }
}

