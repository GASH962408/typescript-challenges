export type Capitalize<S extends string> = 
S extends ''
? ''
: S extends `${infer First}${infer Last}`
   ? `${Uppercase<First>}${Last}`
   :never
