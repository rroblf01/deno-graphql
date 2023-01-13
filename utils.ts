export const isString = (value: string): value is string => {
  return typeof value === "string";
};

export const isNumber = (value: number): value is number => {
  return typeof value === "number";
};
