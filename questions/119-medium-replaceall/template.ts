export type ReplaceAll<
  S extends string,
  From extends string,
  To extends string
> =
  From extends ""
    ? S
    : From extends To
      ? S
      : S extends `${infer Before}${From}${infer After}`
        ? `${Before}${To}${ReplaceAll<After,From,To>}`
        : S;

        type example = 'foobarfoobar'
        type newResult = ReplaceAll<example, "ob", "b"> 