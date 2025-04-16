export type Pop<T extends any[]> = 
T extends [... infer args,infer Last]? args:null
