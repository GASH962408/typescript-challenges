type Not = " " | "\n" | "\t"

export type Trim<S extends string> =
  S extends `${Not}${infer R}${Not}` ? Trim<R> :
  S extends `${Not}${infer R}` ? Trim<R> :
  S extends `${infer R}${Not}` ? Trim<R> :
  S
