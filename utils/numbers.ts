export function generateRandomNumber(length: number = 8) {
  const min = Math.pow(10, length - 1);
  const max = Math.pow(10, length) - 1;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const generateList = (length: number, variant: 'random' | 'incremental') => {
  const list = [];
  for (let i = 0; i < length; i++) {
    list.push(variant === 'random' ? generateRandomNumber() : i);
  }
  return list;
}
