export const transformKeys = (
  obj: object[],
  dict: { [key: string]: string }
): string[] => Object.keys(obj[0]).map((key) => dict[key] || key);
