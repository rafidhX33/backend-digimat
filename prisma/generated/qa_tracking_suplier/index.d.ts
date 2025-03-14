
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
 * Model SupplierMaterialView
 * 
 */
export type SupplierMaterialView = $Result.DefaultSelection<Prisma.$SupplierMaterialViewPayload>
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
 * Model TrSupplierAudit
 * 
 */
export type TrSupplierAudit = $Result.DefaultSelection<Prisma.$TrSupplierAuditPayload>
/**
 * Model AbnormalityHistorical
 * *
 *  * Model untuk VIEW v_abnormality_historical
 *  * Pastikan view ini sudah dibuat di MySQL sebelum generate Prisma Client
 */
export type AbnormalityHistorical = $Result.DefaultSelection<Prisma.$AbnormalityHistoricalPayload>
/**
 * Model KedatanganSapNew
 * 
 */
export type KedatanganSapNew = $Result.DefaultSelection<Prisma.$KedatanganSapNewPayload>

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
   * `prisma.supplierMaterialView`: Exposes CRUD operations for the **SupplierMaterialView** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SupplierMaterialViews
    * const supplierMaterialViews = await prisma.supplierMaterialView.findMany()
    * ```
    */
  get supplierMaterialView(): Prisma.SupplierMaterialViewDelegate<ExtArgs, ClientOptions>;

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

  /**
   * `prisma.trSupplierAudit`: Exposes CRUD operations for the **TrSupplierAudit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TrSupplierAudits
    * const trSupplierAudits = await prisma.trSupplierAudit.findMany()
    * ```
    */
  get trSupplierAudit(): Prisma.TrSupplierAuditDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.abnormalityHistorical`: Exposes CRUD operations for the **AbnormalityHistorical** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AbnormalityHistoricals
    * const abnormalityHistoricals = await prisma.abnormalityHistorical.findMany()
    * ```
    */
  get abnormalityHistorical(): Prisma.AbnormalityHistoricalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.kedatanganSapNew`: Exposes CRUD operations for the **KedatanganSapNew** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more KedatanganSapNews
    * const kedatanganSapNews = await prisma.kedatanganSapNew.findMany()
    * ```
    */
  get kedatanganSapNew(): Prisma.KedatanganSapNewDelegate<ExtArgs, ClientOptions>;
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
    SupplierMaterialView: 'SupplierMaterialView',
    SupplierScore: 'SupplierScore',
    ComplaintStatus: 'ComplaintStatus',
    TrSupplierAudit: 'TrSupplierAudit',
    AbnormalityHistorical: 'AbnormalityHistorical',
    KedatanganSapNew: 'KedatanganSapNew'
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
      modelProps: "mstMaterialCapa" | "supplierMaterialView" | "supplierScore" | "complaintStatus" | "trSupplierAudit" | "abnormalityHistorical" | "kedatanganSapNew"
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
      SupplierMaterialView: {
        payload: Prisma.$SupplierMaterialViewPayload<ExtArgs>
        fields: Prisma.SupplierMaterialViewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SupplierMaterialViewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierMaterialViewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SupplierMaterialViewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierMaterialViewPayload>
          }
          findFirst: {
            args: Prisma.SupplierMaterialViewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierMaterialViewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SupplierMaterialViewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierMaterialViewPayload>
          }
          findMany: {
            args: Prisma.SupplierMaterialViewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierMaterialViewPayload>[]
          }
          create: {
            args: Prisma.SupplierMaterialViewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierMaterialViewPayload>
          }
          createMany: {
            args: Prisma.SupplierMaterialViewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SupplierMaterialViewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierMaterialViewPayload>
          }
          update: {
            args: Prisma.SupplierMaterialViewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierMaterialViewPayload>
          }
          deleteMany: {
            args: Prisma.SupplierMaterialViewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SupplierMaterialViewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SupplierMaterialViewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierMaterialViewPayload>
          }
          aggregate: {
            args: Prisma.SupplierMaterialViewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupplierMaterialView>
          }
          groupBy: {
            args: Prisma.SupplierMaterialViewGroupByArgs<ExtArgs>
            result: $Utils.Optional<SupplierMaterialViewGroupByOutputType>[]
          }
          count: {
            args: Prisma.SupplierMaterialViewCountArgs<ExtArgs>
            result: $Utils.Optional<SupplierMaterialViewCountAggregateOutputType> | number
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
      TrSupplierAudit: {
        payload: Prisma.$TrSupplierAuditPayload<ExtArgs>
        fields: Prisma.TrSupplierAuditFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrSupplierAuditFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrSupplierAuditPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrSupplierAuditFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrSupplierAuditPayload>
          }
          findFirst: {
            args: Prisma.TrSupplierAuditFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrSupplierAuditPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrSupplierAuditFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrSupplierAuditPayload>
          }
          findMany: {
            args: Prisma.TrSupplierAuditFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrSupplierAuditPayload>[]
          }
          create: {
            args: Prisma.TrSupplierAuditCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrSupplierAuditPayload>
          }
          createMany: {
            args: Prisma.TrSupplierAuditCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TrSupplierAuditDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrSupplierAuditPayload>
          }
          update: {
            args: Prisma.TrSupplierAuditUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrSupplierAuditPayload>
          }
          deleteMany: {
            args: Prisma.TrSupplierAuditDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TrSupplierAuditUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TrSupplierAuditUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrSupplierAuditPayload>
          }
          aggregate: {
            args: Prisma.TrSupplierAuditAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrSupplierAudit>
          }
          groupBy: {
            args: Prisma.TrSupplierAuditGroupByArgs<ExtArgs>
            result: $Utils.Optional<TrSupplierAuditGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrSupplierAuditCountArgs<ExtArgs>
            result: $Utils.Optional<TrSupplierAuditCountAggregateOutputType> | number
          }
        }
      }
      AbnormalityHistorical: {
        payload: Prisma.$AbnormalityHistoricalPayload<ExtArgs>
        fields: Prisma.AbnormalityHistoricalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AbnormalityHistoricalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbnormalityHistoricalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AbnormalityHistoricalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbnormalityHistoricalPayload>
          }
          findFirst: {
            args: Prisma.AbnormalityHistoricalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbnormalityHistoricalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AbnormalityHistoricalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbnormalityHistoricalPayload>
          }
          findMany: {
            args: Prisma.AbnormalityHistoricalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbnormalityHistoricalPayload>[]
          }
          create: {
            args: Prisma.AbnormalityHistoricalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbnormalityHistoricalPayload>
          }
          createMany: {
            args: Prisma.AbnormalityHistoricalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AbnormalityHistoricalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbnormalityHistoricalPayload>
          }
          update: {
            args: Prisma.AbnormalityHistoricalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbnormalityHistoricalPayload>
          }
          deleteMany: {
            args: Prisma.AbnormalityHistoricalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AbnormalityHistoricalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AbnormalityHistoricalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbnormalityHistoricalPayload>
          }
          aggregate: {
            args: Prisma.AbnormalityHistoricalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAbnormalityHistorical>
          }
          groupBy: {
            args: Prisma.AbnormalityHistoricalGroupByArgs<ExtArgs>
            result: $Utils.Optional<AbnormalityHistoricalGroupByOutputType>[]
          }
          count: {
            args: Prisma.AbnormalityHistoricalCountArgs<ExtArgs>
            result: $Utils.Optional<AbnormalityHistoricalCountAggregateOutputType> | number
          }
        }
      }
      KedatanganSapNew: {
        payload: Prisma.$KedatanganSapNewPayload<ExtArgs>
        fields: Prisma.KedatanganSapNewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KedatanganSapNewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KedatanganSapNewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KedatanganSapNewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KedatanganSapNewPayload>
          }
          findFirst: {
            args: Prisma.KedatanganSapNewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KedatanganSapNewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KedatanganSapNewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KedatanganSapNewPayload>
          }
          findMany: {
            args: Prisma.KedatanganSapNewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KedatanganSapNewPayload>[]
          }
          create: {
            args: Prisma.KedatanganSapNewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KedatanganSapNewPayload>
          }
          createMany: {
            args: Prisma.KedatanganSapNewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.KedatanganSapNewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KedatanganSapNewPayload>
          }
          update: {
            args: Prisma.KedatanganSapNewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KedatanganSapNewPayload>
          }
          deleteMany: {
            args: Prisma.KedatanganSapNewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KedatanganSapNewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.KedatanganSapNewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KedatanganSapNewPayload>
          }
          aggregate: {
            args: Prisma.KedatanganSapNewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKedatanganSapNew>
          }
          groupBy: {
            args: Prisma.KedatanganSapNewGroupByArgs<ExtArgs>
            result: $Utils.Optional<KedatanganSapNewGroupByOutputType>[]
          }
          count: {
            args: Prisma.KedatanganSapNewCountArgs<ExtArgs>
            result: $Utils.Optional<KedatanganSapNewCountAggregateOutputType> | number
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
    supplierMaterialView?: SupplierMaterialViewOmit
    supplierScore?: SupplierScoreOmit
    complaintStatus?: ComplaintStatusOmit
    trSupplierAudit?: TrSupplierAuditOmit
    abnormalityHistorical?: AbnormalityHistoricalOmit
    kedatanganSapNew?: KedatanganSapNewOmit
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
   * Model SupplierMaterialView
   */

  export type AggregateSupplierMaterialView = {
    _count: SupplierMaterialViewCountAggregateOutputType | null
    _avg: SupplierMaterialViewAvgAggregateOutputType | null
    _sum: SupplierMaterialViewSumAggregateOutputType | null
    _min: SupplierMaterialViewMinAggregateOutputType | null
    _max: SupplierMaterialViewMaxAggregateOutputType | null
  }

  export type SupplierMaterialViewAvgAggregateOutputType = {
    id: number | null
  }

  export type SupplierMaterialViewSumAggregateOutputType = {
    id: number | null
  }

  export type SupplierMaterialViewMinAggregateOutputType = {
    id: number | null
    kode_vendor: string | null
    name_vendor: string | null
    material_code: string | null
    nama_material: string | null
    area: string | null
  }

  export type SupplierMaterialViewMaxAggregateOutputType = {
    id: number | null
    kode_vendor: string | null
    name_vendor: string | null
    material_code: string | null
    nama_material: string | null
    area: string | null
  }

  export type SupplierMaterialViewCountAggregateOutputType = {
    id: number
    kode_vendor: number
    name_vendor: number
    material_code: number
    nama_material: number
    area: number
    _all: number
  }


  export type SupplierMaterialViewAvgAggregateInputType = {
    id?: true
  }

  export type SupplierMaterialViewSumAggregateInputType = {
    id?: true
  }

  export type SupplierMaterialViewMinAggregateInputType = {
    id?: true
    kode_vendor?: true
    name_vendor?: true
    material_code?: true
    nama_material?: true
    area?: true
  }

  export type SupplierMaterialViewMaxAggregateInputType = {
    id?: true
    kode_vendor?: true
    name_vendor?: true
    material_code?: true
    nama_material?: true
    area?: true
  }

  export type SupplierMaterialViewCountAggregateInputType = {
    id?: true
    kode_vendor?: true
    name_vendor?: true
    material_code?: true
    nama_material?: true
    area?: true
    _all?: true
  }

  export type SupplierMaterialViewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SupplierMaterialView to aggregate.
     */
    where?: SupplierMaterialViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupplierMaterialViews to fetch.
     */
    orderBy?: SupplierMaterialViewOrderByWithRelationInput | SupplierMaterialViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SupplierMaterialViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupplierMaterialViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupplierMaterialViews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SupplierMaterialViews
    **/
    _count?: true | SupplierMaterialViewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SupplierMaterialViewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SupplierMaterialViewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupplierMaterialViewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupplierMaterialViewMaxAggregateInputType
  }

  export type GetSupplierMaterialViewAggregateType<T extends SupplierMaterialViewAggregateArgs> = {
        [P in keyof T & keyof AggregateSupplierMaterialView]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupplierMaterialView[P]>
      : GetScalarType<T[P], AggregateSupplierMaterialView[P]>
  }




  export type SupplierMaterialViewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupplierMaterialViewWhereInput
    orderBy?: SupplierMaterialViewOrderByWithAggregationInput | SupplierMaterialViewOrderByWithAggregationInput[]
    by: SupplierMaterialViewScalarFieldEnum[] | SupplierMaterialViewScalarFieldEnum
    having?: SupplierMaterialViewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupplierMaterialViewCountAggregateInputType | true
    _avg?: SupplierMaterialViewAvgAggregateInputType
    _sum?: SupplierMaterialViewSumAggregateInputType
    _min?: SupplierMaterialViewMinAggregateInputType
    _max?: SupplierMaterialViewMaxAggregateInputType
  }

  export type SupplierMaterialViewGroupByOutputType = {
    id: number
    kode_vendor: string | null
    name_vendor: string | null
    material_code: string | null
    nama_material: string | null
    area: string | null
    _count: SupplierMaterialViewCountAggregateOutputType | null
    _avg: SupplierMaterialViewAvgAggregateOutputType | null
    _sum: SupplierMaterialViewSumAggregateOutputType | null
    _min: SupplierMaterialViewMinAggregateOutputType | null
    _max: SupplierMaterialViewMaxAggregateOutputType | null
  }

  type GetSupplierMaterialViewGroupByPayload<T extends SupplierMaterialViewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupplierMaterialViewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupplierMaterialViewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupplierMaterialViewGroupByOutputType[P]>
            : GetScalarType<T[P], SupplierMaterialViewGroupByOutputType[P]>
        }
      >
    >


  export type SupplierMaterialViewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kode_vendor?: boolean
    name_vendor?: boolean
    material_code?: boolean
    nama_material?: boolean
    area?: boolean
  }, ExtArgs["result"]["supplierMaterialView"]>



  export type SupplierMaterialViewSelectScalar = {
    id?: boolean
    kode_vendor?: boolean
    name_vendor?: boolean
    material_code?: boolean
    nama_material?: boolean
    area?: boolean
  }

  export type SupplierMaterialViewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "kode_vendor" | "name_vendor" | "material_code" | "nama_material" | "area", ExtArgs["result"]["supplierMaterialView"]>

  export type $SupplierMaterialViewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SupplierMaterialView"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      kode_vendor: string | null
      name_vendor: string | null
      material_code: string | null
      nama_material: string | null
      area: string | null
    }, ExtArgs["result"]["supplierMaterialView"]>
    composites: {}
  }

  type SupplierMaterialViewGetPayload<S extends boolean | null | undefined | SupplierMaterialViewDefaultArgs> = $Result.GetResult<Prisma.$SupplierMaterialViewPayload, S>

  type SupplierMaterialViewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SupplierMaterialViewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SupplierMaterialViewCountAggregateInputType | true
    }

  export interface SupplierMaterialViewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SupplierMaterialView'], meta: { name: 'SupplierMaterialView' } }
    /**
     * Find zero or one SupplierMaterialView that matches the filter.
     * @param {SupplierMaterialViewFindUniqueArgs} args - Arguments to find a SupplierMaterialView
     * @example
     * // Get one SupplierMaterialView
     * const supplierMaterialView = await prisma.supplierMaterialView.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SupplierMaterialViewFindUniqueArgs>(args: SelectSubset<T, SupplierMaterialViewFindUniqueArgs<ExtArgs>>): Prisma__SupplierMaterialViewClient<$Result.GetResult<Prisma.$SupplierMaterialViewPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one SupplierMaterialView that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SupplierMaterialViewFindUniqueOrThrowArgs} args - Arguments to find a SupplierMaterialView
     * @example
     * // Get one SupplierMaterialView
     * const supplierMaterialView = await prisma.supplierMaterialView.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SupplierMaterialViewFindUniqueOrThrowArgs>(args: SelectSubset<T, SupplierMaterialViewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SupplierMaterialViewClient<$Result.GetResult<Prisma.$SupplierMaterialViewPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first SupplierMaterialView that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierMaterialViewFindFirstArgs} args - Arguments to find a SupplierMaterialView
     * @example
     * // Get one SupplierMaterialView
     * const supplierMaterialView = await prisma.supplierMaterialView.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SupplierMaterialViewFindFirstArgs>(args?: SelectSubset<T, SupplierMaterialViewFindFirstArgs<ExtArgs>>): Prisma__SupplierMaterialViewClient<$Result.GetResult<Prisma.$SupplierMaterialViewPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first SupplierMaterialView that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierMaterialViewFindFirstOrThrowArgs} args - Arguments to find a SupplierMaterialView
     * @example
     * // Get one SupplierMaterialView
     * const supplierMaterialView = await prisma.supplierMaterialView.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SupplierMaterialViewFindFirstOrThrowArgs>(args?: SelectSubset<T, SupplierMaterialViewFindFirstOrThrowArgs<ExtArgs>>): Prisma__SupplierMaterialViewClient<$Result.GetResult<Prisma.$SupplierMaterialViewPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more SupplierMaterialViews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierMaterialViewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SupplierMaterialViews
     * const supplierMaterialViews = await prisma.supplierMaterialView.findMany()
     * 
     * // Get first 10 SupplierMaterialViews
     * const supplierMaterialViews = await prisma.supplierMaterialView.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const supplierMaterialViewWithIdOnly = await prisma.supplierMaterialView.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SupplierMaterialViewFindManyArgs>(args?: SelectSubset<T, SupplierMaterialViewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierMaterialViewPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a SupplierMaterialView.
     * @param {SupplierMaterialViewCreateArgs} args - Arguments to create a SupplierMaterialView.
     * @example
     * // Create one SupplierMaterialView
     * const SupplierMaterialView = await prisma.supplierMaterialView.create({
     *   data: {
     *     // ... data to create a SupplierMaterialView
     *   }
     * })
     * 
     */
    create<T extends SupplierMaterialViewCreateArgs>(args: SelectSubset<T, SupplierMaterialViewCreateArgs<ExtArgs>>): Prisma__SupplierMaterialViewClient<$Result.GetResult<Prisma.$SupplierMaterialViewPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many SupplierMaterialViews.
     * @param {SupplierMaterialViewCreateManyArgs} args - Arguments to create many SupplierMaterialViews.
     * @example
     * // Create many SupplierMaterialViews
     * const supplierMaterialView = await prisma.supplierMaterialView.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SupplierMaterialViewCreateManyArgs>(args?: SelectSubset<T, SupplierMaterialViewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SupplierMaterialView.
     * @param {SupplierMaterialViewDeleteArgs} args - Arguments to delete one SupplierMaterialView.
     * @example
     * // Delete one SupplierMaterialView
     * const SupplierMaterialView = await prisma.supplierMaterialView.delete({
     *   where: {
     *     // ... filter to delete one SupplierMaterialView
     *   }
     * })
     * 
     */
    delete<T extends SupplierMaterialViewDeleteArgs>(args: SelectSubset<T, SupplierMaterialViewDeleteArgs<ExtArgs>>): Prisma__SupplierMaterialViewClient<$Result.GetResult<Prisma.$SupplierMaterialViewPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one SupplierMaterialView.
     * @param {SupplierMaterialViewUpdateArgs} args - Arguments to update one SupplierMaterialView.
     * @example
     * // Update one SupplierMaterialView
     * const supplierMaterialView = await prisma.supplierMaterialView.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SupplierMaterialViewUpdateArgs>(args: SelectSubset<T, SupplierMaterialViewUpdateArgs<ExtArgs>>): Prisma__SupplierMaterialViewClient<$Result.GetResult<Prisma.$SupplierMaterialViewPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more SupplierMaterialViews.
     * @param {SupplierMaterialViewDeleteManyArgs} args - Arguments to filter SupplierMaterialViews to delete.
     * @example
     * // Delete a few SupplierMaterialViews
     * const { count } = await prisma.supplierMaterialView.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SupplierMaterialViewDeleteManyArgs>(args?: SelectSubset<T, SupplierMaterialViewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SupplierMaterialViews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierMaterialViewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SupplierMaterialViews
     * const supplierMaterialView = await prisma.supplierMaterialView.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SupplierMaterialViewUpdateManyArgs>(args: SelectSubset<T, SupplierMaterialViewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SupplierMaterialView.
     * @param {SupplierMaterialViewUpsertArgs} args - Arguments to update or create a SupplierMaterialView.
     * @example
     * // Update or create a SupplierMaterialView
     * const supplierMaterialView = await prisma.supplierMaterialView.upsert({
     *   create: {
     *     // ... data to create a SupplierMaterialView
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SupplierMaterialView we want to update
     *   }
     * })
     */
    upsert<T extends SupplierMaterialViewUpsertArgs>(args: SelectSubset<T, SupplierMaterialViewUpsertArgs<ExtArgs>>): Prisma__SupplierMaterialViewClient<$Result.GetResult<Prisma.$SupplierMaterialViewPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of SupplierMaterialViews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierMaterialViewCountArgs} args - Arguments to filter SupplierMaterialViews to count.
     * @example
     * // Count the number of SupplierMaterialViews
     * const count = await prisma.supplierMaterialView.count({
     *   where: {
     *     // ... the filter for the SupplierMaterialViews we want to count
     *   }
     * })
    **/
    count<T extends SupplierMaterialViewCountArgs>(
      args?: Subset<T, SupplierMaterialViewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupplierMaterialViewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SupplierMaterialView.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierMaterialViewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SupplierMaterialViewAggregateArgs>(args: Subset<T, SupplierMaterialViewAggregateArgs>): Prisma.PrismaPromise<GetSupplierMaterialViewAggregateType<T>>

    /**
     * Group by SupplierMaterialView.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierMaterialViewGroupByArgs} args - Group by arguments.
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
      T extends SupplierMaterialViewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SupplierMaterialViewGroupByArgs['orderBy'] }
        : { orderBy?: SupplierMaterialViewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SupplierMaterialViewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupplierMaterialViewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SupplierMaterialView model
   */
  readonly fields: SupplierMaterialViewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SupplierMaterialView.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SupplierMaterialViewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the SupplierMaterialView model
   */ 
  interface SupplierMaterialViewFieldRefs {
    readonly id: FieldRef<"SupplierMaterialView", 'Int'>
    readonly kode_vendor: FieldRef<"SupplierMaterialView", 'String'>
    readonly name_vendor: FieldRef<"SupplierMaterialView", 'String'>
    readonly material_code: FieldRef<"SupplierMaterialView", 'String'>
    readonly nama_material: FieldRef<"SupplierMaterialView", 'String'>
    readonly area: FieldRef<"SupplierMaterialView", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SupplierMaterialView findUnique
   */
  export type SupplierMaterialViewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierMaterialView
     */
    select?: SupplierMaterialViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierMaterialView
     */
    omit?: SupplierMaterialViewOmit<ExtArgs> | null
    /**
     * Filter, which SupplierMaterialView to fetch.
     */
    where: SupplierMaterialViewWhereUniqueInput
  }

  /**
   * SupplierMaterialView findUniqueOrThrow
   */
  export type SupplierMaterialViewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierMaterialView
     */
    select?: SupplierMaterialViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierMaterialView
     */
    omit?: SupplierMaterialViewOmit<ExtArgs> | null
    /**
     * Filter, which SupplierMaterialView to fetch.
     */
    where: SupplierMaterialViewWhereUniqueInput
  }

  /**
   * SupplierMaterialView findFirst
   */
  export type SupplierMaterialViewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierMaterialView
     */
    select?: SupplierMaterialViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierMaterialView
     */
    omit?: SupplierMaterialViewOmit<ExtArgs> | null
    /**
     * Filter, which SupplierMaterialView to fetch.
     */
    where?: SupplierMaterialViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupplierMaterialViews to fetch.
     */
    orderBy?: SupplierMaterialViewOrderByWithRelationInput | SupplierMaterialViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SupplierMaterialViews.
     */
    cursor?: SupplierMaterialViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupplierMaterialViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupplierMaterialViews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupplierMaterialViews.
     */
    distinct?: SupplierMaterialViewScalarFieldEnum | SupplierMaterialViewScalarFieldEnum[]
  }

  /**
   * SupplierMaterialView findFirstOrThrow
   */
  export type SupplierMaterialViewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierMaterialView
     */
    select?: SupplierMaterialViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierMaterialView
     */
    omit?: SupplierMaterialViewOmit<ExtArgs> | null
    /**
     * Filter, which SupplierMaterialView to fetch.
     */
    where?: SupplierMaterialViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupplierMaterialViews to fetch.
     */
    orderBy?: SupplierMaterialViewOrderByWithRelationInput | SupplierMaterialViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SupplierMaterialViews.
     */
    cursor?: SupplierMaterialViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupplierMaterialViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupplierMaterialViews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupplierMaterialViews.
     */
    distinct?: SupplierMaterialViewScalarFieldEnum | SupplierMaterialViewScalarFieldEnum[]
  }

  /**
   * SupplierMaterialView findMany
   */
  export type SupplierMaterialViewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierMaterialView
     */
    select?: SupplierMaterialViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierMaterialView
     */
    omit?: SupplierMaterialViewOmit<ExtArgs> | null
    /**
     * Filter, which SupplierMaterialViews to fetch.
     */
    where?: SupplierMaterialViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupplierMaterialViews to fetch.
     */
    orderBy?: SupplierMaterialViewOrderByWithRelationInput | SupplierMaterialViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SupplierMaterialViews.
     */
    cursor?: SupplierMaterialViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupplierMaterialViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupplierMaterialViews.
     */
    skip?: number
    distinct?: SupplierMaterialViewScalarFieldEnum | SupplierMaterialViewScalarFieldEnum[]
  }

  /**
   * SupplierMaterialView create
   */
  export type SupplierMaterialViewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierMaterialView
     */
    select?: SupplierMaterialViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierMaterialView
     */
    omit?: SupplierMaterialViewOmit<ExtArgs> | null
    /**
     * The data needed to create a SupplierMaterialView.
     */
    data?: XOR<SupplierMaterialViewCreateInput, SupplierMaterialViewUncheckedCreateInput>
  }

  /**
   * SupplierMaterialView createMany
   */
  export type SupplierMaterialViewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SupplierMaterialViews.
     */
    data: SupplierMaterialViewCreateManyInput | SupplierMaterialViewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SupplierMaterialView update
   */
  export type SupplierMaterialViewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierMaterialView
     */
    select?: SupplierMaterialViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierMaterialView
     */
    omit?: SupplierMaterialViewOmit<ExtArgs> | null
    /**
     * The data needed to update a SupplierMaterialView.
     */
    data: XOR<SupplierMaterialViewUpdateInput, SupplierMaterialViewUncheckedUpdateInput>
    /**
     * Choose, which SupplierMaterialView to update.
     */
    where: SupplierMaterialViewWhereUniqueInput
  }

  /**
   * SupplierMaterialView updateMany
   */
  export type SupplierMaterialViewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SupplierMaterialViews.
     */
    data: XOR<SupplierMaterialViewUpdateManyMutationInput, SupplierMaterialViewUncheckedUpdateManyInput>
    /**
     * Filter which SupplierMaterialViews to update
     */
    where?: SupplierMaterialViewWhereInput
    /**
     * Limit how many SupplierMaterialViews to update.
     */
    limit?: number
  }

  /**
   * SupplierMaterialView upsert
   */
  export type SupplierMaterialViewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierMaterialView
     */
    select?: SupplierMaterialViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierMaterialView
     */
    omit?: SupplierMaterialViewOmit<ExtArgs> | null
    /**
     * The filter to search for the SupplierMaterialView to update in case it exists.
     */
    where: SupplierMaterialViewWhereUniqueInput
    /**
     * In case the SupplierMaterialView found by the `where` argument doesn't exist, create a new SupplierMaterialView with this data.
     */
    create: XOR<SupplierMaterialViewCreateInput, SupplierMaterialViewUncheckedCreateInput>
    /**
     * In case the SupplierMaterialView was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SupplierMaterialViewUpdateInput, SupplierMaterialViewUncheckedUpdateInput>
  }

  /**
   * SupplierMaterialView delete
   */
  export type SupplierMaterialViewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierMaterialView
     */
    select?: SupplierMaterialViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierMaterialView
     */
    omit?: SupplierMaterialViewOmit<ExtArgs> | null
    /**
     * Filter which SupplierMaterialView to delete.
     */
    where: SupplierMaterialViewWhereUniqueInput
  }

  /**
   * SupplierMaterialView deleteMany
   */
  export type SupplierMaterialViewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SupplierMaterialViews to delete
     */
    where?: SupplierMaterialViewWhereInput
    /**
     * Limit how many SupplierMaterialViews to delete.
     */
    limit?: number
  }

  /**
   * SupplierMaterialView without action
   */
  export type SupplierMaterialViewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierMaterialView
     */
    select?: SupplierMaterialViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierMaterialView
     */
    omit?: SupplierMaterialViewOmit<ExtArgs> | null
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
   * Model TrSupplierAudit
   */

  export type AggregateTrSupplierAudit = {
    _count: TrSupplierAuditCountAggregateOutputType | null
    _avg: TrSupplierAuditAvgAggregateOutputType | null
    _sum: TrSupplierAuditSumAggregateOutputType | null
    _min: TrSupplierAuditMinAggregateOutputType | null
    _max: TrSupplierAuditMaxAggregateOutputType | null
  }

  export type TrSupplierAuditAvgAggregateOutputType = {
    id: number | null
    id_supplier: number | null
    id_material: number | null
    score: number | null
    status: number | null
    evidence_size: number | null
    evidence_widht: number | null
    evidence_height: number | null
  }

  export type TrSupplierAuditSumAggregateOutputType = {
    id: number | null
    id_supplier: number | null
    id_material: number | null
    score: number | null
    status: number | null
    evidence_size: number | null
    evidence_widht: number | null
    evidence_height: number | null
  }

  export type TrSupplierAuditMinAggregateOutputType = {
    id: number | null
    plan_type: string | null
    plant: string | null
    date_plan: Date | null
    id_supplier: number | null
    code_supplier: string | null
    city: string | null
    id_material: number | null
    date_complete: Date | null
    score: number | null
    status: number | null
    evidence: string | null
    evidence_type: string | null
    evidence_size: number | null
    evidence_widht: number | null
    evidence_height: number | null
    improvment: string | null
  }

  export type TrSupplierAuditMaxAggregateOutputType = {
    id: number | null
    plan_type: string | null
    plant: string | null
    date_plan: Date | null
    id_supplier: number | null
    code_supplier: string | null
    city: string | null
    id_material: number | null
    date_complete: Date | null
    score: number | null
    status: number | null
    evidence: string | null
    evidence_type: string | null
    evidence_size: number | null
    evidence_widht: number | null
    evidence_height: number | null
    improvment: string | null
  }

  export type TrSupplierAuditCountAggregateOutputType = {
    id: number
    plan_type: number
    plant: number
    date_plan: number
    id_supplier: number
    code_supplier: number
    city: number
    id_material: number
    date_complete: number
    score: number
    status: number
    evidence: number
    evidence_type: number
    evidence_size: number
    evidence_widht: number
    evidence_height: number
    improvment: number
    _all: number
  }


  export type TrSupplierAuditAvgAggregateInputType = {
    id?: true
    id_supplier?: true
    id_material?: true
    score?: true
    status?: true
    evidence_size?: true
    evidence_widht?: true
    evidence_height?: true
  }

  export type TrSupplierAuditSumAggregateInputType = {
    id?: true
    id_supplier?: true
    id_material?: true
    score?: true
    status?: true
    evidence_size?: true
    evidence_widht?: true
    evidence_height?: true
  }

  export type TrSupplierAuditMinAggregateInputType = {
    id?: true
    plan_type?: true
    plant?: true
    date_plan?: true
    id_supplier?: true
    code_supplier?: true
    city?: true
    id_material?: true
    date_complete?: true
    score?: true
    status?: true
    evidence?: true
    evidence_type?: true
    evidence_size?: true
    evidence_widht?: true
    evidence_height?: true
    improvment?: true
  }

  export type TrSupplierAuditMaxAggregateInputType = {
    id?: true
    plan_type?: true
    plant?: true
    date_plan?: true
    id_supplier?: true
    code_supplier?: true
    city?: true
    id_material?: true
    date_complete?: true
    score?: true
    status?: true
    evidence?: true
    evidence_type?: true
    evidence_size?: true
    evidence_widht?: true
    evidence_height?: true
    improvment?: true
  }

  export type TrSupplierAuditCountAggregateInputType = {
    id?: true
    plan_type?: true
    plant?: true
    date_plan?: true
    id_supplier?: true
    code_supplier?: true
    city?: true
    id_material?: true
    date_complete?: true
    score?: true
    status?: true
    evidence?: true
    evidence_type?: true
    evidence_size?: true
    evidence_widht?: true
    evidence_height?: true
    improvment?: true
    _all?: true
  }

  export type TrSupplierAuditAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrSupplierAudit to aggregate.
     */
    where?: TrSupplierAuditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrSupplierAudits to fetch.
     */
    orderBy?: TrSupplierAuditOrderByWithRelationInput | TrSupplierAuditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrSupplierAuditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrSupplierAudits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrSupplierAudits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TrSupplierAudits
    **/
    _count?: true | TrSupplierAuditCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TrSupplierAuditAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TrSupplierAuditSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrSupplierAuditMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrSupplierAuditMaxAggregateInputType
  }

  export type GetTrSupplierAuditAggregateType<T extends TrSupplierAuditAggregateArgs> = {
        [P in keyof T & keyof AggregateTrSupplierAudit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrSupplierAudit[P]>
      : GetScalarType<T[P], AggregateTrSupplierAudit[P]>
  }




  export type TrSupplierAuditGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrSupplierAuditWhereInput
    orderBy?: TrSupplierAuditOrderByWithAggregationInput | TrSupplierAuditOrderByWithAggregationInput[]
    by: TrSupplierAuditScalarFieldEnum[] | TrSupplierAuditScalarFieldEnum
    having?: TrSupplierAuditScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrSupplierAuditCountAggregateInputType | true
    _avg?: TrSupplierAuditAvgAggregateInputType
    _sum?: TrSupplierAuditSumAggregateInputType
    _min?: TrSupplierAuditMinAggregateInputType
    _max?: TrSupplierAuditMaxAggregateInputType
  }

  export type TrSupplierAuditGroupByOutputType = {
    id: number
    plan_type: string | null
    plant: string | null
    date_plan: Date | null
    id_supplier: number | null
    code_supplier: string | null
    city: string | null
    id_material: number | null
    date_complete: Date | null
    score: number | null
    status: number | null
    evidence: string | null
    evidence_type: string | null
    evidence_size: number | null
    evidence_widht: number | null
    evidence_height: number | null
    improvment: string | null
    _count: TrSupplierAuditCountAggregateOutputType | null
    _avg: TrSupplierAuditAvgAggregateOutputType | null
    _sum: TrSupplierAuditSumAggregateOutputType | null
    _min: TrSupplierAuditMinAggregateOutputType | null
    _max: TrSupplierAuditMaxAggregateOutputType | null
  }

  type GetTrSupplierAuditGroupByPayload<T extends TrSupplierAuditGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrSupplierAuditGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrSupplierAuditGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrSupplierAuditGroupByOutputType[P]>
            : GetScalarType<T[P], TrSupplierAuditGroupByOutputType[P]>
        }
      >
    >


  export type TrSupplierAuditSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    plan_type?: boolean
    plant?: boolean
    date_plan?: boolean
    id_supplier?: boolean
    code_supplier?: boolean
    city?: boolean
    id_material?: boolean
    date_complete?: boolean
    score?: boolean
    status?: boolean
    evidence?: boolean
    evidence_type?: boolean
    evidence_size?: boolean
    evidence_widht?: boolean
    evidence_height?: boolean
    improvment?: boolean
  }, ExtArgs["result"]["trSupplierAudit"]>



  export type TrSupplierAuditSelectScalar = {
    id?: boolean
    plan_type?: boolean
    plant?: boolean
    date_plan?: boolean
    id_supplier?: boolean
    code_supplier?: boolean
    city?: boolean
    id_material?: boolean
    date_complete?: boolean
    score?: boolean
    status?: boolean
    evidence?: boolean
    evidence_type?: boolean
    evidence_size?: boolean
    evidence_widht?: boolean
    evidence_height?: boolean
    improvment?: boolean
  }

  export type TrSupplierAuditOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "plan_type" | "plant" | "date_plan" | "id_supplier" | "code_supplier" | "city" | "id_material" | "date_complete" | "score" | "status" | "evidence" | "evidence_type" | "evidence_size" | "evidence_widht" | "evidence_height" | "improvment", ExtArgs["result"]["trSupplierAudit"]>

  export type $TrSupplierAuditPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TrSupplierAudit"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      plan_type: string | null
      plant: string | null
      date_plan: Date | null
      id_supplier: number | null
      code_supplier: string | null
      city: string | null
      id_material: number | null
      date_complete: Date | null
      score: number | null
      status: number | null
      evidence: string | null
      evidence_type: string | null
      evidence_size: number | null
      evidence_widht: number | null
      evidence_height: number | null
      improvment: string | null
    }, ExtArgs["result"]["trSupplierAudit"]>
    composites: {}
  }

  type TrSupplierAuditGetPayload<S extends boolean | null | undefined | TrSupplierAuditDefaultArgs> = $Result.GetResult<Prisma.$TrSupplierAuditPayload, S>

  type TrSupplierAuditCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TrSupplierAuditFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TrSupplierAuditCountAggregateInputType | true
    }

  export interface TrSupplierAuditDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TrSupplierAudit'], meta: { name: 'TrSupplierAudit' } }
    /**
     * Find zero or one TrSupplierAudit that matches the filter.
     * @param {TrSupplierAuditFindUniqueArgs} args - Arguments to find a TrSupplierAudit
     * @example
     * // Get one TrSupplierAudit
     * const trSupplierAudit = await prisma.trSupplierAudit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TrSupplierAuditFindUniqueArgs>(args: SelectSubset<T, TrSupplierAuditFindUniqueArgs<ExtArgs>>): Prisma__TrSupplierAuditClient<$Result.GetResult<Prisma.$TrSupplierAuditPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one TrSupplierAudit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TrSupplierAuditFindUniqueOrThrowArgs} args - Arguments to find a TrSupplierAudit
     * @example
     * // Get one TrSupplierAudit
     * const trSupplierAudit = await prisma.trSupplierAudit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TrSupplierAuditFindUniqueOrThrowArgs>(args: SelectSubset<T, TrSupplierAuditFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TrSupplierAuditClient<$Result.GetResult<Prisma.$TrSupplierAuditPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first TrSupplierAudit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrSupplierAuditFindFirstArgs} args - Arguments to find a TrSupplierAudit
     * @example
     * // Get one TrSupplierAudit
     * const trSupplierAudit = await prisma.trSupplierAudit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TrSupplierAuditFindFirstArgs>(args?: SelectSubset<T, TrSupplierAuditFindFirstArgs<ExtArgs>>): Prisma__TrSupplierAuditClient<$Result.GetResult<Prisma.$TrSupplierAuditPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first TrSupplierAudit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrSupplierAuditFindFirstOrThrowArgs} args - Arguments to find a TrSupplierAudit
     * @example
     * // Get one TrSupplierAudit
     * const trSupplierAudit = await prisma.trSupplierAudit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TrSupplierAuditFindFirstOrThrowArgs>(args?: SelectSubset<T, TrSupplierAuditFindFirstOrThrowArgs<ExtArgs>>): Prisma__TrSupplierAuditClient<$Result.GetResult<Prisma.$TrSupplierAuditPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more TrSupplierAudits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrSupplierAuditFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TrSupplierAudits
     * const trSupplierAudits = await prisma.trSupplierAudit.findMany()
     * 
     * // Get first 10 TrSupplierAudits
     * const trSupplierAudits = await prisma.trSupplierAudit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trSupplierAuditWithIdOnly = await prisma.trSupplierAudit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TrSupplierAuditFindManyArgs>(args?: SelectSubset<T, TrSupplierAuditFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrSupplierAuditPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a TrSupplierAudit.
     * @param {TrSupplierAuditCreateArgs} args - Arguments to create a TrSupplierAudit.
     * @example
     * // Create one TrSupplierAudit
     * const TrSupplierAudit = await prisma.trSupplierAudit.create({
     *   data: {
     *     // ... data to create a TrSupplierAudit
     *   }
     * })
     * 
     */
    create<T extends TrSupplierAuditCreateArgs>(args: SelectSubset<T, TrSupplierAuditCreateArgs<ExtArgs>>): Prisma__TrSupplierAuditClient<$Result.GetResult<Prisma.$TrSupplierAuditPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many TrSupplierAudits.
     * @param {TrSupplierAuditCreateManyArgs} args - Arguments to create many TrSupplierAudits.
     * @example
     * // Create many TrSupplierAudits
     * const trSupplierAudit = await prisma.trSupplierAudit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TrSupplierAuditCreateManyArgs>(args?: SelectSubset<T, TrSupplierAuditCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TrSupplierAudit.
     * @param {TrSupplierAuditDeleteArgs} args - Arguments to delete one TrSupplierAudit.
     * @example
     * // Delete one TrSupplierAudit
     * const TrSupplierAudit = await prisma.trSupplierAudit.delete({
     *   where: {
     *     // ... filter to delete one TrSupplierAudit
     *   }
     * })
     * 
     */
    delete<T extends TrSupplierAuditDeleteArgs>(args: SelectSubset<T, TrSupplierAuditDeleteArgs<ExtArgs>>): Prisma__TrSupplierAuditClient<$Result.GetResult<Prisma.$TrSupplierAuditPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one TrSupplierAudit.
     * @param {TrSupplierAuditUpdateArgs} args - Arguments to update one TrSupplierAudit.
     * @example
     * // Update one TrSupplierAudit
     * const trSupplierAudit = await prisma.trSupplierAudit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TrSupplierAuditUpdateArgs>(args: SelectSubset<T, TrSupplierAuditUpdateArgs<ExtArgs>>): Prisma__TrSupplierAuditClient<$Result.GetResult<Prisma.$TrSupplierAuditPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more TrSupplierAudits.
     * @param {TrSupplierAuditDeleteManyArgs} args - Arguments to filter TrSupplierAudits to delete.
     * @example
     * // Delete a few TrSupplierAudits
     * const { count } = await prisma.trSupplierAudit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TrSupplierAuditDeleteManyArgs>(args?: SelectSubset<T, TrSupplierAuditDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrSupplierAudits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrSupplierAuditUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TrSupplierAudits
     * const trSupplierAudit = await prisma.trSupplierAudit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TrSupplierAuditUpdateManyArgs>(args: SelectSubset<T, TrSupplierAuditUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TrSupplierAudit.
     * @param {TrSupplierAuditUpsertArgs} args - Arguments to update or create a TrSupplierAudit.
     * @example
     * // Update or create a TrSupplierAudit
     * const trSupplierAudit = await prisma.trSupplierAudit.upsert({
     *   create: {
     *     // ... data to create a TrSupplierAudit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TrSupplierAudit we want to update
     *   }
     * })
     */
    upsert<T extends TrSupplierAuditUpsertArgs>(args: SelectSubset<T, TrSupplierAuditUpsertArgs<ExtArgs>>): Prisma__TrSupplierAuditClient<$Result.GetResult<Prisma.$TrSupplierAuditPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of TrSupplierAudits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrSupplierAuditCountArgs} args - Arguments to filter TrSupplierAudits to count.
     * @example
     * // Count the number of TrSupplierAudits
     * const count = await prisma.trSupplierAudit.count({
     *   where: {
     *     // ... the filter for the TrSupplierAudits we want to count
     *   }
     * })
    **/
    count<T extends TrSupplierAuditCountArgs>(
      args?: Subset<T, TrSupplierAuditCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrSupplierAuditCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TrSupplierAudit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrSupplierAuditAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TrSupplierAuditAggregateArgs>(args: Subset<T, TrSupplierAuditAggregateArgs>): Prisma.PrismaPromise<GetTrSupplierAuditAggregateType<T>>

    /**
     * Group by TrSupplierAudit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrSupplierAuditGroupByArgs} args - Group by arguments.
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
      T extends TrSupplierAuditGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrSupplierAuditGroupByArgs['orderBy'] }
        : { orderBy?: TrSupplierAuditGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TrSupplierAuditGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrSupplierAuditGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TrSupplierAudit model
   */
  readonly fields: TrSupplierAuditFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TrSupplierAudit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrSupplierAuditClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the TrSupplierAudit model
   */ 
  interface TrSupplierAuditFieldRefs {
    readonly id: FieldRef<"TrSupplierAudit", 'Int'>
    readonly plan_type: FieldRef<"TrSupplierAudit", 'String'>
    readonly plant: FieldRef<"TrSupplierAudit", 'String'>
    readonly date_plan: FieldRef<"TrSupplierAudit", 'DateTime'>
    readonly id_supplier: FieldRef<"TrSupplierAudit", 'Int'>
    readonly code_supplier: FieldRef<"TrSupplierAudit", 'String'>
    readonly city: FieldRef<"TrSupplierAudit", 'String'>
    readonly id_material: FieldRef<"TrSupplierAudit", 'Int'>
    readonly date_complete: FieldRef<"TrSupplierAudit", 'DateTime'>
    readonly score: FieldRef<"TrSupplierAudit", 'Int'>
    readonly status: FieldRef<"TrSupplierAudit", 'Int'>
    readonly evidence: FieldRef<"TrSupplierAudit", 'String'>
    readonly evidence_type: FieldRef<"TrSupplierAudit", 'String'>
    readonly evidence_size: FieldRef<"TrSupplierAudit", 'Int'>
    readonly evidence_widht: FieldRef<"TrSupplierAudit", 'Int'>
    readonly evidence_height: FieldRef<"TrSupplierAudit", 'Int'>
    readonly improvment: FieldRef<"TrSupplierAudit", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TrSupplierAudit findUnique
   */
  export type TrSupplierAuditFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrSupplierAudit
     */
    select?: TrSupplierAuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrSupplierAudit
     */
    omit?: TrSupplierAuditOmit<ExtArgs> | null
    /**
     * Filter, which TrSupplierAudit to fetch.
     */
    where: TrSupplierAuditWhereUniqueInput
  }

  /**
   * TrSupplierAudit findUniqueOrThrow
   */
  export type TrSupplierAuditFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrSupplierAudit
     */
    select?: TrSupplierAuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrSupplierAudit
     */
    omit?: TrSupplierAuditOmit<ExtArgs> | null
    /**
     * Filter, which TrSupplierAudit to fetch.
     */
    where: TrSupplierAuditWhereUniqueInput
  }

  /**
   * TrSupplierAudit findFirst
   */
  export type TrSupplierAuditFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrSupplierAudit
     */
    select?: TrSupplierAuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrSupplierAudit
     */
    omit?: TrSupplierAuditOmit<ExtArgs> | null
    /**
     * Filter, which TrSupplierAudit to fetch.
     */
    where?: TrSupplierAuditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrSupplierAudits to fetch.
     */
    orderBy?: TrSupplierAuditOrderByWithRelationInput | TrSupplierAuditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrSupplierAudits.
     */
    cursor?: TrSupplierAuditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrSupplierAudits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrSupplierAudits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrSupplierAudits.
     */
    distinct?: TrSupplierAuditScalarFieldEnum | TrSupplierAuditScalarFieldEnum[]
  }

  /**
   * TrSupplierAudit findFirstOrThrow
   */
  export type TrSupplierAuditFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrSupplierAudit
     */
    select?: TrSupplierAuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrSupplierAudit
     */
    omit?: TrSupplierAuditOmit<ExtArgs> | null
    /**
     * Filter, which TrSupplierAudit to fetch.
     */
    where?: TrSupplierAuditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrSupplierAudits to fetch.
     */
    orderBy?: TrSupplierAuditOrderByWithRelationInput | TrSupplierAuditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrSupplierAudits.
     */
    cursor?: TrSupplierAuditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrSupplierAudits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrSupplierAudits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrSupplierAudits.
     */
    distinct?: TrSupplierAuditScalarFieldEnum | TrSupplierAuditScalarFieldEnum[]
  }

  /**
   * TrSupplierAudit findMany
   */
  export type TrSupplierAuditFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrSupplierAudit
     */
    select?: TrSupplierAuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrSupplierAudit
     */
    omit?: TrSupplierAuditOmit<ExtArgs> | null
    /**
     * Filter, which TrSupplierAudits to fetch.
     */
    where?: TrSupplierAuditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrSupplierAudits to fetch.
     */
    orderBy?: TrSupplierAuditOrderByWithRelationInput | TrSupplierAuditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TrSupplierAudits.
     */
    cursor?: TrSupplierAuditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrSupplierAudits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrSupplierAudits.
     */
    skip?: number
    distinct?: TrSupplierAuditScalarFieldEnum | TrSupplierAuditScalarFieldEnum[]
  }

  /**
   * TrSupplierAudit create
   */
  export type TrSupplierAuditCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrSupplierAudit
     */
    select?: TrSupplierAuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrSupplierAudit
     */
    omit?: TrSupplierAuditOmit<ExtArgs> | null
    /**
     * The data needed to create a TrSupplierAudit.
     */
    data?: XOR<TrSupplierAuditCreateInput, TrSupplierAuditUncheckedCreateInput>
  }

  /**
   * TrSupplierAudit createMany
   */
  export type TrSupplierAuditCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TrSupplierAudits.
     */
    data: TrSupplierAuditCreateManyInput | TrSupplierAuditCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TrSupplierAudit update
   */
  export type TrSupplierAuditUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrSupplierAudit
     */
    select?: TrSupplierAuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrSupplierAudit
     */
    omit?: TrSupplierAuditOmit<ExtArgs> | null
    /**
     * The data needed to update a TrSupplierAudit.
     */
    data: XOR<TrSupplierAuditUpdateInput, TrSupplierAuditUncheckedUpdateInput>
    /**
     * Choose, which TrSupplierAudit to update.
     */
    where: TrSupplierAuditWhereUniqueInput
  }

  /**
   * TrSupplierAudit updateMany
   */
  export type TrSupplierAuditUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TrSupplierAudits.
     */
    data: XOR<TrSupplierAuditUpdateManyMutationInput, TrSupplierAuditUncheckedUpdateManyInput>
    /**
     * Filter which TrSupplierAudits to update
     */
    where?: TrSupplierAuditWhereInput
    /**
     * Limit how many TrSupplierAudits to update.
     */
    limit?: number
  }

  /**
   * TrSupplierAudit upsert
   */
  export type TrSupplierAuditUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrSupplierAudit
     */
    select?: TrSupplierAuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrSupplierAudit
     */
    omit?: TrSupplierAuditOmit<ExtArgs> | null
    /**
     * The filter to search for the TrSupplierAudit to update in case it exists.
     */
    where: TrSupplierAuditWhereUniqueInput
    /**
     * In case the TrSupplierAudit found by the `where` argument doesn't exist, create a new TrSupplierAudit with this data.
     */
    create: XOR<TrSupplierAuditCreateInput, TrSupplierAuditUncheckedCreateInput>
    /**
     * In case the TrSupplierAudit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrSupplierAuditUpdateInput, TrSupplierAuditUncheckedUpdateInput>
  }

  /**
   * TrSupplierAudit delete
   */
  export type TrSupplierAuditDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrSupplierAudit
     */
    select?: TrSupplierAuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrSupplierAudit
     */
    omit?: TrSupplierAuditOmit<ExtArgs> | null
    /**
     * Filter which TrSupplierAudit to delete.
     */
    where: TrSupplierAuditWhereUniqueInput
  }

  /**
   * TrSupplierAudit deleteMany
   */
  export type TrSupplierAuditDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrSupplierAudits to delete
     */
    where?: TrSupplierAuditWhereInput
    /**
     * Limit how many TrSupplierAudits to delete.
     */
    limit?: number
  }

  /**
   * TrSupplierAudit without action
   */
  export type TrSupplierAuditDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrSupplierAudit
     */
    select?: TrSupplierAuditSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrSupplierAudit
     */
    omit?: TrSupplierAuditOmit<ExtArgs> | null
  }


  /**
   * Model AbnormalityHistorical
   */

  export type AggregateAbnormalityHistorical = {
    _count: AbnormalityHistoricalCountAggregateOutputType | null
    _avg: AbnormalityHistoricalAvgAggregateOutputType | null
    _sum: AbnormalityHistoricalSumAggregateOutputType | null
    _min: AbnormalityHistoricalMinAggregateOutputType | null
    _max: AbnormalityHistoricalMaxAggregateOutputType | null
  }

  export type AbnormalityHistoricalAvgAggregateOutputType = {
    total_case: number | null
  }

  export type AbnormalityHistoricalSumAggregateOutputType = {
    total_case: number | null
  }

  export type AbnormalityHistoricalMinAggregateOutputType = {
    kode_vendor: string | null
    abnormal: string | null
    total_case: number | null
  }

  export type AbnormalityHistoricalMaxAggregateOutputType = {
    kode_vendor: string | null
    abnormal: string | null
    total_case: number | null
  }

  export type AbnormalityHistoricalCountAggregateOutputType = {
    kode_vendor: number
    abnormal: number
    total_case: number
    _all: number
  }


  export type AbnormalityHistoricalAvgAggregateInputType = {
    total_case?: true
  }

  export type AbnormalityHistoricalSumAggregateInputType = {
    total_case?: true
  }

  export type AbnormalityHistoricalMinAggregateInputType = {
    kode_vendor?: true
    abnormal?: true
    total_case?: true
  }

  export type AbnormalityHistoricalMaxAggregateInputType = {
    kode_vendor?: true
    abnormal?: true
    total_case?: true
  }

  export type AbnormalityHistoricalCountAggregateInputType = {
    kode_vendor?: true
    abnormal?: true
    total_case?: true
    _all?: true
  }

  export type AbnormalityHistoricalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AbnormalityHistorical to aggregate.
     */
    where?: AbnormalityHistoricalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AbnormalityHistoricals to fetch.
     */
    orderBy?: AbnormalityHistoricalOrderByWithRelationInput | AbnormalityHistoricalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AbnormalityHistoricalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AbnormalityHistoricals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AbnormalityHistoricals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AbnormalityHistoricals
    **/
    _count?: true | AbnormalityHistoricalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AbnormalityHistoricalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AbnormalityHistoricalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AbnormalityHistoricalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AbnormalityHistoricalMaxAggregateInputType
  }

  export type GetAbnormalityHistoricalAggregateType<T extends AbnormalityHistoricalAggregateArgs> = {
        [P in keyof T & keyof AggregateAbnormalityHistorical]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAbnormalityHistorical[P]>
      : GetScalarType<T[P], AggregateAbnormalityHistorical[P]>
  }




  export type AbnormalityHistoricalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AbnormalityHistoricalWhereInput
    orderBy?: AbnormalityHistoricalOrderByWithAggregationInput | AbnormalityHistoricalOrderByWithAggregationInput[]
    by: AbnormalityHistoricalScalarFieldEnum[] | AbnormalityHistoricalScalarFieldEnum
    having?: AbnormalityHistoricalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AbnormalityHistoricalCountAggregateInputType | true
    _avg?: AbnormalityHistoricalAvgAggregateInputType
    _sum?: AbnormalityHistoricalSumAggregateInputType
    _min?: AbnormalityHistoricalMinAggregateInputType
    _max?: AbnormalityHistoricalMaxAggregateInputType
  }

  export type AbnormalityHistoricalGroupByOutputType = {
    kode_vendor: string
    abnormal: string
    total_case: number | null
    _count: AbnormalityHistoricalCountAggregateOutputType | null
    _avg: AbnormalityHistoricalAvgAggregateOutputType | null
    _sum: AbnormalityHistoricalSumAggregateOutputType | null
    _min: AbnormalityHistoricalMinAggregateOutputType | null
    _max: AbnormalityHistoricalMaxAggregateOutputType | null
  }

  type GetAbnormalityHistoricalGroupByPayload<T extends AbnormalityHistoricalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AbnormalityHistoricalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AbnormalityHistoricalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AbnormalityHistoricalGroupByOutputType[P]>
            : GetScalarType<T[P], AbnormalityHistoricalGroupByOutputType[P]>
        }
      >
    >


  export type AbnormalityHistoricalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    kode_vendor?: boolean
    abnormal?: boolean
    total_case?: boolean
  }, ExtArgs["result"]["abnormalityHistorical"]>



  export type AbnormalityHistoricalSelectScalar = {
    kode_vendor?: boolean
    abnormal?: boolean
    total_case?: boolean
  }

  export type AbnormalityHistoricalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"kode_vendor" | "abnormal" | "total_case", ExtArgs["result"]["abnormalityHistorical"]>

  export type $AbnormalityHistoricalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AbnormalityHistorical"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      kode_vendor: string
      abnormal: string
      total_case: number | null
    }, ExtArgs["result"]["abnormalityHistorical"]>
    composites: {}
  }

  type AbnormalityHistoricalGetPayload<S extends boolean | null | undefined | AbnormalityHistoricalDefaultArgs> = $Result.GetResult<Prisma.$AbnormalityHistoricalPayload, S>

  type AbnormalityHistoricalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AbnormalityHistoricalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AbnormalityHistoricalCountAggregateInputType | true
    }

  export interface AbnormalityHistoricalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AbnormalityHistorical'], meta: { name: 'AbnormalityHistorical' } }
    /**
     * Find zero or one AbnormalityHistorical that matches the filter.
     * @param {AbnormalityHistoricalFindUniqueArgs} args - Arguments to find a AbnormalityHistorical
     * @example
     * // Get one AbnormalityHistorical
     * const abnormalityHistorical = await prisma.abnormalityHistorical.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AbnormalityHistoricalFindUniqueArgs>(args: SelectSubset<T, AbnormalityHistoricalFindUniqueArgs<ExtArgs>>): Prisma__AbnormalityHistoricalClient<$Result.GetResult<Prisma.$AbnormalityHistoricalPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one AbnormalityHistorical that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AbnormalityHistoricalFindUniqueOrThrowArgs} args - Arguments to find a AbnormalityHistorical
     * @example
     * // Get one AbnormalityHistorical
     * const abnormalityHistorical = await prisma.abnormalityHistorical.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AbnormalityHistoricalFindUniqueOrThrowArgs>(args: SelectSubset<T, AbnormalityHistoricalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AbnormalityHistoricalClient<$Result.GetResult<Prisma.$AbnormalityHistoricalPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first AbnormalityHistorical that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbnormalityHistoricalFindFirstArgs} args - Arguments to find a AbnormalityHistorical
     * @example
     * // Get one AbnormalityHistorical
     * const abnormalityHistorical = await prisma.abnormalityHistorical.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AbnormalityHistoricalFindFirstArgs>(args?: SelectSubset<T, AbnormalityHistoricalFindFirstArgs<ExtArgs>>): Prisma__AbnormalityHistoricalClient<$Result.GetResult<Prisma.$AbnormalityHistoricalPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first AbnormalityHistorical that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbnormalityHistoricalFindFirstOrThrowArgs} args - Arguments to find a AbnormalityHistorical
     * @example
     * // Get one AbnormalityHistorical
     * const abnormalityHistorical = await prisma.abnormalityHistorical.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AbnormalityHistoricalFindFirstOrThrowArgs>(args?: SelectSubset<T, AbnormalityHistoricalFindFirstOrThrowArgs<ExtArgs>>): Prisma__AbnormalityHistoricalClient<$Result.GetResult<Prisma.$AbnormalityHistoricalPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more AbnormalityHistoricals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbnormalityHistoricalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AbnormalityHistoricals
     * const abnormalityHistoricals = await prisma.abnormalityHistorical.findMany()
     * 
     * // Get first 10 AbnormalityHistoricals
     * const abnormalityHistoricals = await prisma.abnormalityHistorical.findMany({ take: 10 })
     * 
     * // Only select the `kode_vendor`
     * const abnormalityHistoricalWithKode_vendorOnly = await prisma.abnormalityHistorical.findMany({ select: { kode_vendor: true } })
     * 
     */
    findMany<T extends AbnormalityHistoricalFindManyArgs>(args?: SelectSubset<T, AbnormalityHistoricalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AbnormalityHistoricalPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a AbnormalityHistorical.
     * @param {AbnormalityHistoricalCreateArgs} args - Arguments to create a AbnormalityHistorical.
     * @example
     * // Create one AbnormalityHistorical
     * const AbnormalityHistorical = await prisma.abnormalityHistorical.create({
     *   data: {
     *     // ... data to create a AbnormalityHistorical
     *   }
     * })
     * 
     */
    create<T extends AbnormalityHistoricalCreateArgs>(args: SelectSubset<T, AbnormalityHistoricalCreateArgs<ExtArgs>>): Prisma__AbnormalityHistoricalClient<$Result.GetResult<Prisma.$AbnormalityHistoricalPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many AbnormalityHistoricals.
     * @param {AbnormalityHistoricalCreateManyArgs} args - Arguments to create many AbnormalityHistoricals.
     * @example
     * // Create many AbnormalityHistoricals
     * const abnormalityHistorical = await prisma.abnormalityHistorical.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AbnormalityHistoricalCreateManyArgs>(args?: SelectSubset<T, AbnormalityHistoricalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AbnormalityHistorical.
     * @param {AbnormalityHistoricalDeleteArgs} args - Arguments to delete one AbnormalityHistorical.
     * @example
     * // Delete one AbnormalityHistorical
     * const AbnormalityHistorical = await prisma.abnormalityHistorical.delete({
     *   where: {
     *     // ... filter to delete one AbnormalityHistorical
     *   }
     * })
     * 
     */
    delete<T extends AbnormalityHistoricalDeleteArgs>(args: SelectSubset<T, AbnormalityHistoricalDeleteArgs<ExtArgs>>): Prisma__AbnormalityHistoricalClient<$Result.GetResult<Prisma.$AbnormalityHistoricalPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one AbnormalityHistorical.
     * @param {AbnormalityHistoricalUpdateArgs} args - Arguments to update one AbnormalityHistorical.
     * @example
     * // Update one AbnormalityHistorical
     * const abnormalityHistorical = await prisma.abnormalityHistorical.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AbnormalityHistoricalUpdateArgs>(args: SelectSubset<T, AbnormalityHistoricalUpdateArgs<ExtArgs>>): Prisma__AbnormalityHistoricalClient<$Result.GetResult<Prisma.$AbnormalityHistoricalPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more AbnormalityHistoricals.
     * @param {AbnormalityHistoricalDeleteManyArgs} args - Arguments to filter AbnormalityHistoricals to delete.
     * @example
     * // Delete a few AbnormalityHistoricals
     * const { count } = await prisma.abnormalityHistorical.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AbnormalityHistoricalDeleteManyArgs>(args?: SelectSubset<T, AbnormalityHistoricalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AbnormalityHistoricals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbnormalityHistoricalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AbnormalityHistoricals
     * const abnormalityHistorical = await prisma.abnormalityHistorical.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AbnormalityHistoricalUpdateManyArgs>(args: SelectSubset<T, AbnormalityHistoricalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AbnormalityHistorical.
     * @param {AbnormalityHistoricalUpsertArgs} args - Arguments to update or create a AbnormalityHistorical.
     * @example
     * // Update or create a AbnormalityHistorical
     * const abnormalityHistorical = await prisma.abnormalityHistorical.upsert({
     *   create: {
     *     // ... data to create a AbnormalityHistorical
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AbnormalityHistorical we want to update
     *   }
     * })
     */
    upsert<T extends AbnormalityHistoricalUpsertArgs>(args: SelectSubset<T, AbnormalityHistoricalUpsertArgs<ExtArgs>>): Prisma__AbnormalityHistoricalClient<$Result.GetResult<Prisma.$AbnormalityHistoricalPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of AbnormalityHistoricals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbnormalityHistoricalCountArgs} args - Arguments to filter AbnormalityHistoricals to count.
     * @example
     * // Count the number of AbnormalityHistoricals
     * const count = await prisma.abnormalityHistorical.count({
     *   where: {
     *     // ... the filter for the AbnormalityHistoricals we want to count
     *   }
     * })
    **/
    count<T extends AbnormalityHistoricalCountArgs>(
      args?: Subset<T, AbnormalityHistoricalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AbnormalityHistoricalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AbnormalityHistorical.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbnormalityHistoricalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AbnormalityHistoricalAggregateArgs>(args: Subset<T, AbnormalityHistoricalAggregateArgs>): Prisma.PrismaPromise<GetAbnormalityHistoricalAggregateType<T>>

    /**
     * Group by AbnormalityHistorical.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbnormalityHistoricalGroupByArgs} args - Group by arguments.
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
      T extends AbnormalityHistoricalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AbnormalityHistoricalGroupByArgs['orderBy'] }
        : { orderBy?: AbnormalityHistoricalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AbnormalityHistoricalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAbnormalityHistoricalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AbnormalityHistorical model
   */
  readonly fields: AbnormalityHistoricalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AbnormalityHistorical.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AbnormalityHistoricalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the AbnormalityHistorical model
   */ 
  interface AbnormalityHistoricalFieldRefs {
    readonly kode_vendor: FieldRef<"AbnormalityHistorical", 'String'>
    readonly abnormal: FieldRef<"AbnormalityHistorical", 'String'>
    readonly total_case: FieldRef<"AbnormalityHistorical", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * AbnormalityHistorical findUnique
   */
  export type AbnormalityHistoricalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbnormalityHistorical
     */
    select?: AbnormalityHistoricalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AbnormalityHistorical
     */
    omit?: AbnormalityHistoricalOmit<ExtArgs> | null
    /**
     * Filter, which AbnormalityHistorical to fetch.
     */
    where: AbnormalityHistoricalWhereUniqueInput
  }

  /**
   * AbnormalityHistorical findUniqueOrThrow
   */
  export type AbnormalityHistoricalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbnormalityHistorical
     */
    select?: AbnormalityHistoricalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AbnormalityHistorical
     */
    omit?: AbnormalityHistoricalOmit<ExtArgs> | null
    /**
     * Filter, which AbnormalityHistorical to fetch.
     */
    where: AbnormalityHistoricalWhereUniqueInput
  }

  /**
   * AbnormalityHistorical findFirst
   */
  export type AbnormalityHistoricalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbnormalityHistorical
     */
    select?: AbnormalityHistoricalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AbnormalityHistorical
     */
    omit?: AbnormalityHistoricalOmit<ExtArgs> | null
    /**
     * Filter, which AbnormalityHistorical to fetch.
     */
    where?: AbnormalityHistoricalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AbnormalityHistoricals to fetch.
     */
    orderBy?: AbnormalityHistoricalOrderByWithRelationInput | AbnormalityHistoricalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AbnormalityHistoricals.
     */
    cursor?: AbnormalityHistoricalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AbnormalityHistoricals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AbnormalityHistoricals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AbnormalityHistoricals.
     */
    distinct?: AbnormalityHistoricalScalarFieldEnum | AbnormalityHistoricalScalarFieldEnum[]
  }

  /**
   * AbnormalityHistorical findFirstOrThrow
   */
  export type AbnormalityHistoricalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbnormalityHistorical
     */
    select?: AbnormalityHistoricalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AbnormalityHistorical
     */
    omit?: AbnormalityHistoricalOmit<ExtArgs> | null
    /**
     * Filter, which AbnormalityHistorical to fetch.
     */
    where?: AbnormalityHistoricalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AbnormalityHistoricals to fetch.
     */
    orderBy?: AbnormalityHistoricalOrderByWithRelationInput | AbnormalityHistoricalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AbnormalityHistoricals.
     */
    cursor?: AbnormalityHistoricalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AbnormalityHistoricals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AbnormalityHistoricals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AbnormalityHistoricals.
     */
    distinct?: AbnormalityHistoricalScalarFieldEnum | AbnormalityHistoricalScalarFieldEnum[]
  }

  /**
   * AbnormalityHistorical findMany
   */
  export type AbnormalityHistoricalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbnormalityHistorical
     */
    select?: AbnormalityHistoricalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AbnormalityHistorical
     */
    omit?: AbnormalityHistoricalOmit<ExtArgs> | null
    /**
     * Filter, which AbnormalityHistoricals to fetch.
     */
    where?: AbnormalityHistoricalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AbnormalityHistoricals to fetch.
     */
    orderBy?: AbnormalityHistoricalOrderByWithRelationInput | AbnormalityHistoricalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AbnormalityHistoricals.
     */
    cursor?: AbnormalityHistoricalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AbnormalityHistoricals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AbnormalityHistoricals.
     */
    skip?: number
    distinct?: AbnormalityHistoricalScalarFieldEnum | AbnormalityHistoricalScalarFieldEnum[]
  }

  /**
   * AbnormalityHistorical create
   */
  export type AbnormalityHistoricalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbnormalityHistorical
     */
    select?: AbnormalityHistoricalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AbnormalityHistorical
     */
    omit?: AbnormalityHistoricalOmit<ExtArgs> | null
    /**
     * The data needed to create a AbnormalityHistorical.
     */
    data: XOR<AbnormalityHistoricalCreateInput, AbnormalityHistoricalUncheckedCreateInput>
  }

  /**
   * AbnormalityHistorical createMany
   */
  export type AbnormalityHistoricalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AbnormalityHistoricals.
     */
    data: AbnormalityHistoricalCreateManyInput | AbnormalityHistoricalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AbnormalityHistorical update
   */
  export type AbnormalityHistoricalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbnormalityHistorical
     */
    select?: AbnormalityHistoricalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AbnormalityHistorical
     */
    omit?: AbnormalityHistoricalOmit<ExtArgs> | null
    /**
     * The data needed to update a AbnormalityHistorical.
     */
    data: XOR<AbnormalityHistoricalUpdateInput, AbnormalityHistoricalUncheckedUpdateInput>
    /**
     * Choose, which AbnormalityHistorical to update.
     */
    where: AbnormalityHistoricalWhereUniqueInput
  }

  /**
   * AbnormalityHistorical updateMany
   */
  export type AbnormalityHistoricalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AbnormalityHistoricals.
     */
    data: XOR<AbnormalityHistoricalUpdateManyMutationInput, AbnormalityHistoricalUncheckedUpdateManyInput>
    /**
     * Filter which AbnormalityHistoricals to update
     */
    where?: AbnormalityHistoricalWhereInput
    /**
     * Limit how many AbnormalityHistoricals to update.
     */
    limit?: number
  }

  /**
   * AbnormalityHistorical upsert
   */
  export type AbnormalityHistoricalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbnormalityHistorical
     */
    select?: AbnormalityHistoricalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AbnormalityHistorical
     */
    omit?: AbnormalityHistoricalOmit<ExtArgs> | null
    /**
     * The filter to search for the AbnormalityHistorical to update in case it exists.
     */
    where: AbnormalityHistoricalWhereUniqueInput
    /**
     * In case the AbnormalityHistorical found by the `where` argument doesn't exist, create a new AbnormalityHistorical with this data.
     */
    create: XOR<AbnormalityHistoricalCreateInput, AbnormalityHistoricalUncheckedCreateInput>
    /**
     * In case the AbnormalityHistorical was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AbnormalityHistoricalUpdateInput, AbnormalityHistoricalUncheckedUpdateInput>
  }

  /**
   * AbnormalityHistorical delete
   */
  export type AbnormalityHistoricalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbnormalityHistorical
     */
    select?: AbnormalityHistoricalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AbnormalityHistorical
     */
    omit?: AbnormalityHistoricalOmit<ExtArgs> | null
    /**
     * Filter which AbnormalityHistorical to delete.
     */
    where: AbnormalityHistoricalWhereUniqueInput
  }

  /**
   * AbnormalityHistorical deleteMany
   */
  export type AbnormalityHistoricalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AbnormalityHistoricals to delete
     */
    where?: AbnormalityHistoricalWhereInput
    /**
     * Limit how many AbnormalityHistoricals to delete.
     */
    limit?: number
  }

  /**
   * AbnormalityHistorical without action
   */
  export type AbnormalityHistoricalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbnormalityHistorical
     */
    select?: AbnormalityHistoricalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AbnormalityHistorical
     */
    omit?: AbnormalityHistoricalOmit<ExtArgs> | null
  }


  /**
   * Model KedatanganSapNew
   */

  export type AggregateKedatanganSapNew = {
    _count: KedatanganSapNewCountAggregateOutputType | null
    _avg: KedatanganSapNewAvgAggregateOutputType | null
    _sum: KedatanganSapNewSumAggregateOutputType | null
    _min: KedatanganSapNewMinAggregateOutputType | null
    _max: KedatanganSapNewMaxAggregateOutputType | null
  }

  export type KedatanganSapNewAvgAggregateOutputType = {
    kuartal: number | null
    insp_quantity: number | null
  }

  export type KedatanganSapNewSumAggregateOutputType = {
    kuartal: number | null
    insp_quantity: number | null
  }

  export type KedatanganSapNewMinAggregateOutputType = {
    inspection_lot: string | null
    plan: string | null
    OBJNR: string | null
    OBTYP: string | null
    tahun: string | null
    bulan: string | null
    kuartal: number | null
    insp_start_date: Date | null
    insp_end_date: Date | null
    vendor: string | null
    material: string | null
    lotno: string | null
    ket: string | null
    insp_quantity: number | null
    satuan: string | null
    jenis: string | null
  }

  export type KedatanganSapNewMaxAggregateOutputType = {
    inspection_lot: string | null
    plan: string | null
    OBJNR: string | null
    OBTYP: string | null
    tahun: string | null
    bulan: string | null
    kuartal: number | null
    insp_start_date: Date | null
    insp_end_date: Date | null
    vendor: string | null
    material: string | null
    lotno: string | null
    ket: string | null
    insp_quantity: number | null
    satuan: string | null
    jenis: string | null
  }

  export type KedatanganSapNewCountAggregateOutputType = {
    inspection_lot: number
    plan: number
    OBJNR: number
    OBTYP: number
    tahun: number
    bulan: number
    kuartal: number
    insp_start_date: number
    insp_end_date: number
    vendor: number
    material: number
    lotno: number
    ket: number
    insp_quantity: number
    satuan: number
    jenis: number
    _all: number
  }


  export type KedatanganSapNewAvgAggregateInputType = {
    kuartal?: true
    insp_quantity?: true
  }

  export type KedatanganSapNewSumAggregateInputType = {
    kuartal?: true
    insp_quantity?: true
  }

  export type KedatanganSapNewMinAggregateInputType = {
    inspection_lot?: true
    plan?: true
    OBJNR?: true
    OBTYP?: true
    tahun?: true
    bulan?: true
    kuartal?: true
    insp_start_date?: true
    insp_end_date?: true
    vendor?: true
    material?: true
    lotno?: true
    ket?: true
    insp_quantity?: true
    satuan?: true
    jenis?: true
  }

  export type KedatanganSapNewMaxAggregateInputType = {
    inspection_lot?: true
    plan?: true
    OBJNR?: true
    OBTYP?: true
    tahun?: true
    bulan?: true
    kuartal?: true
    insp_start_date?: true
    insp_end_date?: true
    vendor?: true
    material?: true
    lotno?: true
    ket?: true
    insp_quantity?: true
    satuan?: true
    jenis?: true
  }

  export type KedatanganSapNewCountAggregateInputType = {
    inspection_lot?: true
    plan?: true
    OBJNR?: true
    OBTYP?: true
    tahun?: true
    bulan?: true
    kuartal?: true
    insp_start_date?: true
    insp_end_date?: true
    vendor?: true
    material?: true
    lotno?: true
    ket?: true
    insp_quantity?: true
    satuan?: true
    jenis?: true
    _all?: true
  }

  export type KedatanganSapNewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KedatanganSapNew to aggregate.
     */
    where?: KedatanganSapNewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KedatanganSapNews to fetch.
     */
    orderBy?: KedatanganSapNewOrderByWithRelationInput | KedatanganSapNewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KedatanganSapNewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KedatanganSapNews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KedatanganSapNews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned KedatanganSapNews
    **/
    _count?: true | KedatanganSapNewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KedatanganSapNewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KedatanganSapNewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KedatanganSapNewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KedatanganSapNewMaxAggregateInputType
  }

  export type GetKedatanganSapNewAggregateType<T extends KedatanganSapNewAggregateArgs> = {
        [P in keyof T & keyof AggregateKedatanganSapNew]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKedatanganSapNew[P]>
      : GetScalarType<T[P], AggregateKedatanganSapNew[P]>
  }




  export type KedatanganSapNewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KedatanganSapNewWhereInput
    orderBy?: KedatanganSapNewOrderByWithAggregationInput | KedatanganSapNewOrderByWithAggregationInput[]
    by: KedatanganSapNewScalarFieldEnum[] | KedatanganSapNewScalarFieldEnum
    having?: KedatanganSapNewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KedatanganSapNewCountAggregateInputType | true
    _avg?: KedatanganSapNewAvgAggregateInputType
    _sum?: KedatanganSapNewSumAggregateInputType
    _min?: KedatanganSapNewMinAggregateInputType
    _max?: KedatanganSapNewMaxAggregateInputType
  }

  export type KedatanganSapNewGroupByOutputType = {
    inspection_lot: string
    plan: string
    OBJNR: string | null
    OBTYP: string | null
    tahun: string | null
    bulan: string | null
    kuartal: number | null
    insp_start_date: Date | null
    insp_end_date: Date | null
    vendor: string | null
    material: string | null
    lotno: string | null
    ket: string | null
    insp_quantity: number | null
    satuan: string | null
    jenis: string | null
    _count: KedatanganSapNewCountAggregateOutputType | null
    _avg: KedatanganSapNewAvgAggregateOutputType | null
    _sum: KedatanganSapNewSumAggregateOutputType | null
    _min: KedatanganSapNewMinAggregateOutputType | null
    _max: KedatanganSapNewMaxAggregateOutputType | null
  }

  type GetKedatanganSapNewGroupByPayload<T extends KedatanganSapNewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KedatanganSapNewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KedatanganSapNewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KedatanganSapNewGroupByOutputType[P]>
            : GetScalarType<T[P], KedatanganSapNewGroupByOutputType[P]>
        }
      >
    >


  export type KedatanganSapNewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    inspection_lot?: boolean
    plan?: boolean
    OBJNR?: boolean
    OBTYP?: boolean
    tahun?: boolean
    bulan?: boolean
    kuartal?: boolean
    insp_start_date?: boolean
    insp_end_date?: boolean
    vendor?: boolean
    material?: boolean
    lotno?: boolean
    ket?: boolean
    insp_quantity?: boolean
    satuan?: boolean
    jenis?: boolean
  }, ExtArgs["result"]["kedatanganSapNew"]>



  export type KedatanganSapNewSelectScalar = {
    inspection_lot?: boolean
    plan?: boolean
    OBJNR?: boolean
    OBTYP?: boolean
    tahun?: boolean
    bulan?: boolean
    kuartal?: boolean
    insp_start_date?: boolean
    insp_end_date?: boolean
    vendor?: boolean
    material?: boolean
    lotno?: boolean
    ket?: boolean
    insp_quantity?: boolean
    satuan?: boolean
    jenis?: boolean
  }

  export type KedatanganSapNewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"inspection_lot" | "plan" | "OBJNR" | "OBTYP" | "tahun" | "bulan" | "kuartal" | "insp_start_date" | "insp_end_date" | "vendor" | "material" | "lotno" | "ket" | "insp_quantity" | "satuan" | "jenis", ExtArgs["result"]["kedatanganSapNew"]>

  export type $KedatanganSapNewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "KedatanganSapNew"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      inspection_lot: string
      plan: string
      OBJNR: string | null
      OBTYP: string | null
      tahun: string | null
      bulan: string | null
      kuartal: number | null
      insp_start_date: Date | null
      insp_end_date: Date | null
      vendor: string | null
      material: string | null
      lotno: string | null
      ket: string | null
      insp_quantity: number | null
      satuan: string | null
      jenis: string | null
    }, ExtArgs["result"]["kedatanganSapNew"]>
    composites: {}
  }

  type KedatanganSapNewGetPayload<S extends boolean | null | undefined | KedatanganSapNewDefaultArgs> = $Result.GetResult<Prisma.$KedatanganSapNewPayload, S>

  type KedatanganSapNewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KedatanganSapNewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KedatanganSapNewCountAggregateInputType | true
    }

  export interface KedatanganSapNewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['KedatanganSapNew'], meta: { name: 'KedatanganSapNew' } }
    /**
     * Find zero or one KedatanganSapNew that matches the filter.
     * @param {KedatanganSapNewFindUniqueArgs} args - Arguments to find a KedatanganSapNew
     * @example
     * // Get one KedatanganSapNew
     * const kedatanganSapNew = await prisma.kedatanganSapNew.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KedatanganSapNewFindUniqueArgs>(args: SelectSubset<T, KedatanganSapNewFindUniqueArgs<ExtArgs>>): Prisma__KedatanganSapNewClient<$Result.GetResult<Prisma.$KedatanganSapNewPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one KedatanganSapNew that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KedatanganSapNewFindUniqueOrThrowArgs} args - Arguments to find a KedatanganSapNew
     * @example
     * // Get one KedatanganSapNew
     * const kedatanganSapNew = await prisma.kedatanganSapNew.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KedatanganSapNewFindUniqueOrThrowArgs>(args: SelectSubset<T, KedatanganSapNewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KedatanganSapNewClient<$Result.GetResult<Prisma.$KedatanganSapNewPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first KedatanganSapNew that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KedatanganSapNewFindFirstArgs} args - Arguments to find a KedatanganSapNew
     * @example
     * // Get one KedatanganSapNew
     * const kedatanganSapNew = await prisma.kedatanganSapNew.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KedatanganSapNewFindFirstArgs>(args?: SelectSubset<T, KedatanganSapNewFindFirstArgs<ExtArgs>>): Prisma__KedatanganSapNewClient<$Result.GetResult<Prisma.$KedatanganSapNewPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first KedatanganSapNew that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KedatanganSapNewFindFirstOrThrowArgs} args - Arguments to find a KedatanganSapNew
     * @example
     * // Get one KedatanganSapNew
     * const kedatanganSapNew = await prisma.kedatanganSapNew.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KedatanganSapNewFindFirstOrThrowArgs>(args?: SelectSubset<T, KedatanganSapNewFindFirstOrThrowArgs<ExtArgs>>): Prisma__KedatanganSapNewClient<$Result.GetResult<Prisma.$KedatanganSapNewPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more KedatanganSapNews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KedatanganSapNewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all KedatanganSapNews
     * const kedatanganSapNews = await prisma.kedatanganSapNew.findMany()
     * 
     * // Get first 10 KedatanganSapNews
     * const kedatanganSapNews = await prisma.kedatanganSapNew.findMany({ take: 10 })
     * 
     * // Only select the `inspection_lot`
     * const kedatanganSapNewWithInspection_lotOnly = await prisma.kedatanganSapNew.findMany({ select: { inspection_lot: true } })
     * 
     */
    findMany<T extends KedatanganSapNewFindManyArgs>(args?: SelectSubset<T, KedatanganSapNewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KedatanganSapNewPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a KedatanganSapNew.
     * @param {KedatanganSapNewCreateArgs} args - Arguments to create a KedatanganSapNew.
     * @example
     * // Create one KedatanganSapNew
     * const KedatanganSapNew = await prisma.kedatanganSapNew.create({
     *   data: {
     *     // ... data to create a KedatanganSapNew
     *   }
     * })
     * 
     */
    create<T extends KedatanganSapNewCreateArgs>(args: SelectSubset<T, KedatanganSapNewCreateArgs<ExtArgs>>): Prisma__KedatanganSapNewClient<$Result.GetResult<Prisma.$KedatanganSapNewPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many KedatanganSapNews.
     * @param {KedatanganSapNewCreateManyArgs} args - Arguments to create many KedatanganSapNews.
     * @example
     * // Create many KedatanganSapNews
     * const kedatanganSapNew = await prisma.kedatanganSapNew.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KedatanganSapNewCreateManyArgs>(args?: SelectSubset<T, KedatanganSapNewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a KedatanganSapNew.
     * @param {KedatanganSapNewDeleteArgs} args - Arguments to delete one KedatanganSapNew.
     * @example
     * // Delete one KedatanganSapNew
     * const KedatanganSapNew = await prisma.kedatanganSapNew.delete({
     *   where: {
     *     // ... filter to delete one KedatanganSapNew
     *   }
     * })
     * 
     */
    delete<T extends KedatanganSapNewDeleteArgs>(args: SelectSubset<T, KedatanganSapNewDeleteArgs<ExtArgs>>): Prisma__KedatanganSapNewClient<$Result.GetResult<Prisma.$KedatanganSapNewPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one KedatanganSapNew.
     * @param {KedatanganSapNewUpdateArgs} args - Arguments to update one KedatanganSapNew.
     * @example
     * // Update one KedatanganSapNew
     * const kedatanganSapNew = await prisma.kedatanganSapNew.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KedatanganSapNewUpdateArgs>(args: SelectSubset<T, KedatanganSapNewUpdateArgs<ExtArgs>>): Prisma__KedatanganSapNewClient<$Result.GetResult<Prisma.$KedatanganSapNewPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more KedatanganSapNews.
     * @param {KedatanganSapNewDeleteManyArgs} args - Arguments to filter KedatanganSapNews to delete.
     * @example
     * // Delete a few KedatanganSapNews
     * const { count } = await prisma.kedatanganSapNew.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KedatanganSapNewDeleteManyArgs>(args?: SelectSubset<T, KedatanganSapNewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KedatanganSapNews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KedatanganSapNewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many KedatanganSapNews
     * const kedatanganSapNew = await prisma.kedatanganSapNew.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KedatanganSapNewUpdateManyArgs>(args: SelectSubset<T, KedatanganSapNewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one KedatanganSapNew.
     * @param {KedatanganSapNewUpsertArgs} args - Arguments to update or create a KedatanganSapNew.
     * @example
     * // Update or create a KedatanganSapNew
     * const kedatanganSapNew = await prisma.kedatanganSapNew.upsert({
     *   create: {
     *     // ... data to create a KedatanganSapNew
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the KedatanganSapNew we want to update
     *   }
     * })
     */
    upsert<T extends KedatanganSapNewUpsertArgs>(args: SelectSubset<T, KedatanganSapNewUpsertArgs<ExtArgs>>): Prisma__KedatanganSapNewClient<$Result.GetResult<Prisma.$KedatanganSapNewPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of KedatanganSapNews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KedatanganSapNewCountArgs} args - Arguments to filter KedatanganSapNews to count.
     * @example
     * // Count the number of KedatanganSapNews
     * const count = await prisma.kedatanganSapNew.count({
     *   where: {
     *     // ... the filter for the KedatanganSapNews we want to count
     *   }
     * })
    **/
    count<T extends KedatanganSapNewCountArgs>(
      args?: Subset<T, KedatanganSapNewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KedatanganSapNewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a KedatanganSapNew.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KedatanganSapNewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KedatanganSapNewAggregateArgs>(args: Subset<T, KedatanganSapNewAggregateArgs>): Prisma.PrismaPromise<GetKedatanganSapNewAggregateType<T>>

    /**
     * Group by KedatanganSapNew.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KedatanganSapNewGroupByArgs} args - Group by arguments.
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
      T extends KedatanganSapNewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KedatanganSapNewGroupByArgs['orderBy'] }
        : { orderBy?: KedatanganSapNewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, KedatanganSapNewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKedatanganSapNewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the KedatanganSapNew model
   */
  readonly fields: KedatanganSapNewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for KedatanganSapNew.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KedatanganSapNewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the KedatanganSapNew model
   */ 
  interface KedatanganSapNewFieldRefs {
    readonly inspection_lot: FieldRef<"KedatanganSapNew", 'String'>
    readonly plan: FieldRef<"KedatanganSapNew", 'String'>
    readonly OBJNR: FieldRef<"KedatanganSapNew", 'String'>
    readonly OBTYP: FieldRef<"KedatanganSapNew", 'String'>
    readonly tahun: FieldRef<"KedatanganSapNew", 'String'>
    readonly bulan: FieldRef<"KedatanganSapNew", 'String'>
    readonly kuartal: FieldRef<"KedatanganSapNew", 'Int'>
    readonly insp_start_date: FieldRef<"KedatanganSapNew", 'DateTime'>
    readonly insp_end_date: FieldRef<"KedatanganSapNew", 'DateTime'>
    readonly vendor: FieldRef<"KedatanganSapNew", 'String'>
    readonly material: FieldRef<"KedatanganSapNew", 'String'>
    readonly lotno: FieldRef<"KedatanganSapNew", 'String'>
    readonly ket: FieldRef<"KedatanganSapNew", 'String'>
    readonly insp_quantity: FieldRef<"KedatanganSapNew", 'Float'>
    readonly satuan: FieldRef<"KedatanganSapNew", 'String'>
    readonly jenis: FieldRef<"KedatanganSapNew", 'String'>
  }
    

  // Custom InputTypes
  /**
   * KedatanganSapNew findUnique
   */
  export type KedatanganSapNewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KedatanganSapNew
     */
    select?: KedatanganSapNewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KedatanganSapNew
     */
    omit?: KedatanganSapNewOmit<ExtArgs> | null
    /**
     * Filter, which KedatanganSapNew to fetch.
     */
    where: KedatanganSapNewWhereUniqueInput
  }

  /**
   * KedatanganSapNew findUniqueOrThrow
   */
  export type KedatanganSapNewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KedatanganSapNew
     */
    select?: KedatanganSapNewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KedatanganSapNew
     */
    omit?: KedatanganSapNewOmit<ExtArgs> | null
    /**
     * Filter, which KedatanganSapNew to fetch.
     */
    where: KedatanganSapNewWhereUniqueInput
  }

  /**
   * KedatanganSapNew findFirst
   */
  export type KedatanganSapNewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KedatanganSapNew
     */
    select?: KedatanganSapNewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KedatanganSapNew
     */
    omit?: KedatanganSapNewOmit<ExtArgs> | null
    /**
     * Filter, which KedatanganSapNew to fetch.
     */
    where?: KedatanganSapNewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KedatanganSapNews to fetch.
     */
    orderBy?: KedatanganSapNewOrderByWithRelationInput | KedatanganSapNewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KedatanganSapNews.
     */
    cursor?: KedatanganSapNewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KedatanganSapNews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KedatanganSapNews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KedatanganSapNews.
     */
    distinct?: KedatanganSapNewScalarFieldEnum | KedatanganSapNewScalarFieldEnum[]
  }

  /**
   * KedatanganSapNew findFirstOrThrow
   */
  export type KedatanganSapNewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KedatanganSapNew
     */
    select?: KedatanganSapNewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KedatanganSapNew
     */
    omit?: KedatanganSapNewOmit<ExtArgs> | null
    /**
     * Filter, which KedatanganSapNew to fetch.
     */
    where?: KedatanganSapNewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KedatanganSapNews to fetch.
     */
    orderBy?: KedatanganSapNewOrderByWithRelationInput | KedatanganSapNewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KedatanganSapNews.
     */
    cursor?: KedatanganSapNewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KedatanganSapNews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KedatanganSapNews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KedatanganSapNews.
     */
    distinct?: KedatanganSapNewScalarFieldEnum | KedatanganSapNewScalarFieldEnum[]
  }

  /**
   * KedatanganSapNew findMany
   */
  export type KedatanganSapNewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KedatanganSapNew
     */
    select?: KedatanganSapNewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KedatanganSapNew
     */
    omit?: KedatanganSapNewOmit<ExtArgs> | null
    /**
     * Filter, which KedatanganSapNews to fetch.
     */
    where?: KedatanganSapNewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KedatanganSapNews to fetch.
     */
    orderBy?: KedatanganSapNewOrderByWithRelationInput | KedatanganSapNewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing KedatanganSapNews.
     */
    cursor?: KedatanganSapNewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KedatanganSapNews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KedatanganSapNews.
     */
    skip?: number
    distinct?: KedatanganSapNewScalarFieldEnum | KedatanganSapNewScalarFieldEnum[]
  }

  /**
   * KedatanganSapNew create
   */
  export type KedatanganSapNewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KedatanganSapNew
     */
    select?: KedatanganSapNewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KedatanganSapNew
     */
    omit?: KedatanganSapNewOmit<ExtArgs> | null
    /**
     * The data needed to create a KedatanganSapNew.
     */
    data: XOR<KedatanganSapNewCreateInput, KedatanganSapNewUncheckedCreateInput>
  }

  /**
   * KedatanganSapNew createMany
   */
  export type KedatanganSapNewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many KedatanganSapNews.
     */
    data: KedatanganSapNewCreateManyInput | KedatanganSapNewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * KedatanganSapNew update
   */
  export type KedatanganSapNewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KedatanganSapNew
     */
    select?: KedatanganSapNewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KedatanganSapNew
     */
    omit?: KedatanganSapNewOmit<ExtArgs> | null
    /**
     * The data needed to update a KedatanganSapNew.
     */
    data: XOR<KedatanganSapNewUpdateInput, KedatanganSapNewUncheckedUpdateInput>
    /**
     * Choose, which KedatanganSapNew to update.
     */
    where: KedatanganSapNewWhereUniqueInput
  }

  /**
   * KedatanganSapNew updateMany
   */
  export type KedatanganSapNewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update KedatanganSapNews.
     */
    data: XOR<KedatanganSapNewUpdateManyMutationInput, KedatanganSapNewUncheckedUpdateManyInput>
    /**
     * Filter which KedatanganSapNews to update
     */
    where?: KedatanganSapNewWhereInput
    /**
     * Limit how many KedatanganSapNews to update.
     */
    limit?: number
  }

  /**
   * KedatanganSapNew upsert
   */
  export type KedatanganSapNewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KedatanganSapNew
     */
    select?: KedatanganSapNewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KedatanganSapNew
     */
    omit?: KedatanganSapNewOmit<ExtArgs> | null
    /**
     * The filter to search for the KedatanganSapNew to update in case it exists.
     */
    where: KedatanganSapNewWhereUniqueInput
    /**
     * In case the KedatanganSapNew found by the `where` argument doesn't exist, create a new KedatanganSapNew with this data.
     */
    create: XOR<KedatanganSapNewCreateInput, KedatanganSapNewUncheckedCreateInput>
    /**
     * In case the KedatanganSapNew was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KedatanganSapNewUpdateInput, KedatanganSapNewUncheckedUpdateInput>
  }

  /**
   * KedatanganSapNew delete
   */
  export type KedatanganSapNewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KedatanganSapNew
     */
    select?: KedatanganSapNewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KedatanganSapNew
     */
    omit?: KedatanganSapNewOmit<ExtArgs> | null
    /**
     * Filter which KedatanganSapNew to delete.
     */
    where: KedatanganSapNewWhereUniqueInput
  }

  /**
   * KedatanganSapNew deleteMany
   */
  export type KedatanganSapNewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KedatanganSapNews to delete
     */
    where?: KedatanganSapNewWhereInput
    /**
     * Limit how many KedatanganSapNews to delete.
     */
    limit?: number
  }

  /**
   * KedatanganSapNew without action
   */
  export type KedatanganSapNewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KedatanganSapNew
     */
    select?: KedatanganSapNewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KedatanganSapNew
     */
    omit?: KedatanganSapNewOmit<ExtArgs> | null
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


  export const SupplierMaterialViewScalarFieldEnum: {
    id: 'id',
    kode_vendor: 'kode_vendor',
    name_vendor: 'name_vendor',
    material_code: 'material_code',
    nama_material: 'nama_material',
    area: 'area'
  };

  export type SupplierMaterialViewScalarFieldEnum = (typeof SupplierMaterialViewScalarFieldEnum)[keyof typeof SupplierMaterialViewScalarFieldEnum]


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


  export const TrSupplierAuditScalarFieldEnum: {
    id: 'id',
    plan_type: 'plan_type',
    plant: 'plant',
    date_plan: 'date_plan',
    id_supplier: 'id_supplier',
    code_supplier: 'code_supplier',
    city: 'city',
    id_material: 'id_material',
    date_complete: 'date_complete',
    score: 'score',
    status: 'status',
    evidence: 'evidence',
    evidence_type: 'evidence_type',
    evidence_size: 'evidence_size',
    evidence_widht: 'evidence_widht',
    evidence_height: 'evidence_height',
    improvment: 'improvment'
  };

  export type TrSupplierAuditScalarFieldEnum = (typeof TrSupplierAuditScalarFieldEnum)[keyof typeof TrSupplierAuditScalarFieldEnum]


  export const AbnormalityHistoricalScalarFieldEnum: {
    kode_vendor: 'kode_vendor',
    abnormal: 'abnormal',
    total_case: 'total_case'
  };

  export type AbnormalityHistoricalScalarFieldEnum = (typeof AbnormalityHistoricalScalarFieldEnum)[keyof typeof AbnormalityHistoricalScalarFieldEnum]


  export const KedatanganSapNewScalarFieldEnum: {
    inspection_lot: 'inspection_lot',
    plan: 'plan',
    OBJNR: 'OBJNR',
    OBTYP: 'OBTYP',
    tahun: 'tahun',
    bulan: 'bulan',
    kuartal: 'kuartal',
    insp_start_date: 'insp_start_date',
    insp_end_date: 'insp_end_date',
    vendor: 'vendor',
    material: 'material',
    lotno: 'lotno',
    ket: 'ket',
    insp_quantity: 'insp_quantity',
    satuan: 'satuan',
    jenis: 'jenis'
  };

  export type KedatanganSapNewScalarFieldEnum = (typeof KedatanganSapNewScalarFieldEnum)[keyof typeof KedatanganSapNewScalarFieldEnum]


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


  export const SupplierMaterialViewOrderByRelevanceFieldEnum: {
    kode_vendor: 'kode_vendor',
    name_vendor: 'name_vendor',
    material_code: 'material_code',
    nama_material: 'nama_material',
    area: 'area'
  };

  export type SupplierMaterialViewOrderByRelevanceFieldEnum = (typeof SupplierMaterialViewOrderByRelevanceFieldEnum)[keyof typeof SupplierMaterialViewOrderByRelevanceFieldEnum]


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


  export const TrSupplierAuditOrderByRelevanceFieldEnum: {
    plan_type: 'plan_type',
    plant: 'plant',
    code_supplier: 'code_supplier',
    city: 'city',
    evidence: 'evidence',
    evidence_type: 'evidence_type',
    improvment: 'improvment'
  };

  export type TrSupplierAuditOrderByRelevanceFieldEnum = (typeof TrSupplierAuditOrderByRelevanceFieldEnum)[keyof typeof TrSupplierAuditOrderByRelevanceFieldEnum]


  export const AbnormalityHistoricalOrderByRelevanceFieldEnum: {
    kode_vendor: 'kode_vendor',
    abnormal: 'abnormal'
  };

  export type AbnormalityHistoricalOrderByRelevanceFieldEnum = (typeof AbnormalityHistoricalOrderByRelevanceFieldEnum)[keyof typeof AbnormalityHistoricalOrderByRelevanceFieldEnum]


  export const KedatanganSapNewOrderByRelevanceFieldEnum: {
    inspection_lot: 'inspection_lot',
    plan: 'plan',
    OBJNR: 'OBJNR',
    OBTYP: 'OBTYP',
    tahun: 'tahun',
    bulan: 'bulan',
    vendor: 'vendor',
    material: 'material',
    lotno: 'lotno',
    ket: 'ket',
    satuan: 'satuan',
    jenis: 'jenis'
  };

  export type KedatanganSapNewOrderByRelevanceFieldEnum = (typeof KedatanganSapNewOrderByRelevanceFieldEnum)[keyof typeof KedatanganSapNewOrderByRelevanceFieldEnum]


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

  export type SupplierMaterialViewWhereInput = {
    AND?: SupplierMaterialViewWhereInput | SupplierMaterialViewWhereInput[]
    OR?: SupplierMaterialViewWhereInput[]
    NOT?: SupplierMaterialViewWhereInput | SupplierMaterialViewWhereInput[]
    id?: IntFilter<"SupplierMaterialView"> | number
    kode_vendor?: StringNullableFilter<"SupplierMaterialView"> | string | null
    name_vendor?: StringNullableFilter<"SupplierMaterialView"> | string | null
    material_code?: StringNullableFilter<"SupplierMaterialView"> | string | null
    nama_material?: StringNullableFilter<"SupplierMaterialView"> | string | null
    area?: StringNullableFilter<"SupplierMaterialView"> | string | null
  }

  export type SupplierMaterialViewOrderByWithRelationInput = {
    id?: SortOrder
    kode_vendor?: SortOrderInput | SortOrder
    name_vendor?: SortOrderInput | SortOrder
    material_code?: SortOrderInput | SortOrder
    nama_material?: SortOrderInput | SortOrder
    area?: SortOrderInput | SortOrder
    _relevance?: SupplierMaterialViewOrderByRelevanceInput
  }

  export type SupplierMaterialViewWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SupplierMaterialViewWhereInput | SupplierMaterialViewWhereInput[]
    OR?: SupplierMaterialViewWhereInput[]
    NOT?: SupplierMaterialViewWhereInput | SupplierMaterialViewWhereInput[]
    kode_vendor?: StringNullableFilter<"SupplierMaterialView"> | string | null
    name_vendor?: StringNullableFilter<"SupplierMaterialView"> | string | null
    material_code?: StringNullableFilter<"SupplierMaterialView"> | string | null
    nama_material?: StringNullableFilter<"SupplierMaterialView"> | string | null
    area?: StringNullableFilter<"SupplierMaterialView"> | string | null
  }, "id">

  export type SupplierMaterialViewOrderByWithAggregationInput = {
    id?: SortOrder
    kode_vendor?: SortOrderInput | SortOrder
    name_vendor?: SortOrderInput | SortOrder
    material_code?: SortOrderInput | SortOrder
    nama_material?: SortOrderInput | SortOrder
    area?: SortOrderInput | SortOrder
    _count?: SupplierMaterialViewCountOrderByAggregateInput
    _avg?: SupplierMaterialViewAvgOrderByAggregateInput
    _max?: SupplierMaterialViewMaxOrderByAggregateInput
    _min?: SupplierMaterialViewMinOrderByAggregateInput
    _sum?: SupplierMaterialViewSumOrderByAggregateInput
  }

  export type SupplierMaterialViewScalarWhereWithAggregatesInput = {
    AND?: SupplierMaterialViewScalarWhereWithAggregatesInput | SupplierMaterialViewScalarWhereWithAggregatesInput[]
    OR?: SupplierMaterialViewScalarWhereWithAggregatesInput[]
    NOT?: SupplierMaterialViewScalarWhereWithAggregatesInput | SupplierMaterialViewScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SupplierMaterialView"> | number
    kode_vendor?: StringNullableWithAggregatesFilter<"SupplierMaterialView"> | string | null
    name_vendor?: StringNullableWithAggregatesFilter<"SupplierMaterialView"> | string | null
    material_code?: StringNullableWithAggregatesFilter<"SupplierMaterialView"> | string | null
    nama_material?: StringNullableWithAggregatesFilter<"SupplierMaterialView"> | string | null
    area?: StringNullableWithAggregatesFilter<"SupplierMaterialView"> | string | null
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

  export type TrSupplierAuditWhereInput = {
    AND?: TrSupplierAuditWhereInput | TrSupplierAuditWhereInput[]
    OR?: TrSupplierAuditWhereInput[]
    NOT?: TrSupplierAuditWhereInput | TrSupplierAuditWhereInput[]
    id?: IntFilter<"TrSupplierAudit"> | number
    plan_type?: StringNullableFilter<"TrSupplierAudit"> | string | null
    plant?: StringNullableFilter<"TrSupplierAudit"> | string | null
    date_plan?: DateTimeNullableFilter<"TrSupplierAudit"> | Date | string | null
    id_supplier?: IntNullableFilter<"TrSupplierAudit"> | number | null
    code_supplier?: StringNullableFilter<"TrSupplierAudit"> | string | null
    city?: StringNullableFilter<"TrSupplierAudit"> | string | null
    id_material?: IntNullableFilter<"TrSupplierAudit"> | number | null
    date_complete?: DateTimeNullableFilter<"TrSupplierAudit"> | Date | string | null
    score?: IntNullableFilter<"TrSupplierAudit"> | number | null
    status?: IntNullableFilter<"TrSupplierAudit"> | number | null
    evidence?: StringNullableFilter<"TrSupplierAudit"> | string | null
    evidence_type?: StringNullableFilter<"TrSupplierAudit"> | string | null
    evidence_size?: IntNullableFilter<"TrSupplierAudit"> | number | null
    evidence_widht?: IntNullableFilter<"TrSupplierAudit"> | number | null
    evidence_height?: IntNullableFilter<"TrSupplierAudit"> | number | null
    improvment?: StringNullableFilter<"TrSupplierAudit"> | string | null
  }

  export type TrSupplierAuditOrderByWithRelationInput = {
    id?: SortOrder
    plan_type?: SortOrderInput | SortOrder
    plant?: SortOrderInput | SortOrder
    date_plan?: SortOrderInput | SortOrder
    id_supplier?: SortOrderInput | SortOrder
    code_supplier?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    id_material?: SortOrderInput | SortOrder
    date_complete?: SortOrderInput | SortOrder
    score?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    evidence?: SortOrderInput | SortOrder
    evidence_type?: SortOrderInput | SortOrder
    evidence_size?: SortOrderInput | SortOrder
    evidence_widht?: SortOrderInput | SortOrder
    evidence_height?: SortOrderInput | SortOrder
    improvment?: SortOrderInput | SortOrder
    _relevance?: TrSupplierAuditOrderByRelevanceInput
  }

  export type TrSupplierAuditWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TrSupplierAuditWhereInput | TrSupplierAuditWhereInput[]
    OR?: TrSupplierAuditWhereInput[]
    NOT?: TrSupplierAuditWhereInput | TrSupplierAuditWhereInput[]
    plan_type?: StringNullableFilter<"TrSupplierAudit"> | string | null
    plant?: StringNullableFilter<"TrSupplierAudit"> | string | null
    date_plan?: DateTimeNullableFilter<"TrSupplierAudit"> | Date | string | null
    id_supplier?: IntNullableFilter<"TrSupplierAudit"> | number | null
    code_supplier?: StringNullableFilter<"TrSupplierAudit"> | string | null
    city?: StringNullableFilter<"TrSupplierAudit"> | string | null
    id_material?: IntNullableFilter<"TrSupplierAudit"> | number | null
    date_complete?: DateTimeNullableFilter<"TrSupplierAudit"> | Date | string | null
    score?: IntNullableFilter<"TrSupplierAudit"> | number | null
    status?: IntNullableFilter<"TrSupplierAudit"> | number | null
    evidence?: StringNullableFilter<"TrSupplierAudit"> | string | null
    evidence_type?: StringNullableFilter<"TrSupplierAudit"> | string | null
    evidence_size?: IntNullableFilter<"TrSupplierAudit"> | number | null
    evidence_widht?: IntNullableFilter<"TrSupplierAudit"> | number | null
    evidence_height?: IntNullableFilter<"TrSupplierAudit"> | number | null
    improvment?: StringNullableFilter<"TrSupplierAudit"> | string | null
  }, "id">

  export type TrSupplierAuditOrderByWithAggregationInput = {
    id?: SortOrder
    plan_type?: SortOrderInput | SortOrder
    plant?: SortOrderInput | SortOrder
    date_plan?: SortOrderInput | SortOrder
    id_supplier?: SortOrderInput | SortOrder
    code_supplier?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    id_material?: SortOrderInput | SortOrder
    date_complete?: SortOrderInput | SortOrder
    score?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    evidence?: SortOrderInput | SortOrder
    evidence_type?: SortOrderInput | SortOrder
    evidence_size?: SortOrderInput | SortOrder
    evidence_widht?: SortOrderInput | SortOrder
    evidence_height?: SortOrderInput | SortOrder
    improvment?: SortOrderInput | SortOrder
    _count?: TrSupplierAuditCountOrderByAggregateInput
    _avg?: TrSupplierAuditAvgOrderByAggregateInput
    _max?: TrSupplierAuditMaxOrderByAggregateInput
    _min?: TrSupplierAuditMinOrderByAggregateInput
    _sum?: TrSupplierAuditSumOrderByAggregateInput
  }

  export type TrSupplierAuditScalarWhereWithAggregatesInput = {
    AND?: TrSupplierAuditScalarWhereWithAggregatesInput | TrSupplierAuditScalarWhereWithAggregatesInput[]
    OR?: TrSupplierAuditScalarWhereWithAggregatesInput[]
    NOT?: TrSupplierAuditScalarWhereWithAggregatesInput | TrSupplierAuditScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TrSupplierAudit"> | number
    plan_type?: StringNullableWithAggregatesFilter<"TrSupplierAudit"> | string | null
    plant?: StringNullableWithAggregatesFilter<"TrSupplierAudit"> | string | null
    date_plan?: DateTimeNullableWithAggregatesFilter<"TrSupplierAudit"> | Date | string | null
    id_supplier?: IntNullableWithAggregatesFilter<"TrSupplierAudit"> | number | null
    code_supplier?: StringNullableWithAggregatesFilter<"TrSupplierAudit"> | string | null
    city?: StringNullableWithAggregatesFilter<"TrSupplierAudit"> | string | null
    id_material?: IntNullableWithAggregatesFilter<"TrSupplierAudit"> | number | null
    date_complete?: DateTimeNullableWithAggregatesFilter<"TrSupplierAudit"> | Date | string | null
    score?: IntNullableWithAggregatesFilter<"TrSupplierAudit"> | number | null
    status?: IntNullableWithAggregatesFilter<"TrSupplierAudit"> | number | null
    evidence?: StringNullableWithAggregatesFilter<"TrSupplierAudit"> | string | null
    evidence_type?: StringNullableWithAggregatesFilter<"TrSupplierAudit"> | string | null
    evidence_size?: IntNullableWithAggregatesFilter<"TrSupplierAudit"> | number | null
    evidence_widht?: IntNullableWithAggregatesFilter<"TrSupplierAudit"> | number | null
    evidence_height?: IntNullableWithAggregatesFilter<"TrSupplierAudit"> | number | null
    improvment?: StringNullableWithAggregatesFilter<"TrSupplierAudit"> | string | null
  }

  export type AbnormalityHistoricalWhereInput = {
    AND?: AbnormalityHistoricalWhereInput | AbnormalityHistoricalWhereInput[]
    OR?: AbnormalityHistoricalWhereInput[]
    NOT?: AbnormalityHistoricalWhereInput | AbnormalityHistoricalWhereInput[]
    kode_vendor?: StringFilter<"AbnormalityHistorical"> | string
    abnormal?: StringFilter<"AbnormalityHistorical"> | string
    total_case?: IntNullableFilter<"AbnormalityHistorical"> | number | null
  }

  export type AbnormalityHistoricalOrderByWithRelationInput = {
    kode_vendor?: SortOrder
    abnormal?: SortOrder
    total_case?: SortOrderInput | SortOrder
    _relevance?: AbnormalityHistoricalOrderByRelevanceInput
  }

  export type AbnormalityHistoricalWhereUniqueInput = Prisma.AtLeast<{
    kode_vendor_abnormal?: AbnormalityHistoricalKode_vendorAbnormalCompoundUniqueInput
    AND?: AbnormalityHistoricalWhereInput | AbnormalityHistoricalWhereInput[]
    OR?: AbnormalityHistoricalWhereInput[]
    NOT?: AbnormalityHistoricalWhereInput | AbnormalityHistoricalWhereInput[]
    kode_vendor?: StringFilter<"AbnormalityHistorical"> | string
    abnormal?: StringFilter<"AbnormalityHistorical"> | string
    total_case?: IntNullableFilter<"AbnormalityHistorical"> | number | null
  }, "kode_vendor_abnormal">

  export type AbnormalityHistoricalOrderByWithAggregationInput = {
    kode_vendor?: SortOrder
    abnormal?: SortOrder
    total_case?: SortOrderInput | SortOrder
    _count?: AbnormalityHistoricalCountOrderByAggregateInput
    _avg?: AbnormalityHistoricalAvgOrderByAggregateInput
    _max?: AbnormalityHistoricalMaxOrderByAggregateInput
    _min?: AbnormalityHistoricalMinOrderByAggregateInput
    _sum?: AbnormalityHistoricalSumOrderByAggregateInput
  }

  export type AbnormalityHistoricalScalarWhereWithAggregatesInput = {
    AND?: AbnormalityHistoricalScalarWhereWithAggregatesInput | AbnormalityHistoricalScalarWhereWithAggregatesInput[]
    OR?: AbnormalityHistoricalScalarWhereWithAggregatesInput[]
    NOT?: AbnormalityHistoricalScalarWhereWithAggregatesInput | AbnormalityHistoricalScalarWhereWithAggregatesInput[]
    kode_vendor?: StringWithAggregatesFilter<"AbnormalityHistorical"> | string
    abnormal?: StringWithAggregatesFilter<"AbnormalityHistorical"> | string
    total_case?: IntNullableWithAggregatesFilter<"AbnormalityHistorical"> | number | null
  }

  export type KedatanganSapNewWhereInput = {
    AND?: KedatanganSapNewWhereInput | KedatanganSapNewWhereInput[]
    OR?: KedatanganSapNewWhereInput[]
    NOT?: KedatanganSapNewWhereInput | KedatanganSapNewWhereInput[]
    inspection_lot?: StringFilter<"KedatanganSapNew"> | string
    plan?: StringFilter<"KedatanganSapNew"> | string
    OBJNR?: StringNullableFilter<"KedatanganSapNew"> | string | null
    OBTYP?: StringNullableFilter<"KedatanganSapNew"> | string | null
    tahun?: StringNullableFilter<"KedatanganSapNew"> | string | null
    bulan?: StringNullableFilter<"KedatanganSapNew"> | string | null
    kuartal?: IntNullableFilter<"KedatanganSapNew"> | number | null
    insp_start_date?: DateTimeNullableFilter<"KedatanganSapNew"> | Date | string | null
    insp_end_date?: DateTimeNullableFilter<"KedatanganSapNew"> | Date | string | null
    vendor?: StringNullableFilter<"KedatanganSapNew"> | string | null
    material?: StringNullableFilter<"KedatanganSapNew"> | string | null
    lotno?: StringNullableFilter<"KedatanganSapNew"> | string | null
    ket?: StringNullableFilter<"KedatanganSapNew"> | string | null
    insp_quantity?: FloatNullableFilter<"KedatanganSapNew"> | number | null
    satuan?: StringNullableFilter<"KedatanganSapNew"> | string | null
    jenis?: StringNullableFilter<"KedatanganSapNew"> | string | null
  }

  export type KedatanganSapNewOrderByWithRelationInput = {
    inspection_lot?: SortOrder
    plan?: SortOrder
    OBJNR?: SortOrderInput | SortOrder
    OBTYP?: SortOrderInput | SortOrder
    tahun?: SortOrderInput | SortOrder
    bulan?: SortOrderInput | SortOrder
    kuartal?: SortOrderInput | SortOrder
    insp_start_date?: SortOrderInput | SortOrder
    insp_end_date?: SortOrderInput | SortOrder
    vendor?: SortOrderInput | SortOrder
    material?: SortOrderInput | SortOrder
    lotno?: SortOrderInput | SortOrder
    ket?: SortOrderInput | SortOrder
    insp_quantity?: SortOrderInput | SortOrder
    satuan?: SortOrderInput | SortOrder
    jenis?: SortOrderInput | SortOrder
    _relevance?: KedatanganSapNewOrderByRelevanceInput
  }

  export type KedatanganSapNewWhereUniqueInput = Prisma.AtLeast<{
    inspection_lot_plan?: KedatanganSapNewInspection_lotPlanCompoundUniqueInput
    AND?: KedatanganSapNewWhereInput | KedatanganSapNewWhereInput[]
    OR?: KedatanganSapNewWhereInput[]
    NOT?: KedatanganSapNewWhereInput | KedatanganSapNewWhereInput[]
    inspection_lot?: StringFilter<"KedatanganSapNew"> | string
    plan?: StringFilter<"KedatanganSapNew"> | string
    OBJNR?: StringNullableFilter<"KedatanganSapNew"> | string | null
    OBTYP?: StringNullableFilter<"KedatanganSapNew"> | string | null
    tahun?: StringNullableFilter<"KedatanganSapNew"> | string | null
    bulan?: StringNullableFilter<"KedatanganSapNew"> | string | null
    kuartal?: IntNullableFilter<"KedatanganSapNew"> | number | null
    insp_start_date?: DateTimeNullableFilter<"KedatanganSapNew"> | Date | string | null
    insp_end_date?: DateTimeNullableFilter<"KedatanganSapNew"> | Date | string | null
    vendor?: StringNullableFilter<"KedatanganSapNew"> | string | null
    material?: StringNullableFilter<"KedatanganSapNew"> | string | null
    lotno?: StringNullableFilter<"KedatanganSapNew"> | string | null
    ket?: StringNullableFilter<"KedatanganSapNew"> | string | null
    insp_quantity?: FloatNullableFilter<"KedatanganSapNew"> | number | null
    satuan?: StringNullableFilter<"KedatanganSapNew"> | string | null
    jenis?: StringNullableFilter<"KedatanganSapNew"> | string | null
  }, "inspection_lot_plan">

  export type KedatanganSapNewOrderByWithAggregationInput = {
    inspection_lot?: SortOrder
    plan?: SortOrder
    OBJNR?: SortOrderInput | SortOrder
    OBTYP?: SortOrderInput | SortOrder
    tahun?: SortOrderInput | SortOrder
    bulan?: SortOrderInput | SortOrder
    kuartal?: SortOrderInput | SortOrder
    insp_start_date?: SortOrderInput | SortOrder
    insp_end_date?: SortOrderInput | SortOrder
    vendor?: SortOrderInput | SortOrder
    material?: SortOrderInput | SortOrder
    lotno?: SortOrderInput | SortOrder
    ket?: SortOrderInput | SortOrder
    insp_quantity?: SortOrderInput | SortOrder
    satuan?: SortOrderInput | SortOrder
    jenis?: SortOrderInput | SortOrder
    _count?: KedatanganSapNewCountOrderByAggregateInput
    _avg?: KedatanganSapNewAvgOrderByAggregateInput
    _max?: KedatanganSapNewMaxOrderByAggregateInput
    _min?: KedatanganSapNewMinOrderByAggregateInput
    _sum?: KedatanganSapNewSumOrderByAggregateInput
  }

  export type KedatanganSapNewScalarWhereWithAggregatesInput = {
    AND?: KedatanganSapNewScalarWhereWithAggregatesInput | KedatanganSapNewScalarWhereWithAggregatesInput[]
    OR?: KedatanganSapNewScalarWhereWithAggregatesInput[]
    NOT?: KedatanganSapNewScalarWhereWithAggregatesInput | KedatanganSapNewScalarWhereWithAggregatesInput[]
    inspection_lot?: StringWithAggregatesFilter<"KedatanganSapNew"> | string
    plan?: StringWithAggregatesFilter<"KedatanganSapNew"> | string
    OBJNR?: StringNullableWithAggregatesFilter<"KedatanganSapNew"> | string | null
    OBTYP?: StringNullableWithAggregatesFilter<"KedatanganSapNew"> | string | null
    tahun?: StringNullableWithAggregatesFilter<"KedatanganSapNew"> | string | null
    bulan?: StringNullableWithAggregatesFilter<"KedatanganSapNew"> | string | null
    kuartal?: IntNullableWithAggregatesFilter<"KedatanganSapNew"> | number | null
    insp_start_date?: DateTimeNullableWithAggregatesFilter<"KedatanganSapNew"> | Date | string | null
    insp_end_date?: DateTimeNullableWithAggregatesFilter<"KedatanganSapNew"> | Date | string | null
    vendor?: StringNullableWithAggregatesFilter<"KedatanganSapNew"> | string | null
    material?: StringNullableWithAggregatesFilter<"KedatanganSapNew"> | string | null
    lotno?: StringNullableWithAggregatesFilter<"KedatanganSapNew"> | string | null
    ket?: StringNullableWithAggregatesFilter<"KedatanganSapNew"> | string | null
    insp_quantity?: FloatNullableWithAggregatesFilter<"KedatanganSapNew"> | number | null
    satuan?: StringNullableWithAggregatesFilter<"KedatanganSapNew"> | string | null
    jenis?: StringNullableWithAggregatesFilter<"KedatanganSapNew"> | string | null
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

  export type SupplierMaterialViewCreateInput = {
    kode_vendor?: string | null
    name_vendor?: string | null
    material_code?: string | null
    nama_material?: string | null
    area?: string | null
  }

  export type SupplierMaterialViewUncheckedCreateInput = {
    id?: number
    kode_vendor?: string | null
    name_vendor?: string | null
    material_code?: string | null
    nama_material?: string | null
    area?: string | null
  }

  export type SupplierMaterialViewUpdateInput = {
    kode_vendor?: NullableStringFieldUpdateOperationsInput | string | null
    name_vendor?: NullableStringFieldUpdateOperationsInput | string | null
    material_code?: NullableStringFieldUpdateOperationsInput | string | null
    nama_material?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SupplierMaterialViewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    kode_vendor?: NullableStringFieldUpdateOperationsInput | string | null
    name_vendor?: NullableStringFieldUpdateOperationsInput | string | null
    material_code?: NullableStringFieldUpdateOperationsInput | string | null
    nama_material?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SupplierMaterialViewCreateManyInput = {
    id?: number
    kode_vendor?: string | null
    name_vendor?: string | null
    material_code?: string | null
    nama_material?: string | null
    area?: string | null
  }

  export type SupplierMaterialViewUpdateManyMutationInput = {
    kode_vendor?: NullableStringFieldUpdateOperationsInput | string | null
    name_vendor?: NullableStringFieldUpdateOperationsInput | string | null
    material_code?: NullableStringFieldUpdateOperationsInput | string | null
    nama_material?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SupplierMaterialViewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    kode_vendor?: NullableStringFieldUpdateOperationsInput | string | null
    name_vendor?: NullableStringFieldUpdateOperationsInput | string | null
    material_code?: NullableStringFieldUpdateOperationsInput | string | null
    nama_material?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type TrSupplierAuditCreateInput = {
    plan_type?: string | null
    plant?: string | null
    date_plan?: Date | string | null
    id_supplier?: number | null
    code_supplier?: string | null
    city?: string | null
    id_material?: number | null
    date_complete?: Date | string | null
    score?: number | null
    status?: number | null
    evidence?: string | null
    evidence_type?: string | null
    evidence_size?: number | null
    evidence_widht?: number | null
    evidence_height?: number | null
    improvment?: string | null
  }

  export type TrSupplierAuditUncheckedCreateInput = {
    id?: number
    plan_type?: string | null
    plant?: string | null
    date_plan?: Date | string | null
    id_supplier?: number | null
    code_supplier?: string | null
    city?: string | null
    id_material?: number | null
    date_complete?: Date | string | null
    score?: number | null
    status?: number | null
    evidence?: string | null
    evidence_type?: string | null
    evidence_size?: number | null
    evidence_widht?: number | null
    evidence_height?: number | null
    improvment?: string | null
  }

  export type TrSupplierAuditUpdateInput = {
    plan_type?: NullableStringFieldUpdateOperationsInput | string | null
    plant?: NullableStringFieldUpdateOperationsInput | string | null
    date_plan?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_supplier?: NullableIntFieldUpdateOperationsInput | number | null
    code_supplier?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    id_material?: NullableIntFieldUpdateOperationsInput | number | null
    date_complete?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    evidence?: NullableStringFieldUpdateOperationsInput | string | null
    evidence_type?: NullableStringFieldUpdateOperationsInput | string | null
    evidence_size?: NullableIntFieldUpdateOperationsInput | number | null
    evidence_widht?: NullableIntFieldUpdateOperationsInput | number | null
    evidence_height?: NullableIntFieldUpdateOperationsInput | number | null
    improvment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TrSupplierAuditUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    plan_type?: NullableStringFieldUpdateOperationsInput | string | null
    plant?: NullableStringFieldUpdateOperationsInput | string | null
    date_plan?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_supplier?: NullableIntFieldUpdateOperationsInput | number | null
    code_supplier?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    id_material?: NullableIntFieldUpdateOperationsInput | number | null
    date_complete?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    evidence?: NullableStringFieldUpdateOperationsInput | string | null
    evidence_type?: NullableStringFieldUpdateOperationsInput | string | null
    evidence_size?: NullableIntFieldUpdateOperationsInput | number | null
    evidence_widht?: NullableIntFieldUpdateOperationsInput | number | null
    evidence_height?: NullableIntFieldUpdateOperationsInput | number | null
    improvment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TrSupplierAuditCreateManyInput = {
    id?: number
    plan_type?: string | null
    plant?: string | null
    date_plan?: Date | string | null
    id_supplier?: number | null
    code_supplier?: string | null
    city?: string | null
    id_material?: number | null
    date_complete?: Date | string | null
    score?: number | null
    status?: number | null
    evidence?: string | null
    evidence_type?: string | null
    evidence_size?: number | null
    evidence_widht?: number | null
    evidence_height?: number | null
    improvment?: string | null
  }

  export type TrSupplierAuditUpdateManyMutationInput = {
    plan_type?: NullableStringFieldUpdateOperationsInput | string | null
    plant?: NullableStringFieldUpdateOperationsInput | string | null
    date_plan?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_supplier?: NullableIntFieldUpdateOperationsInput | number | null
    code_supplier?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    id_material?: NullableIntFieldUpdateOperationsInput | number | null
    date_complete?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    evidence?: NullableStringFieldUpdateOperationsInput | string | null
    evidence_type?: NullableStringFieldUpdateOperationsInput | string | null
    evidence_size?: NullableIntFieldUpdateOperationsInput | number | null
    evidence_widht?: NullableIntFieldUpdateOperationsInput | number | null
    evidence_height?: NullableIntFieldUpdateOperationsInput | number | null
    improvment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TrSupplierAuditUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    plan_type?: NullableStringFieldUpdateOperationsInput | string | null
    plant?: NullableStringFieldUpdateOperationsInput | string | null
    date_plan?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_supplier?: NullableIntFieldUpdateOperationsInput | number | null
    code_supplier?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    id_material?: NullableIntFieldUpdateOperationsInput | number | null
    date_complete?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    evidence?: NullableStringFieldUpdateOperationsInput | string | null
    evidence_type?: NullableStringFieldUpdateOperationsInput | string | null
    evidence_size?: NullableIntFieldUpdateOperationsInput | number | null
    evidence_widht?: NullableIntFieldUpdateOperationsInput | number | null
    evidence_height?: NullableIntFieldUpdateOperationsInput | number | null
    improvment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AbnormalityHistoricalCreateInput = {
    kode_vendor: string
    abnormal: string
    total_case?: number | null
  }

  export type AbnormalityHistoricalUncheckedCreateInput = {
    kode_vendor: string
    abnormal: string
    total_case?: number | null
  }

  export type AbnormalityHistoricalUpdateInput = {
    kode_vendor?: StringFieldUpdateOperationsInput | string
    abnormal?: StringFieldUpdateOperationsInput | string
    total_case?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AbnormalityHistoricalUncheckedUpdateInput = {
    kode_vendor?: StringFieldUpdateOperationsInput | string
    abnormal?: StringFieldUpdateOperationsInput | string
    total_case?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AbnormalityHistoricalCreateManyInput = {
    kode_vendor: string
    abnormal: string
    total_case?: number | null
  }

  export type AbnormalityHistoricalUpdateManyMutationInput = {
    kode_vendor?: StringFieldUpdateOperationsInput | string
    abnormal?: StringFieldUpdateOperationsInput | string
    total_case?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AbnormalityHistoricalUncheckedUpdateManyInput = {
    kode_vendor?: StringFieldUpdateOperationsInput | string
    abnormal?: StringFieldUpdateOperationsInput | string
    total_case?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type KedatanganSapNewCreateInput = {
    inspection_lot: string
    plan: string
    OBJNR?: string | null
    OBTYP?: string | null
    tahun?: string | null
    bulan?: string | null
    kuartal?: number | null
    insp_start_date?: Date | string | null
    insp_end_date?: Date | string | null
    vendor?: string | null
    material?: string | null
    lotno?: string | null
    ket?: string | null
    insp_quantity?: number | null
    satuan?: string | null
    jenis?: string | null
  }

  export type KedatanganSapNewUncheckedCreateInput = {
    inspection_lot: string
    plan: string
    OBJNR?: string | null
    OBTYP?: string | null
    tahun?: string | null
    bulan?: string | null
    kuartal?: number | null
    insp_start_date?: Date | string | null
    insp_end_date?: Date | string | null
    vendor?: string | null
    material?: string | null
    lotno?: string | null
    ket?: string | null
    insp_quantity?: number | null
    satuan?: string | null
    jenis?: string | null
  }

  export type KedatanganSapNewUpdateInput = {
    inspection_lot?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    OBJNR?: NullableStringFieldUpdateOperationsInput | string | null
    OBTYP?: NullableStringFieldUpdateOperationsInput | string | null
    tahun?: NullableStringFieldUpdateOperationsInput | string | null
    bulan?: NullableStringFieldUpdateOperationsInput | string | null
    kuartal?: NullableIntFieldUpdateOperationsInput | number | null
    insp_start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    insp_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vendor?: NullableStringFieldUpdateOperationsInput | string | null
    material?: NullableStringFieldUpdateOperationsInput | string | null
    lotno?: NullableStringFieldUpdateOperationsInput | string | null
    ket?: NullableStringFieldUpdateOperationsInput | string | null
    insp_quantity?: NullableFloatFieldUpdateOperationsInput | number | null
    satuan?: NullableStringFieldUpdateOperationsInput | string | null
    jenis?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type KedatanganSapNewUncheckedUpdateInput = {
    inspection_lot?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    OBJNR?: NullableStringFieldUpdateOperationsInput | string | null
    OBTYP?: NullableStringFieldUpdateOperationsInput | string | null
    tahun?: NullableStringFieldUpdateOperationsInput | string | null
    bulan?: NullableStringFieldUpdateOperationsInput | string | null
    kuartal?: NullableIntFieldUpdateOperationsInput | number | null
    insp_start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    insp_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vendor?: NullableStringFieldUpdateOperationsInput | string | null
    material?: NullableStringFieldUpdateOperationsInput | string | null
    lotno?: NullableStringFieldUpdateOperationsInput | string | null
    ket?: NullableStringFieldUpdateOperationsInput | string | null
    insp_quantity?: NullableFloatFieldUpdateOperationsInput | number | null
    satuan?: NullableStringFieldUpdateOperationsInput | string | null
    jenis?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type KedatanganSapNewCreateManyInput = {
    inspection_lot: string
    plan: string
    OBJNR?: string | null
    OBTYP?: string | null
    tahun?: string | null
    bulan?: string | null
    kuartal?: number | null
    insp_start_date?: Date | string | null
    insp_end_date?: Date | string | null
    vendor?: string | null
    material?: string | null
    lotno?: string | null
    ket?: string | null
    insp_quantity?: number | null
    satuan?: string | null
    jenis?: string | null
  }

  export type KedatanganSapNewUpdateManyMutationInput = {
    inspection_lot?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    OBJNR?: NullableStringFieldUpdateOperationsInput | string | null
    OBTYP?: NullableStringFieldUpdateOperationsInput | string | null
    tahun?: NullableStringFieldUpdateOperationsInput | string | null
    bulan?: NullableStringFieldUpdateOperationsInput | string | null
    kuartal?: NullableIntFieldUpdateOperationsInput | number | null
    insp_start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    insp_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vendor?: NullableStringFieldUpdateOperationsInput | string | null
    material?: NullableStringFieldUpdateOperationsInput | string | null
    lotno?: NullableStringFieldUpdateOperationsInput | string | null
    ket?: NullableStringFieldUpdateOperationsInput | string | null
    insp_quantity?: NullableFloatFieldUpdateOperationsInput | number | null
    satuan?: NullableStringFieldUpdateOperationsInput | string | null
    jenis?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type KedatanganSapNewUncheckedUpdateManyInput = {
    inspection_lot?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    OBJNR?: NullableStringFieldUpdateOperationsInput | string | null
    OBTYP?: NullableStringFieldUpdateOperationsInput | string | null
    tahun?: NullableStringFieldUpdateOperationsInput | string | null
    bulan?: NullableStringFieldUpdateOperationsInput | string | null
    kuartal?: NullableIntFieldUpdateOperationsInput | number | null
    insp_start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    insp_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vendor?: NullableStringFieldUpdateOperationsInput | string | null
    material?: NullableStringFieldUpdateOperationsInput | string | null
    lotno?: NullableStringFieldUpdateOperationsInput | string | null
    ket?: NullableStringFieldUpdateOperationsInput | string | null
    insp_quantity?: NullableFloatFieldUpdateOperationsInput | number | null
    satuan?: NullableStringFieldUpdateOperationsInput | string | null
    jenis?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type SupplierMaterialViewOrderByRelevanceInput = {
    fields: SupplierMaterialViewOrderByRelevanceFieldEnum | SupplierMaterialViewOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SupplierMaterialViewCountOrderByAggregateInput = {
    id?: SortOrder
    kode_vendor?: SortOrder
    name_vendor?: SortOrder
    material_code?: SortOrder
    nama_material?: SortOrder
    area?: SortOrder
  }

  export type SupplierMaterialViewAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SupplierMaterialViewMaxOrderByAggregateInput = {
    id?: SortOrder
    kode_vendor?: SortOrder
    name_vendor?: SortOrder
    material_code?: SortOrder
    nama_material?: SortOrder
    area?: SortOrder
  }

  export type SupplierMaterialViewMinOrderByAggregateInput = {
    id?: SortOrder
    kode_vendor?: SortOrder
    name_vendor?: SortOrder
    material_code?: SortOrder
    nama_material?: SortOrder
    area?: SortOrder
  }

  export type SupplierMaterialViewSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type TrSupplierAuditOrderByRelevanceInput = {
    fields: TrSupplierAuditOrderByRelevanceFieldEnum | TrSupplierAuditOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TrSupplierAuditCountOrderByAggregateInput = {
    id?: SortOrder
    plan_type?: SortOrder
    plant?: SortOrder
    date_plan?: SortOrder
    id_supplier?: SortOrder
    code_supplier?: SortOrder
    city?: SortOrder
    id_material?: SortOrder
    date_complete?: SortOrder
    score?: SortOrder
    status?: SortOrder
    evidence?: SortOrder
    evidence_type?: SortOrder
    evidence_size?: SortOrder
    evidence_widht?: SortOrder
    evidence_height?: SortOrder
    improvment?: SortOrder
  }

  export type TrSupplierAuditAvgOrderByAggregateInput = {
    id?: SortOrder
    id_supplier?: SortOrder
    id_material?: SortOrder
    score?: SortOrder
    status?: SortOrder
    evidence_size?: SortOrder
    evidence_widht?: SortOrder
    evidence_height?: SortOrder
  }

  export type TrSupplierAuditMaxOrderByAggregateInput = {
    id?: SortOrder
    plan_type?: SortOrder
    plant?: SortOrder
    date_plan?: SortOrder
    id_supplier?: SortOrder
    code_supplier?: SortOrder
    city?: SortOrder
    id_material?: SortOrder
    date_complete?: SortOrder
    score?: SortOrder
    status?: SortOrder
    evidence?: SortOrder
    evidence_type?: SortOrder
    evidence_size?: SortOrder
    evidence_widht?: SortOrder
    evidence_height?: SortOrder
    improvment?: SortOrder
  }

  export type TrSupplierAuditMinOrderByAggregateInput = {
    id?: SortOrder
    plan_type?: SortOrder
    plant?: SortOrder
    date_plan?: SortOrder
    id_supplier?: SortOrder
    code_supplier?: SortOrder
    city?: SortOrder
    id_material?: SortOrder
    date_complete?: SortOrder
    score?: SortOrder
    status?: SortOrder
    evidence?: SortOrder
    evidence_type?: SortOrder
    evidence_size?: SortOrder
    evidence_widht?: SortOrder
    evidence_height?: SortOrder
    improvment?: SortOrder
  }

  export type TrSupplierAuditSumOrderByAggregateInput = {
    id?: SortOrder
    id_supplier?: SortOrder
    id_material?: SortOrder
    score?: SortOrder
    status?: SortOrder
    evidence_size?: SortOrder
    evidence_widht?: SortOrder
    evidence_height?: SortOrder
  }

  export type AbnormalityHistoricalOrderByRelevanceInput = {
    fields: AbnormalityHistoricalOrderByRelevanceFieldEnum | AbnormalityHistoricalOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AbnormalityHistoricalKode_vendorAbnormalCompoundUniqueInput = {
    kode_vendor: string
    abnormal: string
  }

  export type AbnormalityHistoricalCountOrderByAggregateInput = {
    kode_vendor?: SortOrder
    abnormal?: SortOrder
    total_case?: SortOrder
  }

  export type AbnormalityHistoricalAvgOrderByAggregateInput = {
    total_case?: SortOrder
  }

  export type AbnormalityHistoricalMaxOrderByAggregateInput = {
    kode_vendor?: SortOrder
    abnormal?: SortOrder
    total_case?: SortOrder
  }

  export type AbnormalityHistoricalMinOrderByAggregateInput = {
    kode_vendor?: SortOrder
    abnormal?: SortOrder
    total_case?: SortOrder
  }

  export type AbnormalityHistoricalSumOrderByAggregateInput = {
    total_case?: SortOrder
  }

  export type KedatanganSapNewOrderByRelevanceInput = {
    fields: KedatanganSapNewOrderByRelevanceFieldEnum | KedatanganSapNewOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type KedatanganSapNewInspection_lotPlanCompoundUniqueInput = {
    inspection_lot: string
    plan: string
  }

  export type KedatanganSapNewCountOrderByAggregateInput = {
    inspection_lot?: SortOrder
    plan?: SortOrder
    OBJNR?: SortOrder
    OBTYP?: SortOrder
    tahun?: SortOrder
    bulan?: SortOrder
    kuartal?: SortOrder
    insp_start_date?: SortOrder
    insp_end_date?: SortOrder
    vendor?: SortOrder
    material?: SortOrder
    lotno?: SortOrder
    ket?: SortOrder
    insp_quantity?: SortOrder
    satuan?: SortOrder
    jenis?: SortOrder
  }

  export type KedatanganSapNewAvgOrderByAggregateInput = {
    kuartal?: SortOrder
    insp_quantity?: SortOrder
  }

  export type KedatanganSapNewMaxOrderByAggregateInput = {
    inspection_lot?: SortOrder
    plan?: SortOrder
    OBJNR?: SortOrder
    OBTYP?: SortOrder
    tahun?: SortOrder
    bulan?: SortOrder
    kuartal?: SortOrder
    insp_start_date?: SortOrder
    insp_end_date?: SortOrder
    vendor?: SortOrder
    material?: SortOrder
    lotno?: SortOrder
    ket?: SortOrder
    insp_quantity?: SortOrder
    satuan?: SortOrder
    jenis?: SortOrder
  }

  export type KedatanganSapNewMinOrderByAggregateInput = {
    inspection_lot?: SortOrder
    plan?: SortOrder
    OBJNR?: SortOrder
    OBTYP?: SortOrder
    tahun?: SortOrder
    bulan?: SortOrder
    kuartal?: SortOrder
    insp_start_date?: SortOrder
    insp_end_date?: SortOrder
    vendor?: SortOrder
    material?: SortOrder
    lotno?: SortOrder
    ket?: SortOrder
    insp_quantity?: SortOrder
    satuan?: SortOrder
    jenis?: SortOrder
  }

  export type KedatanganSapNewSumOrderByAggregateInput = {
    kuartal?: SortOrder
    insp_quantity?: SortOrder
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