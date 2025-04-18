export type AppendToObject<T extends object, U extends PropertyKey, V> = {
   [K in keyof T]: T[K]
} & {
   [K in U]: V
}