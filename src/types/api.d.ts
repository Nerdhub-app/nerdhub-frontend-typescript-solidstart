export type EntityWithId<T> = { id: number } & T;

export type EntityTimestampFields = "createdAt" | "updatedAt";

export type EntityTimestamp = string;

export type EntityWithTimestamps<T> = { [Field in EntityTimestampFields]: EntityTimestamp } & T;

export type Entity<T> = EntityWithId<EntityWithTimestamps<T>>;

export type ModelWithTimestamps<T> = T & {
  createdAt: Date;
  updatedAt: Date;
};

export type Nullable<T> = T | null;
