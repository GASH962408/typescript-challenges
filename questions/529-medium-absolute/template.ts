export type Absolute<T extends number | string | bigint> = 
T extends string
    ? T extends `-${infer R}` 
      ? R 
      : T
    : T extends number | bigint
      ? `${T}` extends `-${infer R}` 
        ? R 
        : `${T}`
      : never

