export type Replace<
  S extends string,
  From extends string,
  To extends string
> =
  From extends ""
    ? S
    : From extends To
      ? S
      : S extends `${infer Before}${From}${infer After}`
        ? `${Before}${To}${After}`
        : S;
