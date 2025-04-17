export type MyReturnType<T> = T extends (...args:any[]) => infer r? r:never
