
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
 * Model MstMaterialCapa
 * 
 */
export type MstMaterialCapa = $Result.DefaultSelection<Prisma.$MstMaterialCapaPayload>
/**
 * Model SupplierScore
 * 
 */
export type SupplierScore = $Result.DefaultSelection<Prisma.$SupplierScorePayload>
/**
 * Model ComplaintStatus
 * 
 */
export type ComplaintStatus = $Result.DefaultSelection<Prisma.$ComplaintStatusPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more MstMaterialCapas
 * const mstMaterialCapas = await prisma.mstMaterialCapa.findMany()
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
   * // Fetch zero or more MstMaterialCapas
   * const mstMaterialCapas = await prisma.mstMaterialCapa.findMany()
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
   * `prisma.mstMaterialCapa`: Exposes CRUD operations for the **MstMaterialCapa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MstMaterialCapas
    * const mstMaterialCapas = await prisma.mstMaterialCapa.findMany()
    * ```
    */
  get mstMaterialCapa(): Prisma.MstMaterialCapaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.supplierScore`: Exposes CRUD operations for the **SupplierScore** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SupplierScores
    * const supplierScores = await prisma.supplierScore.findMany()
    * ```
    */
  get supplierScore(): Prisma.SupplierScoreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.complaintStatus`: Exposes CRUD operations for the **ComplaintStatus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ComplaintStatuses
    * const complaintStatuses = await prisma.complaintStatus.findMany()
    * ```
    */
  get complaintStatus(): Prisma.ComplaintStatusDelegate<ExtArgs, ClientOptions>;
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
    MstMaterialCapa: 'MstMaterialCapa',
    SupplierScore: 'SupplierScore',
    ComplaintStatus: 'ComplaintStatus'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "mstMaterialCapa" | "supplierScore" | "complaintStatus"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      MstMaterialCapa: {
        payload: Prisma.$MstMaterialCapaPayload<ExtArgs>
        fields: Prisma.MstMaterialCapaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MstMaterialCapaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MstMaterialCapaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MstMaterialCapaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MstMaterialCapaPayload>
          }
          findFirst: {
            args: Prisma.MstMaterialCapaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MstMaterialCapaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MstMaterialCapaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MstMaterialCapaPayload>
          }
          findMany: {
            args: Prisma.MstMaterialCapaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MstMaterialCapaPayload>[]
          }
          create: {
            args: Prisma.MstMaterialCapaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MstMaterialCapaPayload>
          }
          createMany: {
            args: Prisma.MstMaterialCapaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MstMaterialCapaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MstMaterialCapaPayload>
          }
          update: {
            args: Prisma.MstMaterialCapaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MstMaterialCapaPayload>
          }
          deleteMany: {
            args: Prisma.MstMaterialCapaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MstMaterialCapaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MstMaterialCapaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MstMaterialCapaPayload>
          }
          aggregate: {
            args: Prisma.MstMaterialCapaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMstMaterialCapa>
          }
          groupBy: {
            args: Prisma.MstMaterialCapaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MstMaterialCapaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MstMaterialCapaCountArgs<ExtArgs>
            result: $Utils.Optional<MstMaterialCapaCountAggregateOutputType> | number
          }
        }
      }
      SupplierScore: {
        payload: Prisma.$SupplierScorePayload<ExtArgs>
        fields: Prisma.SupplierScoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SupplierScoreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierScorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SupplierScoreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierScorePayload>
          }
          findFirst: {
            args: Prisma.SupplierScoreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierScorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SupplierScoreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierScorePayload>
          }
          findMany: {
            args: Prisma.SupplierScoreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierScorePayload>[]
          }
          create: {
            args: Prisma.SupplierScoreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierScorePayload>
          }
          createMany: {
            args: Prisma.SupplierScoreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SupplierScoreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierScorePayload>
          }
          update: {
            args: Prisma.SupplierScoreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierScorePayload>
          }
          deleteMany: {
            args: Prisma.SupplierScoreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SupplierScoreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SupplierScoreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierScorePayload>
          }
          aggregate: {
            args: Prisma.SupplierScoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupplierScore>
          }
          groupBy: {
            args: Prisma.SupplierScoreGroupByArgs<ExtArgs>
            result: $Utils.Optional<SupplierScoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.SupplierScoreCountArgs<ExtArgs>
            result: $Utils.Optional<SupplierScoreCountAggregateOutputType> | number
          }
        }
      }
      ComplaintStatus: {
        payload: Prisma.$ComplaintStatusPayload<ExtArgs>
        fields: Prisma.ComplaintStatusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ComplaintStatusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplaintStatusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ComplaintStatusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplaintStatusPayload>
          }
          findFirst: {
            args: Prisma.ComplaintStatusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplaintStatusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ComplaintStatusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplaintStatusPayload>
          }
          findMany: {
            args: Prisma.ComplaintStatusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplaintStatusPayload>[]
          }
          create: {
            args: Prisma.ComplaintStatusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplaintStatusPayload>
          }
          createMany: {
            args: Prisma.ComplaintStatusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ComplaintStatusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplaintStatusPayload>
          }
          update: {
            args: Prisma.ComplaintStatusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplaintStatusPayload>
          }
          deleteMany: {
            args: Prisma.ComplaintStatusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ComplaintStatusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ComplaintStatusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplaintStatusPayload>
          }
          aggregate: {
            args: Prisma.ComplaintStatusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComplaintStatus>
          }
          groupBy: {
            args: Prisma.ComplaintStatusGroupByArgs<ExtArgs>
            result: $Utils.Optional<ComplaintStatusGroupByOutputType>[]
          }
          count: {
            args: Prisma.ComplaintStatusCountArgs<ExtArgs>
            result: $Utils.Optional<ComplaintStatusCountAggregateOutputType> | number
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
    mstMaterialCapa?: MstMaterialCapaOmit
    supplierScore?: SupplierScoreOmit
    complaintStatus?: ComplaintStatusOmit
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
   * Model MstMaterialCapa
   */

  export type AggregateMstMaterialCapa = {
    _count: MstMaterialCapaCountAggregateOutputType | null
    _avg: MstMaterialCapaAvgAggregateOutputType | null
    _sum: MstMaterialCapaSumAggregateOutputType | null
    _min: MstMaterialCapaMinAggregateOutputType | null
    _max: MstMaterialCapaMaxAggregateOutputType | null
  }

  export type MstMaterialCapaAvgAggregateOutputType = {
    id: number | null
  }

  export type MstMaterialCapaSumAggregateOutputType = {
    id: number | null
  }

  export type MstMaterialCapaMinAggregateOutputType = {
    id: number | null
    kode_vendor: string | null
    name_vendor: string | null
    material_code: string | null
    nama_material: string | null
  }

  export type MstMaterialCapaMaxAggregateOutputType = {
    id: number | null
    kode_vendor: string | null
    name_vendor: string | null
    material_code: string | null
    nama_material: string | null
  }

  export type MstMaterialCapaCountAggregateOutputType = {
    id: number
    kode_vendor: number
    name_vendor: number
    material_code: number
    nama_material: number
    _all: number
  }


  export type MstMaterialCapaAvgAggregateInputType = {
    id?: true
  }

  export type MstMaterialCapaSumAggregateInputType = {
    id?: true
  }

  export type MstMaterialCapaMinAggregateInputType = {
    id?: true
    kode_vendor?: true
    name_vendor?: true
    material_code?: true
    nama_material?: true
  }

  export type MstMaterialCapaMaxAggregateInputType = {
    id?: true
    kode_vendor?: true
    name_vendor?: true
    material_code?: true
    nama_material?: true
  }

  export type MstMaterialCapaCountAggregateInputType = {
    id?: true
    kode_vendor?: true
    name_vendor?: true
    material_code?: true
    nama_material?: true
    _all?: true
  }

  export type MstMaterialCapaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MstMaterialCapa to aggregate.
     */
    where?: MstMaterialCapaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MstMaterialCapas to fetch.
     */
    orderBy?: MstMaterialCapaOrderByWithRelationInput | MstMaterialCapaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MstMaterialCapaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MstMaterialCapas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MstMaterialCapas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MstMaterialCapas
    **/
    _count?: true | MstMaterialCapaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MstMaterialCapaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MstMaterialCapaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MstMaterialCapaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MstMaterialCapaMaxAggregateInputType
  }

  export type GetMstMaterialCapaAggregateType<T extends MstMaterialCapaAggregateArgs> = {
        [P in keyof T & keyof AggregateMstMaterialCapa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMstMaterialCapa[P]>
      : GetScalarType<T[P], AggregateMstMaterialCapa[P]>
  }




  export type MstMaterialCapaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MstMaterialCapaWhereInput
    orderBy?: MstMaterialCapaOrderByWithAggregationInput | MstMaterialCapaOrderByWithAggregationInput[]
    by: MstMaterialCapaScalarFieldEnum[] | MstMaterialCapaScalarFieldEnum
    having?: MstMaterialCapaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MstMaterialCapaCountAggregateInputType | true
    _avg?: MstMaterialCapaAvgAggregateInputType
    _sum?: MstMaterialCapaSumAggregateInputType
    _min?: MstMaterialCapaMinAggregateInputType
    _max?: MstMaterialCapaMaxAggregateInputType
  }

  export type MstMaterialCapaGroupByOutputType = {
    id: number
    kode_vendor: string | null
    name_vendor: string | null
    material_code: string | null
    nama_material: string | null
    _count: MstMaterialCapaCountAggregateOutputType | null
    _avg: MstMaterialCapaAvgAggregateOutputType | null
    _sum: MstMaterialCapaSumAggregateOutputType | null
    _min: MstMaterialCapaMinAggregateOutputType | null
    _max: MstMaterialCapaMaxAggregateOutputType | null
  }

  type GetMstMaterialCapaGroupByPayload<T extends MstMaterialCapaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MstMaterialCapaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MstMaterialCapaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MstMaterialCapaGroupByOutputType[P]>
            : GetScalarType<T[P], MstMaterialCapaGroupByOutputType[P]>
        }
      >
    >


  export type MstMaterialCapaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kode_vendor?: boolean
    name_vendor?: boolean
    material_code?: boolean
    nama_material?: boolean
  }, ExtArgs["result"]["mstMaterialCapa"]>



  export type MstMaterialCapaSelectScalar = {
    id?: boolean
    kode_vendor?: boolean
    name_vendor?: boolean
    material_code?: boolean
    nama_material?: boolean
  }

  export type MstMaterialCapaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "kode_vendor" | "name_vendor" | "material_code" | "nama_material", ExtArgs["result"]["mstMaterialCapa"]>

  export type $MstMaterialCapaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MstMaterialCapa"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      kode_vendor: string | null
      name_vendor: string | null
      material_code: string | null
      nama_material: string | null
    }, ExtArgs["result"]["mstMaterialCapa"]>
    composites: {}
  }

  type MstMaterialCapaGetPayload<S extends boolean | null | undefined | MstMaterialCapaDefaultArgs> = $Result.GetResult<Prisma.$MstMaterialCapaPayload, S>

  type MstMaterialCapaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MstMaterialCapaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MstMaterialCapaCountAggregateInputType | true
    }

  export interface MstMaterialCapaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MstMaterialCapa'], meta: { name: 'MstMaterialCapa' } }
    /**
     * Find zero or one MstMaterialCapa that matches the filter.
     * @param {MstMaterialCapaFindUniqueArgs} args - Arguments to find a MstMaterialCapa
     * @example
     * // Get one MstMaterialCapa
     * const mstMaterialCapa = await prisma.mstMaterialCapa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MstMaterialCapaFindUniqueArgs>(args: SelectSubset<T, MstMaterialCapaFindUniqueArgs<ExtArgs>>): Prisma__MstMaterialCapaClient<$Result.GetResult<Prisma.$MstMaterialCapaPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one MstMaterialCapa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MstMaterialCapaFindUniqueOrThrowArgs} args - Arguments to find a MstMaterialCapa
     * @example
     * // Get one MstMaterialCapa
     * const mstMaterialCapa = await prisma.mstMaterialCapa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MstMaterialCapaFindUniqueOrThrowArgs>(args: SelectSubset<T, MstMaterialCapaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MstMaterialCapaClient<$Result.GetResult<Prisma.$MstMaterialCapaPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first MstMaterialCapa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MstMaterialCapaFindFirstArgs} args - Arguments to find a MstMaterialCapa
     * @example
     * // Get one MstMaterialCapa
     * const mstMaterialCapa = await prisma.mstMaterialCapa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MstMaterialCapaFindFirstArgs>(args?: SelectSubset<T, MstMaterialCapaFindFirstArgs<ExtArgs>>): Prisma__MstMaterialCapaClient<$Result.GetResult<Prisma.$MstMaterialCapaPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first MstMaterialCapa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MstMaterialCapaFindFirstOrThrowArgs} args - Arguments to find a MstMaterialCapa
     * @example
     * // Get one MstMaterialCapa
     * const mstMaterialCapa = await prisma.mstMaterialCapa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MstMaterialCapaFindFirstOrThrowArgs>(args?: SelectSubset<T, MstMaterialCapaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MstMaterialCapaClient<$Result.GetResult<Prisma.$MstMaterialCapaPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more MstMaterialCapas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MstMaterialCapaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MstMaterialCapas
     * const mstMaterialCapas = await prisma.mstMaterialCapa.findMany()
     * 
     * // Get first 10 MstMaterialCapas
     * const mstMaterialCapas = await prisma.mstMaterialCapa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mstMaterialCapaWithIdOnly = await prisma.mstMaterialCapa.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MstMaterialCapaFindManyArgs>(args?: SelectSubset<T, MstMaterialCapaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MstMaterialCapaPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a MstMaterialCapa.
     * @param {MstMaterialCapaCreateArgs} args - Arguments to create a MstMaterialCapa.
     * @example
     * // Create one MstMaterialCapa
     * const MstMaterialCapa = await prisma.mstMaterialCapa.create({
     *   data: {
     *     // ... data to create a MstMaterialCapa
     *   }
     * })
     * 
     */
    create<T extends MstMaterialCapaCreateArgs>(args: SelectSubset<T, MstMaterialCapaCreateArgs<ExtArgs>>): Prisma__MstMaterialCapaClient<$Result.GetResult<Prisma.$MstMaterialCapaPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many MstMaterialCapas.
     * @param {MstMaterialCapaCreateManyArgs} args - Arguments to create many MstMaterialCapas.
     * @example
     * // Create many MstMaterialCapas
     * const mstMaterialCapa = await prisma.mstMaterialCapa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MstMaterialCapaCreateManyArgs>(args?: SelectSubset<T, MstMaterialCapaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MstMaterialCapa.
     * @param {MstMaterialCapaDeleteArgs} args - Arguments to delete one MstMaterialCapa.
     * @example
     * // Delete one MstMaterialCapa
     * const MstMaterialCapa = await prisma.mstMaterialCapa.delete({
     *   where: {
     *     // ... filter to delete one MstMaterialCapa
     *   }
     * })
     * 
     */
    delete<T extends MstMaterialCapaDeleteArgs>(args: SelectSubset<T, MstMaterialCapaDeleteArgs<ExtArgs>>): Prisma__MstMaterialCapaClient<$Result.GetResult<Prisma.$MstMaterialCapaPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one MstMaterialCapa.
     * @param {MstMaterialCapaUpdateArgs} args - Arguments to update one MstMaterialCapa.
     * @example
     * // Update one MstMaterialCapa
     * const mstMaterialCapa = await prisma.mstMaterialCapa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MstMaterialCapaUpdateArgs>(args: SelectSubset<T, MstMaterialCapaUpdateArgs<ExtArgs>>): Prisma__MstMaterialCapaClient<$Result.GetResult<Prisma.$MstMaterialCapaPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more MstMaterialCapas.
     * @param {MstMaterialCapaDeleteManyArgs} args - Arguments to filter MstMaterialCapas to delete.
     * @example
     * // Delete a few MstMaterialCapas
     * const { count } = await prisma.mstMaterialCapa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MstMaterialCapaDeleteManyArgs>(args?: SelectSubset<T, MstMaterialCapaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MstMaterialCapas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MstMaterialCapaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MstMaterialCapas
     * const mstMaterialCapa = await prisma.mstMaterialCapa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MstMaterialCapaUpdateManyArgs>(args: SelectSubset<T, MstMaterialCapaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MstMaterialCapa.
     * @param {MstMaterialCapaUpsertArgs} args - Arguments to update or create a MstMaterialCapa.
     * @example
     * // Update or create a MstMaterialCapa
     * const mstMaterialCapa = await prisma.mstMaterialCapa.upsert({
     *   create: {
     *     // ... data to create a MstMaterialCapa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MstMaterialCapa we want to update
     *   }
     * })
     */
    upsert<T extends MstMaterialCapaUpsertArgs>(args: SelectSubset<T, MstMaterialCapaUpsertArgs<ExtArgs>>): Prisma__MstMaterialCapaClient<$Result.GetResult<Prisma.$MstMaterialCapaPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of MstMaterialCapas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MstMaterialCapaCountArgs} args - Arguments to filter MstMaterialCapas to count.
     * @example
     * // Count the number of MstMaterialCapas
     * const count = await prisma.mstMaterialCapa.count({
     *   where: {
     *     // ... the filter for the MstMaterialCapas we want to count
     *   }
     * })
    **/
    count<T extends MstMaterialCapaCountArgs>(
      args?: Subset<T, MstMaterialCapaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MstMaterialCapaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MstMaterialCapa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MstMaterialCapaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MstMaterialCapaAggregateArgs>(args: Subset<T, MstMaterialCapaAggregateArgs>): Prisma.PrismaPromise<GetMstMaterialCapaAggregateType<T>>

    /**
     * Group by MstMaterialCapa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MstMaterialCapaGroupByArgs} args - Group by arguments.
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
      T extends MstMaterialCapaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MstMaterialCapaGroupByArgs['orderBy'] }
        : { orderBy?: MstMaterialCapaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MstMaterialCapaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMstMaterialCapaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MstMaterialCapa model
   */
  readonly fields: MstMaterialCapaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MstMaterialCapa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MstMaterialCapaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the MstMaterialCapa model
   */ 
  interface MstMaterialCapaFieldRefs {
    readonly id: FieldRef<"MstMaterialCapa", 'Int'>
    readonly kode_vendor: FieldRef<"MstMaterialCapa", 'String'>
    readonly name_vendor: FieldRef<"MstMaterialCapa", 'String'>
    readonly material_code: FieldRef<"MstMaterialCapa", 'String'>
    readonly nama_material: FieldRef<"MstMaterialCapa", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MstMaterialCapa findUnique
   */
  export type MstMaterialCapaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MstMaterialCapa
     */
    select?: MstMaterialCapaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MstMaterialCapa
     */
    omit?: MstMaterialCapaOmit<ExtArgs> | null
    /**
     * Filter, which MstMaterialCapa to fetch.
     */
    where: MstMaterialCapaWhereUniqueInput
  }

  /**
   * MstMaterialCapa findUniqueOrThrow
   */
  export type MstMaterialCapaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MstMaterialCapa
     */
    select?: MstMaterialCapaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MstMaterialCapa
     */
    omit?: MstMaterialCapaOmit<ExtArgs> | null
    /**
     * Filter, which MstMaterialCapa to fetch.
     */
    where: MstMaterialCapaWhereUniqueInput
  }

  /**
   * MstMaterialCapa findFirst
   */
  export type MstMaterialCapaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MstMaterialCapa
     */
    select?: MstMaterialCapaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MstMaterialCapa
     */
    omit?: MstMaterialCapaOmit<ExtArgs> | null
    /**
     * Filter, which MstMaterialCapa to fetch.
     */
    where?: MstMaterialCapaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MstMaterialCapas to fetch.
     */
    orderBy?: MstMaterialCapaOrderByWithRelationInput | MstMaterialCapaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MstMaterialCapas.
     */
    cursor?: MstMaterialCapaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MstMaterialCapas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MstMaterialCapas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MstMaterialCapas.
     */
    distinct?: MstMaterialCapaScalarFieldEnum | MstMaterialCapaScalarFieldEnum[]
  }

  /**
   * MstMaterialCapa findFirstOrThrow
   */
  export type MstMaterialCapaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MstMaterialCapa
     */
    select?: MstMaterialCapaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MstMaterialCapa
     */
    omit?: MstMaterialCapaOmit<ExtArgs> | null
    /**
     * Filter, which MstMaterialCapa to fetch.
     */
    where?: MstMaterialCapaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MstMaterialCapas to fetch.
     */
    orderBy?: MstMaterialCapaOrderByWithRelationInput | MstMaterialCapaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MstMaterialCapas.
     */
    cursor?: MstMaterialCapaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MstMaterialCapas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MstMaterialCapas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MstMaterialCapas.
     */
    distinct?: MstMaterialCapaScalarFieldEnum | MstMaterialCapaScalarFieldEnum[]
  }

  /**
   * MstMaterialCapa findMany
   */
  export type MstMaterialCapaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MstMaterialCapa
     */
    select?: MstMaterialCapaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MstMaterialCapa
     */
    omit?: MstMaterialCapaOmit<ExtArgs> | null
    /**
     * Filter, which MstMaterialCapas to fetch.
     */
    where?: MstMaterialCapaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MstMaterialCapas to fetch.
     */
    orderBy?: MstMaterialCapaOrderByWithRelationInput | MstMaterialCapaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MstMaterialCapas.
     */
    cursor?: MstMaterialCapaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MstMaterialCapas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MstMaterialCapas.
     */
    skip?: number
    distinct?: MstMaterialCapaScalarFieldEnum | MstMaterialCapaScalarFieldEnum[]
  }

  /**
   * MstMaterialCapa create
   */
  export type MstMaterialCapaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MstMaterialCapa
     */
    select?: MstMaterialCapaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MstMaterialCapa
     */
    omit?: MstMaterialCapaOmit<ExtArgs> | null
    /**
     * The data needed to create a MstMaterialCapa.
     */
    data?: XOR<MstMaterialCapaCreateInput, MstMaterialCapaUncheckedCreateInput>
  }

  /**
   * MstMaterialCapa createMany
   */
  export type MstMaterialCapaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MstMaterialCapas.
     */
    data: MstMaterialCapaCreateManyInput | MstMaterialCapaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MstMaterialCapa update
   */
  export type MstMaterialCapaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MstMaterialCapa
     */
    select?: MstMaterialCapaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MstMaterialCapa
     */
    omit?: MstMaterialCapaOmit<ExtArgs> | null
    /**
     * The data needed to update a MstMaterialCapa.
     */
    data: XOR<MstMaterialCapaUpdateInput, MstMaterialCapaUncheckedUpdateInput>
    /**
     * Choose, which MstMaterialCapa to update.
     */
    where: MstMaterialCapaWhereUniqueInput
  }

  /**
   * MstMaterialCapa updateMany
   */
  export type MstMaterialCapaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MstMaterialCapas.
     */
    data: XOR<MstMaterialCapaUpdateManyMutationInput, MstMaterialCapaUncheckedUpdateManyInput>
    /**
     * Filter which MstMaterialCapas to update
     */
    where?: MstMaterialCapaWhereInput
    /**
     * Limit how many MstMaterialCapas to update.
     */
    limit?: number
  }

  /**
   * MstMaterialCapa upsert
   */
  export type MstMaterialCapaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MstMaterialCapa
     */
    select?: MstMaterialCapaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MstMaterialCapa
     */
    omit?: MstMaterialCapaOmit<ExtArgs> | null
    /**
     * The filter to search for the MstMaterialCapa to update in case it exists.
     */
    where: MstMaterialCapaWhereUniqueInput
    /**
     * In case the MstMaterialCapa found by the `where` argument doesn't exist, create a new MstMaterialCapa with this data.
     */
    create: XOR<MstMaterialCapaCreateInput, MstMaterialCapaUncheckedCreateInput>
    /**
     * In case the MstMaterialCapa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MstMaterialCapaUpdateInput, MstMaterialCapaUncheckedUpdateInput>
  }

  /**
   * MstMaterialCapa delete
   */
  export type MstMaterialCapaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MstMaterialCapa
     */
    select?: MstMaterialCapaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MstMaterialCapa
     */
    omit?: MstMaterialCapaOmit<ExtArgs> | null
    /**
     * Filter which MstMaterialCapa to delete.
     */
    where: MstMaterialCapaWhereUniqueInput
  }

  /**
   * MstMaterialCapa deleteMany
   */
  export type MstMaterialCapaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MstMaterialCapas to delete
     */
    where?: MstMaterialCapaWhereInput
    /**
     * Limit how many MstMaterialCapas to delete.
     */
    limit?: number
  }

  /**
   * MstMaterialCapa without action
   */
  export type MstMaterialCapaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MstMaterialCapa
     */
    select?: MstMaterialCapaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MstMaterialCapa
     */
    omit?: MstMaterialCapaOmit<ExtArgs> | null
  }


  /**
   * Model SupplierScore
   */

  export type AggregateSupplierScore = {
    _count: SupplierScoreCountAggregateOutputType | null
    _avg: SupplierScoreAvgAggregateOutputType | null
    _sum: SupplierScoreSumAggregateOutputType | null
    _min: SupplierScoreMinAggregateOutputType | null
    _max: SupplierScoreMaxAggregateOutputType | null
  }

  export type SupplierScoreAvgAggregateOutputType = {
    id: number | null
    abnormal: number | null
    total_incoming: number | null
    total_abnormal: number | null
    persen_abnormal: number | null
    feedback: number | null
    acceptance_improvement: number | null
    downtime: number | null
    cc: number | null
    issue: number | null
    value_material: number | null
  }

  export type SupplierScoreSumAggregateOutputType = {
    id: number | null
    abnormal: number | null
    total_incoming: number | null
    total_abnormal: number | null
    persen_abnormal: number | null
    feedback: number | null
    acceptance_improvement: number | null
    downtime: number | null
    cc: number | null
    issue: number | null
    value_material: number | null
  }

  export type SupplierScoreMinAggregateOutputType = {
    id: number | null
    tahun: string | null
    bulan: string | null
    tgl: Date | null
    category: string | null
    suplier_name: string | null
    kode_vendor: string | null
    area_to: string | null
    plan: string | null
    abnormal: number | null
    total_incoming: number | null
    total_abnormal: number | null
    persen_abnormal: number | null
    feedback: number | null
    acceptance_improvement: number | null
    downtime: number | null
    cc: number | null
    issue: number | null
    value_material: number | null
    Grade_Material: string | null
  }

  export type SupplierScoreMaxAggregateOutputType = {
    id: number | null
    tahun: string | null
    bulan: string | null
    tgl: Date | null
    category: string | null
    suplier_name: string | null
    kode_vendor: string | null
    area_to: string | null
    plan: string | null
    abnormal: number | null
    total_incoming: number | null
    total_abnormal: number | null
    persen_abnormal: number | null
    feedback: number | null
    acceptance_improvement: number | null
    downtime: number | null
    cc: number | null
    issue: number | null
    value_material: number | null
    Grade_Material: string | null
  }

  export type SupplierScoreCountAggregateOutputType = {
    id: number
    tahun: number
    bulan: number
    tgl: number
    category: number
    suplier_name: number
    kode_vendor: number
    area_to: number
    plan: number
    abnormal: number
    total_incoming: number
    total_abnormal: number
    persen_abnormal: number
    feedback: number
    acceptance_improvement: number
    downtime: number
    cc: number
    issue: number
    value_material: number
    Grade_Material: number
    _all: number
  }


  export type SupplierScoreAvgAggregateInputType = {
    id?: true
    abnormal?: true
    total_incoming?: true
    total_abnormal?: true
    persen_abnormal?: true
    feedback?: true
    acceptance_improvement?: true
    downtime?: true
    cc?: true
    issue?: true
    value_material?: true
  }

  export type SupplierScoreSumAggregateInputType = {
    id?: true
    abnormal?: true
    total_incoming?: true
    total_abnormal?: true
    persen_abnormal?: true
    feedback?: true
    acceptance_improvement?: true
    downtime?: true
    cc?: true
    issue?: true
    value_material?: true
  }

  export type SupplierScoreMinAggregateInputType = {
    id?: true
    tahun?: true
    bulan?: true
    tgl?: true
    category?: true
    suplier_name?: true
    kode_vendor?: true
    area_to?: true
    plan?: true
    abnormal?: true
    total_incoming?: true
    total_abnormal?: true
    persen_abnormal?: true
    feedback?: true
    acceptance_improvement?: true
    downtime?: true
    cc?: true
    issue?: true
    value_material?: true
    Grade_Material?: true
  }

  export type SupplierScoreMaxAggregateInputType = {
    id?: true
    tahun?: true
    bulan?: true
    tgl?: true
    category?: true
    suplier_name?: true
    kode_vendor?: true
    area_to?: true
    plan?: true
    abnormal?: true
    total_incoming?: true
    total_abnormal?: true
    persen_abnormal?: true
    feedback?: true
    acceptance_improvement?: true
    downtime?: true
    cc?: true
    issue?: true
    value_material?: true
    Grade_Material?: true
  }

  export type SupplierScoreCountAggregateInputType = {
    id?: true
    tahun?: true
    bulan?: true
    tgl?: true
    category?: true
    suplier_name?: true
    kode_vendor?: true
    area_to?: true
    plan?: true
    abnormal?: true
    total_incoming?: true
    total_abnormal?: true
    persen_abnormal?: true
    feedback?: true
    acceptance_improvement?: true
    downtime?: true
    cc?: true
    issue?: true
    value_material?: true
    Grade_Material?: true
    _all?: true
  }

  export type SupplierScoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SupplierScore to aggregate.
     */
    where?: SupplierScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupplierScores to fetch.
     */
    orderBy?: SupplierScoreOrderByWithRelationInput | SupplierScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SupplierScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupplierScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupplierScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SupplierScores
    **/
    _count?: true | SupplierScoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SupplierScoreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SupplierScoreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupplierScoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupplierScoreMaxAggregateInputType
  }

  export type GetSupplierScoreAggregateType<T extends SupplierScoreAggregateArgs> = {
        [P in keyof T & keyof AggregateSupplierScore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupplierScore[P]>
      : GetScalarType<T[P], AggregateSupplierScore[P]>
  }




  export type SupplierScoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupplierScoreWhereInput
    orderBy?: SupplierScoreOrderByWithAggregationInput | SupplierScoreOrderByWithAggregationInput[]
    by: SupplierScoreScalarFieldEnum[] | SupplierScoreScalarFieldEnum
    having?: SupplierScoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupplierScoreCountAggregateInputType | true
    _avg?: SupplierScoreAvgAggregateInputType
    _sum?: SupplierScoreSumAggregateInputType
    _min?: SupplierScoreMinAggregateInputType
    _max?: SupplierScoreMaxAggregateInputType
  }

  export type SupplierScoreGroupByOutputType = {
    id: number
    tahun: string | null
    bulan: string | null
    tgl: Date | null
    category: string | null
    suplier_name: string | null
    kode_vendor: string
    area_to: string | null
    plan: string | null
    abnormal: number | null
    total_incoming: number | null
    total_abnormal: number | null
    persen_abnormal: number | null
    feedback: number | null
    acceptance_improvement: number | null
    downtime: number | null
    cc: number | null
    issue: number | null
    value_material: number | null
    Grade_Material: string | null
    _count: SupplierScoreCountAggregateOutputType | null
    _avg: SupplierScoreAvgAggregateOutputType | null
    _sum: SupplierScoreSumAggregateOutputType | null
    _min: SupplierScoreMinAggregateOutputType | null
    _max: SupplierScoreMaxAggregateOutputType | null
  }

  type GetSupplierScoreGroupByPayload<T extends SupplierScoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupplierScoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupplierScoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupplierScoreGroupByOutputType[P]>
            : GetScalarType<T[P], SupplierScoreGroupByOutputType[P]>
        }
      >
    >


  export type SupplierScoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tahun?: boolean
    bulan?: boolean
    tgl?: boolean
    category?: boolean
    suplier_name?: boolean
    kode_vendor?: boolean
    area_to?: boolean
    plan?: boolean
    abnormal?: boolean
    total_incoming?: boolean
    total_abnormal?: boolean
    persen_abnormal?: boolean
    feedback?: boolean
    acceptance_improvement?: boolean
    downtime?: boolean
    cc?: boolean
    issue?: boolean
    value_material?: boolean
    Grade_Material?: boolean
  }, ExtArgs["result"]["supplierScore"]>



  export type SupplierScoreSelectScalar = {
    id?: boolean
    tahun?: boolean
    bulan?: boolean
    tgl?: boolean
    category?: boolean
    suplier_name?: boolean
    kode_vendor?: boolean
    area_to?: boolean
    plan?: boolean
    abnormal?: boolean
    total_incoming?: boolean
    total_abnormal?: boolean
    persen_abnormal?: boolean
    feedback?: boolean
    acceptance_improvement?: boolean
    downtime?: boolean
    cc?: boolean
    issue?: boolean
    value_material?: boolean
    Grade_Material?: boolean
  }

  export type SupplierScoreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tahun" | "bulan" | "tgl" | "category" | "suplier_name" | "kode_vendor" | "area_to" | "plan" | "abnormal" | "total_incoming" | "total_abnormal" | "persen_abnormal" | "feedback" | "acceptance_improvement" | "downtime" | "cc" | "issue" | "value_material" | "Grade_Material", ExtArgs["result"]["supplierScore"]>

  export type $SupplierScorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SupplierScore"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tahun: string | null
      bulan: string | null
      tgl: Date | null
      category: string | null
      suplier_name: string | null
      kode_vendor: string
      area_to: string | null
      plan: string | null
      abnormal: number | null
      total_incoming: number | null
      total_abnormal: number | null
      persen_abnormal: number | null
      feedback: number | null
      acceptance_improvement: number | null
      downtime: number | null
      cc: number | null
      issue: number | null
      value_material: number | null
      Grade_Material: string | null
    }, ExtArgs["result"]["supplierScore"]>
    composites: {}
  }

  type SupplierScoreGetPayload<S extends boolean | null | undefined | SupplierScoreDefaultArgs> = $Result.GetResult<Prisma.$SupplierScorePayload, S>

  type SupplierScoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SupplierScoreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SupplierScoreCountAggregateInputType | true
    }

  export interface SupplierScoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SupplierScore'], meta: { name: 'SupplierScore' } }
    /**
     * Find zero or one SupplierScore that matches the filter.
     * @param {SupplierScoreFindUniqueArgs} args - Arguments to find a SupplierScore
     * @example
     * // Get one SupplierScore
     * const supplierScore = await prisma.supplierScore.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SupplierScoreFindUniqueArgs>(args: SelectSubset<T, SupplierScoreFindUniqueArgs<ExtArgs>>): Prisma__SupplierScoreClient<$Result.GetResult<Prisma.$SupplierScorePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one SupplierScore that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SupplierScoreFindUniqueOrThrowArgs} args - Arguments to find a SupplierScore
     * @example
     * // Get one SupplierScore
     * const supplierScore = await prisma.supplierScore.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SupplierScoreFindUniqueOrThrowArgs>(args: SelectSubset<T, SupplierScoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SupplierScoreClient<$Result.GetResult<Prisma.$SupplierScorePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first SupplierScore that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierScoreFindFirstArgs} args - Arguments to find a SupplierScore
     * @example
     * // Get one SupplierScore
     * const supplierScore = await prisma.supplierScore.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SupplierScoreFindFirstArgs>(args?: SelectSubset<T, SupplierScoreFindFirstArgs<ExtArgs>>): Prisma__SupplierScoreClient<$Result.GetResult<Prisma.$SupplierScorePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first SupplierScore that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierScoreFindFirstOrThrowArgs} args - Arguments to find a SupplierScore
     * @example
     * // Get one SupplierScore
     * const supplierScore = await prisma.supplierScore.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SupplierScoreFindFirstOrThrowArgs>(args?: SelectSubset<T, SupplierScoreFindFirstOrThrowArgs<ExtArgs>>): Prisma__SupplierScoreClient<$Result.GetResult<Prisma.$SupplierScorePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more SupplierScores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierScoreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SupplierScores
     * const supplierScores = await prisma.supplierScore.findMany()
     * 
     * // Get first 10 SupplierScores
     * const supplierScores = await prisma.supplierScore.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const supplierScoreWithIdOnly = await prisma.supplierScore.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SupplierScoreFindManyArgs>(args?: SelectSubset<T, SupplierScoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierScorePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a SupplierScore.
     * @param {SupplierScoreCreateArgs} args - Arguments to create a SupplierScore.
     * @example
     * // Create one SupplierScore
     * const SupplierScore = await prisma.supplierScore.create({
     *   data: {
     *     // ... data to create a SupplierScore
     *   }
     * })
     * 
     */
    create<T extends SupplierScoreCreateArgs>(args: SelectSubset<T, SupplierScoreCreateArgs<ExtArgs>>): Prisma__SupplierScoreClient<$Result.GetResult<Prisma.$SupplierScorePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many SupplierScores.
     * @param {SupplierScoreCreateManyArgs} args - Arguments to create many SupplierScores.
     * @example
     * // Create many SupplierScores
     * const supplierScore = await prisma.supplierScore.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SupplierScoreCreateManyArgs>(args?: SelectSubset<T, SupplierScoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SupplierScore.
     * @param {SupplierScoreDeleteArgs} args - Arguments to delete one SupplierScore.
     * @example
     * // Delete one SupplierScore
     * const SupplierScore = await prisma.supplierScore.delete({
     *   where: {
     *     // ... filter to delete one SupplierScore
     *   }
     * })
     * 
     */
    delete<T extends SupplierScoreDeleteArgs>(args: SelectSubset<T, SupplierScoreDeleteArgs<ExtArgs>>): Prisma__SupplierScoreClient<$Result.GetResult<Prisma.$SupplierScorePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one SupplierScore.
     * @param {SupplierScoreUpdateArgs} args - Arguments to update one SupplierScore.
     * @example
     * // Update one SupplierScore
     * const supplierScore = await prisma.supplierScore.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SupplierScoreUpdateArgs>(args: SelectSubset<T, SupplierScoreUpdateArgs<ExtArgs>>): Prisma__SupplierScoreClient<$Result.GetResult<Prisma.$SupplierScorePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more SupplierScores.
     * @param {SupplierScoreDeleteManyArgs} args - Arguments to filter SupplierScores to delete.
     * @example
     * // Delete a few SupplierScores
     * const { count } = await prisma.supplierScore.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SupplierScoreDeleteManyArgs>(args?: SelectSubset<T, SupplierScoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SupplierScores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierScoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SupplierScores
     * const supplierScore = await prisma.supplierScore.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SupplierScoreUpdateManyArgs>(args: SelectSubset<T, SupplierScoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SupplierScore.
     * @param {SupplierScoreUpsertArgs} args - Arguments to update or create a SupplierScore.
     * @example
     * // Update or create a SupplierScore
     * const supplierScore = await prisma.supplierScore.upsert({
     *   create: {
     *     // ... data to create a SupplierScore
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SupplierScore we want to update
     *   }
     * })
     */
    upsert<T extends SupplierScoreUpsertArgs>(args: SelectSubset<T, SupplierScoreUpsertArgs<ExtArgs>>): Prisma__SupplierScoreClient<$Result.GetResult<Prisma.$SupplierScorePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of SupplierScores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierScoreCountArgs} args - Arguments to filter SupplierScores to count.
     * @example
     * // Count the number of SupplierScores
     * const count = await prisma.supplierScore.count({
     *   where: {
     *     // ... the filter for the SupplierScores we want to count
     *   }
     * })
    **/
    count<T extends SupplierScoreCountArgs>(
      args?: Subset<T, SupplierScoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupplierScoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SupplierScore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierScoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SupplierScoreAggregateArgs>(args: Subset<T, SupplierScoreAggregateArgs>): Prisma.PrismaPromise<GetSupplierScoreAggregateType<T>>

    /**
     * Group by SupplierScore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierScoreGroupByArgs} args - Group by arguments.
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
      T extends SupplierScoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SupplierScoreGroupByArgs['orderBy'] }
        : { orderBy?: SupplierScoreGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SupplierScoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupplierScoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SupplierScore model
   */
  readonly fields: SupplierScoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SupplierScore.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SupplierScoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the SupplierScore model
   */ 
  interface SupplierScoreFieldRefs {
    readonly id: FieldRef<"SupplierScore", 'Int'>
    readonly tahun: FieldRef<"SupplierScore", 'String'>
    readonly bulan: FieldRef<"SupplierScore", 'String'>
    readonly tgl: FieldRef<"SupplierScore", 'DateTime'>
    readonly category: FieldRef<"SupplierScore", 'String'>
    readonly suplier_name: FieldRef<"SupplierScore", 'String'>
    readonly kode_vendor: FieldRef<"SupplierScore", 'String'>
    readonly area_to: FieldRef<"SupplierScore", 'String'>
    readonly plan: FieldRef<"SupplierScore", 'String'>
    readonly abnormal: FieldRef<"SupplierScore", 'Float'>
    readonly total_incoming: FieldRef<"SupplierScore", 'Int'>
    readonly total_abnormal: FieldRef<"SupplierScore", 'Int'>
    readonly persen_abnormal: FieldRef<"SupplierScore", 'Float'>
    readonly feedback: FieldRef<"SupplierScore", 'Float'>
    readonly acceptance_improvement: FieldRef<"SupplierScore", 'Float'>
    readonly downtime: FieldRef<"SupplierScore", 'Float'>
    readonly cc: FieldRef<"SupplierScore", 'Float'>
    readonly issue: FieldRef<"SupplierScore", 'Float'>
    readonly value_material: FieldRef<"SupplierScore", 'Float'>
    readonly Grade_Material: FieldRef<"SupplierScore", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SupplierScore findUnique
   */
  export type SupplierScoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierScore
     */
    select?: SupplierScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierScore
     */
    omit?: SupplierScoreOmit<ExtArgs> | null
    /**
     * Filter, which SupplierScore to fetch.
     */
    where: SupplierScoreWhereUniqueInput
  }

  /**
   * SupplierScore findUniqueOrThrow
   */
  export type SupplierScoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierScore
     */
    select?: SupplierScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierScore
     */
    omit?: SupplierScoreOmit<ExtArgs> | null
    /**
     * Filter, which SupplierScore to fetch.
     */
    where: SupplierScoreWhereUniqueInput
  }

  /**
   * SupplierScore findFirst
   */
  export type SupplierScoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierScore
     */
    select?: SupplierScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierScore
     */
    omit?: SupplierScoreOmit<ExtArgs> | null
    /**
     * Filter, which SupplierScore to fetch.
     */
    where?: SupplierScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupplierScores to fetch.
     */
    orderBy?: SupplierScoreOrderByWithRelationInput | SupplierScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SupplierScores.
     */
    cursor?: SupplierScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupplierScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupplierScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupplierScores.
     */
    distinct?: SupplierScoreScalarFieldEnum | SupplierScoreScalarFieldEnum[]
  }

  /**
   * SupplierScore findFirstOrThrow
   */
  export type SupplierScoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierScore
     */
    select?: SupplierScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierScore
     */
    omit?: SupplierScoreOmit<ExtArgs> | null
    /**
     * Filter, which SupplierScore to fetch.
     */
    where?: SupplierScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupplierScores to fetch.
     */
    orderBy?: SupplierScoreOrderByWithRelationInput | SupplierScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SupplierScores.
     */
    cursor?: SupplierScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupplierScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupplierScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupplierScores.
     */
    distinct?: SupplierScoreScalarFieldEnum | SupplierScoreScalarFieldEnum[]
  }

  /**
   * SupplierScore findMany
   */
  export type SupplierScoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierScore
     */
    select?: SupplierScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierScore
     */
    omit?: SupplierScoreOmit<ExtArgs> | null
    /**
     * Filter, which SupplierScores to fetch.
     */
    where?: SupplierScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupplierScores to fetch.
     */
    orderBy?: SupplierScoreOrderByWithRelationInput | SupplierScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SupplierScores.
     */
    cursor?: SupplierScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupplierScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupplierScores.
     */
    skip?: number
    distinct?: SupplierScoreScalarFieldEnum | SupplierScoreScalarFieldEnum[]
  }

  /**
   * SupplierScore create
   */
  export type SupplierScoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierScore
     */
    select?: SupplierScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierScore
     */
    omit?: SupplierScoreOmit<ExtArgs> | null
    /**
     * The data needed to create a SupplierScore.
     */
    data: XOR<SupplierScoreCreateInput, SupplierScoreUncheckedCreateInput>
  }

  /**
   * SupplierScore createMany
   */
  export type SupplierScoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SupplierScores.
     */
    data: SupplierScoreCreateManyInput | SupplierScoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SupplierScore update
   */
  export type SupplierScoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierScore
     */
    select?: SupplierScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierScore
     */
    omit?: SupplierScoreOmit<ExtArgs> | null
    /**
     * The data needed to update a SupplierScore.
     */
    data: XOR<SupplierScoreUpdateInput, SupplierScoreUncheckedUpdateInput>
    /**
     * Choose, which SupplierScore to update.
     */
    where: SupplierScoreWhereUniqueInput
  }

  /**
   * SupplierScore updateMany
   */
  export type SupplierScoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SupplierScores.
     */
    data: XOR<SupplierScoreUpdateManyMutationInput, SupplierScoreUncheckedUpdateManyInput>
    /**
     * Filter which SupplierScores to update
     */
    where?: SupplierScoreWhereInput
    /**
     * Limit how many SupplierScores to update.
     */
    limit?: number
  }

  /**
   * SupplierScore upsert
   */
  export type SupplierScoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierScore
     */
    select?: SupplierScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierScore
     */
    omit?: SupplierScoreOmit<ExtArgs> | null
    /**
     * The filter to search for the SupplierScore to update in case it exists.
     */
    where: SupplierScoreWhereUniqueInput
    /**
     * In case the SupplierScore found by the `where` argument doesn't exist, create a new SupplierScore with this data.
     */
    create: XOR<SupplierScoreCreateInput, SupplierScoreUncheckedCreateInput>
    /**
     * In case the SupplierScore was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SupplierScoreUpdateInput, SupplierScoreUncheckedUpdateInput>
  }

  /**
   * SupplierScore delete
   */
  export type SupplierScoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierScore
     */
    select?: SupplierScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierScore
     */
    omit?: SupplierScoreOmit<ExtArgs> | null
    /**
     * Filter which SupplierScore to delete.
     */
    where: SupplierScoreWhereUniqueInput
  }

  /**
   * SupplierScore deleteMany
   */
  export type SupplierScoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SupplierScores to delete
     */
    where?: SupplierScoreWhereInput
    /**
     * Limit how many SupplierScores to delete.
     */
    limit?: number
  }

  /**
   * SupplierScore without action
   */
  export type SupplierScoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierScore
     */
    select?: SupplierScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierScore
     */
    omit?: SupplierScoreOmit<ExtArgs> | null
  }


  /**
   * Model ComplaintStatus
   */

  export type AggregateComplaintStatus = {
    _count: ComplaintStatusCountAggregateOutputType | null
    _avg: ComplaintStatusAvgAggregateOutputType | null
    _sum: ComplaintStatusSumAggregateOutputType | null
    _min: ComplaintStatusMinAggregateOutputType | null
    _max: ComplaintStatusMaxAggregateOutputType | null
  }

  export type ComplaintStatusAvgAggregateOutputType = {
    id: number | null
  }

  export type ComplaintStatusSumAggregateOutputType = {
    id: number | null
  }

  export type ComplaintStatusMinAggregateOutputType = {
    id: number | null
    kode_vendor: string | null
    name_vendor: string | null
    tgl_complain: Date | null
    status: string | null
  }

  export type ComplaintStatusMaxAggregateOutputType = {
    id: number | null
    kode_vendor: string | null
    name_vendor: string | null
    tgl_complain: Date | null
    status: string | null
  }

  export type ComplaintStatusCountAggregateOutputType = {
    id: number
    kode_vendor: number
    name_vendor: number
    tgl_complain: number
    status: number
    _all: number
  }


  export type ComplaintStatusAvgAggregateInputType = {
    id?: true
  }

  export type ComplaintStatusSumAggregateInputType = {
    id?: true
  }

  export type ComplaintStatusMinAggregateInputType = {
    id?: true
    kode_vendor?: true
    name_vendor?: true
    tgl_complain?: true
    status?: true
  }

  export type ComplaintStatusMaxAggregateInputType = {
    id?: true
    kode_vendor?: true
    name_vendor?: true
    tgl_complain?: true
    status?: true
  }

  export type ComplaintStatusCountAggregateInputType = {
    id?: true
    kode_vendor?: true
    name_vendor?: true
    tgl_complain?: true
    status?: true
    _all?: true
  }

  export type ComplaintStatusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ComplaintStatus to aggregate.
     */
    where?: ComplaintStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ComplaintStatuses to fetch.
     */
    orderBy?: ComplaintStatusOrderByWithRelationInput | ComplaintStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ComplaintStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ComplaintStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ComplaintStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ComplaintStatuses
    **/
    _count?: true | ComplaintStatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ComplaintStatusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ComplaintStatusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ComplaintStatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ComplaintStatusMaxAggregateInputType
  }

  export type GetComplaintStatusAggregateType<T extends ComplaintStatusAggregateArgs> = {
        [P in keyof T & keyof AggregateComplaintStatus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComplaintStatus[P]>
      : GetScalarType<T[P], AggregateComplaintStatus[P]>
  }




  export type ComplaintStatusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComplaintStatusWhereInput
    orderBy?: ComplaintStatusOrderByWithAggregationInput | ComplaintStatusOrderByWithAggregationInput[]
    by: ComplaintStatusScalarFieldEnum[] | ComplaintStatusScalarFieldEnum
    having?: ComplaintStatusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ComplaintStatusCountAggregateInputType | true
    _avg?: ComplaintStatusAvgAggregateInputType
    _sum?: ComplaintStatusSumAggregateInputType
    _min?: ComplaintStatusMinAggregateInputType
    _max?: ComplaintStatusMaxAggregateInputType
  }

  export type ComplaintStatusGroupByOutputType = {
    id: number
    kode_vendor: string
    name_vendor: string | null
    tgl_complain: Date | null
    status: string | null
    _count: ComplaintStatusCountAggregateOutputType | null
    _avg: ComplaintStatusAvgAggregateOutputType | null
    _sum: ComplaintStatusSumAggregateOutputType | null
    _min: ComplaintStatusMinAggregateOutputType | null
    _max: ComplaintStatusMaxAggregateOutputType | null
  }

  type GetComplaintStatusGroupByPayload<T extends ComplaintStatusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ComplaintStatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ComplaintStatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ComplaintStatusGroupByOutputType[P]>
            : GetScalarType<T[P], ComplaintStatusGroupByOutputType[P]>
        }
      >
    >


  export type ComplaintStatusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kode_vendor?: boolean
    name_vendor?: boolean
    tgl_complain?: boolean
    status?: boolean
  }, ExtArgs["result"]["complaintStatus"]>



  export type ComplaintStatusSelectScalar = {
    id?: boolean
    kode_vendor?: boolean
    name_vendor?: boolean
    tgl_complain?: boolean
    status?: boolean
  }

  export type ComplaintStatusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "kode_vendor" | "name_vendor" | "tgl_complain" | "status", ExtArgs["result"]["complaintStatus"]>

  export type $ComplaintStatusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ComplaintStatus"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      kode_vendor: string
      name_vendor: string | null
      tgl_complain: Date | null
      status: string | null
    }, ExtArgs["result"]["complaintStatus"]>
    composites: {}
  }

  type ComplaintStatusGetPayload<S extends boolean | null | undefined | ComplaintStatusDefaultArgs> = $Result.GetResult<Prisma.$ComplaintStatusPayload, S>

  type ComplaintStatusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ComplaintStatusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ComplaintStatusCountAggregateInputType | true
    }

  export interface ComplaintStatusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ComplaintStatus'], meta: { name: 'ComplaintStatus' } }
    /**
     * Find zero or one ComplaintStatus that matches the filter.
     * @param {ComplaintStatusFindUniqueArgs} args - Arguments to find a ComplaintStatus
     * @example
     * // Get one ComplaintStatus
     * const complaintStatus = await prisma.complaintStatus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ComplaintStatusFindUniqueArgs>(args: SelectSubset<T, ComplaintStatusFindUniqueArgs<ExtArgs>>): Prisma__ComplaintStatusClient<$Result.GetResult<Prisma.$ComplaintStatusPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one ComplaintStatus that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ComplaintStatusFindUniqueOrThrowArgs} args - Arguments to find a ComplaintStatus
     * @example
     * // Get one ComplaintStatus
     * const complaintStatus = await prisma.complaintStatus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ComplaintStatusFindUniqueOrThrowArgs>(args: SelectSubset<T, ComplaintStatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ComplaintStatusClient<$Result.GetResult<Prisma.$ComplaintStatusPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first ComplaintStatus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplaintStatusFindFirstArgs} args - Arguments to find a ComplaintStatus
     * @example
     * // Get one ComplaintStatus
     * const complaintStatus = await prisma.complaintStatus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ComplaintStatusFindFirstArgs>(args?: SelectSubset<T, ComplaintStatusFindFirstArgs<ExtArgs>>): Prisma__ComplaintStatusClient<$Result.GetResult<Prisma.$ComplaintStatusPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first ComplaintStatus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplaintStatusFindFirstOrThrowArgs} args - Arguments to find a ComplaintStatus
     * @example
     * // Get one ComplaintStatus
     * const complaintStatus = await prisma.complaintStatus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ComplaintStatusFindFirstOrThrowArgs>(args?: SelectSubset<T, ComplaintStatusFindFirstOrThrowArgs<ExtArgs>>): Prisma__ComplaintStatusClient<$Result.GetResult<Prisma.$ComplaintStatusPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more ComplaintStatuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplaintStatusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ComplaintStatuses
     * const complaintStatuses = await prisma.complaintStatus.findMany()
     * 
     * // Get first 10 ComplaintStatuses
     * const complaintStatuses = await prisma.complaintStatus.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const complaintStatusWithIdOnly = await prisma.complaintStatus.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ComplaintStatusFindManyArgs>(args?: SelectSubset<T, ComplaintStatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComplaintStatusPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a ComplaintStatus.
     * @param {ComplaintStatusCreateArgs} args - Arguments to create a ComplaintStatus.
     * @example
     * // Create one ComplaintStatus
     * const ComplaintStatus = await prisma.complaintStatus.create({
     *   data: {
     *     // ... data to create a ComplaintStatus
     *   }
     * })
     * 
     */
    create<T extends ComplaintStatusCreateArgs>(args: SelectSubset<T, ComplaintStatusCreateArgs<ExtArgs>>): Prisma__ComplaintStatusClient<$Result.GetResult<Prisma.$ComplaintStatusPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many ComplaintStatuses.
     * @param {ComplaintStatusCreateManyArgs} args - Arguments to create many ComplaintStatuses.
     * @example
     * // Create many ComplaintStatuses
     * const complaintStatus = await prisma.complaintStatus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ComplaintStatusCreateManyArgs>(args?: SelectSubset<T, ComplaintStatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ComplaintStatus.
     * @param {ComplaintStatusDeleteArgs} args - Arguments to delete one ComplaintStatus.
     * @example
     * // Delete one ComplaintStatus
     * const ComplaintStatus = await prisma.complaintStatus.delete({
     *   where: {
     *     // ... filter to delete one ComplaintStatus
     *   }
     * })
     * 
     */
    delete<T extends ComplaintStatusDeleteArgs>(args: SelectSubset<T, ComplaintStatusDeleteArgs<ExtArgs>>): Prisma__ComplaintStatusClient<$Result.GetResult<Prisma.$ComplaintStatusPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one ComplaintStatus.
     * @param {ComplaintStatusUpdateArgs} args - Arguments to update one ComplaintStatus.
     * @example
     * // Update one ComplaintStatus
     * const complaintStatus = await prisma.complaintStatus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ComplaintStatusUpdateArgs>(args: SelectSubset<T, ComplaintStatusUpdateArgs<ExtArgs>>): Prisma__ComplaintStatusClient<$Result.GetResult<Prisma.$ComplaintStatusPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more ComplaintStatuses.
     * @param {ComplaintStatusDeleteManyArgs} args - Arguments to filter ComplaintStatuses to delete.
     * @example
     * // Delete a few ComplaintStatuses
     * const { count } = await prisma.complaintStatus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ComplaintStatusDeleteManyArgs>(args?: SelectSubset<T, ComplaintStatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ComplaintStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplaintStatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ComplaintStatuses
     * const complaintStatus = await prisma.complaintStatus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ComplaintStatusUpdateManyArgs>(args: SelectSubset<T, ComplaintStatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ComplaintStatus.
     * @param {ComplaintStatusUpsertArgs} args - Arguments to update or create a ComplaintStatus.
     * @example
     * // Update or create a ComplaintStatus
     * const complaintStatus = await prisma.complaintStatus.upsert({
     *   create: {
     *     // ... data to create a ComplaintStatus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ComplaintStatus we want to update
     *   }
     * })
     */
    upsert<T extends ComplaintStatusUpsertArgs>(args: SelectSubset<T, ComplaintStatusUpsertArgs<ExtArgs>>): Prisma__ComplaintStatusClient<$Result.GetResult<Prisma.$ComplaintStatusPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of ComplaintStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplaintStatusCountArgs} args - Arguments to filter ComplaintStatuses to count.
     * @example
     * // Count the number of ComplaintStatuses
     * const count = await prisma.complaintStatus.count({
     *   where: {
     *     // ... the filter for the ComplaintStatuses we want to count
     *   }
     * })
    **/
    count<T extends ComplaintStatusCountArgs>(
      args?: Subset<T, ComplaintStatusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComplaintStatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ComplaintStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplaintStatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ComplaintStatusAggregateArgs>(args: Subset<T, ComplaintStatusAggregateArgs>): Prisma.PrismaPromise<GetComplaintStatusAggregateType<T>>

    /**
     * Group by ComplaintStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplaintStatusGroupByArgs} args - Group by arguments.
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
      T extends ComplaintStatusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ComplaintStatusGroupByArgs['orderBy'] }
        : { orderBy?: ComplaintStatusGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ComplaintStatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComplaintStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ComplaintStatus model
   */
  readonly fields: ComplaintStatusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ComplaintStatus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ComplaintStatusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ComplaintStatus model
   */ 
  interface ComplaintStatusFieldRefs {
    readonly id: FieldRef<"ComplaintStatus", 'Int'>
    readonly kode_vendor: FieldRef<"ComplaintStatus", 'String'>
    readonly name_vendor: FieldRef<"ComplaintStatus", 'String'>
    readonly tgl_complain: FieldRef<"ComplaintStatus", 'DateTime'>
    readonly status: FieldRef<"ComplaintStatus", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ComplaintStatus findUnique
   */
  export type ComplaintStatusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComplaintStatus
     */
    select?: ComplaintStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComplaintStatus
     */
    omit?: ComplaintStatusOmit<ExtArgs> | null
    /**
     * Filter, which ComplaintStatus to fetch.
     */
    where: ComplaintStatusWhereUniqueInput
  }

  /**
   * ComplaintStatus findUniqueOrThrow
   */
  export type ComplaintStatusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComplaintStatus
     */
    select?: ComplaintStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComplaintStatus
     */
    omit?: ComplaintStatusOmit<ExtArgs> | null
    /**
     * Filter, which ComplaintStatus to fetch.
     */
    where: ComplaintStatusWhereUniqueInput
  }

  /**
   * ComplaintStatus findFirst
   */
  export type ComplaintStatusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComplaintStatus
     */
    select?: ComplaintStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComplaintStatus
     */
    omit?: ComplaintStatusOmit<ExtArgs> | null
    /**
     * Filter, which ComplaintStatus to fetch.
     */
    where?: ComplaintStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ComplaintStatuses to fetch.
     */
    orderBy?: ComplaintStatusOrderByWithRelationInput | ComplaintStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ComplaintStatuses.
     */
    cursor?: ComplaintStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ComplaintStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ComplaintStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ComplaintStatuses.
     */
    distinct?: ComplaintStatusScalarFieldEnum | ComplaintStatusScalarFieldEnum[]
  }

  /**
   * ComplaintStatus findFirstOrThrow
   */
  export type ComplaintStatusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComplaintStatus
     */
    select?: ComplaintStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComplaintStatus
     */
    omit?: ComplaintStatusOmit<ExtArgs> | null
    /**
     * Filter, which ComplaintStatus to fetch.
     */
    where?: ComplaintStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ComplaintStatuses to fetch.
     */
    orderBy?: ComplaintStatusOrderByWithRelationInput | ComplaintStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ComplaintStatuses.
     */
    cursor?: ComplaintStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ComplaintStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ComplaintStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ComplaintStatuses.
     */
    distinct?: ComplaintStatusScalarFieldEnum | ComplaintStatusScalarFieldEnum[]
  }

  /**
   * ComplaintStatus findMany
   */
  export type ComplaintStatusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComplaintStatus
     */
    select?: ComplaintStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComplaintStatus
     */
    omit?: ComplaintStatusOmit<ExtArgs> | null
    /**
     * Filter, which ComplaintStatuses to fetch.
     */
    where?: ComplaintStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ComplaintStatuses to fetch.
     */
    orderBy?: ComplaintStatusOrderByWithRelationInput | ComplaintStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ComplaintStatuses.
     */
    cursor?: ComplaintStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ComplaintStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ComplaintStatuses.
     */
    skip?: number
    distinct?: ComplaintStatusScalarFieldEnum | ComplaintStatusScalarFieldEnum[]
  }

  /**
   * ComplaintStatus create
   */
  export type ComplaintStatusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComplaintStatus
     */
    select?: ComplaintStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComplaintStatus
     */
    omit?: ComplaintStatusOmit<ExtArgs> | null
    /**
     * The data needed to create a ComplaintStatus.
     */
    data: XOR<ComplaintStatusCreateInput, ComplaintStatusUncheckedCreateInput>
  }

  /**
   * ComplaintStatus createMany
   */
  export type ComplaintStatusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ComplaintStatuses.
     */
    data: ComplaintStatusCreateManyInput | ComplaintStatusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ComplaintStatus update
   */
  export type ComplaintStatusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComplaintStatus
     */
    select?: ComplaintStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComplaintStatus
     */
    omit?: ComplaintStatusOmit<ExtArgs> | null
    /**
     * The data needed to update a ComplaintStatus.
     */
    data: XOR<ComplaintStatusUpdateInput, ComplaintStatusUncheckedUpdateInput>
    /**
     * Choose, which ComplaintStatus to update.
     */
    where: ComplaintStatusWhereUniqueInput
  }

  /**
   * ComplaintStatus updateMany
   */
  export type ComplaintStatusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ComplaintStatuses.
     */
    data: XOR<ComplaintStatusUpdateManyMutationInput, ComplaintStatusUncheckedUpdateManyInput>
    /**
     * Filter which ComplaintStatuses to update
     */
    where?: ComplaintStatusWhereInput
    /**
     * Limit how many ComplaintStatuses to update.
     */
    limit?: number
  }

  /**
   * ComplaintStatus upsert
   */
  export type ComplaintStatusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComplaintStatus
     */
    select?: ComplaintStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComplaintStatus
     */
    omit?: ComplaintStatusOmit<ExtArgs> | null
    /**
     * The filter to search for the ComplaintStatus to update in case it exists.
     */
    where: ComplaintStatusWhereUniqueInput
    /**
     * In case the ComplaintStatus found by the `where` argument doesn't exist, create a new ComplaintStatus with this data.
     */
    create: XOR<ComplaintStatusCreateInput, ComplaintStatusUncheckedCreateInput>
    /**
     * In case the ComplaintStatus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ComplaintStatusUpdateInput, ComplaintStatusUncheckedUpdateInput>
  }

  /**
   * ComplaintStatus delete
   */
  export type ComplaintStatusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComplaintStatus
     */
    select?: ComplaintStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComplaintStatus
     */
    omit?: ComplaintStatusOmit<ExtArgs> | null
    /**
     * Filter which ComplaintStatus to delete.
     */
    where: ComplaintStatusWhereUniqueInput
  }

  /**
   * ComplaintStatus deleteMany
   */
  export type ComplaintStatusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ComplaintStatuses to delete
     */
    where?: ComplaintStatusWhereInput
    /**
     * Limit how many ComplaintStatuses to delete.
     */
    limit?: number
  }

  /**
   * ComplaintStatus without action
   */
  export type ComplaintStatusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComplaintStatus
     */
    select?: ComplaintStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComplaintStatus
     */
    omit?: ComplaintStatusOmit<ExtArgs> | null
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


  export const MstMaterialCapaScalarFieldEnum: {
    id: 'id',
    kode_vendor: 'kode_vendor',
    name_vendor: 'name_vendor',
    material_code: 'material_code',
    nama_material: 'nama_material'
  };

  export type MstMaterialCapaScalarFieldEnum = (typeof MstMaterialCapaScalarFieldEnum)[keyof typeof MstMaterialCapaScalarFieldEnum]


  export const SupplierScoreScalarFieldEnum: {
    id: 'id',
    tahun: 'tahun',
    bulan: 'bulan',
    tgl: 'tgl',
    category: 'category',
    suplier_name: 'suplier_name',
    kode_vendor: 'kode_vendor',
    area_to: 'area_to',
    plan: 'plan',
    abnormal: 'abnormal',
    total_incoming: 'total_incoming',
    total_abnormal: 'total_abnormal',
    persen_abnormal: 'persen_abnormal',
    feedback: 'feedback',
    acceptance_improvement: 'acceptance_improvement',
    downtime: 'downtime',
    cc: 'cc',
    issue: 'issue',
    value_material: 'value_material',
    Grade_Material: 'Grade_Material'
  };

  export type SupplierScoreScalarFieldEnum = (typeof SupplierScoreScalarFieldEnum)[keyof typeof SupplierScoreScalarFieldEnum]


  export const ComplaintStatusScalarFieldEnum: {
    id: 'id',
    kode_vendor: 'kode_vendor',
    name_vendor: 'name_vendor',
    tgl_complain: 'tgl_complain',
    status: 'status'
  };

  export type ComplaintStatusScalarFieldEnum = (typeof ComplaintStatusScalarFieldEnum)[keyof typeof ComplaintStatusScalarFieldEnum]


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


  export const MstMaterialCapaOrderByRelevanceFieldEnum: {
    kode_vendor: 'kode_vendor',
    name_vendor: 'name_vendor',
    material_code: 'material_code',
    nama_material: 'nama_material'
  };

  export type MstMaterialCapaOrderByRelevanceFieldEnum = (typeof MstMaterialCapaOrderByRelevanceFieldEnum)[keyof typeof MstMaterialCapaOrderByRelevanceFieldEnum]


  export const SupplierScoreOrderByRelevanceFieldEnum: {
    tahun: 'tahun',
    bulan: 'bulan',
    category: 'category',
    suplier_name: 'suplier_name',
    kode_vendor: 'kode_vendor',
    area_to: 'area_to',
    plan: 'plan',
    Grade_Material: 'Grade_Material'
  };

  export type SupplierScoreOrderByRelevanceFieldEnum = (typeof SupplierScoreOrderByRelevanceFieldEnum)[keyof typeof SupplierScoreOrderByRelevanceFieldEnum]


  export const ComplaintStatusOrderByRelevanceFieldEnum: {
    kode_vendor: 'kode_vendor',
    name_vendor: 'name_vendor',
    status: 'status'
  };

  export type ComplaintStatusOrderByRelevanceFieldEnum = (typeof ComplaintStatusOrderByRelevanceFieldEnum)[keyof typeof ComplaintStatusOrderByRelevanceFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type MstMaterialCapaWhereInput = {
    AND?: MstMaterialCapaWhereInput | MstMaterialCapaWhereInput[]
    OR?: MstMaterialCapaWhereInput[]
    NOT?: MstMaterialCapaWhereInput | MstMaterialCapaWhereInput[]
    id?: IntFilter<"MstMaterialCapa"> | number
    kode_vendor?: StringNullableFilter<"MstMaterialCapa"> | string | null
    name_vendor?: StringNullableFilter<"MstMaterialCapa"> | string | null
    material_code?: StringNullableFilter<"MstMaterialCapa"> | string | null
    nama_material?: StringNullableFilter<"MstMaterialCapa"> | string | null
  }

  export type MstMaterialCapaOrderByWithRelationInput = {
    id?: SortOrder
    kode_vendor?: SortOrderInput | SortOrder
    name_vendor?: SortOrderInput | SortOrder
    material_code?: SortOrderInput | SortOrder
    nama_material?: SortOrderInput | SortOrder
    _relevance?: MstMaterialCapaOrderByRelevanceInput
  }

  export type MstMaterialCapaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MstMaterialCapaWhereInput | MstMaterialCapaWhereInput[]
    OR?: MstMaterialCapaWhereInput[]
    NOT?: MstMaterialCapaWhereInput | MstMaterialCapaWhereInput[]
    kode_vendor?: StringNullableFilter<"MstMaterialCapa"> | string | null
    name_vendor?: StringNullableFilter<"MstMaterialCapa"> | string | null
    material_code?: StringNullableFilter<"MstMaterialCapa"> | string | null
    nama_material?: StringNullableFilter<"MstMaterialCapa"> | string | null
  }, "id">

  export type MstMaterialCapaOrderByWithAggregationInput = {
    id?: SortOrder
    kode_vendor?: SortOrderInput | SortOrder
    name_vendor?: SortOrderInput | SortOrder
    material_code?: SortOrderInput | SortOrder
    nama_material?: SortOrderInput | SortOrder
    _count?: MstMaterialCapaCountOrderByAggregateInput
    _avg?: MstMaterialCapaAvgOrderByAggregateInput
    _max?: MstMaterialCapaMaxOrderByAggregateInput
    _min?: MstMaterialCapaMinOrderByAggregateInput
    _sum?: MstMaterialCapaSumOrderByAggregateInput
  }

  export type MstMaterialCapaScalarWhereWithAggregatesInput = {
    AND?: MstMaterialCapaScalarWhereWithAggregatesInput | MstMaterialCapaScalarWhereWithAggregatesInput[]
    OR?: MstMaterialCapaScalarWhereWithAggregatesInput[]
    NOT?: MstMaterialCapaScalarWhereWithAggregatesInput | MstMaterialCapaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MstMaterialCapa"> | number
    kode_vendor?: StringNullableWithAggregatesFilter<"MstMaterialCapa"> | string | null
    name_vendor?: StringNullableWithAggregatesFilter<"MstMaterialCapa"> | string | null
    material_code?: StringNullableWithAggregatesFilter<"MstMaterialCapa"> | string | null
    nama_material?: StringNullableWithAggregatesFilter<"MstMaterialCapa"> | string | null
  }

  export type SupplierScoreWhereInput = {
    AND?: SupplierScoreWhereInput | SupplierScoreWhereInput[]
    OR?: SupplierScoreWhereInput[]
    NOT?: SupplierScoreWhereInput | SupplierScoreWhereInput[]
    id?: IntFilter<"SupplierScore"> | number
    tahun?: StringNullableFilter<"SupplierScore"> | string | null
    bulan?: StringNullableFilter<"SupplierScore"> | string | null
    tgl?: DateTimeNullableFilter<"SupplierScore"> | Date | string | null
    category?: StringNullableFilter<"SupplierScore"> | string | null
    suplier_name?: StringNullableFilter<"SupplierScore"> | string | null
    kode_vendor?: StringFilter<"SupplierScore"> | string
    area_to?: StringNullableFilter<"SupplierScore"> | string | null
    plan?: StringNullableFilter<"SupplierScore"> | string | null
    abnormal?: FloatNullableFilter<"SupplierScore"> | number | null
    total_incoming?: IntNullableFilter<"SupplierScore"> | number | null
    total_abnormal?: IntNullableFilter<"SupplierScore"> | number | null
    persen_abnormal?: FloatNullableFilter<"SupplierScore"> | number | null
    feedback?: FloatNullableFilter<"SupplierScore"> | number | null
    acceptance_improvement?: FloatNullableFilter<"SupplierScore"> | number | null
    downtime?: FloatNullableFilter<"SupplierScore"> | number | null
    cc?: FloatNullableFilter<"SupplierScore"> | number | null
    issue?: FloatNullableFilter<"SupplierScore"> | number | null
    value_material?: FloatNullableFilter<"SupplierScore"> | number | null
    Grade_Material?: StringNullableFilter<"SupplierScore"> | string | null
  }

  export type SupplierScoreOrderByWithRelationInput = {
    id?: SortOrder
    tahun?: SortOrderInput | SortOrder
    bulan?: SortOrderInput | SortOrder
    tgl?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    suplier_name?: SortOrderInput | SortOrder
    kode_vendor?: SortOrder
    area_to?: SortOrderInput | SortOrder
    plan?: SortOrderInput | SortOrder
    abnormal?: SortOrderInput | SortOrder
    total_incoming?: SortOrderInput | SortOrder
    total_abnormal?: SortOrderInput | SortOrder
    persen_abnormal?: SortOrderInput | SortOrder
    feedback?: SortOrderInput | SortOrder
    acceptance_improvement?: SortOrderInput | SortOrder
    downtime?: SortOrderInput | SortOrder
    cc?: SortOrderInput | SortOrder
    issue?: SortOrderInput | SortOrder
    value_material?: SortOrderInput | SortOrder
    Grade_Material?: SortOrderInput | SortOrder
    _relevance?: SupplierScoreOrderByRelevanceInput
  }

  export type SupplierScoreWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SupplierScoreWhereInput | SupplierScoreWhereInput[]
    OR?: SupplierScoreWhereInput[]
    NOT?: SupplierScoreWhereInput | SupplierScoreWhereInput[]
    tahun?: StringNullableFilter<"SupplierScore"> | string | null
    bulan?: StringNullableFilter<"SupplierScore"> | string | null
    tgl?: DateTimeNullableFilter<"SupplierScore"> | Date | string | null
    category?: StringNullableFilter<"SupplierScore"> | string | null
    suplier_name?: StringNullableFilter<"SupplierScore"> | string | null
    kode_vendor?: StringFilter<"SupplierScore"> | string
    area_to?: StringNullableFilter<"SupplierScore"> | string | null
    plan?: StringNullableFilter<"SupplierScore"> | string | null
    abnormal?: FloatNullableFilter<"SupplierScore"> | number | null
    total_incoming?: IntNullableFilter<"SupplierScore"> | number | null
    total_abnormal?: IntNullableFilter<"SupplierScore"> | number | null
    persen_abnormal?: FloatNullableFilter<"SupplierScore"> | number | null
    feedback?: FloatNullableFilter<"SupplierScore"> | number | null
    acceptance_improvement?: FloatNullableFilter<"SupplierScore"> | number | null
    downtime?: FloatNullableFilter<"SupplierScore"> | number | null
    cc?: FloatNullableFilter<"SupplierScore"> | number | null
    issue?: FloatNullableFilter<"SupplierScore"> | number | null
    value_material?: FloatNullableFilter<"SupplierScore"> | number | null
    Grade_Material?: StringNullableFilter<"SupplierScore"> | string | null
  }, "id">

  export type SupplierScoreOrderByWithAggregationInput = {
    id?: SortOrder
    tahun?: SortOrderInput | SortOrder
    bulan?: SortOrderInput | SortOrder
    tgl?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    suplier_name?: SortOrderInput | SortOrder
    kode_vendor?: SortOrder
    area_to?: SortOrderInput | SortOrder
    plan?: SortOrderInput | SortOrder
    abnormal?: SortOrderInput | SortOrder
    total_incoming?: SortOrderInput | SortOrder
    total_abnormal?: SortOrderInput | SortOrder
    persen_abnormal?: SortOrderInput | SortOrder
    feedback?: SortOrderInput | SortOrder
    acceptance_improvement?: SortOrderInput | SortOrder
    downtime?: SortOrderInput | SortOrder
    cc?: SortOrderInput | SortOrder
    issue?: SortOrderInput | SortOrder
    value_material?: SortOrderInput | SortOrder
    Grade_Material?: SortOrderInput | SortOrder
    _count?: SupplierScoreCountOrderByAggregateInput
    _avg?: SupplierScoreAvgOrderByAggregateInput
    _max?: SupplierScoreMaxOrderByAggregateInput
    _min?: SupplierScoreMinOrderByAggregateInput
    _sum?: SupplierScoreSumOrderByAggregateInput
  }

  export type SupplierScoreScalarWhereWithAggregatesInput = {
    AND?: SupplierScoreScalarWhereWithAggregatesInput | SupplierScoreScalarWhereWithAggregatesInput[]
    OR?: SupplierScoreScalarWhereWithAggregatesInput[]
    NOT?: SupplierScoreScalarWhereWithAggregatesInput | SupplierScoreScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SupplierScore"> | number
    tahun?: StringNullableWithAggregatesFilter<"SupplierScore"> | string | null
    bulan?: StringNullableWithAggregatesFilter<"SupplierScore"> | string | null
    tgl?: DateTimeNullableWithAggregatesFilter<"SupplierScore"> | Date | string | null
    category?: StringNullableWithAggregatesFilter<"SupplierScore"> | string | null
    suplier_name?: StringNullableWithAggregatesFilter<"SupplierScore"> | string | null
    kode_vendor?: StringWithAggregatesFilter<"SupplierScore"> | string
    area_to?: StringNullableWithAggregatesFilter<"SupplierScore"> | string | null
    plan?: StringNullableWithAggregatesFilter<"SupplierScore"> | string | null
    abnormal?: FloatNullableWithAggregatesFilter<"SupplierScore"> | number | null
    total_incoming?: IntNullableWithAggregatesFilter<"SupplierScore"> | number | null
    total_abnormal?: IntNullableWithAggregatesFilter<"SupplierScore"> | number | null
    persen_abnormal?: FloatNullableWithAggregatesFilter<"SupplierScore"> | number | null
    feedback?: FloatNullableWithAggregatesFilter<"SupplierScore"> | number | null
    acceptance_improvement?: FloatNullableWithAggregatesFilter<"SupplierScore"> | number | null
    downtime?: FloatNullableWithAggregatesFilter<"SupplierScore"> | number | null
    cc?: FloatNullableWithAggregatesFilter<"SupplierScore"> | number | null
    issue?: FloatNullableWithAggregatesFilter<"SupplierScore"> | number | null
    value_material?: FloatNullableWithAggregatesFilter<"SupplierScore"> | number | null
    Grade_Material?: StringNullableWithAggregatesFilter<"SupplierScore"> | string | null
  }

  export type ComplaintStatusWhereInput = {
    AND?: ComplaintStatusWhereInput | ComplaintStatusWhereInput[]
    OR?: ComplaintStatusWhereInput[]
    NOT?: ComplaintStatusWhereInput | ComplaintStatusWhereInput[]
    id?: IntFilter<"ComplaintStatus"> | number
    kode_vendor?: StringFilter<"ComplaintStatus"> | string
    name_vendor?: StringNullableFilter<"ComplaintStatus"> | string | null
    tgl_complain?: DateTimeNullableFilter<"ComplaintStatus"> | Date | string | null
    status?: StringNullableFilter<"ComplaintStatus"> | string | null
  }

  export type ComplaintStatusOrderByWithRelationInput = {
    id?: SortOrder
    kode_vendor?: SortOrder
    name_vendor?: SortOrderInput | SortOrder
    tgl_complain?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    _relevance?: ComplaintStatusOrderByRelevanceInput
  }

  export type ComplaintStatusWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ComplaintStatusWhereInput | ComplaintStatusWhereInput[]
    OR?: ComplaintStatusWhereInput[]
    NOT?: ComplaintStatusWhereInput | ComplaintStatusWhereInput[]
    kode_vendor?: StringFilter<"ComplaintStatus"> | string
    name_vendor?: StringNullableFilter<"ComplaintStatus"> | string | null
    tgl_complain?: DateTimeNullableFilter<"ComplaintStatus"> | Date | string | null
    status?: StringNullableFilter<"ComplaintStatus"> | string | null
  }, "id">

  export type ComplaintStatusOrderByWithAggregationInput = {
    id?: SortOrder
    kode_vendor?: SortOrder
    name_vendor?: SortOrderInput | SortOrder
    tgl_complain?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    _count?: ComplaintStatusCountOrderByAggregateInput
    _avg?: ComplaintStatusAvgOrderByAggregateInput
    _max?: ComplaintStatusMaxOrderByAggregateInput
    _min?: ComplaintStatusMinOrderByAggregateInput
    _sum?: ComplaintStatusSumOrderByAggregateInput
  }

  export type ComplaintStatusScalarWhereWithAggregatesInput = {
    AND?: ComplaintStatusScalarWhereWithAggregatesInput | ComplaintStatusScalarWhereWithAggregatesInput[]
    OR?: ComplaintStatusScalarWhereWithAggregatesInput[]
    NOT?: ComplaintStatusScalarWhereWithAggregatesInput | ComplaintStatusScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ComplaintStatus"> | number
    kode_vendor?: StringWithAggregatesFilter<"ComplaintStatus"> | string
    name_vendor?: StringNullableWithAggregatesFilter<"ComplaintStatus"> | string | null
    tgl_complain?: DateTimeNullableWithAggregatesFilter<"ComplaintStatus"> | Date | string | null
    status?: StringNullableWithAggregatesFilter<"ComplaintStatus"> | string | null
  }

  export type MstMaterialCapaCreateInput = {
    kode_vendor?: string | null
    name_vendor?: string | null
    material_code?: string | null
    nama_material?: string | null
  }

  export type MstMaterialCapaUncheckedCreateInput = {
    id?: number
    kode_vendor?: string | null
    name_vendor?: string | null
    material_code?: string | null
    nama_material?: string | null
  }

  export type MstMaterialCapaUpdateInput = {
    kode_vendor?: NullableStringFieldUpdateOperationsInput | string | null
    name_vendor?: NullableStringFieldUpdateOperationsInput | string | null
    material_code?: NullableStringFieldUpdateOperationsInput | string | null
    nama_material?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MstMaterialCapaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    kode_vendor?: NullableStringFieldUpdateOperationsInput | string | null
    name_vendor?: NullableStringFieldUpdateOperationsInput | string | null
    material_code?: NullableStringFieldUpdateOperationsInput | string | null
    nama_material?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MstMaterialCapaCreateManyInput = {
    id?: number
    kode_vendor?: string | null
    name_vendor?: string | null
    material_code?: string | null
    nama_material?: string | null
  }

  export type MstMaterialCapaUpdateManyMutationInput = {
    kode_vendor?: NullableStringFieldUpdateOperationsInput | string | null
    name_vendor?: NullableStringFieldUpdateOperationsInput | string | null
    material_code?: NullableStringFieldUpdateOperationsInput | string | null
    nama_material?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MstMaterialCapaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    kode_vendor?: NullableStringFieldUpdateOperationsInput | string | null
    name_vendor?: NullableStringFieldUpdateOperationsInput | string | null
    material_code?: NullableStringFieldUpdateOperationsInput | string | null
    nama_material?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SupplierScoreCreateInput = {
    tahun?: string | null
    bulan?: string | null
    tgl?: Date | string | null
    category?: string | null
    suplier_name?: string | null
    kode_vendor: string
    area_to?: string | null
    plan?: string | null
    abnormal?: number | null
    total_incoming?: number | null
    total_abnormal?: number | null
    persen_abnormal?: number | null
    feedback?: number | null
    acceptance_improvement?: number | null
    downtime?: number | null
    cc?: number | null
    issue?: number | null
    value_material?: number | null
    Grade_Material?: string | null
  }

  export type SupplierScoreUncheckedCreateInput = {
    id?: number
    tahun?: string | null
    bulan?: string | null
    tgl?: Date | string | null
    category?: string | null
    suplier_name?: string | null
    kode_vendor: string
    area_to?: string | null
    plan?: string | null
    abnormal?: number | null
    total_incoming?: number | null
    total_abnormal?: number | null
    persen_abnormal?: number | null
    feedback?: number | null
    acceptance_improvement?: number | null
    downtime?: number | null
    cc?: number | null
    issue?: number | null
    value_material?: number | null
    Grade_Material?: string | null
  }

  export type SupplierScoreUpdateInput = {
    tahun?: NullableStringFieldUpdateOperationsInput | string | null
    bulan?: NullableStringFieldUpdateOperationsInput | string | null
    tgl?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    suplier_name?: NullableStringFieldUpdateOperationsInput | string | null
    kode_vendor?: StringFieldUpdateOperationsInput | string
    area_to?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: NullableStringFieldUpdateOperationsInput | string | null
    abnormal?: NullableFloatFieldUpdateOperationsInput | number | null
    total_incoming?: NullableIntFieldUpdateOperationsInput | number | null
    total_abnormal?: NullableIntFieldUpdateOperationsInput | number | null
    persen_abnormal?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableFloatFieldUpdateOperationsInput | number | null
    acceptance_improvement?: NullableFloatFieldUpdateOperationsInput | number | null
    downtime?: NullableFloatFieldUpdateOperationsInput | number | null
    cc?: NullableFloatFieldUpdateOperationsInput | number | null
    issue?: NullableFloatFieldUpdateOperationsInput | number | null
    value_material?: NullableFloatFieldUpdateOperationsInput | number | null
    Grade_Material?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SupplierScoreUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tahun?: NullableStringFieldUpdateOperationsInput | string | null
    bulan?: NullableStringFieldUpdateOperationsInput | string | null
    tgl?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    suplier_name?: NullableStringFieldUpdateOperationsInput | string | null
    kode_vendor?: StringFieldUpdateOperationsInput | string
    area_to?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: NullableStringFieldUpdateOperationsInput | string | null
    abnormal?: NullableFloatFieldUpdateOperationsInput | number | null
    total_incoming?: NullableIntFieldUpdateOperationsInput | number | null
    total_abnormal?: NullableIntFieldUpdateOperationsInput | number | null
    persen_abnormal?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableFloatFieldUpdateOperationsInput | number | null
    acceptance_improvement?: NullableFloatFieldUpdateOperationsInput | number | null
    downtime?: NullableFloatFieldUpdateOperationsInput | number | null
    cc?: NullableFloatFieldUpdateOperationsInput | number | null
    issue?: NullableFloatFieldUpdateOperationsInput | number | null
    value_material?: NullableFloatFieldUpdateOperationsInput | number | null
    Grade_Material?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SupplierScoreCreateManyInput = {
    id?: number
    tahun?: string | null
    bulan?: string | null
    tgl?: Date | string | null
    category?: string | null
    suplier_name?: string | null
    kode_vendor: string
    area_to?: string | null
    plan?: string | null
    abnormal?: number | null
    total_incoming?: number | null
    total_abnormal?: number | null
    persen_abnormal?: number | null
    feedback?: number | null
    acceptance_improvement?: number | null
    downtime?: number | null
    cc?: number | null
    issue?: number | null
    value_material?: number | null
    Grade_Material?: string | null
  }

  export type SupplierScoreUpdateManyMutationInput = {
    tahun?: NullableStringFieldUpdateOperationsInput | string | null
    bulan?: NullableStringFieldUpdateOperationsInput | string | null
    tgl?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    suplier_name?: NullableStringFieldUpdateOperationsInput | string | null
    kode_vendor?: StringFieldUpdateOperationsInput | string
    area_to?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: NullableStringFieldUpdateOperationsInput | string | null
    abnormal?: NullableFloatFieldUpdateOperationsInput | number | null
    total_incoming?: NullableIntFieldUpdateOperationsInput | number | null
    total_abnormal?: NullableIntFieldUpdateOperationsInput | number | null
    persen_abnormal?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableFloatFieldUpdateOperationsInput | number | null
    acceptance_improvement?: NullableFloatFieldUpdateOperationsInput | number | null
    downtime?: NullableFloatFieldUpdateOperationsInput | number | null
    cc?: NullableFloatFieldUpdateOperationsInput | number | null
    issue?: NullableFloatFieldUpdateOperationsInput | number | null
    value_material?: NullableFloatFieldUpdateOperationsInput | number | null
    Grade_Material?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SupplierScoreUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tahun?: NullableStringFieldUpdateOperationsInput | string | null
    bulan?: NullableStringFieldUpdateOperationsInput | string | null
    tgl?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    suplier_name?: NullableStringFieldUpdateOperationsInput | string | null
    kode_vendor?: StringFieldUpdateOperationsInput | string
    area_to?: NullableStringFieldUpdateOperationsInput | string | null
    plan?: NullableStringFieldUpdateOperationsInput | string | null
    abnormal?: NullableFloatFieldUpdateOperationsInput | number | null
    total_incoming?: NullableIntFieldUpdateOperationsInput | number | null
    total_abnormal?: NullableIntFieldUpdateOperationsInput | number | null
    persen_abnormal?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableFloatFieldUpdateOperationsInput | number | null
    acceptance_improvement?: NullableFloatFieldUpdateOperationsInput | number | null
    downtime?: NullableFloatFieldUpdateOperationsInput | number | null
    cc?: NullableFloatFieldUpdateOperationsInput | number | null
    issue?: NullableFloatFieldUpdateOperationsInput | number | null
    value_material?: NullableFloatFieldUpdateOperationsInput | number | null
    Grade_Material?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ComplaintStatusCreateInput = {
    kode_vendor: string
    name_vendor?: string | null
    tgl_complain?: Date | string | null
    status?: string | null
  }

  export type ComplaintStatusUncheckedCreateInput = {
    id?: number
    kode_vendor: string
    name_vendor?: string | null
    tgl_complain?: Date | string | null
    status?: string | null
  }

  export type ComplaintStatusUpdateInput = {
    kode_vendor?: StringFieldUpdateOperationsInput | string
    name_vendor?: NullableStringFieldUpdateOperationsInput | string | null
    tgl_complain?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ComplaintStatusUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    kode_vendor?: StringFieldUpdateOperationsInput | string
    name_vendor?: NullableStringFieldUpdateOperationsInput | string | null
    tgl_complain?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ComplaintStatusCreateManyInput = {
    id?: number
    kode_vendor: string
    name_vendor?: string | null
    tgl_complain?: Date | string | null
    status?: string | null
  }

  export type ComplaintStatusUpdateManyMutationInput = {
    kode_vendor?: StringFieldUpdateOperationsInput | string
    name_vendor?: NullableStringFieldUpdateOperationsInput | string | null
    tgl_complain?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ComplaintStatusUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    kode_vendor?: StringFieldUpdateOperationsInput | string
    name_vendor?: NullableStringFieldUpdateOperationsInput | string | null
    tgl_complain?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type MstMaterialCapaOrderByRelevanceInput = {
    fields: MstMaterialCapaOrderByRelevanceFieldEnum | MstMaterialCapaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MstMaterialCapaCountOrderByAggregateInput = {
    id?: SortOrder
    kode_vendor?: SortOrder
    name_vendor?: SortOrder
    material_code?: SortOrder
    nama_material?: SortOrder
  }

  export type MstMaterialCapaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MstMaterialCapaMaxOrderByAggregateInput = {
    id?: SortOrder
    kode_vendor?: SortOrder
    name_vendor?: SortOrder
    material_code?: SortOrder
    nama_material?: SortOrder
  }

  export type MstMaterialCapaMinOrderByAggregateInput = {
    id?: SortOrder
    kode_vendor?: SortOrder
    name_vendor?: SortOrder
    material_code?: SortOrder
    nama_material?: SortOrder
  }

  export type MstMaterialCapaSumOrderByAggregateInput = {
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type SupplierScoreOrderByRelevanceInput = {
    fields: SupplierScoreOrderByRelevanceFieldEnum | SupplierScoreOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SupplierScoreCountOrderByAggregateInput = {
    id?: SortOrder
    tahun?: SortOrder
    bulan?: SortOrder
    tgl?: SortOrder
    category?: SortOrder
    suplier_name?: SortOrder
    kode_vendor?: SortOrder
    area_to?: SortOrder
    plan?: SortOrder
    abnormal?: SortOrder
    total_incoming?: SortOrder
    total_abnormal?: SortOrder
    persen_abnormal?: SortOrder
    feedback?: SortOrder
    acceptance_improvement?: SortOrder
    downtime?: SortOrder
    cc?: SortOrder
    issue?: SortOrder
    value_material?: SortOrder
    Grade_Material?: SortOrder
  }

  export type SupplierScoreAvgOrderByAggregateInput = {
    id?: SortOrder
    abnormal?: SortOrder
    total_incoming?: SortOrder
    total_abnormal?: SortOrder
    persen_abnormal?: SortOrder
    feedback?: SortOrder
    acceptance_improvement?: SortOrder
    downtime?: SortOrder
    cc?: SortOrder
    issue?: SortOrder
    value_material?: SortOrder
  }

  export type SupplierScoreMaxOrderByAggregateInput = {
    id?: SortOrder
    tahun?: SortOrder
    bulan?: SortOrder
    tgl?: SortOrder
    category?: SortOrder
    suplier_name?: SortOrder
    kode_vendor?: SortOrder
    area_to?: SortOrder
    plan?: SortOrder
    abnormal?: SortOrder
    total_incoming?: SortOrder
    total_abnormal?: SortOrder
    persen_abnormal?: SortOrder
    feedback?: SortOrder
    acceptance_improvement?: SortOrder
    downtime?: SortOrder
    cc?: SortOrder
    issue?: SortOrder
    value_material?: SortOrder
    Grade_Material?: SortOrder
  }

  export type SupplierScoreMinOrderByAggregateInput = {
    id?: SortOrder
    tahun?: SortOrder
    bulan?: SortOrder
    tgl?: SortOrder
    category?: SortOrder
    suplier_name?: SortOrder
    kode_vendor?: SortOrder
    area_to?: SortOrder
    plan?: SortOrder
    abnormal?: SortOrder
    total_incoming?: SortOrder
    total_abnormal?: SortOrder
    persen_abnormal?: SortOrder
    feedback?: SortOrder
    acceptance_improvement?: SortOrder
    downtime?: SortOrder
    cc?: SortOrder
    issue?: SortOrder
    value_material?: SortOrder
    Grade_Material?: SortOrder
  }

  export type SupplierScoreSumOrderByAggregateInput = {
    id?: SortOrder
    abnormal?: SortOrder
    total_incoming?: SortOrder
    total_abnormal?: SortOrder
    persen_abnormal?: SortOrder
    feedback?: SortOrder
    acceptance_improvement?: SortOrder
    downtime?: SortOrder
    cc?: SortOrder
    issue?: SortOrder
    value_material?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ComplaintStatusOrderByRelevanceInput = {
    fields: ComplaintStatusOrderByRelevanceFieldEnum | ComplaintStatusOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ComplaintStatusCountOrderByAggregateInput = {
    id?: SortOrder
    kode_vendor?: SortOrder
    name_vendor?: SortOrder
    tgl_complain?: SortOrder
    status?: SortOrder
  }

  export type ComplaintStatusAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ComplaintStatusMaxOrderByAggregateInput = {
    id?: SortOrder
    kode_vendor?: SortOrder
    name_vendor?: SortOrder
    tgl_complain?: SortOrder
    status?: SortOrder
  }

  export type ComplaintStatusMinOrderByAggregateInput = {
    id?: SortOrder
    kode_vendor?: SortOrder
    name_vendor?: SortOrder
    tgl_complain?: SortOrder
    status?: SortOrder
  }

  export type ComplaintStatusSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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