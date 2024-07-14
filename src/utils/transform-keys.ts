export const transformKeys = (
  obj: { [key: string]: string },
  dict: { [key: string]: string }
): string[] => Object.keys(obj[0]).map((key) => dict[key] || key);
