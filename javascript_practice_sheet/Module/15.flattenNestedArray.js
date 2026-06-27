export function flattenArray(arr) {
  const result = [];

  function flatten(item) {
    for (const value of item) {
      if (Array.isArray(value)) {
        flatten(value);
      } else {
        result.push(value);
      }
    }
  }

  flatten(arr);

  return result;
}