/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V2 = require('../../../V2');
import { SerializableClass } from '../../../../../interfaces';

/**
 * Initialize the ItemAssignmentList
 *
 * @param version - Version of the resource
 * @param bundleSid - The unique string that identifies the Bundle resource.
 */
declare function ItemAssignmentList(version: V2, bundleSid: string): ItemAssignmentListInstance;

interface ItemAssignmentListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): ItemAssignmentContext;
  /**
   * create a ItemAssignmentInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: ItemAssignmentListInstanceCreateOptions, callback?: (error: Error | null, item: ItemAssignmentInstance) => any): Promise<ItemAssignmentInstance>;
  /**
   * Streams ItemAssignmentInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Function to process each record
   */
  each(callback?: (item: ItemAssignmentInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams ItemAssignmentInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: ItemAssignmentListInstanceEachOptions, callback?: (item: ItemAssignmentInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a item_assignment
   *
   * @param sid - The unique string that identifies the resource
   */
  get(sid: string): ItemAssignmentContext;
  /**
   * Retrieve a single target page of ItemAssignmentInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: ItemAssignmentPage) => any): Promise<ItemAssignmentPage>;
  /**
   * Retrieve a single target page of ItemAssignmentInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: ItemAssignmentPage) => any): Promise<ItemAssignmentPage>;
  /**
   * Lists ItemAssignmentInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: ItemAssignmentInstance[]) => any): Promise<ItemAssignmentInstance[]>;
  /**
   * Lists ItemAssignmentInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: ItemAssignmentListInstanceOptions, callback?: (error: Error | null, items: ItemAssignmentInstance[]) => any): Promise<ItemAssignmentInstance[]>;
  /**
   * Retrieve a single page of ItemAssignmentInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: ItemAssignmentPage) => any): Promise<ItemAssignmentPage>;
  /**
   * Retrieve a single page of ItemAssignmentInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: ItemAssignmentListInstancePageOptions, callback?: (error: Error | null, items: ItemAssignmentPage) => any): Promise<ItemAssignmentPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property objectSid - The sid of an object bag
 */
interface ItemAssignmentListInstanceCreateOptions {
  objectSid: string;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 */
interface ItemAssignmentListInstanceEachOptions {
  callback?: (item: ItemAssignmentInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to list
 *
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 */
interface ItemAssignmentListInstanceOptions {
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 */
interface ItemAssignmentListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface ItemAssignmentPayload extends ItemAssignmentResource, Page.TwilioResponsePayload {
}

interface ItemAssignmentResource {
  account_sid: string;
  bundle_sid: string;
  date_created: Date;
  object_sid: string;
  sid: string;
  url: string;
}

interface ItemAssignmentSolution {
  bundleSid?: string;
}


declare class ItemAssignmentContext {
  /**
   * Initialize the ItemAssignmentContext
   *
   * @param version - Version of the resource
   * @param bundleSid - The unique string that identifies the resource.
   * @param sid - The unique string that identifies the resource
   */
  constructor(version: V2, bundleSid: string, sid: string);

  /**
   * fetch a ItemAssignmentInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: ItemAssignmentInstance) => any): Promise<ItemAssignmentInstance>;
  /**
   * remove a ItemAssignmentInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: ItemAssignmentInstance) => any): Promise<boolean>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}


declare class ItemAssignmentInstance extends SerializableClass {
  /**
   * Initialize the ItemAssignmentContext
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param bundleSid - The unique string that identifies the Bundle resource.
   * @param sid - The unique string that identifies the resource
   */
  constructor(version: V2, payload: ItemAssignmentPayload, bundleSid: string, sid: string);

  private _proxy: ItemAssignmentContext;
  accountSid: string;
  bundleSid: string;
  dateCreated: Date;
  /**
   * fetch a ItemAssignmentInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: ItemAssignmentInstance) => any): Promise<ItemAssignmentInstance>;
  objectSid: string;
  /**
   * remove a ItemAssignmentInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: ItemAssignmentInstance) => any): Promise<boolean>;
  sid: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  url: string;
}


declare class ItemAssignmentPage extends Page<V2, ItemAssignmentPayload, ItemAssignmentResource, ItemAssignmentInstance> {
  /**
   * Initialize the ItemAssignmentPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2, response: Response<string>, solution: ItemAssignmentSolution);

  /**
   * Build an instance of ItemAssignmentInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: ItemAssignmentPayload): ItemAssignmentInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { ItemAssignmentContext, ItemAssignmentInstance, ItemAssignmentList, ItemAssignmentListInstance, ItemAssignmentListInstanceCreateOptions, ItemAssignmentListInstanceEachOptions, ItemAssignmentListInstanceOptions, ItemAssignmentListInstancePageOptions, ItemAssignmentPage, ItemAssignmentPayload, ItemAssignmentResource, ItemAssignmentSolution }