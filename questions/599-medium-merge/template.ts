export type Merge<First, Second> = {
  [K in keyof First | keyof Second]:
    K extends keyof Second
    ? Second[K] 
    : K extends keyof First
      ? First[K] 
      : never
}
