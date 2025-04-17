type Not = " " | "\n" | "\t"

export type Trim<S extends string> =
  S extends `${Not}${infer Rest}${Not}` ? Trim<Rest> :
  S extends `${infer Rest}${Not}`? Trim<Rest>:
  S extends `${Not}${infer Rest}`? Trim<Rest>:
  S

