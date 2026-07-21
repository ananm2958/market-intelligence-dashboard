
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Watchlist
 * 
 */
export type Watchlist = $Result.DefaultSelection<Prisma.$WatchlistPayload>
/**
 * Model WatchlistItem
 * 
 */
export type WatchlistItem = $Result.DefaultSelection<Prisma.$WatchlistItemPayload>
/**
 * Model PriceSnapshot
 * 
 */
export type PriceSnapshot = $Result.DefaultSelection<Prisma.$PriceSnapshotPayload>
/**
 * Model DailyPrice
 * 
 */
export type DailyPrice = $Result.DefaultSelection<Prisma.$DailyPricePayload>
/**
 * Model TrackedSymbol
 * 
 */
export type TrackedSymbol = $Result.DefaultSelection<Prisma.$TrackedSymbolPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AssetType: {
  STOCK: 'STOCK',
  CRYPTO: 'CRYPTO'
};

export type AssetType = (typeof AssetType)[keyof typeof AssetType]

}

export type AssetType = $Enums.AssetType

export const AssetType: typeof $Enums.AssetType

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.watchlist`: Exposes CRUD operations for the **Watchlist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Watchlists
    * const watchlists = await prisma.watchlist.findMany()
    * ```
    */
  get watchlist(): Prisma.WatchlistDelegate<ExtArgs>;

  /**
   * `prisma.watchlistItem`: Exposes CRUD operations for the **WatchlistItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WatchlistItems
    * const watchlistItems = await prisma.watchlistItem.findMany()
    * ```
    */
  get watchlistItem(): Prisma.WatchlistItemDelegate<ExtArgs>;

  /**
   * `prisma.priceSnapshot`: Exposes CRUD operations for the **PriceSnapshot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PriceSnapshots
    * const priceSnapshots = await prisma.priceSnapshot.findMany()
    * ```
    */
  get priceSnapshot(): Prisma.PriceSnapshotDelegate<ExtArgs>;

  /**
   * `prisma.dailyPrice`: Exposes CRUD operations for the **DailyPrice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DailyPrices
    * const dailyPrices = await prisma.dailyPrice.findMany()
    * ```
    */
  get dailyPrice(): Prisma.DailyPriceDelegate<ExtArgs>;

  /**
   * `prisma.trackedSymbol`: Exposes CRUD operations for the **TrackedSymbol** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TrackedSymbols
    * const trackedSymbols = await prisma.trackedSymbol.findMany()
    * ```
    */
  get trackedSymbol(): Prisma.TrackedSymbolDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
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
    User: 'User',
    Watchlist: 'Watchlist',
    WatchlistItem: 'WatchlistItem',
    PriceSnapshot: 'PriceSnapshot',
    DailyPrice: 'DailyPrice',
    TrackedSymbol: 'TrackedSymbol'
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
      modelProps: "user" | "watchlist" | "watchlistItem" | "priceSnapshot" | "dailyPrice" | "trackedSymbol"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Watchlist: {
        payload: Prisma.$WatchlistPayload<ExtArgs>
        fields: Prisma.WatchlistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WatchlistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WatchlistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload>
          }
          findFirst: {
            args: Prisma.WatchlistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WatchlistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload>
          }
          findMany: {
            args: Prisma.WatchlistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload>[]
          }
          create: {
            args: Prisma.WatchlistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload>
          }
          createMany: {
            args: Prisma.WatchlistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WatchlistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload>[]
          }
          delete: {
            args: Prisma.WatchlistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload>
          }
          update: {
            args: Prisma.WatchlistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload>
          }
          deleteMany: {
            args: Prisma.WatchlistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WatchlistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WatchlistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload>
          }
          aggregate: {
            args: Prisma.WatchlistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWatchlist>
          }
          groupBy: {
            args: Prisma.WatchlistGroupByArgs<ExtArgs>
            result: $Utils.Optional<WatchlistGroupByOutputType>[]
          }
          count: {
            args: Prisma.WatchlistCountArgs<ExtArgs>
            result: $Utils.Optional<WatchlistCountAggregateOutputType> | number
          }
        }
      }
      WatchlistItem: {
        payload: Prisma.$WatchlistItemPayload<ExtArgs>
        fields: Prisma.WatchlistItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WatchlistItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WatchlistItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistItemPayload>
          }
          findFirst: {
            args: Prisma.WatchlistItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WatchlistItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistItemPayload>
          }
          findMany: {
            args: Prisma.WatchlistItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistItemPayload>[]
          }
          create: {
            args: Prisma.WatchlistItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistItemPayload>
          }
          createMany: {
            args: Prisma.WatchlistItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WatchlistItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistItemPayload>[]
          }
          delete: {
            args: Prisma.WatchlistItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistItemPayload>
          }
          update: {
            args: Prisma.WatchlistItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistItemPayload>
          }
          deleteMany: {
            args: Prisma.WatchlistItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WatchlistItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WatchlistItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistItemPayload>
          }
          aggregate: {
            args: Prisma.WatchlistItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWatchlistItem>
          }
          groupBy: {
            args: Prisma.WatchlistItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<WatchlistItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.WatchlistItemCountArgs<ExtArgs>
            result: $Utils.Optional<WatchlistItemCountAggregateOutputType> | number
          }
        }
      }
      PriceSnapshot: {
        payload: Prisma.$PriceSnapshotPayload<ExtArgs>
        fields: Prisma.PriceSnapshotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PriceSnapshotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceSnapshotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PriceSnapshotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceSnapshotPayload>
          }
          findFirst: {
            args: Prisma.PriceSnapshotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceSnapshotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PriceSnapshotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceSnapshotPayload>
          }
          findMany: {
            args: Prisma.PriceSnapshotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceSnapshotPayload>[]
          }
          create: {
            args: Prisma.PriceSnapshotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceSnapshotPayload>
          }
          createMany: {
            args: Prisma.PriceSnapshotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PriceSnapshotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceSnapshotPayload>[]
          }
          delete: {
            args: Prisma.PriceSnapshotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceSnapshotPayload>
          }
          update: {
            args: Prisma.PriceSnapshotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceSnapshotPayload>
          }
          deleteMany: {
            args: Prisma.PriceSnapshotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PriceSnapshotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PriceSnapshotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceSnapshotPayload>
          }
          aggregate: {
            args: Prisma.PriceSnapshotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePriceSnapshot>
          }
          groupBy: {
            args: Prisma.PriceSnapshotGroupByArgs<ExtArgs>
            result: $Utils.Optional<PriceSnapshotGroupByOutputType>[]
          }
          count: {
            args: Prisma.PriceSnapshotCountArgs<ExtArgs>
            result: $Utils.Optional<PriceSnapshotCountAggregateOutputType> | number
          }
        }
      }
      DailyPrice: {
        payload: Prisma.$DailyPricePayload<ExtArgs>
        fields: Prisma.DailyPriceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DailyPriceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyPricePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DailyPriceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyPricePayload>
          }
          findFirst: {
            args: Prisma.DailyPriceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyPricePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DailyPriceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyPricePayload>
          }
          findMany: {
            args: Prisma.DailyPriceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyPricePayload>[]
          }
          create: {
            args: Prisma.DailyPriceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyPricePayload>
          }
          createMany: {
            args: Prisma.DailyPriceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DailyPriceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyPricePayload>[]
          }
          delete: {
            args: Prisma.DailyPriceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyPricePayload>
          }
          update: {
            args: Prisma.DailyPriceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyPricePayload>
          }
          deleteMany: {
            args: Prisma.DailyPriceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DailyPriceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DailyPriceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyPricePayload>
          }
          aggregate: {
            args: Prisma.DailyPriceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDailyPrice>
          }
          groupBy: {
            args: Prisma.DailyPriceGroupByArgs<ExtArgs>
            result: $Utils.Optional<DailyPriceGroupByOutputType>[]
          }
          count: {
            args: Prisma.DailyPriceCountArgs<ExtArgs>
            result: $Utils.Optional<DailyPriceCountAggregateOutputType> | number
          }
        }
      }
      TrackedSymbol: {
        payload: Prisma.$TrackedSymbolPayload<ExtArgs>
        fields: Prisma.TrackedSymbolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrackedSymbolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackedSymbolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrackedSymbolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackedSymbolPayload>
          }
          findFirst: {
            args: Prisma.TrackedSymbolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackedSymbolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrackedSymbolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackedSymbolPayload>
          }
          findMany: {
            args: Prisma.TrackedSymbolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackedSymbolPayload>[]
          }
          create: {
            args: Prisma.TrackedSymbolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackedSymbolPayload>
          }
          createMany: {
            args: Prisma.TrackedSymbolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TrackedSymbolCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackedSymbolPayload>[]
          }
          delete: {
            args: Prisma.TrackedSymbolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackedSymbolPayload>
          }
          update: {
            args: Prisma.TrackedSymbolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackedSymbolPayload>
          }
          deleteMany: {
            args: Prisma.TrackedSymbolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TrackedSymbolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TrackedSymbolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackedSymbolPayload>
          }
          aggregate: {
            args: Prisma.TrackedSymbolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrackedSymbol>
          }
          groupBy: {
            args: Prisma.TrackedSymbolGroupByArgs<ExtArgs>
            result: $Utils.Optional<TrackedSymbolGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrackedSymbolCountArgs<ExtArgs>
            result: $Utils.Optional<TrackedSymbolCountAggregateOutputType> | number
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    watchlists: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    watchlists?: boolean | UserCountOutputTypeCountWatchlistsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWatchlistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WatchlistWhereInput
  }


  /**
   * Count Type WatchlistCountOutputType
   */

  export type WatchlistCountOutputType = {
    items: number
  }

  export type WatchlistCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | WatchlistCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * WatchlistCountOutputType without action
   */
  export type WatchlistCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchlistCountOutputType
     */
    select?: WatchlistCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WatchlistCountOutputType without action
   */
  export type WatchlistCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WatchlistItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    watchlists?: boolean | User$watchlistsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    watchlists?: boolean | User$watchlistsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      watchlists: Prisma.$WatchlistPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    watchlists<T extends User$watchlistsArgs<ExtArgs> = {}>(args?: Subset<T, User$watchlistsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.watchlists
   */
  export type User$watchlistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
    where?: WatchlistWhereInput
    orderBy?: WatchlistOrderByWithRelationInput | WatchlistOrderByWithRelationInput[]
    cursor?: WatchlistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WatchlistScalarFieldEnum | WatchlistScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Watchlist
   */

  export type AggregateWatchlist = {
    _count: WatchlistCountAggregateOutputType | null
    _min: WatchlistMinAggregateOutputType | null
    _max: WatchlistMaxAggregateOutputType | null
  }

  export type WatchlistMinAggregateOutputType = {
    id: string | null
    name: string | null
    userId: string | null
  }

  export type WatchlistMaxAggregateOutputType = {
    id: string | null
    name: string | null
    userId: string | null
  }

  export type WatchlistCountAggregateOutputType = {
    id: number
    name: number
    userId: number
    _all: number
  }


  export type WatchlistMinAggregateInputType = {
    id?: true
    name?: true
    userId?: true
  }

  export type WatchlistMaxAggregateInputType = {
    id?: true
    name?: true
    userId?: true
  }

  export type WatchlistCountAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    _all?: true
  }

  export type WatchlistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Watchlist to aggregate.
     */
    where?: WatchlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Watchlists to fetch.
     */
    orderBy?: WatchlistOrderByWithRelationInput | WatchlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WatchlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Watchlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Watchlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Watchlists
    **/
    _count?: true | WatchlistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WatchlistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WatchlistMaxAggregateInputType
  }

  export type GetWatchlistAggregateType<T extends WatchlistAggregateArgs> = {
        [P in keyof T & keyof AggregateWatchlist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWatchlist[P]>
      : GetScalarType<T[P], AggregateWatchlist[P]>
  }




  export type WatchlistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WatchlistWhereInput
    orderBy?: WatchlistOrderByWithAggregationInput | WatchlistOrderByWithAggregationInput[]
    by: WatchlistScalarFieldEnum[] | WatchlistScalarFieldEnum
    having?: WatchlistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WatchlistCountAggregateInputType | true
    _min?: WatchlistMinAggregateInputType
    _max?: WatchlistMaxAggregateInputType
  }

  export type WatchlistGroupByOutputType = {
    id: string
    name: string
    userId: string
    _count: WatchlistCountAggregateOutputType | null
    _min: WatchlistMinAggregateOutputType | null
    _max: WatchlistMaxAggregateOutputType | null
  }

  type GetWatchlistGroupByPayload<T extends WatchlistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WatchlistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WatchlistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WatchlistGroupByOutputType[P]>
            : GetScalarType<T[P], WatchlistGroupByOutputType[P]>
        }
      >
    >


  export type WatchlistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | Watchlist$itemsArgs<ExtArgs>
    _count?: boolean | WatchlistCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["watchlist"]>

  export type WatchlistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["watchlist"]>

  export type WatchlistSelectScalar = {
    id?: boolean
    name?: boolean
    userId?: boolean
  }

  export type WatchlistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | Watchlist$itemsArgs<ExtArgs>
    _count?: boolean | WatchlistCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WatchlistIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WatchlistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Watchlist"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      items: Prisma.$WatchlistItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      userId: string
    }, ExtArgs["result"]["watchlist"]>
    composites: {}
  }

  type WatchlistGetPayload<S extends boolean | null | undefined | WatchlistDefaultArgs> = $Result.GetResult<Prisma.$WatchlistPayload, S>

  type WatchlistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WatchlistFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WatchlistCountAggregateInputType | true
    }

  export interface WatchlistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Watchlist'], meta: { name: 'Watchlist' } }
    /**
     * Find zero or one Watchlist that matches the filter.
     * @param {WatchlistFindUniqueArgs} args - Arguments to find a Watchlist
     * @example
     * // Get one Watchlist
     * const watchlist = await prisma.watchlist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WatchlistFindUniqueArgs>(args: SelectSubset<T, WatchlistFindUniqueArgs<ExtArgs>>): Prisma__WatchlistClient<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Watchlist that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {WatchlistFindUniqueOrThrowArgs} args - Arguments to find a Watchlist
     * @example
     * // Get one Watchlist
     * const watchlist = await prisma.watchlist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WatchlistFindUniqueOrThrowArgs>(args: SelectSubset<T, WatchlistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WatchlistClient<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Watchlist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistFindFirstArgs} args - Arguments to find a Watchlist
     * @example
     * // Get one Watchlist
     * const watchlist = await prisma.watchlist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WatchlistFindFirstArgs>(args?: SelectSubset<T, WatchlistFindFirstArgs<ExtArgs>>): Prisma__WatchlistClient<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Watchlist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistFindFirstOrThrowArgs} args - Arguments to find a Watchlist
     * @example
     * // Get one Watchlist
     * const watchlist = await prisma.watchlist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WatchlistFindFirstOrThrowArgs>(args?: SelectSubset<T, WatchlistFindFirstOrThrowArgs<ExtArgs>>): Prisma__WatchlistClient<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Watchlists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Watchlists
     * const watchlists = await prisma.watchlist.findMany()
     * 
     * // Get first 10 Watchlists
     * const watchlists = await prisma.watchlist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const watchlistWithIdOnly = await prisma.watchlist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WatchlistFindManyArgs>(args?: SelectSubset<T, WatchlistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Watchlist.
     * @param {WatchlistCreateArgs} args - Arguments to create a Watchlist.
     * @example
     * // Create one Watchlist
     * const Watchlist = await prisma.watchlist.create({
     *   data: {
     *     // ... data to create a Watchlist
     *   }
     * })
     * 
     */
    create<T extends WatchlistCreateArgs>(args: SelectSubset<T, WatchlistCreateArgs<ExtArgs>>): Prisma__WatchlistClient<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Watchlists.
     * @param {WatchlistCreateManyArgs} args - Arguments to create many Watchlists.
     * @example
     * // Create many Watchlists
     * const watchlist = await prisma.watchlist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WatchlistCreateManyArgs>(args?: SelectSubset<T, WatchlistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Watchlists and returns the data saved in the database.
     * @param {WatchlistCreateManyAndReturnArgs} args - Arguments to create many Watchlists.
     * @example
     * // Create many Watchlists
     * const watchlist = await prisma.watchlist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Watchlists and only return the `id`
     * const watchlistWithIdOnly = await prisma.watchlist.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WatchlistCreateManyAndReturnArgs>(args?: SelectSubset<T, WatchlistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Watchlist.
     * @param {WatchlistDeleteArgs} args - Arguments to delete one Watchlist.
     * @example
     * // Delete one Watchlist
     * const Watchlist = await prisma.watchlist.delete({
     *   where: {
     *     // ... filter to delete one Watchlist
     *   }
     * })
     * 
     */
    delete<T extends WatchlistDeleteArgs>(args: SelectSubset<T, WatchlistDeleteArgs<ExtArgs>>): Prisma__WatchlistClient<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Watchlist.
     * @param {WatchlistUpdateArgs} args - Arguments to update one Watchlist.
     * @example
     * // Update one Watchlist
     * const watchlist = await prisma.watchlist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WatchlistUpdateArgs>(args: SelectSubset<T, WatchlistUpdateArgs<ExtArgs>>): Prisma__WatchlistClient<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Watchlists.
     * @param {WatchlistDeleteManyArgs} args - Arguments to filter Watchlists to delete.
     * @example
     * // Delete a few Watchlists
     * const { count } = await prisma.watchlist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WatchlistDeleteManyArgs>(args?: SelectSubset<T, WatchlistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Watchlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Watchlists
     * const watchlist = await prisma.watchlist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WatchlistUpdateManyArgs>(args: SelectSubset<T, WatchlistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Watchlist.
     * @param {WatchlistUpsertArgs} args - Arguments to update or create a Watchlist.
     * @example
     * // Update or create a Watchlist
     * const watchlist = await prisma.watchlist.upsert({
     *   create: {
     *     // ... data to create a Watchlist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Watchlist we want to update
     *   }
     * })
     */
    upsert<T extends WatchlistUpsertArgs>(args: SelectSubset<T, WatchlistUpsertArgs<ExtArgs>>): Prisma__WatchlistClient<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Watchlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistCountArgs} args - Arguments to filter Watchlists to count.
     * @example
     * // Count the number of Watchlists
     * const count = await prisma.watchlist.count({
     *   where: {
     *     // ... the filter for the Watchlists we want to count
     *   }
     * })
    **/
    count<T extends WatchlistCountArgs>(
      args?: Subset<T, WatchlistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WatchlistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Watchlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WatchlistAggregateArgs>(args: Subset<T, WatchlistAggregateArgs>): Prisma.PrismaPromise<GetWatchlistAggregateType<T>>

    /**
     * Group by Watchlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistGroupByArgs} args - Group by arguments.
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
      T extends WatchlistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WatchlistGroupByArgs['orderBy'] }
        : { orderBy?: WatchlistGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WatchlistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWatchlistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Watchlist model
   */
  readonly fields: WatchlistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Watchlist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WatchlistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    items<T extends Watchlist$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Watchlist$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchlistItemPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Watchlist model
   */ 
  interface WatchlistFieldRefs {
    readonly id: FieldRef<"Watchlist", 'String'>
    readonly name: FieldRef<"Watchlist", 'String'>
    readonly userId: FieldRef<"Watchlist", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Watchlist findUnique
   */
  export type WatchlistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
    /**
     * Filter, which Watchlist to fetch.
     */
    where: WatchlistWhereUniqueInput
  }

  /**
   * Watchlist findUniqueOrThrow
   */
  export type WatchlistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
    /**
     * Filter, which Watchlist to fetch.
     */
    where: WatchlistWhereUniqueInput
  }

  /**
   * Watchlist findFirst
   */
  export type WatchlistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
    /**
     * Filter, which Watchlist to fetch.
     */
    where?: WatchlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Watchlists to fetch.
     */
    orderBy?: WatchlistOrderByWithRelationInput | WatchlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Watchlists.
     */
    cursor?: WatchlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Watchlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Watchlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Watchlists.
     */
    distinct?: WatchlistScalarFieldEnum | WatchlistScalarFieldEnum[]
  }

  /**
   * Watchlist findFirstOrThrow
   */
  export type WatchlistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
    /**
     * Filter, which Watchlist to fetch.
     */
    where?: WatchlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Watchlists to fetch.
     */
    orderBy?: WatchlistOrderByWithRelationInput | WatchlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Watchlists.
     */
    cursor?: WatchlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Watchlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Watchlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Watchlists.
     */
    distinct?: WatchlistScalarFieldEnum | WatchlistScalarFieldEnum[]
  }

  /**
   * Watchlist findMany
   */
  export type WatchlistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
    /**
     * Filter, which Watchlists to fetch.
     */
    where?: WatchlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Watchlists to fetch.
     */
    orderBy?: WatchlistOrderByWithRelationInput | WatchlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Watchlists.
     */
    cursor?: WatchlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Watchlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Watchlists.
     */
    skip?: number
    distinct?: WatchlistScalarFieldEnum | WatchlistScalarFieldEnum[]
  }

  /**
   * Watchlist create
   */
  export type WatchlistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
    /**
     * The data needed to create a Watchlist.
     */
    data: XOR<WatchlistCreateInput, WatchlistUncheckedCreateInput>
  }

  /**
   * Watchlist createMany
   */
  export type WatchlistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Watchlists.
     */
    data: WatchlistCreateManyInput | WatchlistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Watchlist createManyAndReturn
   */
  export type WatchlistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Watchlists.
     */
    data: WatchlistCreateManyInput | WatchlistCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Watchlist update
   */
  export type WatchlistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
    /**
     * The data needed to update a Watchlist.
     */
    data: XOR<WatchlistUpdateInput, WatchlistUncheckedUpdateInput>
    /**
     * Choose, which Watchlist to update.
     */
    where: WatchlistWhereUniqueInput
  }

  /**
   * Watchlist updateMany
   */
  export type WatchlistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Watchlists.
     */
    data: XOR<WatchlistUpdateManyMutationInput, WatchlistUncheckedUpdateManyInput>
    /**
     * Filter which Watchlists to update
     */
    where?: WatchlistWhereInput
  }

  /**
   * Watchlist upsert
   */
  export type WatchlistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
    /**
     * The filter to search for the Watchlist to update in case it exists.
     */
    where: WatchlistWhereUniqueInput
    /**
     * In case the Watchlist found by the `where` argument doesn't exist, create a new Watchlist with this data.
     */
    create: XOR<WatchlistCreateInput, WatchlistUncheckedCreateInput>
    /**
     * In case the Watchlist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WatchlistUpdateInput, WatchlistUncheckedUpdateInput>
  }

  /**
   * Watchlist delete
   */
  export type WatchlistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
    /**
     * Filter which Watchlist to delete.
     */
    where: WatchlistWhereUniqueInput
  }

  /**
   * Watchlist deleteMany
   */
  export type WatchlistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Watchlists to delete
     */
    where?: WatchlistWhereInput
  }

  /**
   * Watchlist.items
   */
  export type Watchlist$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchlistItem
     */
    select?: WatchlistItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistItemInclude<ExtArgs> | null
    where?: WatchlistItemWhereInput
    orderBy?: WatchlistItemOrderByWithRelationInput | WatchlistItemOrderByWithRelationInput[]
    cursor?: WatchlistItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WatchlistItemScalarFieldEnum | WatchlistItemScalarFieldEnum[]
  }

  /**
   * Watchlist without action
   */
  export type WatchlistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
  }


  /**
   * Model WatchlistItem
   */

  export type AggregateWatchlistItem = {
    _count: WatchlistItemCountAggregateOutputType | null
    _min: WatchlistItemMinAggregateOutputType | null
    _max: WatchlistItemMaxAggregateOutputType | null
  }

  export type WatchlistItemMinAggregateOutputType = {
    id: string | null
    symbol: string | null
    assetType: $Enums.AssetType | null
    watchlistId: string | null
  }

  export type WatchlistItemMaxAggregateOutputType = {
    id: string | null
    symbol: string | null
    assetType: $Enums.AssetType | null
    watchlistId: string | null
  }

  export type WatchlistItemCountAggregateOutputType = {
    id: number
    symbol: number
    assetType: number
    watchlistId: number
    _all: number
  }


  export type WatchlistItemMinAggregateInputType = {
    id?: true
    symbol?: true
    assetType?: true
    watchlistId?: true
  }

  export type WatchlistItemMaxAggregateInputType = {
    id?: true
    symbol?: true
    assetType?: true
    watchlistId?: true
  }

  export type WatchlistItemCountAggregateInputType = {
    id?: true
    symbol?: true
    assetType?: true
    watchlistId?: true
    _all?: true
  }

  export type WatchlistItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WatchlistItem to aggregate.
     */
    where?: WatchlistItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WatchlistItems to fetch.
     */
    orderBy?: WatchlistItemOrderByWithRelationInput | WatchlistItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WatchlistItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WatchlistItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WatchlistItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WatchlistItems
    **/
    _count?: true | WatchlistItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WatchlistItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WatchlistItemMaxAggregateInputType
  }

  export type GetWatchlistItemAggregateType<T extends WatchlistItemAggregateArgs> = {
        [P in keyof T & keyof AggregateWatchlistItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWatchlistItem[P]>
      : GetScalarType<T[P], AggregateWatchlistItem[P]>
  }




  export type WatchlistItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WatchlistItemWhereInput
    orderBy?: WatchlistItemOrderByWithAggregationInput | WatchlistItemOrderByWithAggregationInput[]
    by: WatchlistItemScalarFieldEnum[] | WatchlistItemScalarFieldEnum
    having?: WatchlistItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WatchlistItemCountAggregateInputType | true
    _min?: WatchlistItemMinAggregateInputType
    _max?: WatchlistItemMaxAggregateInputType
  }

  export type WatchlistItemGroupByOutputType = {
    id: string
    symbol: string
    assetType: $Enums.AssetType
    watchlistId: string
    _count: WatchlistItemCountAggregateOutputType | null
    _min: WatchlistItemMinAggregateOutputType | null
    _max: WatchlistItemMaxAggregateOutputType | null
  }

  type GetWatchlistItemGroupByPayload<T extends WatchlistItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WatchlistItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WatchlistItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WatchlistItemGroupByOutputType[P]>
            : GetScalarType<T[P], WatchlistItemGroupByOutputType[P]>
        }
      >
    >


  export type WatchlistItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    symbol?: boolean
    assetType?: boolean
    watchlistId?: boolean
    watchlist?: boolean | WatchlistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["watchlistItem"]>

  export type WatchlistItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    symbol?: boolean
    assetType?: boolean
    watchlistId?: boolean
    watchlist?: boolean | WatchlistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["watchlistItem"]>

  export type WatchlistItemSelectScalar = {
    id?: boolean
    symbol?: boolean
    assetType?: boolean
    watchlistId?: boolean
  }

  export type WatchlistItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    watchlist?: boolean | WatchlistDefaultArgs<ExtArgs>
  }
  export type WatchlistItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    watchlist?: boolean | WatchlistDefaultArgs<ExtArgs>
  }

  export type $WatchlistItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WatchlistItem"
    objects: {
      watchlist: Prisma.$WatchlistPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      symbol: string
      assetType: $Enums.AssetType
      watchlistId: string
    }, ExtArgs["result"]["watchlistItem"]>
    composites: {}
  }

  type WatchlistItemGetPayload<S extends boolean | null | undefined | WatchlistItemDefaultArgs> = $Result.GetResult<Prisma.$WatchlistItemPayload, S>

  type WatchlistItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WatchlistItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WatchlistItemCountAggregateInputType | true
    }

  export interface WatchlistItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WatchlistItem'], meta: { name: 'WatchlistItem' } }
    /**
     * Find zero or one WatchlistItem that matches the filter.
     * @param {WatchlistItemFindUniqueArgs} args - Arguments to find a WatchlistItem
     * @example
     * // Get one WatchlistItem
     * const watchlistItem = await prisma.watchlistItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WatchlistItemFindUniqueArgs>(args: SelectSubset<T, WatchlistItemFindUniqueArgs<ExtArgs>>): Prisma__WatchlistItemClient<$Result.GetResult<Prisma.$WatchlistItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one WatchlistItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {WatchlistItemFindUniqueOrThrowArgs} args - Arguments to find a WatchlistItem
     * @example
     * // Get one WatchlistItem
     * const watchlistItem = await prisma.watchlistItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WatchlistItemFindUniqueOrThrowArgs>(args: SelectSubset<T, WatchlistItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WatchlistItemClient<$Result.GetResult<Prisma.$WatchlistItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first WatchlistItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistItemFindFirstArgs} args - Arguments to find a WatchlistItem
     * @example
     * // Get one WatchlistItem
     * const watchlistItem = await prisma.watchlistItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WatchlistItemFindFirstArgs>(args?: SelectSubset<T, WatchlistItemFindFirstArgs<ExtArgs>>): Prisma__WatchlistItemClient<$Result.GetResult<Prisma.$WatchlistItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first WatchlistItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistItemFindFirstOrThrowArgs} args - Arguments to find a WatchlistItem
     * @example
     * // Get one WatchlistItem
     * const watchlistItem = await prisma.watchlistItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WatchlistItemFindFirstOrThrowArgs>(args?: SelectSubset<T, WatchlistItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__WatchlistItemClient<$Result.GetResult<Prisma.$WatchlistItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more WatchlistItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WatchlistItems
     * const watchlistItems = await prisma.watchlistItem.findMany()
     * 
     * // Get first 10 WatchlistItems
     * const watchlistItems = await prisma.watchlistItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const watchlistItemWithIdOnly = await prisma.watchlistItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WatchlistItemFindManyArgs>(args?: SelectSubset<T, WatchlistItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchlistItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a WatchlistItem.
     * @param {WatchlistItemCreateArgs} args - Arguments to create a WatchlistItem.
     * @example
     * // Create one WatchlistItem
     * const WatchlistItem = await prisma.watchlistItem.create({
     *   data: {
     *     // ... data to create a WatchlistItem
     *   }
     * })
     * 
     */
    create<T extends WatchlistItemCreateArgs>(args: SelectSubset<T, WatchlistItemCreateArgs<ExtArgs>>): Prisma__WatchlistItemClient<$Result.GetResult<Prisma.$WatchlistItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many WatchlistItems.
     * @param {WatchlistItemCreateManyArgs} args - Arguments to create many WatchlistItems.
     * @example
     * // Create many WatchlistItems
     * const watchlistItem = await prisma.watchlistItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WatchlistItemCreateManyArgs>(args?: SelectSubset<T, WatchlistItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WatchlistItems and returns the data saved in the database.
     * @param {WatchlistItemCreateManyAndReturnArgs} args - Arguments to create many WatchlistItems.
     * @example
     * // Create many WatchlistItems
     * const watchlistItem = await prisma.watchlistItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WatchlistItems and only return the `id`
     * const watchlistItemWithIdOnly = await prisma.watchlistItem.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WatchlistItemCreateManyAndReturnArgs>(args?: SelectSubset<T, WatchlistItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchlistItemPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a WatchlistItem.
     * @param {WatchlistItemDeleteArgs} args - Arguments to delete one WatchlistItem.
     * @example
     * // Delete one WatchlistItem
     * const WatchlistItem = await prisma.watchlistItem.delete({
     *   where: {
     *     // ... filter to delete one WatchlistItem
     *   }
     * })
     * 
     */
    delete<T extends WatchlistItemDeleteArgs>(args: SelectSubset<T, WatchlistItemDeleteArgs<ExtArgs>>): Prisma__WatchlistItemClient<$Result.GetResult<Prisma.$WatchlistItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one WatchlistItem.
     * @param {WatchlistItemUpdateArgs} args - Arguments to update one WatchlistItem.
     * @example
     * // Update one WatchlistItem
     * const watchlistItem = await prisma.watchlistItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WatchlistItemUpdateArgs>(args: SelectSubset<T, WatchlistItemUpdateArgs<ExtArgs>>): Prisma__WatchlistItemClient<$Result.GetResult<Prisma.$WatchlistItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more WatchlistItems.
     * @param {WatchlistItemDeleteManyArgs} args - Arguments to filter WatchlistItems to delete.
     * @example
     * // Delete a few WatchlistItems
     * const { count } = await prisma.watchlistItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WatchlistItemDeleteManyArgs>(args?: SelectSubset<T, WatchlistItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WatchlistItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WatchlistItems
     * const watchlistItem = await prisma.watchlistItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WatchlistItemUpdateManyArgs>(args: SelectSubset<T, WatchlistItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WatchlistItem.
     * @param {WatchlistItemUpsertArgs} args - Arguments to update or create a WatchlistItem.
     * @example
     * // Update or create a WatchlistItem
     * const watchlistItem = await prisma.watchlistItem.upsert({
     *   create: {
     *     // ... data to create a WatchlistItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WatchlistItem we want to update
     *   }
     * })
     */
    upsert<T extends WatchlistItemUpsertArgs>(args: SelectSubset<T, WatchlistItemUpsertArgs<ExtArgs>>): Prisma__WatchlistItemClient<$Result.GetResult<Prisma.$WatchlistItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of WatchlistItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistItemCountArgs} args - Arguments to filter WatchlistItems to count.
     * @example
     * // Count the number of WatchlistItems
     * const count = await prisma.watchlistItem.count({
     *   where: {
     *     // ... the filter for the WatchlistItems we want to count
     *   }
     * })
    **/
    count<T extends WatchlistItemCountArgs>(
      args?: Subset<T, WatchlistItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WatchlistItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WatchlistItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WatchlistItemAggregateArgs>(args: Subset<T, WatchlistItemAggregateArgs>): Prisma.PrismaPromise<GetWatchlistItemAggregateType<T>>

    /**
     * Group by WatchlistItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistItemGroupByArgs} args - Group by arguments.
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
      T extends WatchlistItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WatchlistItemGroupByArgs['orderBy'] }
        : { orderBy?: WatchlistItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WatchlistItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWatchlistItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WatchlistItem model
   */
  readonly fields: WatchlistItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WatchlistItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WatchlistItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    watchlist<T extends WatchlistDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WatchlistDefaultArgs<ExtArgs>>): Prisma__WatchlistClient<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the WatchlistItem model
   */ 
  interface WatchlistItemFieldRefs {
    readonly id: FieldRef<"WatchlistItem", 'String'>
    readonly symbol: FieldRef<"WatchlistItem", 'String'>
    readonly assetType: FieldRef<"WatchlistItem", 'AssetType'>
    readonly watchlistId: FieldRef<"WatchlistItem", 'String'>
  }
    

  // Custom InputTypes
  /**
   * WatchlistItem findUnique
   */
  export type WatchlistItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchlistItem
     */
    select?: WatchlistItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistItemInclude<ExtArgs> | null
    /**
     * Filter, which WatchlistItem to fetch.
     */
    where: WatchlistItemWhereUniqueInput
  }

  /**
   * WatchlistItem findUniqueOrThrow
   */
  export type WatchlistItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchlistItem
     */
    select?: WatchlistItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistItemInclude<ExtArgs> | null
    /**
     * Filter, which WatchlistItem to fetch.
     */
    where: WatchlistItemWhereUniqueInput
  }

  /**
   * WatchlistItem findFirst
   */
  export type WatchlistItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchlistItem
     */
    select?: WatchlistItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistItemInclude<ExtArgs> | null
    /**
     * Filter, which WatchlistItem to fetch.
     */
    where?: WatchlistItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WatchlistItems to fetch.
     */
    orderBy?: WatchlistItemOrderByWithRelationInput | WatchlistItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WatchlistItems.
     */
    cursor?: WatchlistItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WatchlistItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WatchlistItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WatchlistItems.
     */
    distinct?: WatchlistItemScalarFieldEnum | WatchlistItemScalarFieldEnum[]
  }

  /**
   * WatchlistItem findFirstOrThrow
   */
  export type WatchlistItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchlistItem
     */
    select?: WatchlistItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistItemInclude<ExtArgs> | null
    /**
     * Filter, which WatchlistItem to fetch.
     */
    where?: WatchlistItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WatchlistItems to fetch.
     */
    orderBy?: WatchlistItemOrderByWithRelationInput | WatchlistItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WatchlistItems.
     */
    cursor?: WatchlistItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WatchlistItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WatchlistItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WatchlistItems.
     */
    distinct?: WatchlistItemScalarFieldEnum | WatchlistItemScalarFieldEnum[]
  }

  /**
   * WatchlistItem findMany
   */
  export type WatchlistItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchlistItem
     */
    select?: WatchlistItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistItemInclude<ExtArgs> | null
    /**
     * Filter, which WatchlistItems to fetch.
     */
    where?: WatchlistItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WatchlistItems to fetch.
     */
    orderBy?: WatchlistItemOrderByWithRelationInput | WatchlistItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WatchlistItems.
     */
    cursor?: WatchlistItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WatchlistItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WatchlistItems.
     */
    skip?: number
    distinct?: WatchlistItemScalarFieldEnum | WatchlistItemScalarFieldEnum[]
  }

  /**
   * WatchlistItem create
   */
  export type WatchlistItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchlistItem
     */
    select?: WatchlistItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistItemInclude<ExtArgs> | null
    /**
     * The data needed to create a WatchlistItem.
     */
    data: XOR<WatchlistItemCreateInput, WatchlistItemUncheckedCreateInput>
  }

  /**
   * WatchlistItem createMany
   */
  export type WatchlistItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WatchlistItems.
     */
    data: WatchlistItemCreateManyInput | WatchlistItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WatchlistItem createManyAndReturn
   */
  export type WatchlistItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchlistItem
     */
    select?: WatchlistItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many WatchlistItems.
     */
    data: WatchlistItemCreateManyInput | WatchlistItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WatchlistItem update
   */
  export type WatchlistItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchlistItem
     */
    select?: WatchlistItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistItemInclude<ExtArgs> | null
    /**
     * The data needed to update a WatchlistItem.
     */
    data: XOR<WatchlistItemUpdateInput, WatchlistItemUncheckedUpdateInput>
    /**
     * Choose, which WatchlistItem to update.
     */
    where: WatchlistItemWhereUniqueInput
  }

  /**
   * WatchlistItem updateMany
   */
  export type WatchlistItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WatchlistItems.
     */
    data: XOR<WatchlistItemUpdateManyMutationInput, WatchlistItemUncheckedUpdateManyInput>
    /**
     * Filter which WatchlistItems to update
     */
    where?: WatchlistItemWhereInput
  }

  /**
   * WatchlistItem upsert
   */
  export type WatchlistItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchlistItem
     */
    select?: WatchlistItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistItemInclude<ExtArgs> | null
    /**
     * The filter to search for the WatchlistItem to update in case it exists.
     */
    where: WatchlistItemWhereUniqueInput
    /**
     * In case the WatchlistItem found by the `where` argument doesn't exist, create a new WatchlistItem with this data.
     */
    create: XOR<WatchlistItemCreateInput, WatchlistItemUncheckedCreateInput>
    /**
     * In case the WatchlistItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WatchlistItemUpdateInput, WatchlistItemUncheckedUpdateInput>
  }

  /**
   * WatchlistItem delete
   */
  export type WatchlistItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchlistItem
     */
    select?: WatchlistItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistItemInclude<ExtArgs> | null
    /**
     * Filter which WatchlistItem to delete.
     */
    where: WatchlistItemWhereUniqueInput
  }

  /**
   * WatchlistItem deleteMany
   */
  export type WatchlistItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WatchlistItems to delete
     */
    where?: WatchlistItemWhereInput
  }

  /**
   * WatchlistItem without action
   */
  export type WatchlistItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchlistItem
     */
    select?: WatchlistItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistItemInclude<ExtArgs> | null
  }


  /**
   * Model PriceSnapshot
   */

  export type AggregatePriceSnapshot = {
    _count: PriceSnapshotCountAggregateOutputType | null
    _avg: PriceSnapshotAvgAggregateOutputType | null
    _sum: PriceSnapshotSumAggregateOutputType | null
    _min: PriceSnapshotMinAggregateOutputType | null
    _max: PriceSnapshotMaxAggregateOutputType | null
  }

  export type PriceSnapshotAvgAggregateOutputType = {
    price: Decimal | null
    change: Decimal | null
    changePct: Decimal | null
    volume: number | null
  }

  export type PriceSnapshotSumAggregateOutputType = {
    price: Decimal | null
    change: Decimal | null
    changePct: Decimal | null
    volume: bigint | null
  }

  export type PriceSnapshotMinAggregateOutputType = {
    id: string | null
    symbol: string | null
    assetType: $Enums.AssetType | null
    price: Decimal | null
    change: Decimal | null
    changePct: Decimal | null
    volume: bigint | null
    fetchedAt: Date | null
  }

  export type PriceSnapshotMaxAggregateOutputType = {
    id: string | null
    symbol: string | null
    assetType: $Enums.AssetType | null
    price: Decimal | null
    change: Decimal | null
    changePct: Decimal | null
    volume: bigint | null
    fetchedAt: Date | null
  }

  export type PriceSnapshotCountAggregateOutputType = {
    id: number
    symbol: number
    assetType: number
    price: number
    change: number
    changePct: number
    volume: number
    fetchedAt: number
    _all: number
  }


  export type PriceSnapshotAvgAggregateInputType = {
    price?: true
    change?: true
    changePct?: true
    volume?: true
  }

  export type PriceSnapshotSumAggregateInputType = {
    price?: true
    change?: true
    changePct?: true
    volume?: true
  }

  export type PriceSnapshotMinAggregateInputType = {
    id?: true
    symbol?: true
    assetType?: true
    price?: true
    change?: true
    changePct?: true
    volume?: true
    fetchedAt?: true
  }

  export type PriceSnapshotMaxAggregateInputType = {
    id?: true
    symbol?: true
    assetType?: true
    price?: true
    change?: true
    changePct?: true
    volume?: true
    fetchedAt?: true
  }

  export type PriceSnapshotCountAggregateInputType = {
    id?: true
    symbol?: true
    assetType?: true
    price?: true
    change?: true
    changePct?: true
    volume?: true
    fetchedAt?: true
    _all?: true
  }

  export type PriceSnapshotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PriceSnapshot to aggregate.
     */
    where?: PriceSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceSnapshots to fetch.
     */
    orderBy?: PriceSnapshotOrderByWithRelationInput | PriceSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PriceSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PriceSnapshots
    **/
    _count?: true | PriceSnapshotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PriceSnapshotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PriceSnapshotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PriceSnapshotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PriceSnapshotMaxAggregateInputType
  }

  export type GetPriceSnapshotAggregateType<T extends PriceSnapshotAggregateArgs> = {
        [P in keyof T & keyof AggregatePriceSnapshot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePriceSnapshot[P]>
      : GetScalarType<T[P], AggregatePriceSnapshot[P]>
  }




  export type PriceSnapshotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PriceSnapshotWhereInput
    orderBy?: PriceSnapshotOrderByWithAggregationInput | PriceSnapshotOrderByWithAggregationInput[]
    by: PriceSnapshotScalarFieldEnum[] | PriceSnapshotScalarFieldEnum
    having?: PriceSnapshotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PriceSnapshotCountAggregateInputType | true
    _avg?: PriceSnapshotAvgAggregateInputType
    _sum?: PriceSnapshotSumAggregateInputType
    _min?: PriceSnapshotMinAggregateInputType
    _max?: PriceSnapshotMaxAggregateInputType
  }

  export type PriceSnapshotGroupByOutputType = {
    id: string
    symbol: string
    assetType: $Enums.AssetType
    price: Decimal
    change: Decimal | null
    changePct: Decimal | null
    volume: bigint | null
    fetchedAt: Date
    _count: PriceSnapshotCountAggregateOutputType | null
    _avg: PriceSnapshotAvgAggregateOutputType | null
    _sum: PriceSnapshotSumAggregateOutputType | null
    _min: PriceSnapshotMinAggregateOutputType | null
    _max: PriceSnapshotMaxAggregateOutputType | null
  }

  type GetPriceSnapshotGroupByPayload<T extends PriceSnapshotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PriceSnapshotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PriceSnapshotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PriceSnapshotGroupByOutputType[P]>
            : GetScalarType<T[P], PriceSnapshotGroupByOutputType[P]>
        }
      >
    >


  export type PriceSnapshotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    symbol?: boolean
    assetType?: boolean
    price?: boolean
    change?: boolean
    changePct?: boolean
    volume?: boolean
    fetchedAt?: boolean
  }, ExtArgs["result"]["priceSnapshot"]>

  export type PriceSnapshotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    symbol?: boolean
    assetType?: boolean
    price?: boolean
    change?: boolean
    changePct?: boolean
    volume?: boolean
    fetchedAt?: boolean
  }, ExtArgs["result"]["priceSnapshot"]>

  export type PriceSnapshotSelectScalar = {
    id?: boolean
    symbol?: boolean
    assetType?: boolean
    price?: boolean
    change?: boolean
    changePct?: boolean
    volume?: boolean
    fetchedAt?: boolean
  }


  export type $PriceSnapshotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PriceSnapshot"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      symbol: string
      assetType: $Enums.AssetType
      price: Prisma.Decimal
      change: Prisma.Decimal | null
      changePct: Prisma.Decimal | null
      volume: bigint | null
      fetchedAt: Date
    }, ExtArgs["result"]["priceSnapshot"]>
    composites: {}
  }

  type PriceSnapshotGetPayload<S extends boolean | null | undefined | PriceSnapshotDefaultArgs> = $Result.GetResult<Prisma.$PriceSnapshotPayload, S>

  type PriceSnapshotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PriceSnapshotFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PriceSnapshotCountAggregateInputType | true
    }

  export interface PriceSnapshotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PriceSnapshot'], meta: { name: 'PriceSnapshot' } }
    /**
     * Find zero or one PriceSnapshot that matches the filter.
     * @param {PriceSnapshotFindUniqueArgs} args - Arguments to find a PriceSnapshot
     * @example
     * // Get one PriceSnapshot
     * const priceSnapshot = await prisma.priceSnapshot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PriceSnapshotFindUniqueArgs>(args: SelectSubset<T, PriceSnapshotFindUniqueArgs<ExtArgs>>): Prisma__PriceSnapshotClient<$Result.GetResult<Prisma.$PriceSnapshotPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PriceSnapshot that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PriceSnapshotFindUniqueOrThrowArgs} args - Arguments to find a PriceSnapshot
     * @example
     * // Get one PriceSnapshot
     * const priceSnapshot = await prisma.priceSnapshot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PriceSnapshotFindUniqueOrThrowArgs>(args: SelectSubset<T, PriceSnapshotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PriceSnapshotClient<$Result.GetResult<Prisma.$PriceSnapshotPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PriceSnapshot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceSnapshotFindFirstArgs} args - Arguments to find a PriceSnapshot
     * @example
     * // Get one PriceSnapshot
     * const priceSnapshot = await prisma.priceSnapshot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PriceSnapshotFindFirstArgs>(args?: SelectSubset<T, PriceSnapshotFindFirstArgs<ExtArgs>>): Prisma__PriceSnapshotClient<$Result.GetResult<Prisma.$PriceSnapshotPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PriceSnapshot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceSnapshotFindFirstOrThrowArgs} args - Arguments to find a PriceSnapshot
     * @example
     * // Get one PriceSnapshot
     * const priceSnapshot = await prisma.priceSnapshot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PriceSnapshotFindFirstOrThrowArgs>(args?: SelectSubset<T, PriceSnapshotFindFirstOrThrowArgs<ExtArgs>>): Prisma__PriceSnapshotClient<$Result.GetResult<Prisma.$PriceSnapshotPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PriceSnapshots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceSnapshotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PriceSnapshots
     * const priceSnapshots = await prisma.priceSnapshot.findMany()
     * 
     * // Get first 10 PriceSnapshots
     * const priceSnapshots = await prisma.priceSnapshot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const priceSnapshotWithIdOnly = await prisma.priceSnapshot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PriceSnapshotFindManyArgs>(args?: SelectSubset<T, PriceSnapshotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriceSnapshotPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PriceSnapshot.
     * @param {PriceSnapshotCreateArgs} args - Arguments to create a PriceSnapshot.
     * @example
     * // Create one PriceSnapshot
     * const PriceSnapshot = await prisma.priceSnapshot.create({
     *   data: {
     *     // ... data to create a PriceSnapshot
     *   }
     * })
     * 
     */
    create<T extends PriceSnapshotCreateArgs>(args: SelectSubset<T, PriceSnapshotCreateArgs<ExtArgs>>): Prisma__PriceSnapshotClient<$Result.GetResult<Prisma.$PriceSnapshotPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PriceSnapshots.
     * @param {PriceSnapshotCreateManyArgs} args - Arguments to create many PriceSnapshots.
     * @example
     * // Create many PriceSnapshots
     * const priceSnapshot = await prisma.priceSnapshot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PriceSnapshotCreateManyArgs>(args?: SelectSubset<T, PriceSnapshotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PriceSnapshots and returns the data saved in the database.
     * @param {PriceSnapshotCreateManyAndReturnArgs} args - Arguments to create many PriceSnapshots.
     * @example
     * // Create many PriceSnapshots
     * const priceSnapshot = await prisma.priceSnapshot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PriceSnapshots and only return the `id`
     * const priceSnapshotWithIdOnly = await prisma.priceSnapshot.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PriceSnapshotCreateManyAndReturnArgs>(args?: SelectSubset<T, PriceSnapshotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriceSnapshotPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PriceSnapshot.
     * @param {PriceSnapshotDeleteArgs} args - Arguments to delete one PriceSnapshot.
     * @example
     * // Delete one PriceSnapshot
     * const PriceSnapshot = await prisma.priceSnapshot.delete({
     *   where: {
     *     // ... filter to delete one PriceSnapshot
     *   }
     * })
     * 
     */
    delete<T extends PriceSnapshotDeleteArgs>(args: SelectSubset<T, PriceSnapshotDeleteArgs<ExtArgs>>): Prisma__PriceSnapshotClient<$Result.GetResult<Prisma.$PriceSnapshotPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PriceSnapshot.
     * @param {PriceSnapshotUpdateArgs} args - Arguments to update one PriceSnapshot.
     * @example
     * // Update one PriceSnapshot
     * const priceSnapshot = await prisma.priceSnapshot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PriceSnapshotUpdateArgs>(args: SelectSubset<T, PriceSnapshotUpdateArgs<ExtArgs>>): Prisma__PriceSnapshotClient<$Result.GetResult<Prisma.$PriceSnapshotPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PriceSnapshots.
     * @param {PriceSnapshotDeleteManyArgs} args - Arguments to filter PriceSnapshots to delete.
     * @example
     * // Delete a few PriceSnapshots
     * const { count } = await prisma.priceSnapshot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PriceSnapshotDeleteManyArgs>(args?: SelectSubset<T, PriceSnapshotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PriceSnapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceSnapshotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PriceSnapshots
     * const priceSnapshot = await prisma.priceSnapshot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PriceSnapshotUpdateManyArgs>(args: SelectSubset<T, PriceSnapshotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PriceSnapshot.
     * @param {PriceSnapshotUpsertArgs} args - Arguments to update or create a PriceSnapshot.
     * @example
     * // Update or create a PriceSnapshot
     * const priceSnapshot = await prisma.priceSnapshot.upsert({
     *   create: {
     *     // ... data to create a PriceSnapshot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PriceSnapshot we want to update
     *   }
     * })
     */
    upsert<T extends PriceSnapshotUpsertArgs>(args: SelectSubset<T, PriceSnapshotUpsertArgs<ExtArgs>>): Prisma__PriceSnapshotClient<$Result.GetResult<Prisma.$PriceSnapshotPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PriceSnapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceSnapshotCountArgs} args - Arguments to filter PriceSnapshots to count.
     * @example
     * // Count the number of PriceSnapshots
     * const count = await prisma.priceSnapshot.count({
     *   where: {
     *     // ... the filter for the PriceSnapshots we want to count
     *   }
     * })
    **/
    count<T extends PriceSnapshotCountArgs>(
      args?: Subset<T, PriceSnapshotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PriceSnapshotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PriceSnapshot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceSnapshotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PriceSnapshotAggregateArgs>(args: Subset<T, PriceSnapshotAggregateArgs>): Prisma.PrismaPromise<GetPriceSnapshotAggregateType<T>>

    /**
     * Group by PriceSnapshot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceSnapshotGroupByArgs} args - Group by arguments.
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
      T extends PriceSnapshotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PriceSnapshotGroupByArgs['orderBy'] }
        : { orderBy?: PriceSnapshotGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PriceSnapshotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPriceSnapshotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PriceSnapshot model
   */
  readonly fields: PriceSnapshotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PriceSnapshot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PriceSnapshotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the PriceSnapshot model
   */ 
  interface PriceSnapshotFieldRefs {
    readonly id: FieldRef<"PriceSnapshot", 'String'>
    readonly symbol: FieldRef<"PriceSnapshot", 'String'>
    readonly assetType: FieldRef<"PriceSnapshot", 'AssetType'>
    readonly price: FieldRef<"PriceSnapshot", 'Decimal'>
    readonly change: FieldRef<"PriceSnapshot", 'Decimal'>
    readonly changePct: FieldRef<"PriceSnapshot", 'Decimal'>
    readonly volume: FieldRef<"PriceSnapshot", 'BigInt'>
    readonly fetchedAt: FieldRef<"PriceSnapshot", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PriceSnapshot findUnique
   */
  export type PriceSnapshotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceSnapshot
     */
    select?: PriceSnapshotSelect<ExtArgs> | null
    /**
     * Filter, which PriceSnapshot to fetch.
     */
    where: PriceSnapshotWhereUniqueInput
  }

  /**
   * PriceSnapshot findUniqueOrThrow
   */
  export type PriceSnapshotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceSnapshot
     */
    select?: PriceSnapshotSelect<ExtArgs> | null
    /**
     * Filter, which PriceSnapshot to fetch.
     */
    where: PriceSnapshotWhereUniqueInput
  }

  /**
   * PriceSnapshot findFirst
   */
  export type PriceSnapshotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceSnapshot
     */
    select?: PriceSnapshotSelect<ExtArgs> | null
    /**
     * Filter, which PriceSnapshot to fetch.
     */
    where?: PriceSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceSnapshots to fetch.
     */
    orderBy?: PriceSnapshotOrderByWithRelationInput | PriceSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PriceSnapshots.
     */
    cursor?: PriceSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PriceSnapshots.
     */
    distinct?: PriceSnapshotScalarFieldEnum | PriceSnapshotScalarFieldEnum[]
  }

  /**
   * PriceSnapshot findFirstOrThrow
   */
  export type PriceSnapshotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceSnapshot
     */
    select?: PriceSnapshotSelect<ExtArgs> | null
    /**
     * Filter, which PriceSnapshot to fetch.
     */
    where?: PriceSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceSnapshots to fetch.
     */
    orderBy?: PriceSnapshotOrderByWithRelationInput | PriceSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PriceSnapshots.
     */
    cursor?: PriceSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PriceSnapshots.
     */
    distinct?: PriceSnapshotScalarFieldEnum | PriceSnapshotScalarFieldEnum[]
  }

  /**
   * PriceSnapshot findMany
   */
  export type PriceSnapshotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceSnapshot
     */
    select?: PriceSnapshotSelect<ExtArgs> | null
    /**
     * Filter, which PriceSnapshots to fetch.
     */
    where?: PriceSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceSnapshots to fetch.
     */
    orderBy?: PriceSnapshotOrderByWithRelationInput | PriceSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PriceSnapshots.
     */
    cursor?: PriceSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceSnapshots.
     */
    skip?: number
    distinct?: PriceSnapshotScalarFieldEnum | PriceSnapshotScalarFieldEnum[]
  }

  /**
   * PriceSnapshot create
   */
  export type PriceSnapshotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceSnapshot
     */
    select?: PriceSnapshotSelect<ExtArgs> | null
    /**
     * The data needed to create a PriceSnapshot.
     */
    data: XOR<PriceSnapshotCreateInput, PriceSnapshotUncheckedCreateInput>
  }

  /**
   * PriceSnapshot createMany
   */
  export type PriceSnapshotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PriceSnapshots.
     */
    data: PriceSnapshotCreateManyInput | PriceSnapshotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PriceSnapshot createManyAndReturn
   */
  export type PriceSnapshotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceSnapshot
     */
    select?: PriceSnapshotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PriceSnapshots.
     */
    data: PriceSnapshotCreateManyInput | PriceSnapshotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PriceSnapshot update
   */
  export type PriceSnapshotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceSnapshot
     */
    select?: PriceSnapshotSelect<ExtArgs> | null
    /**
     * The data needed to update a PriceSnapshot.
     */
    data: XOR<PriceSnapshotUpdateInput, PriceSnapshotUncheckedUpdateInput>
    /**
     * Choose, which PriceSnapshot to update.
     */
    where: PriceSnapshotWhereUniqueInput
  }

  /**
   * PriceSnapshot updateMany
   */
  export type PriceSnapshotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PriceSnapshots.
     */
    data: XOR<PriceSnapshotUpdateManyMutationInput, PriceSnapshotUncheckedUpdateManyInput>
    /**
     * Filter which PriceSnapshots to update
     */
    where?: PriceSnapshotWhereInput
  }

  /**
   * PriceSnapshot upsert
   */
  export type PriceSnapshotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceSnapshot
     */
    select?: PriceSnapshotSelect<ExtArgs> | null
    /**
     * The filter to search for the PriceSnapshot to update in case it exists.
     */
    where: PriceSnapshotWhereUniqueInput
    /**
     * In case the PriceSnapshot found by the `where` argument doesn't exist, create a new PriceSnapshot with this data.
     */
    create: XOR<PriceSnapshotCreateInput, PriceSnapshotUncheckedCreateInput>
    /**
     * In case the PriceSnapshot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PriceSnapshotUpdateInput, PriceSnapshotUncheckedUpdateInput>
  }

  /**
   * PriceSnapshot delete
   */
  export type PriceSnapshotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceSnapshot
     */
    select?: PriceSnapshotSelect<ExtArgs> | null
    /**
     * Filter which PriceSnapshot to delete.
     */
    where: PriceSnapshotWhereUniqueInput
  }

  /**
   * PriceSnapshot deleteMany
   */
  export type PriceSnapshotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PriceSnapshots to delete
     */
    where?: PriceSnapshotWhereInput
  }

  /**
   * PriceSnapshot without action
   */
  export type PriceSnapshotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceSnapshot
     */
    select?: PriceSnapshotSelect<ExtArgs> | null
  }


  /**
   * Model DailyPrice
   */

  export type AggregateDailyPrice = {
    _count: DailyPriceCountAggregateOutputType | null
    _avg: DailyPriceAvgAggregateOutputType | null
    _sum: DailyPriceSumAggregateOutputType | null
    _min: DailyPriceMinAggregateOutputType | null
    _max: DailyPriceMaxAggregateOutputType | null
  }

  export type DailyPriceAvgAggregateOutputType = {
    open: Decimal | null
    high: Decimal | null
    low: Decimal | null
    close: Decimal | null
    volume: number | null
  }

  export type DailyPriceSumAggregateOutputType = {
    open: Decimal | null
    high: Decimal | null
    low: Decimal | null
    close: Decimal | null
    volume: bigint | null
  }

  export type DailyPriceMinAggregateOutputType = {
    id: string | null
    symbol: string | null
    assetType: $Enums.AssetType | null
    date: Date | null
    open: Decimal | null
    high: Decimal | null
    low: Decimal | null
    close: Decimal | null
    volume: bigint | null
  }

  export type DailyPriceMaxAggregateOutputType = {
    id: string | null
    symbol: string | null
    assetType: $Enums.AssetType | null
    date: Date | null
    open: Decimal | null
    high: Decimal | null
    low: Decimal | null
    close: Decimal | null
    volume: bigint | null
  }

  export type DailyPriceCountAggregateOutputType = {
    id: number
    symbol: number
    assetType: number
    date: number
    open: number
    high: number
    low: number
    close: number
    volume: number
    _all: number
  }


  export type DailyPriceAvgAggregateInputType = {
    open?: true
    high?: true
    low?: true
    close?: true
    volume?: true
  }

  export type DailyPriceSumAggregateInputType = {
    open?: true
    high?: true
    low?: true
    close?: true
    volume?: true
  }

  export type DailyPriceMinAggregateInputType = {
    id?: true
    symbol?: true
    assetType?: true
    date?: true
    open?: true
    high?: true
    low?: true
    close?: true
    volume?: true
  }

  export type DailyPriceMaxAggregateInputType = {
    id?: true
    symbol?: true
    assetType?: true
    date?: true
    open?: true
    high?: true
    low?: true
    close?: true
    volume?: true
  }

  export type DailyPriceCountAggregateInputType = {
    id?: true
    symbol?: true
    assetType?: true
    date?: true
    open?: true
    high?: true
    low?: true
    close?: true
    volume?: true
    _all?: true
  }

  export type DailyPriceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyPrice to aggregate.
     */
    where?: DailyPriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyPrices to fetch.
     */
    orderBy?: DailyPriceOrderByWithRelationInput | DailyPriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DailyPriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyPrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyPrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DailyPrices
    **/
    _count?: true | DailyPriceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DailyPriceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DailyPriceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DailyPriceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DailyPriceMaxAggregateInputType
  }

  export type GetDailyPriceAggregateType<T extends DailyPriceAggregateArgs> = {
        [P in keyof T & keyof AggregateDailyPrice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDailyPrice[P]>
      : GetScalarType<T[P], AggregateDailyPrice[P]>
  }




  export type DailyPriceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyPriceWhereInput
    orderBy?: DailyPriceOrderByWithAggregationInput | DailyPriceOrderByWithAggregationInput[]
    by: DailyPriceScalarFieldEnum[] | DailyPriceScalarFieldEnum
    having?: DailyPriceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DailyPriceCountAggregateInputType | true
    _avg?: DailyPriceAvgAggregateInputType
    _sum?: DailyPriceSumAggregateInputType
    _min?: DailyPriceMinAggregateInputType
    _max?: DailyPriceMaxAggregateInputType
  }

  export type DailyPriceGroupByOutputType = {
    id: string
    symbol: string
    assetType: $Enums.AssetType
    date: Date
    open: Decimal
    high: Decimal
    low: Decimal
    close: Decimal
    volume: bigint | null
    _count: DailyPriceCountAggregateOutputType | null
    _avg: DailyPriceAvgAggregateOutputType | null
    _sum: DailyPriceSumAggregateOutputType | null
    _min: DailyPriceMinAggregateOutputType | null
    _max: DailyPriceMaxAggregateOutputType | null
  }

  type GetDailyPriceGroupByPayload<T extends DailyPriceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DailyPriceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DailyPriceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DailyPriceGroupByOutputType[P]>
            : GetScalarType<T[P], DailyPriceGroupByOutputType[P]>
        }
      >
    >


  export type DailyPriceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    symbol?: boolean
    assetType?: boolean
    date?: boolean
    open?: boolean
    high?: boolean
    low?: boolean
    close?: boolean
    volume?: boolean
  }, ExtArgs["result"]["dailyPrice"]>

  export type DailyPriceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    symbol?: boolean
    assetType?: boolean
    date?: boolean
    open?: boolean
    high?: boolean
    low?: boolean
    close?: boolean
    volume?: boolean
  }, ExtArgs["result"]["dailyPrice"]>

  export type DailyPriceSelectScalar = {
    id?: boolean
    symbol?: boolean
    assetType?: boolean
    date?: boolean
    open?: boolean
    high?: boolean
    low?: boolean
    close?: boolean
    volume?: boolean
  }


  export type $DailyPricePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DailyPrice"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      symbol: string
      assetType: $Enums.AssetType
      date: Date
      open: Prisma.Decimal
      high: Prisma.Decimal
      low: Prisma.Decimal
      close: Prisma.Decimal
      volume: bigint | null
    }, ExtArgs["result"]["dailyPrice"]>
    composites: {}
  }

  type DailyPriceGetPayload<S extends boolean | null | undefined | DailyPriceDefaultArgs> = $Result.GetResult<Prisma.$DailyPricePayload, S>

  type DailyPriceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DailyPriceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DailyPriceCountAggregateInputType | true
    }

  export interface DailyPriceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DailyPrice'], meta: { name: 'DailyPrice' } }
    /**
     * Find zero or one DailyPrice that matches the filter.
     * @param {DailyPriceFindUniqueArgs} args - Arguments to find a DailyPrice
     * @example
     * // Get one DailyPrice
     * const dailyPrice = await prisma.dailyPrice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DailyPriceFindUniqueArgs>(args: SelectSubset<T, DailyPriceFindUniqueArgs<ExtArgs>>): Prisma__DailyPriceClient<$Result.GetResult<Prisma.$DailyPricePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one DailyPrice that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DailyPriceFindUniqueOrThrowArgs} args - Arguments to find a DailyPrice
     * @example
     * // Get one DailyPrice
     * const dailyPrice = await prisma.dailyPrice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DailyPriceFindUniqueOrThrowArgs>(args: SelectSubset<T, DailyPriceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DailyPriceClient<$Result.GetResult<Prisma.$DailyPricePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first DailyPrice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyPriceFindFirstArgs} args - Arguments to find a DailyPrice
     * @example
     * // Get one DailyPrice
     * const dailyPrice = await prisma.dailyPrice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DailyPriceFindFirstArgs>(args?: SelectSubset<T, DailyPriceFindFirstArgs<ExtArgs>>): Prisma__DailyPriceClient<$Result.GetResult<Prisma.$DailyPricePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first DailyPrice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyPriceFindFirstOrThrowArgs} args - Arguments to find a DailyPrice
     * @example
     * // Get one DailyPrice
     * const dailyPrice = await prisma.dailyPrice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DailyPriceFindFirstOrThrowArgs>(args?: SelectSubset<T, DailyPriceFindFirstOrThrowArgs<ExtArgs>>): Prisma__DailyPriceClient<$Result.GetResult<Prisma.$DailyPricePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more DailyPrices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyPriceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DailyPrices
     * const dailyPrices = await prisma.dailyPrice.findMany()
     * 
     * // Get first 10 DailyPrices
     * const dailyPrices = await prisma.dailyPrice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dailyPriceWithIdOnly = await prisma.dailyPrice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DailyPriceFindManyArgs>(args?: SelectSubset<T, DailyPriceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyPricePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a DailyPrice.
     * @param {DailyPriceCreateArgs} args - Arguments to create a DailyPrice.
     * @example
     * // Create one DailyPrice
     * const DailyPrice = await prisma.dailyPrice.create({
     *   data: {
     *     // ... data to create a DailyPrice
     *   }
     * })
     * 
     */
    create<T extends DailyPriceCreateArgs>(args: SelectSubset<T, DailyPriceCreateArgs<ExtArgs>>): Prisma__DailyPriceClient<$Result.GetResult<Prisma.$DailyPricePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many DailyPrices.
     * @param {DailyPriceCreateManyArgs} args - Arguments to create many DailyPrices.
     * @example
     * // Create many DailyPrices
     * const dailyPrice = await prisma.dailyPrice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DailyPriceCreateManyArgs>(args?: SelectSubset<T, DailyPriceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DailyPrices and returns the data saved in the database.
     * @param {DailyPriceCreateManyAndReturnArgs} args - Arguments to create many DailyPrices.
     * @example
     * // Create many DailyPrices
     * const dailyPrice = await prisma.dailyPrice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DailyPrices and only return the `id`
     * const dailyPriceWithIdOnly = await prisma.dailyPrice.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DailyPriceCreateManyAndReturnArgs>(args?: SelectSubset<T, DailyPriceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyPricePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a DailyPrice.
     * @param {DailyPriceDeleteArgs} args - Arguments to delete one DailyPrice.
     * @example
     * // Delete one DailyPrice
     * const DailyPrice = await prisma.dailyPrice.delete({
     *   where: {
     *     // ... filter to delete one DailyPrice
     *   }
     * })
     * 
     */
    delete<T extends DailyPriceDeleteArgs>(args: SelectSubset<T, DailyPriceDeleteArgs<ExtArgs>>): Prisma__DailyPriceClient<$Result.GetResult<Prisma.$DailyPricePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one DailyPrice.
     * @param {DailyPriceUpdateArgs} args - Arguments to update one DailyPrice.
     * @example
     * // Update one DailyPrice
     * const dailyPrice = await prisma.dailyPrice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DailyPriceUpdateArgs>(args: SelectSubset<T, DailyPriceUpdateArgs<ExtArgs>>): Prisma__DailyPriceClient<$Result.GetResult<Prisma.$DailyPricePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more DailyPrices.
     * @param {DailyPriceDeleteManyArgs} args - Arguments to filter DailyPrices to delete.
     * @example
     * // Delete a few DailyPrices
     * const { count } = await prisma.dailyPrice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DailyPriceDeleteManyArgs>(args?: SelectSubset<T, DailyPriceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyPrices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyPriceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DailyPrices
     * const dailyPrice = await prisma.dailyPrice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DailyPriceUpdateManyArgs>(args: SelectSubset<T, DailyPriceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DailyPrice.
     * @param {DailyPriceUpsertArgs} args - Arguments to update or create a DailyPrice.
     * @example
     * // Update or create a DailyPrice
     * const dailyPrice = await prisma.dailyPrice.upsert({
     *   create: {
     *     // ... data to create a DailyPrice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DailyPrice we want to update
     *   }
     * })
     */
    upsert<T extends DailyPriceUpsertArgs>(args: SelectSubset<T, DailyPriceUpsertArgs<ExtArgs>>): Prisma__DailyPriceClient<$Result.GetResult<Prisma.$DailyPricePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of DailyPrices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyPriceCountArgs} args - Arguments to filter DailyPrices to count.
     * @example
     * // Count the number of DailyPrices
     * const count = await prisma.dailyPrice.count({
     *   where: {
     *     // ... the filter for the DailyPrices we want to count
     *   }
     * })
    **/
    count<T extends DailyPriceCountArgs>(
      args?: Subset<T, DailyPriceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DailyPriceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DailyPrice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyPriceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DailyPriceAggregateArgs>(args: Subset<T, DailyPriceAggregateArgs>): Prisma.PrismaPromise<GetDailyPriceAggregateType<T>>

    /**
     * Group by DailyPrice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyPriceGroupByArgs} args - Group by arguments.
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
      T extends DailyPriceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DailyPriceGroupByArgs['orderBy'] }
        : { orderBy?: DailyPriceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DailyPriceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDailyPriceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DailyPrice model
   */
  readonly fields: DailyPriceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DailyPrice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DailyPriceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the DailyPrice model
   */ 
  interface DailyPriceFieldRefs {
    readonly id: FieldRef<"DailyPrice", 'String'>
    readonly symbol: FieldRef<"DailyPrice", 'String'>
    readonly assetType: FieldRef<"DailyPrice", 'AssetType'>
    readonly date: FieldRef<"DailyPrice", 'DateTime'>
    readonly open: FieldRef<"DailyPrice", 'Decimal'>
    readonly high: FieldRef<"DailyPrice", 'Decimal'>
    readonly low: FieldRef<"DailyPrice", 'Decimal'>
    readonly close: FieldRef<"DailyPrice", 'Decimal'>
    readonly volume: FieldRef<"DailyPrice", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * DailyPrice findUnique
   */
  export type DailyPriceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyPrice
     */
    select?: DailyPriceSelect<ExtArgs> | null
    /**
     * Filter, which DailyPrice to fetch.
     */
    where: DailyPriceWhereUniqueInput
  }

  /**
   * DailyPrice findUniqueOrThrow
   */
  export type DailyPriceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyPrice
     */
    select?: DailyPriceSelect<ExtArgs> | null
    /**
     * Filter, which DailyPrice to fetch.
     */
    where: DailyPriceWhereUniqueInput
  }

  /**
   * DailyPrice findFirst
   */
  export type DailyPriceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyPrice
     */
    select?: DailyPriceSelect<ExtArgs> | null
    /**
     * Filter, which DailyPrice to fetch.
     */
    where?: DailyPriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyPrices to fetch.
     */
    orderBy?: DailyPriceOrderByWithRelationInput | DailyPriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyPrices.
     */
    cursor?: DailyPriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyPrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyPrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyPrices.
     */
    distinct?: DailyPriceScalarFieldEnum | DailyPriceScalarFieldEnum[]
  }

  /**
   * DailyPrice findFirstOrThrow
   */
  export type DailyPriceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyPrice
     */
    select?: DailyPriceSelect<ExtArgs> | null
    /**
     * Filter, which DailyPrice to fetch.
     */
    where?: DailyPriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyPrices to fetch.
     */
    orderBy?: DailyPriceOrderByWithRelationInput | DailyPriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyPrices.
     */
    cursor?: DailyPriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyPrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyPrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyPrices.
     */
    distinct?: DailyPriceScalarFieldEnum | DailyPriceScalarFieldEnum[]
  }

  /**
   * DailyPrice findMany
   */
  export type DailyPriceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyPrice
     */
    select?: DailyPriceSelect<ExtArgs> | null
    /**
     * Filter, which DailyPrices to fetch.
     */
    where?: DailyPriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyPrices to fetch.
     */
    orderBy?: DailyPriceOrderByWithRelationInput | DailyPriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DailyPrices.
     */
    cursor?: DailyPriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyPrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyPrices.
     */
    skip?: number
    distinct?: DailyPriceScalarFieldEnum | DailyPriceScalarFieldEnum[]
  }

  /**
   * DailyPrice create
   */
  export type DailyPriceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyPrice
     */
    select?: DailyPriceSelect<ExtArgs> | null
    /**
     * The data needed to create a DailyPrice.
     */
    data: XOR<DailyPriceCreateInput, DailyPriceUncheckedCreateInput>
  }

  /**
   * DailyPrice createMany
   */
  export type DailyPriceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DailyPrices.
     */
    data: DailyPriceCreateManyInput | DailyPriceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DailyPrice createManyAndReturn
   */
  export type DailyPriceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyPrice
     */
    select?: DailyPriceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many DailyPrices.
     */
    data: DailyPriceCreateManyInput | DailyPriceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DailyPrice update
   */
  export type DailyPriceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyPrice
     */
    select?: DailyPriceSelect<ExtArgs> | null
    /**
     * The data needed to update a DailyPrice.
     */
    data: XOR<DailyPriceUpdateInput, DailyPriceUncheckedUpdateInput>
    /**
     * Choose, which DailyPrice to update.
     */
    where: DailyPriceWhereUniqueInput
  }

  /**
   * DailyPrice updateMany
   */
  export type DailyPriceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DailyPrices.
     */
    data: XOR<DailyPriceUpdateManyMutationInput, DailyPriceUncheckedUpdateManyInput>
    /**
     * Filter which DailyPrices to update
     */
    where?: DailyPriceWhereInput
  }

  /**
   * DailyPrice upsert
   */
  export type DailyPriceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyPrice
     */
    select?: DailyPriceSelect<ExtArgs> | null
    /**
     * The filter to search for the DailyPrice to update in case it exists.
     */
    where: DailyPriceWhereUniqueInput
    /**
     * In case the DailyPrice found by the `where` argument doesn't exist, create a new DailyPrice with this data.
     */
    create: XOR<DailyPriceCreateInput, DailyPriceUncheckedCreateInput>
    /**
     * In case the DailyPrice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DailyPriceUpdateInput, DailyPriceUncheckedUpdateInput>
  }

  /**
   * DailyPrice delete
   */
  export type DailyPriceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyPrice
     */
    select?: DailyPriceSelect<ExtArgs> | null
    /**
     * Filter which DailyPrice to delete.
     */
    where: DailyPriceWhereUniqueInput
  }

  /**
   * DailyPrice deleteMany
   */
  export type DailyPriceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyPrices to delete
     */
    where?: DailyPriceWhereInput
  }

  /**
   * DailyPrice without action
   */
  export type DailyPriceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyPrice
     */
    select?: DailyPriceSelect<ExtArgs> | null
  }


  /**
   * Model TrackedSymbol
   */

  export type AggregateTrackedSymbol = {
    _count: TrackedSymbolCountAggregateOutputType | null
    _min: TrackedSymbolMinAggregateOutputType | null
    _max: TrackedSymbolMaxAggregateOutputType | null
  }

  export type TrackedSymbolMinAggregateOutputType = {
    symbol: string | null
    assetType: $Enums.AssetType | null
    active: boolean | null
  }

  export type TrackedSymbolMaxAggregateOutputType = {
    symbol: string | null
    assetType: $Enums.AssetType | null
    active: boolean | null
  }

  export type TrackedSymbolCountAggregateOutputType = {
    symbol: number
    assetType: number
    active: number
    _all: number
  }


  export type TrackedSymbolMinAggregateInputType = {
    symbol?: true
    assetType?: true
    active?: true
  }

  export type TrackedSymbolMaxAggregateInputType = {
    symbol?: true
    assetType?: true
    active?: true
  }

  export type TrackedSymbolCountAggregateInputType = {
    symbol?: true
    assetType?: true
    active?: true
    _all?: true
  }

  export type TrackedSymbolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrackedSymbol to aggregate.
     */
    where?: TrackedSymbolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackedSymbols to fetch.
     */
    orderBy?: TrackedSymbolOrderByWithRelationInput | TrackedSymbolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrackedSymbolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackedSymbols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackedSymbols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TrackedSymbols
    **/
    _count?: true | TrackedSymbolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrackedSymbolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrackedSymbolMaxAggregateInputType
  }

  export type GetTrackedSymbolAggregateType<T extends TrackedSymbolAggregateArgs> = {
        [P in keyof T & keyof AggregateTrackedSymbol]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrackedSymbol[P]>
      : GetScalarType<T[P], AggregateTrackedSymbol[P]>
  }




  export type TrackedSymbolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrackedSymbolWhereInput
    orderBy?: TrackedSymbolOrderByWithAggregationInput | TrackedSymbolOrderByWithAggregationInput[]
    by: TrackedSymbolScalarFieldEnum[] | TrackedSymbolScalarFieldEnum
    having?: TrackedSymbolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrackedSymbolCountAggregateInputType | true
    _min?: TrackedSymbolMinAggregateInputType
    _max?: TrackedSymbolMaxAggregateInputType
  }

  export type TrackedSymbolGroupByOutputType = {
    symbol: string
    assetType: $Enums.AssetType
    active: boolean
    _count: TrackedSymbolCountAggregateOutputType | null
    _min: TrackedSymbolMinAggregateOutputType | null
    _max: TrackedSymbolMaxAggregateOutputType | null
  }

  type GetTrackedSymbolGroupByPayload<T extends TrackedSymbolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrackedSymbolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrackedSymbolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrackedSymbolGroupByOutputType[P]>
            : GetScalarType<T[P], TrackedSymbolGroupByOutputType[P]>
        }
      >
    >


  export type TrackedSymbolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    symbol?: boolean
    assetType?: boolean
    active?: boolean
  }, ExtArgs["result"]["trackedSymbol"]>

  export type TrackedSymbolSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    symbol?: boolean
    assetType?: boolean
    active?: boolean
  }, ExtArgs["result"]["trackedSymbol"]>

  export type TrackedSymbolSelectScalar = {
    symbol?: boolean
    assetType?: boolean
    active?: boolean
  }


  export type $TrackedSymbolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TrackedSymbol"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      symbol: string
      assetType: $Enums.AssetType
      active: boolean
    }, ExtArgs["result"]["trackedSymbol"]>
    composites: {}
  }

  type TrackedSymbolGetPayload<S extends boolean | null | undefined | TrackedSymbolDefaultArgs> = $Result.GetResult<Prisma.$TrackedSymbolPayload, S>

  type TrackedSymbolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TrackedSymbolFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TrackedSymbolCountAggregateInputType | true
    }

  export interface TrackedSymbolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TrackedSymbol'], meta: { name: 'TrackedSymbol' } }
    /**
     * Find zero or one TrackedSymbol that matches the filter.
     * @param {TrackedSymbolFindUniqueArgs} args - Arguments to find a TrackedSymbol
     * @example
     * // Get one TrackedSymbol
     * const trackedSymbol = await prisma.trackedSymbol.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TrackedSymbolFindUniqueArgs>(args: SelectSubset<T, TrackedSymbolFindUniqueArgs<ExtArgs>>): Prisma__TrackedSymbolClient<$Result.GetResult<Prisma.$TrackedSymbolPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TrackedSymbol that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TrackedSymbolFindUniqueOrThrowArgs} args - Arguments to find a TrackedSymbol
     * @example
     * // Get one TrackedSymbol
     * const trackedSymbol = await prisma.trackedSymbol.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TrackedSymbolFindUniqueOrThrowArgs>(args: SelectSubset<T, TrackedSymbolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TrackedSymbolClient<$Result.GetResult<Prisma.$TrackedSymbolPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TrackedSymbol that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackedSymbolFindFirstArgs} args - Arguments to find a TrackedSymbol
     * @example
     * // Get one TrackedSymbol
     * const trackedSymbol = await prisma.trackedSymbol.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TrackedSymbolFindFirstArgs>(args?: SelectSubset<T, TrackedSymbolFindFirstArgs<ExtArgs>>): Prisma__TrackedSymbolClient<$Result.GetResult<Prisma.$TrackedSymbolPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TrackedSymbol that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackedSymbolFindFirstOrThrowArgs} args - Arguments to find a TrackedSymbol
     * @example
     * // Get one TrackedSymbol
     * const trackedSymbol = await prisma.trackedSymbol.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TrackedSymbolFindFirstOrThrowArgs>(args?: SelectSubset<T, TrackedSymbolFindFirstOrThrowArgs<ExtArgs>>): Prisma__TrackedSymbolClient<$Result.GetResult<Prisma.$TrackedSymbolPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TrackedSymbols that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackedSymbolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TrackedSymbols
     * const trackedSymbols = await prisma.trackedSymbol.findMany()
     * 
     * // Get first 10 TrackedSymbols
     * const trackedSymbols = await prisma.trackedSymbol.findMany({ take: 10 })
     * 
     * // Only select the `symbol`
     * const trackedSymbolWithSymbolOnly = await prisma.trackedSymbol.findMany({ select: { symbol: true } })
     * 
     */
    findMany<T extends TrackedSymbolFindManyArgs>(args?: SelectSubset<T, TrackedSymbolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackedSymbolPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TrackedSymbol.
     * @param {TrackedSymbolCreateArgs} args - Arguments to create a TrackedSymbol.
     * @example
     * // Create one TrackedSymbol
     * const TrackedSymbol = await prisma.trackedSymbol.create({
     *   data: {
     *     // ... data to create a TrackedSymbol
     *   }
     * })
     * 
     */
    create<T extends TrackedSymbolCreateArgs>(args: SelectSubset<T, TrackedSymbolCreateArgs<ExtArgs>>): Prisma__TrackedSymbolClient<$Result.GetResult<Prisma.$TrackedSymbolPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TrackedSymbols.
     * @param {TrackedSymbolCreateManyArgs} args - Arguments to create many TrackedSymbols.
     * @example
     * // Create many TrackedSymbols
     * const trackedSymbol = await prisma.trackedSymbol.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TrackedSymbolCreateManyArgs>(args?: SelectSubset<T, TrackedSymbolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TrackedSymbols and returns the data saved in the database.
     * @param {TrackedSymbolCreateManyAndReturnArgs} args - Arguments to create many TrackedSymbols.
     * @example
     * // Create many TrackedSymbols
     * const trackedSymbol = await prisma.trackedSymbol.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TrackedSymbols and only return the `symbol`
     * const trackedSymbolWithSymbolOnly = await prisma.trackedSymbol.createManyAndReturn({ 
     *   select: { symbol: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TrackedSymbolCreateManyAndReturnArgs>(args?: SelectSubset<T, TrackedSymbolCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackedSymbolPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a TrackedSymbol.
     * @param {TrackedSymbolDeleteArgs} args - Arguments to delete one TrackedSymbol.
     * @example
     * // Delete one TrackedSymbol
     * const TrackedSymbol = await prisma.trackedSymbol.delete({
     *   where: {
     *     // ... filter to delete one TrackedSymbol
     *   }
     * })
     * 
     */
    delete<T extends TrackedSymbolDeleteArgs>(args: SelectSubset<T, TrackedSymbolDeleteArgs<ExtArgs>>): Prisma__TrackedSymbolClient<$Result.GetResult<Prisma.$TrackedSymbolPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TrackedSymbol.
     * @param {TrackedSymbolUpdateArgs} args - Arguments to update one TrackedSymbol.
     * @example
     * // Update one TrackedSymbol
     * const trackedSymbol = await prisma.trackedSymbol.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TrackedSymbolUpdateArgs>(args: SelectSubset<T, TrackedSymbolUpdateArgs<ExtArgs>>): Prisma__TrackedSymbolClient<$Result.GetResult<Prisma.$TrackedSymbolPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TrackedSymbols.
     * @param {TrackedSymbolDeleteManyArgs} args - Arguments to filter TrackedSymbols to delete.
     * @example
     * // Delete a few TrackedSymbols
     * const { count } = await prisma.trackedSymbol.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TrackedSymbolDeleteManyArgs>(args?: SelectSubset<T, TrackedSymbolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrackedSymbols.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackedSymbolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TrackedSymbols
     * const trackedSymbol = await prisma.trackedSymbol.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TrackedSymbolUpdateManyArgs>(args: SelectSubset<T, TrackedSymbolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TrackedSymbol.
     * @param {TrackedSymbolUpsertArgs} args - Arguments to update or create a TrackedSymbol.
     * @example
     * // Update or create a TrackedSymbol
     * const trackedSymbol = await prisma.trackedSymbol.upsert({
     *   create: {
     *     // ... data to create a TrackedSymbol
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TrackedSymbol we want to update
     *   }
     * })
     */
    upsert<T extends TrackedSymbolUpsertArgs>(args: SelectSubset<T, TrackedSymbolUpsertArgs<ExtArgs>>): Prisma__TrackedSymbolClient<$Result.GetResult<Prisma.$TrackedSymbolPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TrackedSymbols.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackedSymbolCountArgs} args - Arguments to filter TrackedSymbols to count.
     * @example
     * // Count the number of TrackedSymbols
     * const count = await prisma.trackedSymbol.count({
     *   where: {
     *     // ... the filter for the TrackedSymbols we want to count
     *   }
     * })
    **/
    count<T extends TrackedSymbolCountArgs>(
      args?: Subset<T, TrackedSymbolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrackedSymbolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TrackedSymbol.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackedSymbolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TrackedSymbolAggregateArgs>(args: Subset<T, TrackedSymbolAggregateArgs>): Prisma.PrismaPromise<GetTrackedSymbolAggregateType<T>>

    /**
     * Group by TrackedSymbol.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackedSymbolGroupByArgs} args - Group by arguments.
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
      T extends TrackedSymbolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrackedSymbolGroupByArgs['orderBy'] }
        : { orderBy?: TrackedSymbolGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TrackedSymbolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrackedSymbolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TrackedSymbol model
   */
  readonly fields: TrackedSymbolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TrackedSymbol.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrackedSymbolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the TrackedSymbol model
   */ 
  interface TrackedSymbolFieldRefs {
    readonly symbol: FieldRef<"TrackedSymbol", 'String'>
    readonly assetType: FieldRef<"TrackedSymbol", 'AssetType'>
    readonly active: FieldRef<"TrackedSymbol", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * TrackedSymbol findUnique
   */
  export type TrackedSymbolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedSymbol
     */
    select?: TrackedSymbolSelect<ExtArgs> | null
    /**
     * Filter, which TrackedSymbol to fetch.
     */
    where: TrackedSymbolWhereUniqueInput
  }

  /**
   * TrackedSymbol findUniqueOrThrow
   */
  export type TrackedSymbolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedSymbol
     */
    select?: TrackedSymbolSelect<ExtArgs> | null
    /**
     * Filter, which TrackedSymbol to fetch.
     */
    where: TrackedSymbolWhereUniqueInput
  }

  /**
   * TrackedSymbol findFirst
   */
  export type TrackedSymbolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedSymbol
     */
    select?: TrackedSymbolSelect<ExtArgs> | null
    /**
     * Filter, which TrackedSymbol to fetch.
     */
    where?: TrackedSymbolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackedSymbols to fetch.
     */
    orderBy?: TrackedSymbolOrderByWithRelationInput | TrackedSymbolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrackedSymbols.
     */
    cursor?: TrackedSymbolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackedSymbols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackedSymbols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrackedSymbols.
     */
    distinct?: TrackedSymbolScalarFieldEnum | TrackedSymbolScalarFieldEnum[]
  }

  /**
   * TrackedSymbol findFirstOrThrow
   */
  export type TrackedSymbolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedSymbol
     */
    select?: TrackedSymbolSelect<ExtArgs> | null
    /**
     * Filter, which TrackedSymbol to fetch.
     */
    where?: TrackedSymbolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackedSymbols to fetch.
     */
    orderBy?: TrackedSymbolOrderByWithRelationInput | TrackedSymbolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrackedSymbols.
     */
    cursor?: TrackedSymbolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackedSymbols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackedSymbols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrackedSymbols.
     */
    distinct?: TrackedSymbolScalarFieldEnum | TrackedSymbolScalarFieldEnum[]
  }

  /**
   * TrackedSymbol findMany
   */
  export type TrackedSymbolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedSymbol
     */
    select?: TrackedSymbolSelect<ExtArgs> | null
    /**
     * Filter, which TrackedSymbols to fetch.
     */
    where?: TrackedSymbolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackedSymbols to fetch.
     */
    orderBy?: TrackedSymbolOrderByWithRelationInput | TrackedSymbolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TrackedSymbols.
     */
    cursor?: TrackedSymbolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackedSymbols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackedSymbols.
     */
    skip?: number
    distinct?: TrackedSymbolScalarFieldEnum | TrackedSymbolScalarFieldEnum[]
  }

  /**
   * TrackedSymbol create
   */
  export type TrackedSymbolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedSymbol
     */
    select?: TrackedSymbolSelect<ExtArgs> | null
    /**
     * The data needed to create a TrackedSymbol.
     */
    data: XOR<TrackedSymbolCreateInput, TrackedSymbolUncheckedCreateInput>
  }

  /**
   * TrackedSymbol createMany
   */
  export type TrackedSymbolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TrackedSymbols.
     */
    data: TrackedSymbolCreateManyInput | TrackedSymbolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TrackedSymbol createManyAndReturn
   */
  export type TrackedSymbolCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedSymbol
     */
    select?: TrackedSymbolSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TrackedSymbols.
     */
    data: TrackedSymbolCreateManyInput | TrackedSymbolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TrackedSymbol update
   */
  export type TrackedSymbolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedSymbol
     */
    select?: TrackedSymbolSelect<ExtArgs> | null
    /**
     * The data needed to update a TrackedSymbol.
     */
    data: XOR<TrackedSymbolUpdateInput, TrackedSymbolUncheckedUpdateInput>
    /**
     * Choose, which TrackedSymbol to update.
     */
    where: TrackedSymbolWhereUniqueInput
  }

  /**
   * TrackedSymbol updateMany
   */
  export type TrackedSymbolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TrackedSymbols.
     */
    data: XOR<TrackedSymbolUpdateManyMutationInput, TrackedSymbolUncheckedUpdateManyInput>
    /**
     * Filter which TrackedSymbols to update
     */
    where?: TrackedSymbolWhereInput
  }

  /**
   * TrackedSymbol upsert
   */
  export type TrackedSymbolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedSymbol
     */
    select?: TrackedSymbolSelect<ExtArgs> | null
    /**
     * The filter to search for the TrackedSymbol to update in case it exists.
     */
    where: TrackedSymbolWhereUniqueInput
    /**
     * In case the TrackedSymbol found by the `where` argument doesn't exist, create a new TrackedSymbol with this data.
     */
    create: XOR<TrackedSymbolCreateInput, TrackedSymbolUncheckedCreateInput>
    /**
     * In case the TrackedSymbol was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrackedSymbolUpdateInput, TrackedSymbolUncheckedUpdateInput>
  }

  /**
   * TrackedSymbol delete
   */
  export type TrackedSymbolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedSymbol
     */
    select?: TrackedSymbolSelect<ExtArgs> | null
    /**
     * Filter which TrackedSymbol to delete.
     */
    where: TrackedSymbolWhereUniqueInput
  }

  /**
   * TrackedSymbol deleteMany
   */
  export type TrackedSymbolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrackedSymbols to delete
     */
    where?: TrackedSymbolWhereInput
  }

  /**
   * TrackedSymbol without action
   */
  export type TrackedSymbolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedSymbol
     */
    select?: TrackedSymbolSelect<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const WatchlistScalarFieldEnum: {
    id: 'id',
    name: 'name',
    userId: 'userId'
  };

  export type WatchlistScalarFieldEnum = (typeof WatchlistScalarFieldEnum)[keyof typeof WatchlistScalarFieldEnum]


  export const WatchlistItemScalarFieldEnum: {
    id: 'id',
    symbol: 'symbol',
    assetType: 'assetType',
    watchlistId: 'watchlistId'
  };

  export type WatchlistItemScalarFieldEnum = (typeof WatchlistItemScalarFieldEnum)[keyof typeof WatchlistItemScalarFieldEnum]


  export const PriceSnapshotScalarFieldEnum: {
    id: 'id',
    symbol: 'symbol',
    assetType: 'assetType',
    price: 'price',
    change: 'change',
    changePct: 'changePct',
    volume: 'volume',
    fetchedAt: 'fetchedAt'
  };

  export type PriceSnapshotScalarFieldEnum = (typeof PriceSnapshotScalarFieldEnum)[keyof typeof PriceSnapshotScalarFieldEnum]


  export const DailyPriceScalarFieldEnum: {
    id: 'id',
    symbol: 'symbol',
    assetType: 'assetType',
    date: 'date',
    open: 'open',
    high: 'high',
    low: 'low',
    close: 'close',
    volume: 'volume'
  };

  export type DailyPriceScalarFieldEnum = (typeof DailyPriceScalarFieldEnum)[keyof typeof DailyPriceScalarFieldEnum]


  export const TrackedSymbolScalarFieldEnum: {
    symbol: 'symbol',
    assetType: 'assetType',
    active: 'active'
  };

  export type TrackedSymbolScalarFieldEnum = (typeof TrackedSymbolScalarFieldEnum)[keyof typeof TrackedSymbolScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'AssetType'
   */
  export type EnumAssetTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AssetType'>
    


  /**
   * Reference to a field of type 'AssetType[]'
   */
  export type ListEnumAssetTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AssetType[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    watchlists?: WatchlistListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    watchlists?: WatchlistOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    watchlists?: WatchlistListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type WatchlistWhereInput = {
    AND?: WatchlistWhereInput | WatchlistWhereInput[]
    OR?: WatchlistWhereInput[]
    NOT?: WatchlistWhereInput | WatchlistWhereInput[]
    id?: StringFilter<"Watchlist"> | string
    name?: StringFilter<"Watchlist"> | string
    userId?: StringFilter<"Watchlist"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    items?: WatchlistItemListRelationFilter
  }

  export type WatchlistOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    items?: WatchlistItemOrderByRelationAggregateInput
  }

  export type WatchlistWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WatchlistWhereInput | WatchlistWhereInput[]
    OR?: WatchlistWhereInput[]
    NOT?: WatchlistWhereInput | WatchlistWhereInput[]
    name?: StringFilter<"Watchlist"> | string
    userId?: StringFilter<"Watchlist"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    items?: WatchlistItemListRelationFilter
  }, "id">

  export type WatchlistOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    _count?: WatchlistCountOrderByAggregateInput
    _max?: WatchlistMaxOrderByAggregateInput
    _min?: WatchlistMinOrderByAggregateInput
  }

  export type WatchlistScalarWhereWithAggregatesInput = {
    AND?: WatchlistScalarWhereWithAggregatesInput | WatchlistScalarWhereWithAggregatesInput[]
    OR?: WatchlistScalarWhereWithAggregatesInput[]
    NOT?: WatchlistScalarWhereWithAggregatesInput | WatchlistScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Watchlist"> | string
    name?: StringWithAggregatesFilter<"Watchlist"> | string
    userId?: StringWithAggregatesFilter<"Watchlist"> | string
  }

  export type WatchlistItemWhereInput = {
    AND?: WatchlistItemWhereInput | WatchlistItemWhereInput[]
    OR?: WatchlistItemWhereInput[]
    NOT?: WatchlistItemWhereInput | WatchlistItemWhereInput[]
    id?: StringFilter<"WatchlistItem"> | string
    symbol?: StringFilter<"WatchlistItem"> | string
    assetType?: EnumAssetTypeFilter<"WatchlistItem"> | $Enums.AssetType
    watchlistId?: StringFilter<"WatchlistItem"> | string
    watchlist?: XOR<WatchlistRelationFilter, WatchlistWhereInput>
  }

  export type WatchlistItemOrderByWithRelationInput = {
    id?: SortOrder
    symbol?: SortOrder
    assetType?: SortOrder
    watchlistId?: SortOrder
    watchlist?: WatchlistOrderByWithRelationInput
  }

  export type WatchlistItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    watchlistId_symbol_assetType?: WatchlistItemWatchlistIdSymbolAssetTypeCompoundUniqueInput
    AND?: WatchlistItemWhereInput | WatchlistItemWhereInput[]
    OR?: WatchlistItemWhereInput[]
    NOT?: WatchlistItemWhereInput | WatchlistItemWhereInput[]
    symbol?: StringFilter<"WatchlistItem"> | string
    assetType?: EnumAssetTypeFilter<"WatchlistItem"> | $Enums.AssetType
    watchlistId?: StringFilter<"WatchlistItem"> | string
    watchlist?: XOR<WatchlistRelationFilter, WatchlistWhereInput>
  }, "id" | "watchlistId_symbol_assetType">

  export type WatchlistItemOrderByWithAggregationInput = {
    id?: SortOrder
    symbol?: SortOrder
    assetType?: SortOrder
    watchlistId?: SortOrder
    _count?: WatchlistItemCountOrderByAggregateInput
    _max?: WatchlistItemMaxOrderByAggregateInput
    _min?: WatchlistItemMinOrderByAggregateInput
  }

  export type WatchlistItemScalarWhereWithAggregatesInput = {
    AND?: WatchlistItemScalarWhereWithAggregatesInput | WatchlistItemScalarWhereWithAggregatesInput[]
    OR?: WatchlistItemScalarWhereWithAggregatesInput[]
    NOT?: WatchlistItemScalarWhereWithAggregatesInput | WatchlistItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WatchlistItem"> | string
    symbol?: StringWithAggregatesFilter<"WatchlistItem"> | string
    assetType?: EnumAssetTypeWithAggregatesFilter<"WatchlistItem"> | $Enums.AssetType
    watchlistId?: StringWithAggregatesFilter<"WatchlistItem"> | string
  }

  export type PriceSnapshotWhereInput = {
    AND?: PriceSnapshotWhereInput | PriceSnapshotWhereInput[]
    OR?: PriceSnapshotWhereInput[]
    NOT?: PriceSnapshotWhereInput | PriceSnapshotWhereInput[]
    id?: StringFilter<"PriceSnapshot"> | string
    symbol?: StringFilter<"PriceSnapshot"> | string
    assetType?: EnumAssetTypeFilter<"PriceSnapshot"> | $Enums.AssetType
    price?: DecimalFilter<"PriceSnapshot"> | Decimal | DecimalJsLike | number | string
    change?: DecimalNullableFilter<"PriceSnapshot"> | Decimal | DecimalJsLike | number | string | null
    changePct?: DecimalNullableFilter<"PriceSnapshot"> | Decimal | DecimalJsLike | number | string | null
    volume?: BigIntNullableFilter<"PriceSnapshot"> | bigint | number | null
    fetchedAt?: DateTimeFilter<"PriceSnapshot"> | Date | string
  }

  export type PriceSnapshotOrderByWithRelationInput = {
    id?: SortOrder
    symbol?: SortOrder
    assetType?: SortOrder
    price?: SortOrder
    change?: SortOrderInput | SortOrder
    changePct?: SortOrderInput | SortOrder
    volume?: SortOrderInput | SortOrder
    fetchedAt?: SortOrder
  }

  export type PriceSnapshotWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PriceSnapshotWhereInput | PriceSnapshotWhereInput[]
    OR?: PriceSnapshotWhereInput[]
    NOT?: PriceSnapshotWhereInput | PriceSnapshotWhereInput[]
    symbol?: StringFilter<"PriceSnapshot"> | string
    assetType?: EnumAssetTypeFilter<"PriceSnapshot"> | $Enums.AssetType
    price?: DecimalFilter<"PriceSnapshot"> | Decimal | DecimalJsLike | number | string
    change?: DecimalNullableFilter<"PriceSnapshot"> | Decimal | DecimalJsLike | number | string | null
    changePct?: DecimalNullableFilter<"PriceSnapshot"> | Decimal | DecimalJsLike | number | string | null
    volume?: BigIntNullableFilter<"PriceSnapshot"> | bigint | number | null
    fetchedAt?: DateTimeFilter<"PriceSnapshot"> | Date | string
  }, "id">

  export type PriceSnapshotOrderByWithAggregationInput = {
    id?: SortOrder
    symbol?: SortOrder
    assetType?: SortOrder
    price?: SortOrder
    change?: SortOrderInput | SortOrder
    changePct?: SortOrderInput | SortOrder
    volume?: SortOrderInput | SortOrder
    fetchedAt?: SortOrder
    _count?: PriceSnapshotCountOrderByAggregateInput
    _avg?: PriceSnapshotAvgOrderByAggregateInput
    _max?: PriceSnapshotMaxOrderByAggregateInput
    _min?: PriceSnapshotMinOrderByAggregateInput
    _sum?: PriceSnapshotSumOrderByAggregateInput
  }

  export type PriceSnapshotScalarWhereWithAggregatesInput = {
    AND?: PriceSnapshotScalarWhereWithAggregatesInput | PriceSnapshotScalarWhereWithAggregatesInput[]
    OR?: PriceSnapshotScalarWhereWithAggregatesInput[]
    NOT?: PriceSnapshotScalarWhereWithAggregatesInput | PriceSnapshotScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PriceSnapshot"> | string
    symbol?: StringWithAggregatesFilter<"PriceSnapshot"> | string
    assetType?: EnumAssetTypeWithAggregatesFilter<"PriceSnapshot"> | $Enums.AssetType
    price?: DecimalWithAggregatesFilter<"PriceSnapshot"> | Decimal | DecimalJsLike | number | string
    change?: DecimalNullableWithAggregatesFilter<"PriceSnapshot"> | Decimal | DecimalJsLike | number | string | null
    changePct?: DecimalNullableWithAggregatesFilter<"PriceSnapshot"> | Decimal | DecimalJsLike | number | string | null
    volume?: BigIntNullableWithAggregatesFilter<"PriceSnapshot"> | bigint | number | null
    fetchedAt?: DateTimeWithAggregatesFilter<"PriceSnapshot"> | Date | string
  }

  export type DailyPriceWhereInput = {
    AND?: DailyPriceWhereInput | DailyPriceWhereInput[]
    OR?: DailyPriceWhereInput[]
    NOT?: DailyPriceWhereInput | DailyPriceWhereInput[]
    id?: StringFilter<"DailyPrice"> | string
    symbol?: StringFilter<"DailyPrice"> | string
    assetType?: EnumAssetTypeFilter<"DailyPrice"> | $Enums.AssetType
    date?: DateTimeFilter<"DailyPrice"> | Date | string
    open?: DecimalFilter<"DailyPrice"> | Decimal | DecimalJsLike | number | string
    high?: DecimalFilter<"DailyPrice"> | Decimal | DecimalJsLike | number | string
    low?: DecimalFilter<"DailyPrice"> | Decimal | DecimalJsLike | number | string
    close?: DecimalFilter<"DailyPrice"> | Decimal | DecimalJsLike | number | string
    volume?: BigIntNullableFilter<"DailyPrice"> | bigint | number | null
  }

  export type DailyPriceOrderByWithRelationInput = {
    id?: SortOrder
    symbol?: SortOrder
    assetType?: SortOrder
    date?: SortOrder
    open?: SortOrder
    high?: SortOrder
    low?: SortOrder
    close?: SortOrder
    volume?: SortOrderInput | SortOrder
  }

  export type DailyPriceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    symbol_assetType_date?: DailyPriceSymbolAssetTypeDateCompoundUniqueInput
    AND?: DailyPriceWhereInput | DailyPriceWhereInput[]
    OR?: DailyPriceWhereInput[]
    NOT?: DailyPriceWhereInput | DailyPriceWhereInput[]
    symbol?: StringFilter<"DailyPrice"> | string
    assetType?: EnumAssetTypeFilter<"DailyPrice"> | $Enums.AssetType
    date?: DateTimeFilter<"DailyPrice"> | Date | string
    open?: DecimalFilter<"DailyPrice"> | Decimal | DecimalJsLike | number | string
    high?: DecimalFilter<"DailyPrice"> | Decimal | DecimalJsLike | number | string
    low?: DecimalFilter<"DailyPrice"> | Decimal | DecimalJsLike | number | string
    close?: DecimalFilter<"DailyPrice"> | Decimal | DecimalJsLike | number | string
    volume?: BigIntNullableFilter<"DailyPrice"> | bigint | number | null
  }, "id" | "symbol_assetType_date">

  export type DailyPriceOrderByWithAggregationInput = {
    id?: SortOrder
    symbol?: SortOrder
    assetType?: SortOrder
    date?: SortOrder
    open?: SortOrder
    high?: SortOrder
    low?: SortOrder
    close?: SortOrder
    volume?: SortOrderInput | SortOrder
    _count?: DailyPriceCountOrderByAggregateInput
    _avg?: DailyPriceAvgOrderByAggregateInput
    _max?: DailyPriceMaxOrderByAggregateInput
    _min?: DailyPriceMinOrderByAggregateInput
    _sum?: DailyPriceSumOrderByAggregateInput
  }

  export type DailyPriceScalarWhereWithAggregatesInput = {
    AND?: DailyPriceScalarWhereWithAggregatesInput | DailyPriceScalarWhereWithAggregatesInput[]
    OR?: DailyPriceScalarWhereWithAggregatesInput[]
    NOT?: DailyPriceScalarWhereWithAggregatesInput | DailyPriceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DailyPrice"> | string
    symbol?: StringWithAggregatesFilter<"DailyPrice"> | string
    assetType?: EnumAssetTypeWithAggregatesFilter<"DailyPrice"> | $Enums.AssetType
    date?: DateTimeWithAggregatesFilter<"DailyPrice"> | Date | string
    open?: DecimalWithAggregatesFilter<"DailyPrice"> | Decimal | DecimalJsLike | number | string
    high?: DecimalWithAggregatesFilter<"DailyPrice"> | Decimal | DecimalJsLike | number | string
    low?: DecimalWithAggregatesFilter<"DailyPrice"> | Decimal | DecimalJsLike | number | string
    close?: DecimalWithAggregatesFilter<"DailyPrice"> | Decimal | DecimalJsLike | number | string
    volume?: BigIntNullableWithAggregatesFilter<"DailyPrice"> | bigint | number | null
  }

  export type TrackedSymbolWhereInput = {
    AND?: TrackedSymbolWhereInput | TrackedSymbolWhereInput[]
    OR?: TrackedSymbolWhereInput[]
    NOT?: TrackedSymbolWhereInput | TrackedSymbolWhereInput[]
    symbol?: StringFilter<"TrackedSymbol"> | string
    assetType?: EnumAssetTypeFilter<"TrackedSymbol"> | $Enums.AssetType
    active?: BoolFilter<"TrackedSymbol"> | boolean
  }

  export type TrackedSymbolOrderByWithRelationInput = {
    symbol?: SortOrder
    assetType?: SortOrder
    active?: SortOrder
  }

  export type TrackedSymbolWhereUniqueInput = Prisma.AtLeast<{
    symbol?: string
    AND?: TrackedSymbolWhereInput | TrackedSymbolWhereInput[]
    OR?: TrackedSymbolWhereInput[]
    NOT?: TrackedSymbolWhereInput | TrackedSymbolWhereInput[]
    assetType?: EnumAssetTypeFilter<"TrackedSymbol"> | $Enums.AssetType
    active?: BoolFilter<"TrackedSymbol"> | boolean
  }, "symbol">

  export type TrackedSymbolOrderByWithAggregationInput = {
    symbol?: SortOrder
    assetType?: SortOrder
    active?: SortOrder
    _count?: TrackedSymbolCountOrderByAggregateInput
    _max?: TrackedSymbolMaxOrderByAggregateInput
    _min?: TrackedSymbolMinOrderByAggregateInput
  }

  export type TrackedSymbolScalarWhereWithAggregatesInput = {
    AND?: TrackedSymbolScalarWhereWithAggregatesInput | TrackedSymbolScalarWhereWithAggregatesInput[]
    OR?: TrackedSymbolScalarWhereWithAggregatesInput[]
    NOT?: TrackedSymbolScalarWhereWithAggregatesInput | TrackedSymbolScalarWhereWithAggregatesInput[]
    symbol?: StringWithAggregatesFilter<"TrackedSymbol"> | string
    assetType?: EnumAssetTypeWithAggregatesFilter<"TrackedSymbol"> | $Enums.AssetType
    active?: BoolWithAggregatesFilter<"TrackedSymbol"> | boolean
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    watchlists?: WatchlistCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    watchlists?: WatchlistUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    watchlists?: WatchlistUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    watchlists?: WatchlistUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchlistCreateInput = {
    id?: string
    name: string
    user: UserCreateNestedOneWithoutWatchlistsInput
    items?: WatchlistItemCreateNestedManyWithoutWatchlistInput
  }

  export type WatchlistUncheckedCreateInput = {
    id?: string
    name: string
    userId: string
    items?: WatchlistItemUncheckedCreateNestedManyWithoutWatchlistInput
  }

  export type WatchlistUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutWatchlistsNestedInput
    items?: WatchlistItemUpdateManyWithoutWatchlistNestedInput
  }

  export type WatchlistUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    items?: WatchlistItemUncheckedUpdateManyWithoutWatchlistNestedInput
  }

  export type WatchlistCreateManyInput = {
    id?: string
    name: string
    userId: string
  }

  export type WatchlistUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type WatchlistUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type WatchlistItemCreateInput = {
    id?: string
    symbol: string
    assetType: $Enums.AssetType
    watchlist: WatchlistCreateNestedOneWithoutItemsInput
  }

  export type WatchlistItemUncheckedCreateInput = {
    id?: string
    symbol: string
    assetType: $Enums.AssetType
    watchlistId: string
  }

  export type WatchlistItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    assetType?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    watchlist?: WatchlistUpdateOneRequiredWithoutItemsNestedInput
  }

  export type WatchlistItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    assetType?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    watchlistId?: StringFieldUpdateOperationsInput | string
  }

  export type WatchlistItemCreateManyInput = {
    id?: string
    symbol: string
    assetType: $Enums.AssetType
    watchlistId: string
  }

  export type WatchlistItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    assetType?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
  }

  export type WatchlistItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    assetType?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    watchlistId?: StringFieldUpdateOperationsInput | string
  }

  export type PriceSnapshotCreateInput = {
    id?: string
    symbol: string
    assetType: $Enums.AssetType
    price: Decimal | DecimalJsLike | number | string
    change?: Decimal | DecimalJsLike | number | string | null
    changePct?: Decimal | DecimalJsLike | number | string | null
    volume?: bigint | number | null
    fetchedAt?: Date | string
  }

  export type PriceSnapshotUncheckedCreateInput = {
    id?: string
    symbol: string
    assetType: $Enums.AssetType
    price: Decimal | DecimalJsLike | number | string
    change?: Decimal | DecimalJsLike | number | string | null
    changePct?: Decimal | DecimalJsLike | number | string | null
    volume?: bigint | number | null
    fetchedAt?: Date | string
  }

  export type PriceSnapshotUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    assetType?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    change?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    changePct?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    volume?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    fetchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceSnapshotUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    assetType?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    change?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    changePct?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    volume?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    fetchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceSnapshotCreateManyInput = {
    id?: string
    symbol: string
    assetType: $Enums.AssetType
    price: Decimal | DecimalJsLike | number | string
    change?: Decimal | DecimalJsLike | number | string | null
    changePct?: Decimal | DecimalJsLike | number | string | null
    volume?: bigint | number | null
    fetchedAt?: Date | string
  }

  export type PriceSnapshotUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    assetType?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    change?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    changePct?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    volume?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    fetchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceSnapshotUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    assetType?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    change?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    changePct?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    volume?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    fetchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyPriceCreateInput = {
    id?: string
    symbol: string
    assetType: $Enums.AssetType
    date: Date | string
    open: Decimal | DecimalJsLike | number | string
    high: Decimal | DecimalJsLike | number | string
    low: Decimal | DecimalJsLike | number | string
    close: Decimal | DecimalJsLike | number | string
    volume?: bigint | number | null
  }

  export type DailyPriceUncheckedCreateInput = {
    id?: string
    symbol: string
    assetType: $Enums.AssetType
    date: Date | string
    open: Decimal | DecimalJsLike | number | string
    high: Decimal | DecimalJsLike | number | string
    low: Decimal | DecimalJsLike | number | string
    close: Decimal | DecimalJsLike | number | string
    volume?: bigint | number | null
  }

  export type DailyPriceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    assetType?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    open?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    high?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    low?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    close?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    volume?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type DailyPriceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    assetType?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    open?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    high?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    low?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    close?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    volume?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type DailyPriceCreateManyInput = {
    id?: string
    symbol: string
    assetType: $Enums.AssetType
    date: Date | string
    open: Decimal | DecimalJsLike | number | string
    high: Decimal | DecimalJsLike | number | string
    low: Decimal | DecimalJsLike | number | string
    close: Decimal | DecimalJsLike | number | string
    volume?: bigint | number | null
  }

  export type DailyPriceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    assetType?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    open?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    high?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    low?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    close?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    volume?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type DailyPriceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    assetType?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    open?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    high?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    low?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    close?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    volume?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type TrackedSymbolCreateInput = {
    symbol: string
    assetType: $Enums.AssetType
    active?: boolean
  }

  export type TrackedSymbolUncheckedCreateInput = {
    symbol: string
    assetType: $Enums.AssetType
    active?: boolean
  }

  export type TrackedSymbolUpdateInput = {
    symbol?: StringFieldUpdateOperationsInput | string
    assetType?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TrackedSymbolUncheckedUpdateInput = {
    symbol?: StringFieldUpdateOperationsInput | string
    assetType?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TrackedSymbolCreateManyInput = {
    symbol: string
    assetType: $Enums.AssetType
    active?: boolean
  }

  export type TrackedSymbolUpdateManyMutationInput = {
    symbol?: StringFieldUpdateOperationsInput | string
    assetType?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TrackedSymbolUncheckedUpdateManyInput = {
    symbol?: StringFieldUpdateOperationsInput | string
    assetType?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type WatchlistListRelationFilter = {
    every?: WatchlistWhereInput
    some?: WatchlistWhereInput
    none?: WatchlistWhereInput
  }

  export type WatchlistOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type WatchlistItemListRelationFilter = {
    every?: WatchlistItemWhereInput
    some?: WatchlistItemWhereInput
    none?: WatchlistItemWhereInput
  }

  export type WatchlistItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WatchlistCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
  }

  export type WatchlistMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
  }

  export type WatchlistMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
  }

  export type EnumAssetTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AssetType | EnumAssetTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AssetType[] | ListEnumAssetTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssetType[] | ListEnumAssetTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAssetTypeFilter<$PrismaModel> | $Enums.AssetType
  }

  export type WatchlistRelationFilter = {
    is?: WatchlistWhereInput
    isNot?: WatchlistWhereInput
  }

  export type WatchlistItemWatchlistIdSymbolAssetTypeCompoundUniqueInput = {
    watchlistId: string
    symbol: string
    assetType: $Enums.AssetType
  }

  export type WatchlistItemCountOrderByAggregateInput = {
    id?: SortOrder
    symbol?: SortOrder
    assetType?: SortOrder
    watchlistId?: SortOrder
  }

  export type WatchlistItemMaxOrderByAggregateInput = {
    id?: SortOrder
    symbol?: SortOrder
    assetType?: SortOrder
    watchlistId?: SortOrder
  }

  export type WatchlistItemMinOrderByAggregateInput = {
    id?: SortOrder
    symbol?: SortOrder
    assetType?: SortOrder
    watchlistId?: SortOrder
  }

  export type EnumAssetTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AssetType | EnumAssetTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AssetType[] | ListEnumAssetTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssetType[] | ListEnumAssetTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAssetTypeWithAggregatesFilter<$PrismaModel> | $Enums.AssetType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAssetTypeFilter<$PrismaModel>
    _max?: NestedEnumAssetTypeFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PriceSnapshotCountOrderByAggregateInput = {
    id?: SortOrder
    symbol?: SortOrder
    assetType?: SortOrder
    price?: SortOrder
    change?: SortOrder
    changePct?: SortOrder
    volume?: SortOrder
    fetchedAt?: SortOrder
  }

  export type PriceSnapshotAvgOrderByAggregateInput = {
    price?: SortOrder
    change?: SortOrder
    changePct?: SortOrder
    volume?: SortOrder
  }

  export type PriceSnapshotMaxOrderByAggregateInput = {
    id?: SortOrder
    symbol?: SortOrder
    assetType?: SortOrder
    price?: SortOrder
    change?: SortOrder
    changePct?: SortOrder
    volume?: SortOrder
    fetchedAt?: SortOrder
  }

  export type PriceSnapshotMinOrderByAggregateInput = {
    id?: SortOrder
    symbol?: SortOrder
    assetType?: SortOrder
    price?: SortOrder
    change?: SortOrder
    changePct?: SortOrder
    volume?: SortOrder
    fetchedAt?: SortOrder
  }

  export type PriceSnapshotSumOrderByAggregateInput = {
    price?: SortOrder
    change?: SortOrder
    changePct?: SortOrder
    volume?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type DailyPriceSymbolAssetTypeDateCompoundUniqueInput = {
    symbol: string
    assetType: $Enums.AssetType
    date: Date | string
  }

  export type DailyPriceCountOrderByAggregateInput = {
    id?: SortOrder
    symbol?: SortOrder
    assetType?: SortOrder
    date?: SortOrder
    open?: SortOrder
    high?: SortOrder
    low?: SortOrder
    close?: SortOrder
    volume?: SortOrder
  }

  export type DailyPriceAvgOrderByAggregateInput = {
    open?: SortOrder
    high?: SortOrder
    low?: SortOrder
    close?: SortOrder
    volume?: SortOrder
  }

  export type DailyPriceMaxOrderByAggregateInput = {
    id?: SortOrder
    symbol?: SortOrder
    assetType?: SortOrder
    date?: SortOrder
    open?: SortOrder
    high?: SortOrder
    low?: SortOrder
    close?: SortOrder
    volume?: SortOrder
  }

  export type DailyPriceMinOrderByAggregateInput = {
    id?: SortOrder
    symbol?: SortOrder
    assetType?: SortOrder
    date?: SortOrder
    open?: SortOrder
    high?: SortOrder
    low?: SortOrder
    close?: SortOrder
    volume?: SortOrder
  }

  export type DailyPriceSumOrderByAggregateInput = {
    open?: SortOrder
    high?: SortOrder
    low?: SortOrder
    close?: SortOrder
    volume?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type TrackedSymbolCountOrderByAggregateInput = {
    symbol?: SortOrder
    assetType?: SortOrder
    active?: SortOrder
  }

  export type TrackedSymbolMaxOrderByAggregateInput = {
    symbol?: SortOrder
    assetType?: SortOrder
    active?: SortOrder
  }

  export type TrackedSymbolMinOrderByAggregateInput = {
    symbol?: SortOrder
    assetType?: SortOrder
    active?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type WatchlistCreateNestedManyWithoutUserInput = {
    create?: XOR<WatchlistCreateWithoutUserInput, WatchlistUncheckedCreateWithoutUserInput> | WatchlistCreateWithoutUserInput[] | WatchlistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WatchlistCreateOrConnectWithoutUserInput | WatchlistCreateOrConnectWithoutUserInput[]
    createMany?: WatchlistCreateManyUserInputEnvelope
    connect?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
  }

  export type WatchlistUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WatchlistCreateWithoutUserInput, WatchlistUncheckedCreateWithoutUserInput> | WatchlistCreateWithoutUserInput[] | WatchlistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WatchlistCreateOrConnectWithoutUserInput | WatchlistCreateOrConnectWithoutUserInput[]
    createMany?: WatchlistCreateManyUserInputEnvelope
    connect?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type WatchlistUpdateManyWithoutUserNestedInput = {
    create?: XOR<WatchlistCreateWithoutUserInput, WatchlistUncheckedCreateWithoutUserInput> | WatchlistCreateWithoutUserInput[] | WatchlistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WatchlistCreateOrConnectWithoutUserInput | WatchlistCreateOrConnectWithoutUserInput[]
    upsert?: WatchlistUpsertWithWhereUniqueWithoutUserInput | WatchlistUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WatchlistCreateManyUserInputEnvelope
    set?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
    disconnect?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
    delete?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
    connect?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
    update?: WatchlistUpdateWithWhereUniqueWithoutUserInput | WatchlistUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WatchlistUpdateManyWithWhereWithoutUserInput | WatchlistUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WatchlistScalarWhereInput | WatchlistScalarWhereInput[]
  }

  export type WatchlistUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WatchlistCreateWithoutUserInput, WatchlistUncheckedCreateWithoutUserInput> | WatchlistCreateWithoutUserInput[] | WatchlistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WatchlistCreateOrConnectWithoutUserInput | WatchlistCreateOrConnectWithoutUserInput[]
    upsert?: WatchlistUpsertWithWhereUniqueWithoutUserInput | WatchlistUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WatchlistCreateManyUserInputEnvelope
    set?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
    disconnect?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
    delete?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
    connect?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
    update?: WatchlistUpdateWithWhereUniqueWithoutUserInput | WatchlistUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WatchlistUpdateManyWithWhereWithoutUserInput | WatchlistUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WatchlistScalarWhereInput | WatchlistScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutWatchlistsInput = {
    create?: XOR<UserCreateWithoutWatchlistsInput, UserUncheckedCreateWithoutWatchlistsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWatchlistsInput
    connect?: UserWhereUniqueInput
  }

  export type WatchlistItemCreateNestedManyWithoutWatchlistInput = {
    create?: XOR<WatchlistItemCreateWithoutWatchlistInput, WatchlistItemUncheckedCreateWithoutWatchlistInput> | WatchlistItemCreateWithoutWatchlistInput[] | WatchlistItemUncheckedCreateWithoutWatchlistInput[]
    connectOrCreate?: WatchlistItemCreateOrConnectWithoutWatchlistInput | WatchlistItemCreateOrConnectWithoutWatchlistInput[]
    createMany?: WatchlistItemCreateManyWatchlistInputEnvelope
    connect?: WatchlistItemWhereUniqueInput | WatchlistItemWhereUniqueInput[]
  }

  export type WatchlistItemUncheckedCreateNestedManyWithoutWatchlistInput = {
    create?: XOR<WatchlistItemCreateWithoutWatchlistInput, WatchlistItemUncheckedCreateWithoutWatchlistInput> | WatchlistItemCreateWithoutWatchlistInput[] | WatchlistItemUncheckedCreateWithoutWatchlistInput[]
    connectOrCreate?: WatchlistItemCreateOrConnectWithoutWatchlistInput | WatchlistItemCreateOrConnectWithoutWatchlistInput[]
    createMany?: WatchlistItemCreateManyWatchlistInputEnvelope
    connect?: WatchlistItemWhereUniqueInput | WatchlistItemWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutWatchlistsNestedInput = {
    create?: XOR<UserCreateWithoutWatchlistsInput, UserUncheckedCreateWithoutWatchlistsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWatchlistsInput
    upsert?: UserUpsertWithoutWatchlistsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWatchlistsInput, UserUpdateWithoutWatchlistsInput>, UserUncheckedUpdateWithoutWatchlistsInput>
  }

  export type WatchlistItemUpdateManyWithoutWatchlistNestedInput = {
    create?: XOR<WatchlistItemCreateWithoutWatchlistInput, WatchlistItemUncheckedCreateWithoutWatchlistInput> | WatchlistItemCreateWithoutWatchlistInput[] | WatchlistItemUncheckedCreateWithoutWatchlistInput[]
    connectOrCreate?: WatchlistItemCreateOrConnectWithoutWatchlistInput | WatchlistItemCreateOrConnectWithoutWatchlistInput[]
    upsert?: WatchlistItemUpsertWithWhereUniqueWithoutWatchlistInput | WatchlistItemUpsertWithWhereUniqueWithoutWatchlistInput[]
    createMany?: WatchlistItemCreateManyWatchlistInputEnvelope
    set?: WatchlistItemWhereUniqueInput | WatchlistItemWhereUniqueInput[]
    disconnect?: WatchlistItemWhereUniqueInput | WatchlistItemWhereUniqueInput[]
    delete?: WatchlistItemWhereUniqueInput | WatchlistItemWhereUniqueInput[]
    connect?: WatchlistItemWhereUniqueInput | WatchlistItemWhereUniqueInput[]
    update?: WatchlistItemUpdateWithWhereUniqueWithoutWatchlistInput | WatchlistItemUpdateWithWhereUniqueWithoutWatchlistInput[]
    updateMany?: WatchlistItemUpdateManyWithWhereWithoutWatchlistInput | WatchlistItemUpdateManyWithWhereWithoutWatchlistInput[]
    deleteMany?: WatchlistItemScalarWhereInput | WatchlistItemScalarWhereInput[]
  }

  export type WatchlistItemUncheckedUpdateManyWithoutWatchlistNestedInput = {
    create?: XOR<WatchlistItemCreateWithoutWatchlistInput, WatchlistItemUncheckedCreateWithoutWatchlistInput> | WatchlistItemCreateWithoutWatchlistInput[] | WatchlistItemUncheckedCreateWithoutWatchlistInput[]
    connectOrCreate?: WatchlistItemCreateOrConnectWithoutWatchlistInput | WatchlistItemCreateOrConnectWithoutWatchlistInput[]
    upsert?: WatchlistItemUpsertWithWhereUniqueWithoutWatchlistInput | WatchlistItemUpsertWithWhereUniqueWithoutWatchlistInput[]
    createMany?: WatchlistItemCreateManyWatchlistInputEnvelope
    set?: WatchlistItemWhereUniqueInput | WatchlistItemWhereUniqueInput[]
    disconnect?: WatchlistItemWhereUniqueInput | WatchlistItemWhereUniqueInput[]
    delete?: WatchlistItemWhereUniqueInput | WatchlistItemWhereUniqueInput[]
    connect?: WatchlistItemWhereUniqueInput | WatchlistItemWhereUniqueInput[]
    update?: WatchlistItemUpdateWithWhereUniqueWithoutWatchlistInput | WatchlistItemUpdateWithWhereUniqueWithoutWatchlistInput[]
    updateMany?: WatchlistItemUpdateManyWithWhereWithoutWatchlistInput | WatchlistItemUpdateManyWithWhereWithoutWatchlistInput[]
    deleteMany?: WatchlistItemScalarWhereInput | WatchlistItemScalarWhereInput[]
  }

  export type WatchlistCreateNestedOneWithoutItemsInput = {
    create?: XOR<WatchlistCreateWithoutItemsInput, WatchlistUncheckedCreateWithoutItemsInput>
    connectOrCreate?: WatchlistCreateOrConnectWithoutItemsInput
    connect?: WatchlistWhereUniqueInput
  }

  export type EnumAssetTypeFieldUpdateOperationsInput = {
    set?: $Enums.AssetType
  }

  export type WatchlistUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<WatchlistCreateWithoutItemsInput, WatchlistUncheckedCreateWithoutItemsInput>
    connectOrCreate?: WatchlistCreateOrConnectWithoutItemsInput
    upsert?: WatchlistUpsertWithoutItemsInput
    connect?: WatchlistWhereUniqueInput
    update?: XOR<XOR<WatchlistUpdateToOneWithWhereWithoutItemsInput, WatchlistUpdateWithoutItemsInput>, WatchlistUncheckedUpdateWithoutItemsInput>
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumAssetTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AssetType | EnumAssetTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AssetType[] | ListEnumAssetTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssetType[] | ListEnumAssetTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAssetTypeFilter<$PrismaModel> | $Enums.AssetType
  }

  export type NestedEnumAssetTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AssetType | EnumAssetTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AssetType[] | ListEnumAssetTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssetType[] | ListEnumAssetTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAssetTypeWithAggregatesFilter<$PrismaModel> | $Enums.AssetType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAssetTypeFilter<$PrismaModel>
    _max?: NestedEnumAssetTypeFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type WatchlistCreateWithoutUserInput = {
    id?: string
    name: string
    items?: WatchlistItemCreateNestedManyWithoutWatchlistInput
  }

  export type WatchlistUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    items?: WatchlistItemUncheckedCreateNestedManyWithoutWatchlistInput
  }

  export type WatchlistCreateOrConnectWithoutUserInput = {
    where: WatchlistWhereUniqueInput
    create: XOR<WatchlistCreateWithoutUserInput, WatchlistUncheckedCreateWithoutUserInput>
  }

  export type WatchlistCreateManyUserInputEnvelope = {
    data: WatchlistCreateManyUserInput | WatchlistCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WatchlistUpsertWithWhereUniqueWithoutUserInput = {
    where: WatchlistWhereUniqueInput
    update: XOR<WatchlistUpdateWithoutUserInput, WatchlistUncheckedUpdateWithoutUserInput>
    create: XOR<WatchlistCreateWithoutUserInput, WatchlistUncheckedCreateWithoutUserInput>
  }

  export type WatchlistUpdateWithWhereUniqueWithoutUserInput = {
    where: WatchlistWhereUniqueInput
    data: XOR<WatchlistUpdateWithoutUserInput, WatchlistUncheckedUpdateWithoutUserInput>
  }

  export type WatchlistUpdateManyWithWhereWithoutUserInput = {
    where: WatchlistScalarWhereInput
    data: XOR<WatchlistUpdateManyMutationInput, WatchlistUncheckedUpdateManyWithoutUserInput>
  }

  export type WatchlistScalarWhereInput = {
    AND?: WatchlistScalarWhereInput | WatchlistScalarWhereInput[]
    OR?: WatchlistScalarWhereInput[]
    NOT?: WatchlistScalarWhereInput | WatchlistScalarWhereInput[]
    id?: StringFilter<"Watchlist"> | string
    name?: StringFilter<"Watchlist"> | string
    userId?: StringFilter<"Watchlist"> | string
  }

  export type UserCreateWithoutWatchlistsInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
  }

  export type UserUncheckedCreateWithoutWatchlistsInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
  }

  export type UserCreateOrConnectWithoutWatchlistsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWatchlistsInput, UserUncheckedCreateWithoutWatchlistsInput>
  }

  export type WatchlistItemCreateWithoutWatchlistInput = {
    id?: string
    symbol: string
    assetType: $Enums.AssetType
  }

  export type WatchlistItemUncheckedCreateWithoutWatchlistInput = {
    id?: string
    symbol: string
    assetType: $Enums.AssetType
  }

  export type WatchlistItemCreateOrConnectWithoutWatchlistInput = {
    where: WatchlistItemWhereUniqueInput
    create: XOR<WatchlistItemCreateWithoutWatchlistInput, WatchlistItemUncheckedCreateWithoutWatchlistInput>
  }

  export type WatchlistItemCreateManyWatchlistInputEnvelope = {
    data: WatchlistItemCreateManyWatchlistInput | WatchlistItemCreateManyWatchlistInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutWatchlistsInput = {
    update: XOR<UserUpdateWithoutWatchlistsInput, UserUncheckedUpdateWithoutWatchlistsInput>
    create: XOR<UserCreateWithoutWatchlistsInput, UserUncheckedCreateWithoutWatchlistsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWatchlistsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWatchlistsInput, UserUncheckedUpdateWithoutWatchlistsInput>
  }

  export type UserUpdateWithoutWatchlistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutWatchlistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchlistItemUpsertWithWhereUniqueWithoutWatchlistInput = {
    where: WatchlistItemWhereUniqueInput
    update: XOR<WatchlistItemUpdateWithoutWatchlistInput, WatchlistItemUncheckedUpdateWithoutWatchlistInput>
    create: XOR<WatchlistItemCreateWithoutWatchlistInput, WatchlistItemUncheckedCreateWithoutWatchlistInput>
  }

  export type WatchlistItemUpdateWithWhereUniqueWithoutWatchlistInput = {
    where: WatchlistItemWhereUniqueInput
    data: XOR<WatchlistItemUpdateWithoutWatchlistInput, WatchlistItemUncheckedUpdateWithoutWatchlistInput>
  }

  export type WatchlistItemUpdateManyWithWhereWithoutWatchlistInput = {
    where: WatchlistItemScalarWhereInput
    data: XOR<WatchlistItemUpdateManyMutationInput, WatchlistItemUncheckedUpdateManyWithoutWatchlistInput>
  }

  export type WatchlistItemScalarWhereInput = {
    AND?: WatchlistItemScalarWhereInput | WatchlistItemScalarWhereInput[]
    OR?: WatchlistItemScalarWhereInput[]
    NOT?: WatchlistItemScalarWhereInput | WatchlistItemScalarWhereInput[]
    id?: StringFilter<"WatchlistItem"> | string
    symbol?: StringFilter<"WatchlistItem"> | string
    assetType?: EnumAssetTypeFilter<"WatchlistItem"> | $Enums.AssetType
    watchlistId?: StringFilter<"WatchlistItem"> | string
  }

  export type WatchlistCreateWithoutItemsInput = {
    id?: string
    name: string
    user: UserCreateNestedOneWithoutWatchlistsInput
  }

  export type WatchlistUncheckedCreateWithoutItemsInput = {
    id?: string
    name: string
    userId: string
  }

  export type WatchlistCreateOrConnectWithoutItemsInput = {
    where: WatchlistWhereUniqueInput
    create: XOR<WatchlistCreateWithoutItemsInput, WatchlistUncheckedCreateWithoutItemsInput>
  }

  export type WatchlistUpsertWithoutItemsInput = {
    update: XOR<WatchlistUpdateWithoutItemsInput, WatchlistUncheckedUpdateWithoutItemsInput>
    create: XOR<WatchlistCreateWithoutItemsInput, WatchlistUncheckedCreateWithoutItemsInput>
    where?: WatchlistWhereInput
  }

  export type WatchlistUpdateToOneWithWhereWithoutItemsInput = {
    where?: WatchlistWhereInput
    data: XOR<WatchlistUpdateWithoutItemsInput, WatchlistUncheckedUpdateWithoutItemsInput>
  }

  export type WatchlistUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutWatchlistsNestedInput
  }

  export type WatchlistUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type WatchlistCreateManyUserInput = {
    id?: string
    name: string
  }

  export type WatchlistUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    items?: WatchlistItemUpdateManyWithoutWatchlistNestedInput
  }

  export type WatchlistUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    items?: WatchlistItemUncheckedUpdateManyWithoutWatchlistNestedInput
  }

  export type WatchlistUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type WatchlistItemCreateManyWatchlistInput = {
    id?: string
    symbol: string
    assetType: $Enums.AssetType
  }

  export type WatchlistItemUpdateWithoutWatchlistInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    assetType?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
  }

  export type WatchlistItemUncheckedUpdateWithoutWatchlistInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    assetType?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
  }

  export type WatchlistItemUncheckedUpdateManyWithoutWatchlistInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    assetType?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WatchlistCountOutputTypeDefaultArgs instead
     */
    export type WatchlistCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WatchlistCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WatchlistDefaultArgs instead
     */
    export type WatchlistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WatchlistDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WatchlistItemDefaultArgs instead
     */
    export type WatchlistItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WatchlistItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PriceSnapshotDefaultArgs instead
     */
    export type PriceSnapshotArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PriceSnapshotDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DailyPriceDefaultArgs instead
     */
    export type DailyPriceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DailyPriceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TrackedSymbolDefaultArgs instead
     */
    export type TrackedSymbolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TrackedSymbolDefaultArgs<ExtArgs>

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