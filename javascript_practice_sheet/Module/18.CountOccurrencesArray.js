export function countOccurrences(arr) {
  const counts = {};

  for (const item of arr) {
    counts[item] = (counts[item] || 0) + 1;
  }

  return counts;
}