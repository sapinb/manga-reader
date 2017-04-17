// @flow

export const typePrefixer = (prefix: string) =>
  (type: string) => `${prefix}.${type}`;
