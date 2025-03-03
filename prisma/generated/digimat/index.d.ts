
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model mst_doc
 * 
 */
export type mst_doc = $Result.DefaultSelection<Prisma.$mst_docPayload>
/**
 * Model tr_supplier_info
 * 
 */
export type tr_supplier_info = $Result.DefaultSelection<Prisma.$tr_supplier_infoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Mst_docs
 * const mst_docs = await prisma.mst_doc.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Mst_docs
   * const mst_docs = await prisma.mst_doc.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.mst_doc`: Exposes CRUD operations for the **mst_doc** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mst_docs
    * const mst_docs = await prisma.mst_doc.findMany()
    * ```
    */
  get mst_doc(): Prisma.mst_docDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tr_supplier_info`: Exposes CRUD operations for the **tr_supplier_info** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tr_supplier_infos
    * const tr_supplier_infos = await prisma.tr_supplier_info.findMany()
    * ```
    */
  get tr_supplier_info(): Prisma.tr_supplier_infoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.4.1
   * Query Engine version: a9055b89e58b4b5bfb59600785423b1db3d0e75d
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    mst_doc: 'mst_doc',
    tr_supplier_info: 'tr_supplier_info'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    digimat?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "mst_doc" | "tr_supplier_info"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      mst_doc: {
        payload: Prisma.$mst_docPayload<ExtArgs>
        fields: Prisma.mst_docFieldRefs
        operations: {
          findUnique: {
            args: Prisma.mst_docFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_docPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.mst_docFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_docPayload>
          }
          findFirst: {
            args: Prisma.mst_docFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_docPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.mst_docFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_docPayload>
          }
          findMany: {
            args: Prisma.mst_docFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_docPayload>[]
          }
          create: {
            args: Prisma.mst_docCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_docPayload>
          }
          createMany: {
            args: Prisma.mst_docCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.mst_docDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_docPayload>
          }
          update: {
            args: Prisma.mst_docUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_docPayload>
          }
          deleteMany: {
            args: Prisma.mst_docDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.mst_docUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.mst_docUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mst_docPayload>
          }
          aggregate: {
            args: Prisma.Mst_docAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMst_doc>
          }
          groupBy: {
            args: Prisma.mst_docGroupByArgs<ExtArgs>
            result: $Utils.Optional<Mst_docGroupByOutputType>[]
          }
          count: {
            args: Prisma.mst_docCountArgs<ExtArgs>
            result: $Utils.Optional<Mst_docCountAggregateOutputType> | number
          }
        }
      }
      tr_supplier_info: {
        payload: Prisma.$tr_supplier_infoPayload<ExtArgs>
        fields: Prisma.tr_supplier_infoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tr_supplier_infoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_supplier_infoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tr_supplier_infoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_supplier_infoPayload>
          }
          findFirst: {
            args: Prisma.tr_supplier_infoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_supplier_infoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tr_supplier_infoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_supplier_infoPayload>
          }
          findMany: {
            args: Prisma.tr_supplier_infoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_supplier_infoPayload>[]
          }
          create: {
            args: Prisma.tr_supplier_infoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_supplier_infoPayload>
          }
          createMany: {
            args: Prisma.tr_supplier_infoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tr_supplier_infoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_supplier_infoPayload>
          }
          update: {
            args: Prisma.tr_supplier_infoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_supplier_infoPayload>
          }
          deleteMany: {
            args: Prisma.tr_supplier_infoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tr_supplier_infoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tr_supplier_infoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tr_supplier_infoPayload>
          }
          aggregate: {
            args: Prisma.Tr_supplier_infoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTr_supplier_info>
          }
          groupBy: {
            args: Prisma.tr_supplier_infoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tr_supplier_infoGroupByOutputType>[]
          }
          count: {
            args: Prisma.tr_supplier_infoCountArgs<ExtArgs>
            result: $Utils.Optional<Tr_supplier_infoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    mst_doc?: mst_docOmit
    tr_supplier_info?: tr_supplier_infoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model mst_doc
   */

  export type AggregateMst_doc = {
    _count: Mst_docCountAggregateOutputType | null
    _avg: Mst_docAvgAggregateOutputType | null
    _sum: Mst_docSumAggregateOutputType | null
    _min: Mst_docMinAggregateOutputType | null
    _max: Mst_docMaxAggregateOutputType | null
  }

  export type Mst_docAvgAggregateOutputType = {
    id: number | null
  }

  export type Mst_docSumAggregateOutputType = {
    id: number | null
  }

  export type Mst_docMinAggregateOutputType = {
    id: number | null
    kode_vendor: string | null
    material_code: string | null
    doc_name_qs: string | null
    doc_url_qs: string | null
    doc_name_ss: string | null
    doc_url_ss: string | null
    doc_name_aios: string | null
    doc_url_aios: string | null
  }

  export type Mst_docMaxAggregateOutputType = {
    id: number | null
    kode_vendor: string | null
    material_code: string | null
    doc_name_qs: string | null
    doc_url_qs: string | null
    doc_name_ss: string | null
    doc_url_ss: string | null
    doc_name_aios: string | null
    doc_url_aios: string | null
  }

  export type Mst_docCountAggregateOutputType = {
    id: number
    kode_vendor: number
    material_code: number
    doc_name_qs: number
    doc_url_qs: number
    doc_name_ss: number
    doc_url_ss: number
    doc_name_aios: number
    doc_url_aios: number
    _all: number
  }


  export type Mst_docAvgAggregateInputType = {
    id?: true
  }

  export type Mst_docSumAggregateInputType = {
    id?: true
  }

  export type Mst_docMinAggregateInputType = {
    id?: true
    kode_vendor?: true
    material_code?: true
    doc_name_qs?: true
    doc_url_qs?: true
    doc_name_ss?: true
    doc_url_ss?: true
    doc_name_aios?: true
    doc_url_aios?: true
  }

  export type Mst_docMaxAggregateInputType = {
    id?: true
    kode_vendor?: true
    material_code?: true
    doc_name_qs?: true
    doc_url_qs?: true
    doc_name_ss?: true
    doc_url_ss?: true
    doc_name_aios?: true
    doc_url_aios?: true
  }

  export type Mst_docCountAggregateInputType = {
    id?: true
    kode_vendor?: true
    material_code?: true
    doc_name_qs?: true
    doc_url_qs?: true
    doc_name_ss?: true
    doc_url_ss?: true
    doc_name_aios?: true
    doc_url_aios?: true
    _all?: true
  }

  export type Mst_docAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mst_doc to aggregate.
     */
    where?: mst_docWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mst_docs to fetch.
     */
    orderBy?: mst_docOrderByWithRelationInput | mst_docOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mst_docWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mst_docs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mst_docs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mst_docs
    **/
    _count?: true | Mst_docCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Mst_docAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Mst_docSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Mst_docMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Mst_docMaxAggregateInputType
  }

  export type GetMst_docAggregateType<T extends Mst_docAggregateArgs> = {
        [P in keyof T & keyof AggregateMst_doc]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMst_doc[P]>
      : GetScalarType<T[P], AggregateMst_doc[P]>
  }




  export type mst_docGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mst_docWhereInput
    orderBy?: mst_docOrderByWithAggregationInput | mst_docOrderByWithAggregationInput[]
    by: Mst_docScalarFieldEnum[] | Mst_docScalarFieldEnum
    having?: mst_docScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Mst_docCountAggregateInputType | true
    _avg?: Mst_docAvgAggregateInputType
    _sum?: Mst_docSumAggregateInputType
    _min?: Mst_docMinAggregateInputType
    _max?: Mst_docMaxAggregateInputType
  }

  export type Mst_docGroupByOutputType = {
    id: number
    kode_vendor: string | null
    material_code: string | null
    doc_name_qs: string | null
    doc_url_qs: string | null
    doc_name_ss: string | null
    doc_url_ss: string | null
    doc_name_aios: string | null
    doc_url_aios: string | null
    _count: Mst_docCountAggregateOutputType | null
    _avg: Mst_docAvgAggregateOutputType | null
    _sum: Mst_docSumAggregateOutputType | null
    _min: Mst_docMinAggregateOutputType | null
    _max: Mst_docMaxAggregateOutputType | null
  }

  type GetMst_docGroupByPayload<T extends mst_docGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Mst_docGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Mst_docGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Mst_docGroupByOutputType[P]>
            : GetScalarType<T[P], Mst_docGroupByOutputType[P]>
        }
      >
    >


  export type mst_docSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kode_vendor?: boolean
    material_code?: boolean
    doc_name_qs?: boolean
    doc_url_qs?: boolean
    doc_name_ss?: boolean
    doc_url_ss?: boolean
    doc_name_aios?: boolean
    doc_url_aios?: boolean
  }, ExtArgs["result"]["mst_doc"]>



  export type mst_docSelectScalar = {
    id?: boolean
    kode_vendor?: boolean
    material_code?: boolean
    doc_name_qs?: boolean
    doc_url_qs?: boolean
    doc_name_ss?: boolean
    doc_url_ss?: boolean
    doc_name_aios?: boolean
    doc_url_aios?: boolean
  }

  export type mst_docOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "kode_vendor" | "material_code" | "doc_name_qs" | "doc_url_qs" | "doc_name_ss" | "doc_url_ss" | "doc_name_aios" | "doc_url_aios", ExtArgs["result"]["mst_doc"]>

  export type $mst_docPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "mst_doc"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      kode_vendor: string | null
      material_code: string | null
      doc_name_qs: string | null
      doc_url_qs: string | null
      doc_name_ss: string | null
      doc_url_ss: string | null
      doc_name_aios: string | null
      doc_url_aios: string | null
    }, ExtArgs["result"]["mst_doc"]>
    composites: {}
  }

  type mst_docGetPayload<S extends boolean | null | undefined | mst_docDefaultArgs> = $Result.GetResult<Prisma.$mst_docPayload, S>

  type mst_docCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<mst_docFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Mst_docCountAggregateInputType | true
    }

  export interface mst_docDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['mst_doc'], meta: { name: 'mst_doc' } }
    /**
     * Find zero or one Mst_doc that matches the filter.
     * @param {mst_docFindUniqueArgs} args - Arguments to find a Mst_doc
     * @example
     * // Get one Mst_doc
     * const mst_doc = await prisma.mst_doc.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends mst_docFindUniqueArgs>(args: SelectSubset<T, mst_docFindUniqueArgs<ExtArgs>>): Prisma__mst_docClient<$Result.GetResult<Prisma.$mst_docPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Mst_doc that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {mst_docFindUniqueOrThrowArgs} args - Arguments to find a Mst_doc
     * @example
     * // Get one Mst_doc
     * const mst_doc = await prisma.mst_doc.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends mst_docFindUniqueOrThrowArgs>(args: SelectSubset<T, mst_docFindUniqueOrThrowArgs<ExtArgs>>): Prisma__mst_docClient<$Result.GetResult<Prisma.$mst_docPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Mst_doc that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_docFindFirstArgs} args - Arguments to find a Mst_doc
     * @example
     * // Get one Mst_doc
     * const mst_doc = await prisma.mst_doc.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends mst_docFindFirstArgs>(args?: SelectSubset<T, mst_docFindFirstArgs<ExtArgs>>): Prisma__mst_docClient<$Result.GetResult<Prisma.$mst_docPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Mst_doc that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_docFindFirstOrThrowArgs} args - Arguments to find a Mst_doc
     * @example
     * // Get one Mst_doc
     * const mst_doc = await prisma.mst_doc.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends mst_docFindFirstOrThrowArgs>(args?: SelectSubset<T, mst_docFindFirstOrThrowArgs<ExtArgs>>): Prisma__mst_docClient<$Result.GetResult<Prisma.$mst_docPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Mst_docs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_docFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mst_docs
     * const mst_docs = await prisma.mst_doc.findMany()
     * 
     * // Get first 10 Mst_docs
     * const mst_docs = await prisma.mst_doc.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mst_docWithIdOnly = await prisma.mst_doc.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends mst_docFindManyArgs>(args?: SelectSubset<T, mst_docFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mst_docPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Mst_doc.
     * @param {mst_docCreateArgs} args - Arguments to create a Mst_doc.
     * @example
     * // Create one Mst_doc
     * const Mst_doc = await prisma.mst_doc.create({
     *   data: {
     *     // ... data to create a Mst_doc
     *   }
     * })
     * 
     */
    create<T extends mst_docCreateArgs>(args: SelectSubset<T, mst_docCreateArgs<ExtArgs>>): Prisma__mst_docClient<$Result.GetResult<Prisma.$mst_docPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Mst_docs.
     * @param {mst_docCreateManyArgs} args - Arguments to create many Mst_docs.
     * @example
     * // Create many Mst_docs
     * const mst_doc = await prisma.mst_doc.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends mst_docCreateManyArgs>(args?: SelectSubset<T, mst_docCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Mst_doc.
     * @param {mst_docDeleteArgs} args - Arguments to delete one Mst_doc.
     * @example
     * // Delete one Mst_doc
     * const Mst_doc = await prisma.mst_doc.delete({
     *   where: {
     *     // ... filter to delete one Mst_doc
     *   }
     * })
     * 
     */
    delete<T extends mst_docDeleteArgs>(args: SelectSubset<T, mst_docDeleteArgs<ExtArgs>>): Prisma__mst_docClient<$Result.GetResult<Prisma.$mst_docPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Mst_doc.
     * @param {mst_docUpdateArgs} args - Arguments to update one Mst_doc.
     * @example
     * // Update one Mst_doc
     * const mst_doc = await prisma.mst_doc.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends mst_docUpdateArgs>(args: SelectSubset<T, mst_docUpdateArgs<ExtArgs>>): Prisma__mst_docClient<$Result.GetResult<Prisma.$mst_docPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Mst_docs.
     * @param {mst_docDeleteManyArgs} args - Arguments to filter Mst_docs to delete.
     * @example
     * // Delete a few Mst_docs
     * const { count } = await prisma.mst_doc.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends mst_docDeleteManyArgs>(args?: SelectSubset<T, mst_docDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mst_docs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_docUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mst_docs
     * const mst_doc = await prisma.mst_doc.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends mst_docUpdateManyArgs>(args: SelectSubset<T, mst_docUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mst_doc.
     * @param {mst_docUpsertArgs} args - Arguments to update or create a Mst_doc.
     * @example
     * // Update or create a Mst_doc
     * const mst_doc = await prisma.mst_doc.upsert({
     *   create: {
     *     // ... data to create a Mst_doc
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mst_doc we want to update
     *   }
     * })
     */
    upsert<T extends mst_docUpsertArgs>(args: SelectSubset<T, mst_docUpsertArgs<ExtArgs>>): Prisma__mst_docClient<$Result.GetResult<Prisma.$mst_docPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Mst_docs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_docCountArgs} args - Arguments to filter Mst_docs to count.
     * @example
     * // Count the number of Mst_docs
     * const count = await prisma.mst_doc.count({
     *   where: {
     *     // ... the filter for the Mst_docs we want to count
     *   }
     * })
    **/
    count<T extends mst_docCountArgs>(
      args?: Subset<T, mst_docCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Mst_docCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mst_doc.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Mst_docAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Mst_docAggregateArgs>(args: Subset<T, Mst_docAggregateArgs>): Prisma.PrismaPromise<GetMst_docAggregateType<T>>

    /**
     * Group by Mst_doc.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mst_docGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends mst_docGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: mst_docGroupByArgs['orderBy'] }
        : { orderBy?: mst_docGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, mst_docGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMst_docGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the mst_doc model
   */
  readonly fields: mst_docFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for mst_doc.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__mst_docClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the mst_doc model
   */ 
  interface mst_docFieldRefs {
    readonly id: FieldRef<"mst_doc", 'Int'>
    readonly kode_vendor: FieldRef<"mst_doc", 'String'>
    readonly material_code: FieldRef<"mst_doc", 'String'>
    readonly doc_name_qs: FieldRef<"mst_doc", 'String'>
    readonly doc_url_qs: FieldRef<"mst_doc", 'String'>
    readonly doc_name_ss: FieldRef<"mst_doc", 'String'>
    readonly doc_url_ss: FieldRef<"mst_doc", 'String'>
    readonly doc_name_aios: FieldRef<"mst_doc", 'String'>
    readonly doc_url_aios: FieldRef<"mst_doc", 'String'>
  }
    

  // Custom InputTypes
  /**
   * mst_doc findUnique
   */
  export type mst_docFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_doc
     */
    select?: mst_docSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mst_doc
     */
    omit?: mst_docOmit<ExtArgs> | null
    /**
     * Filter, which mst_doc to fetch.
     */
    where: mst_docWhereUniqueInput
  }

  /**
   * mst_doc findUniqueOrThrow
   */
  export type mst_docFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_doc
     */
    select?: mst_docSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mst_doc
     */
    omit?: mst_docOmit<ExtArgs> | null
    /**
     * Filter, which mst_doc to fetch.
     */
    where: mst_docWhereUniqueInput
  }

  /**
   * mst_doc findFirst
   */
  export type mst_docFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_doc
     */
    select?: mst_docSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mst_doc
     */
    omit?: mst_docOmit<ExtArgs> | null
    /**
     * Filter, which mst_doc to fetch.
     */
    where?: mst_docWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mst_docs to fetch.
     */
    orderBy?: mst_docOrderByWithRelationInput | mst_docOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mst_docs.
     */
    cursor?: mst_docWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mst_docs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mst_docs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mst_docs.
     */
    distinct?: Mst_docScalarFieldEnum | Mst_docScalarFieldEnum[]
  }

  /**
   * mst_doc findFirstOrThrow
   */
  export type mst_docFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_doc
     */
    select?: mst_docSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mst_doc
     */
    omit?: mst_docOmit<ExtArgs> | null
    /**
     * Filter, which mst_doc to fetch.
     */
    where?: mst_docWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mst_docs to fetch.
     */
    orderBy?: mst_docOrderByWithRelationInput | mst_docOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mst_docs.
     */
    cursor?: mst_docWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mst_docs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mst_docs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mst_docs.
     */
    distinct?: Mst_docScalarFieldEnum | Mst_docScalarFieldEnum[]
  }

  /**
   * mst_doc findMany
   */
  export type mst_docFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_doc
     */
    select?: mst_docSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mst_doc
     */
    omit?: mst_docOmit<ExtArgs> | null
    /**
     * Filter, which mst_docs to fetch.
     */
    where?: mst_docWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mst_docs to fetch.
     */
    orderBy?: mst_docOrderByWithRelationInput | mst_docOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mst_docs.
     */
    cursor?: mst_docWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mst_docs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mst_docs.
     */
    skip?: number
    distinct?: Mst_docScalarFieldEnum | Mst_docScalarFieldEnum[]
  }

  /**
   * mst_doc create
   */
  export type mst_docCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_doc
     */
    select?: mst_docSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mst_doc
     */
    omit?: mst_docOmit<ExtArgs> | null
    /**
     * The data needed to create a mst_doc.
     */
    data?: XOR<mst_docCreateInput, mst_docUncheckedCreateInput>
  }

  /**
   * mst_doc createMany
   */
  export type mst_docCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many mst_docs.
     */
    data: mst_docCreateManyInput | mst_docCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * mst_doc update
   */
  export type mst_docUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_doc
     */
    select?: mst_docSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mst_doc
     */
    omit?: mst_docOmit<ExtArgs> | null
    /**
     * The data needed to update a mst_doc.
     */
    data: XOR<mst_docUpdateInput, mst_docUncheckedUpdateInput>
    /**
     * Choose, which mst_doc to update.
     */
    where: mst_docWhereUniqueInput
  }

  /**
   * mst_doc updateMany
   */
  export type mst_docUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update mst_docs.
     */
    data: XOR<mst_docUpdateManyMutationInput, mst_docUncheckedUpdateManyInput>
    /**
     * Filter which mst_docs to update
     */
    where?: mst_docWhereInput
    /**
     * Limit how many mst_docs to update.
     */
    limit?: number
  }

  /**
   * mst_doc upsert
   */
  export type mst_docUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_doc
     */
    select?: mst_docSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mst_doc
     */
    omit?: mst_docOmit<ExtArgs> | null
    /**
     * The filter to search for the mst_doc to update in case it exists.
     */
    where: mst_docWhereUniqueInput
    /**
     * In case the mst_doc found by the `where` argument doesn't exist, create a new mst_doc with this data.
     */
    create: XOR<mst_docCreateInput, mst_docUncheckedCreateInput>
    /**
     * In case the mst_doc was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mst_docUpdateInput, mst_docUncheckedUpdateInput>
  }

  /**
   * mst_doc delete
   */
  export type mst_docDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_doc
     */
    select?: mst_docSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mst_doc
     */
    omit?: mst_docOmit<ExtArgs> | null
    /**
     * Filter which mst_doc to delete.
     */
    where: mst_docWhereUniqueInput
  }

  /**
   * mst_doc deleteMany
   */
  export type mst_docDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mst_docs to delete
     */
    where?: mst_docWhereInput
    /**
     * Limit how many mst_docs to delete.
     */
    limit?: number
  }

  /**
   * mst_doc without action
   */
  export type mst_docDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mst_doc
     */
    select?: mst_docSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mst_doc
     */
    omit?: mst_docOmit<ExtArgs> | null
  }


  /**
   * Model tr_supplier_info
   */

  export type AggregateTr_supplier_info = {
    _count: Tr_supplier_infoCountAggregateOutputType | null
    _avg: Tr_supplier_infoAvgAggregateOutputType | null
    _sum: Tr_supplier_infoSumAggregateOutputType | null
    _min: Tr_supplier_infoMinAggregateOutputType | null
    _max: Tr_supplier_infoMaxAggregateOutputType | null
  }

  export type Tr_supplier_infoAvgAggregateOutputType = {
    id: number | null
  }

  export type Tr_supplier_infoSumAggregateOutputType = {
    id: number | null
  }

  export type Tr_supplier_infoMinAggregateOutputType = {
    id: number | null
    kode_vendor: string | null
    logo: string | null
    status: string | null
  }

  export type Tr_supplier_infoMaxAggregateOutputType = {
    id: number | null
    kode_vendor: string | null
    logo: string | null
    status: string | null
  }

  export type Tr_supplier_infoCountAggregateOutputType = {
    id: number
    kode_vendor: number
    logo: number
    status: number
    _all: number
  }


  export type Tr_supplier_infoAvgAggregateInputType = {
    id?: true
  }

  export type Tr_supplier_infoSumAggregateInputType = {
    id?: true
  }

  export type Tr_supplier_infoMinAggregateInputType = {
    id?: true
    kode_vendor?: true
    logo?: true
    status?: true
  }

  export type Tr_supplier_infoMaxAggregateInputType = {
    id?: true
    kode_vendor?: true
    logo?: true
    status?: true
  }

  export type Tr_supplier_infoCountAggregateInputType = {
    id?: true
    kode_vendor?: true
    logo?: true
    status?: true
    _all?: true
  }

  export type Tr_supplier_infoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tr_supplier_info to aggregate.
     */
    where?: tr_supplier_infoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tr_supplier_infos to fetch.
     */
    orderBy?: tr_supplier_infoOrderByWithRelationInput | tr_supplier_infoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tr_supplier_infoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tr_supplier_infos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tr_supplier_infos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tr_supplier_infos
    **/
    _count?: true | Tr_supplier_infoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tr_supplier_infoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tr_supplier_infoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tr_supplier_infoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tr_supplier_infoMaxAggregateInputType
  }

  export type GetTr_supplier_infoAggregateType<T extends Tr_supplier_infoAggregateArgs> = {
        [P in keyof T & keyof AggregateTr_supplier_info]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTr_supplier_info[P]>
      : GetScalarType<T[P], AggregateTr_supplier_info[P]>
  }




  export type tr_supplier_infoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tr_supplier_infoWhereInput
    orderBy?: tr_supplier_infoOrderByWithAggregationInput | tr_supplier_infoOrderByWithAggregationInput[]
    by: Tr_supplier_infoScalarFieldEnum[] | Tr_supplier_infoScalarFieldEnum
    having?: tr_supplier_infoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tr_supplier_infoCountAggregateInputType | true
    _avg?: Tr_supplier_infoAvgAggregateInputType
    _sum?: Tr_supplier_infoSumAggregateInputType
    _min?: Tr_supplier_infoMinAggregateInputType
    _max?: Tr_supplier_infoMaxAggregateInputType
  }

  export type Tr_supplier_infoGroupByOutputType = {
    id: number
    kode_vendor: string
    logo: string | null
    status: string | null
    _count: Tr_supplier_infoCountAggregateOutputType | null
    _avg: Tr_supplier_infoAvgAggregateOutputType | null
    _sum: Tr_supplier_infoSumAggregateOutputType | null
    _min: Tr_supplier_infoMinAggregateOutputType | null
    _max: Tr_supplier_infoMaxAggregateOutputType | null
  }

  type GetTr_supplier_infoGroupByPayload<T extends tr_supplier_infoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tr_supplier_infoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tr_supplier_infoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tr_supplier_infoGroupByOutputType[P]>
            : GetScalarType<T[P], Tr_supplier_infoGroupByOutputType[P]>
        }
      >
    >


  export type tr_supplier_infoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kode_vendor?: boolean
    logo?: boolean
    status?: boolean
  }, ExtArgs["result"]["tr_supplier_info"]>



  export type tr_supplier_infoSelectScalar = {
    id?: boolean
    kode_vendor?: boolean
    logo?: boolean
    status?: boolean
  }

  export type tr_supplier_infoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "kode_vendor" | "logo" | "status", ExtArgs["result"]["tr_supplier_info"]>

  export type $tr_supplier_infoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tr_supplier_info"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      kode_vendor: string
      logo: string | null
      status: string | null
    }, ExtArgs["result"]["tr_supplier_info"]>
    composites: {}
  }

  type tr_supplier_infoGetPayload<S extends boolean | null | undefined | tr_supplier_infoDefaultArgs> = $Result.GetResult<Prisma.$tr_supplier_infoPayload, S>

  type tr_supplier_infoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tr_supplier_infoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tr_supplier_infoCountAggregateInputType | true
    }

  export interface tr_supplier_infoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tr_supplier_info'], meta: { name: 'tr_supplier_info' } }
    /**
     * Find zero or one Tr_supplier_info that matches the filter.
     * @param {tr_supplier_infoFindUniqueArgs} args - Arguments to find a Tr_supplier_info
     * @example
     * // Get one Tr_supplier_info
     * const tr_supplier_info = await prisma.tr_supplier_info.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tr_supplier_infoFindUniqueArgs>(args: SelectSubset<T, tr_supplier_infoFindUniqueArgs<ExtArgs>>): Prisma__tr_supplier_infoClient<$Result.GetResult<Prisma.$tr_supplier_infoPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Tr_supplier_info that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tr_supplier_infoFindUniqueOrThrowArgs} args - Arguments to find a Tr_supplier_info
     * @example
     * // Get one Tr_supplier_info
     * const tr_supplier_info = await prisma.tr_supplier_info.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tr_supplier_infoFindUniqueOrThrowArgs>(args: SelectSubset<T, tr_supplier_infoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tr_supplier_infoClient<$Result.GetResult<Prisma.$tr_supplier_infoPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Tr_supplier_info that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_supplier_infoFindFirstArgs} args - Arguments to find a Tr_supplier_info
     * @example
     * // Get one Tr_supplier_info
     * const tr_supplier_info = await prisma.tr_supplier_info.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tr_supplier_infoFindFirstArgs>(args?: SelectSubset<T, tr_supplier_infoFindFirstArgs<ExtArgs>>): Prisma__tr_supplier_infoClient<$Result.GetResult<Prisma.$tr_supplier_infoPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Tr_supplier_info that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_supplier_infoFindFirstOrThrowArgs} args - Arguments to find a Tr_supplier_info
     * @example
     * // Get one Tr_supplier_info
     * const tr_supplier_info = await prisma.tr_supplier_info.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tr_supplier_infoFindFirstOrThrowArgs>(args?: SelectSubset<T, tr_supplier_infoFindFirstOrThrowArgs<ExtArgs>>): Prisma__tr_supplier_infoClient<$Result.GetResult<Prisma.$tr_supplier_infoPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Tr_supplier_infos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_supplier_infoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tr_supplier_infos
     * const tr_supplier_infos = await prisma.tr_supplier_info.findMany()
     * 
     * // Get first 10 Tr_supplier_infos
     * const tr_supplier_infos = await prisma.tr_supplier_info.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tr_supplier_infoWithIdOnly = await prisma.tr_supplier_info.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tr_supplier_infoFindManyArgs>(args?: SelectSubset<T, tr_supplier_infoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tr_supplier_infoPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Tr_supplier_info.
     * @param {tr_supplier_infoCreateArgs} args - Arguments to create a Tr_supplier_info.
     * @example
     * // Create one Tr_supplier_info
     * const Tr_supplier_info = await prisma.tr_supplier_info.create({
     *   data: {
     *     // ... data to create a Tr_supplier_info
     *   }
     * })
     * 
     */
    create<T extends tr_supplier_infoCreateArgs>(args: SelectSubset<T, tr_supplier_infoCreateArgs<ExtArgs>>): Prisma__tr_supplier_infoClient<$Result.GetResult<Prisma.$tr_supplier_infoPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Tr_supplier_infos.
     * @param {tr_supplier_infoCreateManyArgs} args - Arguments to create many Tr_supplier_infos.
     * @example
     * // Create many Tr_supplier_infos
     * const tr_supplier_info = await prisma.tr_supplier_info.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tr_supplier_infoCreateManyArgs>(args?: SelectSubset<T, tr_supplier_infoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tr_supplier_info.
     * @param {tr_supplier_infoDeleteArgs} args - Arguments to delete one Tr_supplier_info.
     * @example
     * // Delete one Tr_supplier_info
     * const Tr_supplier_info = await prisma.tr_supplier_info.delete({
     *   where: {
     *     // ... filter to delete one Tr_supplier_info
     *   }
     * })
     * 
     */
    delete<T extends tr_supplier_infoDeleteArgs>(args: SelectSubset<T, tr_supplier_infoDeleteArgs<ExtArgs>>): Prisma__tr_supplier_infoClient<$Result.GetResult<Prisma.$tr_supplier_infoPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Tr_supplier_info.
     * @param {tr_supplier_infoUpdateArgs} args - Arguments to update one Tr_supplier_info.
     * @example
     * // Update one Tr_supplier_info
     * const tr_supplier_info = await prisma.tr_supplier_info.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tr_supplier_infoUpdateArgs>(args: SelectSubset<T, tr_supplier_infoUpdateArgs<ExtArgs>>): Prisma__tr_supplier_infoClient<$Result.GetResult<Prisma.$tr_supplier_infoPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Tr_supplier_infos.
     * @param {tr_supplier_infoDeleteManyArgs} args - Arguments to filter Tr_supplier_infos to delete.
     * @example
     * // Delete a few Tr_supplier_infos
     * const { count } = await prisma.tr_supplier_info.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tr_supplier_infoDeleteManyArgs>(args?: SelectSubset<T, tr_supplier_infoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tr_supplier_infos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_supplier_infoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tr_supplier_infos
     * const tr_supplier_info = await prisma.tr_supplier_info.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tr_supplier_infoUpdateManyArgs>(args: SelectSubset<T, tr_supplier_infoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tr_supplier_info.
     * @param {tr_supplier_infoUpsertArgs} args - Arguments to update or create a Tr_supplier_info.
     * @example
     * // Update or create a Tr_supplier_info
     * const tr_supplier_info = await prisma.tr_supplier_info.upsert({
     *   create: {
     *     // ... data to create a Tr_supplier_info
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tr_supplier_info we want to update
     *   }
     * })
     */
    upsert<T extends tr_supplier_infoUpsertArgs>(args: SelectSubset<T, tr_supplier_infoUpsertArgs<ExtArgs>>): Prisma__tr_supplier_infoClient<$Result.GetResult<Prisma.$tr_supplier_infoPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Tr_supplier_infos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_supplier_infoCountArgs} args - Arguments to filter Tr_supplier_infos to count.
     * @example
     * // Count the number of Tr_supplier_infos
     * const count = await prisma.tr_supplier_info.count({
     *   where: {
     *     // ... the filter for the Tr_supplier_infos we want to count
     *   }
     * })
    **/
    count<T extends tr_supplier_infoCountArgs>(
      args?: Subset<T, tr_supplier_infoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tr_supplier_infoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tr_supplier_info.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tr_supplier_infoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tr_supplier_infoAggregateArgs>(args: Subset<T, Tr_supplier_infoAggregateArgs>): Prisma.PrismaPromise<GetTr_supplier_infoAggregateType<T>>

    /**
     * Group by Tr_supplier_info.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tr_supplier_infoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tr_supplier_infoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tr_supplier_infoGroupByArgs['orderBy'] }
        : { orderBy?: tr_supplier_infoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tr_supplier_infoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTr_supplier_infoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tr_supplier_info model
   */
  readonly fields: tr_supplier_infoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tr_supplier_info.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tr_supplier_infoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tr_supplier_info model
   */ 
  interface tr_supplier_infoFieldRefs {
    readonly id: FieldRef<"tr_supplier_info", 'Int'>
    readonly kode_vendor: FieldRef<"tr_supplier_info", 'String'>
    readonly logo: FieldRef<"tr_supplier_info", 'String'>
    readonly status: FieldRef<"tr_supplier_info", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tr_supplier_info findUnique
   */
  export type tr_supplier_infoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_supplier_info
     */
    select?: tr_supplier_infoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tr_supplier_info
     */
    omit?: tr_supplier_infoOmit<ExtArgs> | null
    /**
     * Filter, which tr_supplier_info to fetch.
     */
    where: tr_supplier_infoWhereUniqueInput
  }

  /**
   * tr_supplier_info findUniqueOrThrow
   */
  export type tr_supplier_infoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_supplier_info
     */
    select?: tr_supplier_infoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tr_supplier_info
     */
    omit?: tr_supplier_infoOmit<ExtArgs> | null
    /**
     * Filter, which tr_supplier_info to fetch.
     */
    where: tr_supplier_infoWhereUniqueInput
  }

  /**
   * tr_supplier_info findFirst
   */
  export type tr_supplier_infoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_supplier_info
     */
    select?: tr_supplier_infoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tr_supplier_info
     */
    omit?: tr_supplier_infoOmit<ExtArgs> | null
    /**
     * Filter, which tr_supplier_info to fetch.
     */
    where?: tr_supplier_infoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tr_supplier_infos to fetch.
     */
    orderBy?: tr_supplier_infoOrderByWithRelationInput | tr_supplier_infoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tr_supplier_infos.
     */
    cursor?: tr_supplier_infoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tr_supplier_infos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tr_supplier_infos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tr_supplier_infos.
     */
    distinct?: Tr_supplier_infoScalarFieldEnum | Tr_supplier_infoScalarFieldEnum[]
  }

  /**
   * tr_supplier_info findFirstOrThrow
   */
  export type tr_supplier_infoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_supplier_info
     */
    select?: tr_supplier_infoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tr_supplier_info
     */
    omit?: tr_supplier_infoOmit<ExtArgs> | null
    /**
     * Filter, which tr_supplier_info to fetch.
     */
    where?: tr_supplier_infoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tr_supplier_infos to fetch.
     */
    orderBy?: tr_supplier_infoOrderByWithRelationInput | tr_supplier_infoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tr_supplier_infos.
     */
    cursor?: tr_supplier_infoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tr_supplier_infos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tr_supplier_infos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tr_supplier_infos.
     */
    distinct?: Tr_supplier_infoScalarFieldEnum | Tr_supplier_infoScalarFieldEnum[]
  }

  /**
   * tr_supplier_info findMany
   */
  export type tr_supplier_infoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_supplier_info
     */
    select?: tr_supplier_infoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tr_supplier_info
     */
    omit?: tr_supplier_infoOmit<ExtArgs> | null
    /**
     * Filter, which tr_supplier_infos to fetch.
     */
    where?: tr_supplier_infoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tr_supplier_infos to fetch.
     */
    orderBy?: tr_supplier_infoOrderByWithRelationInput | tr_supplier_infoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tr_supplier_infos.
     */
    cursor?: tr_supplier_infoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tr_supplier_infos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tr_supplier_infos.
     */
    skip?: number
    distinct?: Tr_supplier_infoScalarFieldEnum | Tr_supplier_infoScalarFieldEnum[]
  }

  /**
   * tr_supplier_info create
   */
  export type tr_supplier_infoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_supplier_info
     */
    select?: tr_supplier_infoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tr_supplier_info
     */
    omit?: tr_supplier_infoOmit<ExtArgs> | null
    /**
     * The data needed to create a tr_supplier_info.
     */
    data: XOR<tr_supplier_infoCreateInput, tr_supplier_infoUncheckedCreateInput>
  }

  /**
   * tr_supplier_info createMany
   */
  export type tr_supplier_infoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tr_supplier_infos.
     */
    data: tr_supplier_infoCreateManyInput | tr_supplier_infoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tr_supplier_info update
   */
  export type tr_supplier_infoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_supplier_info
     */
    select?: tr_supplier_infoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tr_supplier_info
     */
    omit?: tr_supplier_infoOmit<ExtArgs> | null
    /**
     * The data needed to update a tr_supplier_info.
     */
    data: XOR<tr_supplier_infoUpdateInput, tr_supplier_infoUncheckedUpdateInput>
    /**
     * Choose, which tr_supplier_info to update.
     */
    where: tr_supplier_infoWhereUniqueInput
  }

  /**
   * tr_supplier_info updateMany
   */
  export type tr_supplier_infoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tr_supplier_infos.
     */
    data: XOR<tr_supplier_infoUpdateManyMutationInput, tr_supplier_infoUncheckedUpdateManyInput>
    /**
     * Filter which tr_supplier_infos to update
     */
    where?: tr_supplier_infoWhereInput
    /**
     * Limit how many tr_supplier_infos to update.
     */
    limit?: number
  }

  /**
   * tr_supplier_info upsert
   */
  export type tr_supplier_infoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_supplier_info
     */
    select?: tr_supplier_infoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tr_supplier_info
     */
    omit?: tr_supplier_infoOmit<ExtArgs> | null
    /**
     * The filter to search for the tr_supplier_info to update in case it exists.
     */
    where: tr_supplier_infoWhereUniqueInput
    /**
     * In case the tr_supplier_info found by the `where` argument doesn't exist, create a new tr_supplier_info with this data.
     */
    create: XOR<tr_supplier_infoCreateInput, tr_supplier_infoUncheckedCreateInput>
    /**
     * In case the tr_supplier_info was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tr_supplier_infoUpdateInput, tr_supplier_infoUncheckedUpdateInput>
  }

  /**
   * tr_supplier_info delete
   */
  export type tr_supplier_infoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_supplier_info
     */
    select?: tr_supplier_infoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tr_supplier_info
     */
    omit?: tr_supplier_infoOmit<ExtArgs> | null
    /**
     * Filter which tr_supplier_info to delete.
     */
    where: tr_supplier_infoWhereUniqueInput
  }

  /**
   * tr_supplier_info deleteMany
   */
  export type tr_supplier_infoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tr_supplier_infos to delete
     */
    where?: tr_supplier_infoWhereInput
    /**
     * Limit how many tr_supplier_infos to delete.
     */
    limit?: number
  }

  /**
   * tr_supplier_info without action
   */
  export type tr_supplier_infoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tr_supplier_info
     */
    select?: tr_supplier_infoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tr_supplier_info
     */
    omit?: tr_supplier_infoOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Mst_docScalarFieldEnum: {
    id: 'id',
    kode_vendor: 'kode_vendor',
    material_code: 'material_code',
    doc_name_qs: 'doc_name_qs',
    doc_url_qs: 'doc_url_qs',
    doc_name_ss: 'doc_name_ss',
    doc_url_ss: 'doc_url_ss',
    doc_name_aios: 'doc_name_aios',
    doc_url_aios: 'doc_url_aios'
  };

  export type Mst_docScalarFieldEnum = (typeof Mst_docScalarFieldEnum)[keyof typeof Mst_docScalarFieldEnum]


  export const Tr_supplier_infoScalarFieldEnum: {
    id: 'id',
    kode_vendor: 'kode_vendor',
    logo: 'logo',
    status: 'status'
  };

  export type Tr_supplier_infoScalarFieldEnum = (typeof Tr_supplier_infoScalarFieldEnum)[keyof typeof Tr_supplier_infoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const mst_docOrderByRelevanceFieldEnum: {
    kode_vendor: 'kode_vendor',
    material_code: 'material_code',
    doc_name_qs: 'doc_name_qs',
    doc_url_qs: 'doc_url_qs',
    doc_name_ss: 'doc_name_ss',
    doc_url_ss: 'doc_url_ss',
    doc_name_aios: 'doc_name_aios',
    doc_url_aios: 'doc_url_aios'
  };

  export type mst_docOrderByRelevanceFieldEnum = (typeof mst_docOrderByRelevanceFieldEnum)[keyof typeof mst_docOrderByRelevanceFieldEnum]


  export const tr_supplier_infoOrderByRelevanceFieldEnum: {
    kode_vendor: 'kode_vendor',
    logo: 'logo',
    status: 'status'
  };

  export type tr_supplier_infoOrderByRelevanceFieldEnum = (typeof tr_supplier_infoOrderByRelevanceFieldEnum)[keyof typeof tr_supplier_infoOrderByRelevanceFieldEnum]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type mst_docWhereInput = {
    AND?: mst_docWhereInput | mst_docWhereInput[]
    OR?: mst_docWhereInput[]
    NOT?: mst_docWhereInput | mst_docWhereInput[]
    id?: IntFilter<"mst_doc"> | number
    kode_vendor?: StringNullableFilter<"mst_doc"> | string | null
    material_code?: StringNullableFilter<"mst_doc"> | string | null
    doc_name_qs?: StringNullableFilter<"mst_doc"> | string | null
    doc_url_qs?: StringNullableFilter<"mst_doc"> | string | null
    doc_name_ss?: StringNullableFilter<"mst_doc"> | string | null
    doc_url_ss?: StringNullableFilter<"mst_doc"> | string | null
    doc_name_aios?: StringNullableFilter<"mst_doc"> | string | null
    doc_url_aios?: StringNullableFilter<"mst_doc"> | string | null
  }

  export type mst_docOrderByWithRelationInput = {
    id?: SortOrder
    kode_vendor?: SortOrderInput | SortOrder
    material_code?: SortOrderInput | SortOrder
    doc_name_qs?: SortOrderInput | SortOrder
    doc_url_qs?: SortOrderInput | SortOrder
    doc_name_ss?: SortOrderInput | SortOrder
    doc_url_ss?: SortOrderInput | SortOrder
    doc_name_aios?: SortOrderInput | SortOrder
    doc_url_aios?: SortOrderInput | SortOrder
    _relevance?: mst_docOrderByRelevanceInput
  }

  export type mst_docWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: mst_docWhereInput | mst_docWhereInput[]
    OR?: mst_docWhereInput[]
    NOT?: mst_docWhereInput | mst_docWhereInput[]
    kode_vendor?: StringNullableFilter<"mst_doc"> | string | null
    material_code?: StringNullableFilter<"mst_doc"> | string | null
    doc_name_qs?: StringNullableFilter<"mst_doc"> | string | null
    doc_url_qs?: StringNullableFilter<"mst_doc"> | string | null
    doc_name_ss?: StringNullableFilter<"mst_doc"> | string | null
    doc_url_ss?: StringNullableFilter<"mst_doc"> | string | null
    doc_name_aios?: StringNullableFilter<"mst_doc"> | string | null
    doc_url_aios?: StringNullableFilter<"mst_doc"> | string | null
  }, "id">

  export type mst_docOrderByWithAggregationInput = {
    id?: SortOrder
    kode_vendor?: SortOrderInput | SortOrder
    material_code?: SortOrderInput | SortOrder
    doc_name_qs?: SortOrderInput | SortOrder
    doc_url_qs?: SortOrderInput | SortOrder
    doc_name_ss?: SortOrderInput | SortOrder
    doc_url_ss?: SortOrderInput | SortOrder
    doc_name_aios?: SortOrderInput | SortOrder
    doc_url_aios?: SortOrderInput | SortOrder
    _count?: mst_docCountOrderByAggregateInput
    _avg?: mst_docAvgOrderByAggregateInput
    _max?: mst_docMaxOrderByAggregateInput
    _min?: mst_docMinOrderByAggregateInput
    _sum?: mst_docSumOrderByAggregateInput
  }

  export type mst_docScalarWhereWithAggregatesInput = {
    AND?: mst_docScalarWhereWithAggregatesInput | mst_docScalarWhereWithAggregatesInput[]
    OR?: mst_docScalarWhereWithAggregatesInput[]
    NOT?: mst_docScalarWhereWithAggregatesInput | mst_docScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"mst_doc"> | number
    kode_vendor?: StringNullableWithAggregatesFilter<"mst_doc"> | string | null
    material_code?: StringNullableWithAggregatesFilter<"mst_doc"> | string | null
    doc_name_qs?: StringNullableWithAggregatesFilter<"mst_doc"> | string | null
    doc_url_qs?: StringNullableWithAggregatesFilter<"mst_doc"> | string | null
    doc_name_ss?: StringNullableWithAggregatesFilter<"mst_doc"> | string | null
    doc_url_ss?: StringNullableWithAggregatesFilter<"mst_doc"> | string | null
    doc_name_aios?: StringNullableWithAggregatesFilter<"mst_doc"> | string | null
    doc_url_aios?: StringNullableWithAggregatesFilter<"mst_doc"> | string | null
  }

  export type tr_supplier_infoWhereInput = {
    AND?: tr_supplier_infoWhereInput | tr_supplier_infoWhereInput[]
    OR?: tr_supplier_infoWhereInput[]
    NOT?: tr_supplier_infoWhereInput | tr_supplier_infoWhereInput[]
    id?: IntFilter<"tr_supplier_info"> | number
    kode_vendor?: StringFilter<"tr_supplier_info"> | string
    logo?: StringNullableFilter<"tr_supplier_info"> | string | null
    status?: StringNullableFilter<"tr_supplier_info"> | string | null
  }

  export type tr_supplier_infoOrderByWithRelationInput = {
    id?: SortOrder
    kode_vendor?: SortOrder
    logo?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    _relevance?: tr_supplier_infoOrderByRelevanceInput
  }

  export type tr_supplier_infoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    kode_vendor?: string
    AND?: tr_supplier_infoWhereInput | tr_supplier_infoWhereInput[]
    OR?: tr_supplier_infoWhereInput[]
    NOT?: tr_supplier_infoWhereInput | tr_supplier_infoWhereInput[]
    logo?: StringNullableFilter<"tr_supplier_info"> | string | null
    status?: StringNullableFilter<"tr_supplier_info"> | string | null
  }, "id" | "kode_vendor">

  export type tr_supplier_infoOrderByWithAggregationInput = {
    id?: SortOrder
    kode_vendor?: SortOrder
    logo?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    _count?: tr_supplier_infoCountOrderByAggregateInput
    _avg?: tr_supplier_infoAvgOrderByAggregateInput
    _max?: tr_supplier_infoMaxOrderByAggregateInput
    _min?: tr_supplier_infoMinOrderByAggregateInput
    _sum?: tr_supplier_infoSumOrderByAggregateInput
  }

  export type tr_supplier_infoScalarWhereWithAggregatesInput = {
    AND?: tr_supplier_infoScalarWhereWithAggregatesInput | tr_supplier_infoScalarWhereWithAggregatesInput[]
    OR?: tr_supplier_infoScalarWhereWithAggregatesInput[]
    NOT?: tr_supplier_infoScalarWhereWithAggregatesInput | tr_supplier_infoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tr_supplier_info"> | number
    kode_vendor?: StringWithAggregatesFilter<"tr_supplier_info"> | string
    logo?: StringNullableWithAggregatesFilter<"tr_supplier_info"> | string | null
    status?: StringNullableWithAggregatesFilter<"tr_supplier_info"> | string | null
  }

  export type mst_docCreateInput = {
    kode_vendor?: string | null
    material_code?: string | null
    doc_name_qs?: string | null
    doc_url_qs?: string | null
    doc_name_ss?: string | null
    doc_url_ss?: string | null
    doc_name_aios?: string | null
    doc_url_aios?: string | null
  }

  export type mst_docUncheckedCreateInput = {
    id?: number
    kode_vendor?: string | null
    material_code?: string | null
    doc_name_qs?: string | null
    doc_url_qs?: string | null
    doc_name_ss?: string | null
    doc_url_ss?: string | null
    doc_name_aios?: string | null
    doc_url_aios?: string | null
  }

  export type mst_docUpdateInput = {
    kode_vendor?: NullableStringFieldUpdateOperationsInput | string | null
    material_code?: NullableStringFieldUpdateOperationsInput | string | null
    doc_name_qs?: NullableStringFieldUpdateOperationsInput | string | null
    doc_url_qs?: NullableStringFieldUpdateOperationsInput | string | null
    doc_name_ss?: NullableStringFieldUpdateOperationsInput | string | null
    doc_url_ss?: NullableStringFieldUpdateOperationsInput | string | null
    doc_name_aios?: NullableStringFieldUpdateOperationsInput | string | null
    doc_url_aios?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type mst_docUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    kode_vendor?: NullableStringFieldUpdateOperationsInput | string | null
    material_code?: NullableStringFieldUpdateOperationsInput | string | null
    doc_name_qs?: NullableStringFieldUpdateOperationsInput | string | null
    doc_url_qs?: NullableStringFieldUpdateOperationsInput | string | null
    doc_name_ss?: NullableStringFieldUpdateOperationsInput | string | null
    doc_url_ss?: NullableStringFieldUpdateOperationsInput | string | null
    doc_name_aios?: NullableStringFieldUpdateOperationsInput | string | null
    doc_url_aios?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type mst_docCreateManyInput = {
    id?: number
    kode_vendor?: string | null
    material_code?: string | null
    doc_name_qs?: string | null
    doc_url_qs?: string | null
    doc_name_ss?: string | null
    doc_url_ss?: string | null
    doc_name_aios?: string | null
    doc_url_aios?: string | null
  }

  export type mst_docUpdateManyMutationInput = {
    kode_vendor?: NullableStringFieldUpdateOperationsInput | string | null
    material_code?: NullableStringFieldUpdateOperationsInput | string | null
    doc_name_qs?: NullableStringFieldUpdateOperationsInput | string | null
    doc_url_qs?: NullableStringFieldUpdateOperationsInput | string | null
    doc_name_ss?: NullableStringFieldUpdateOperationsInput | string | null
    doc_url_ss?: NullableStringFieldUpdateOperationsInput | string | null
    doc_name_aios?: NullableStringFieldUpdateOperationsInput | string | null
    doc_url_aios?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type mst_docUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    kode_vendor?: NullableStringFieldUpdateOperationsInput | string | null
    material_code?: NullableStringFieldUpdateOperationsInput | string | null
    doc_name_qs?: NullableStringFieldUpdateOperationsInput | string | null
    doc_url_qs?: NullableStringFieldUpdateOperationsInput | string | null
    doc_name_ss?: NullableStringFieldUpdateOperationsInput | string | null
    doc_url_ss?: NullableStringFieldUpdateOperationsInput | string | null
    doc_name_aios?: NullableStringFieldUpdateOperationsInput | string | null
    doc_url_aios?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tr_supplier_infoCreateInput = {
    kode_vendor: string
    logo?: string | null
    status?: string | null
  }

  export type tr_supplier_infoUncheckedCreateInput = {
    id?: number
    kode_vendor: string
    logo?: string | null
    status?: string | null
  }

  export type tr_supplier_infoUpdateInput = {
    kode_vendor?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tr_supplier_infoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    kode_vendor?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tr_supplier_infoCreateManyInput = {
    id?: number
    kode_vendor: string
    logo?: string | null
    status?: string | null
  }

  export type tr_supplier_infoUpdateManyMutationInput = {
    kode_vendor?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tr_supplier_infoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    kode_vendor?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type mst_docOrderByRelevanceInput = {
    fields: mst_docOrderByRelevanceFieldEnum | mst_docOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type mst_docCountOrderByAggregateInput = {
    id?: SortOrder
    kode_vendor?: SortOrder
    material_code?: SortOrder
    doc_name_qs?: SortOrder
    doc_url_qs?: SortOrder
    doc_name_ss?: SortOrder
    doc_url_ss?: SortOrder
    doc_name_aios?: SortOrder
    doc_url_aios?: SortOrder
  }

  export type mst_docAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type mst_docMaxOrderByAggregateInput = {
    id?: SortOrder
    kode_vendor?: SortOrder
    material_code?: SortOrder
    doc_name_qs?: SortOrder
    doc_url_qs?: SortOrder
    doc_name_ss?: SortOrder
    doc_url_ss?: SortOrder
    doc_name_aios?: SortOrder
    doc_url_aios?: SortOrder
  }

  export type mst_docMinOrderByAggregateInput = {
    id?: SortOrder
    kode_vendor?: SortOrder
    material_code?: SortOrder
    doc_name_qs?: SortOrder
    doc_url_qs?: SortOrder
    doc_name_ss?: SortOrder
    doc_url_ss?: SortOrder
    doc_name_aios?: SortOrder
    doc_url_aios?: SortOrder
  }

  export type mst_docSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type tr_supplier_infoOrderByRelevanceInput = {
    fields: tr_supplier_infoOrderByRelevanceFieldEnum | tr_supplier_infoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tr_supplier_infoCountOrderByAggregateInput = {
    id?: SortOrder
    kode_vendor?: SortOrder
    logo?: SortOrder
    status?: SortOrder
  }

  export type tr_supplier_infoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type tr_supplier_infoMaxOrderByAggregateInput = {
    id?: SortOrder
    kode_vendor?: SortOrder
    logo?: SortOrder
    status?: SortOrder
  }

  export type tr_supplier_infoMinOrderByAggregateInput = {
    id?: SortOrder
    kode_vendor?: SortOrder
    logo?: SortOrder
    status?: SortOrder
  }

  export type tr_supplier_infoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}