export type LengthOfString<S extends string, Acum extends any[] = []>
    = S extends `${infer First}${infer Rest}`
    ? LengthOfString<Rest, [...Acum, 1]>
    : Acum['length']
