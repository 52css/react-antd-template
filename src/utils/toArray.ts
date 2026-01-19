export const toArray = <T>(v: T | T[] | null | undefined): T[] =>
  Array.isArray(v) ? v : v == null ? [] : [v];
