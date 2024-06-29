export function calculateSimilarityFn(str1: string, str2: string): number {
  const maxLength = Math.max(str1.length, str2.length);
  if (maxLength === 0) return 100;

  let matches = 0;
  const str1Chars = str1.split('');
  const str2Chars = str2.split('');

  for (let char of str1Chars) {
    if (str2Chars.includes(char)) {
      matches++;
      str2Chars.splice(str2Chars.indexOf(char), 1);
    }
  }

  return (matches / maxLength) * 100;

}
