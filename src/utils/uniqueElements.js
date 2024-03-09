export const uniqueElemOfArray = (arr) => {
  const newSet = [...new Set(arr)];
  return Array.from(newSet);
};
