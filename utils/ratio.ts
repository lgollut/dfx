const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));

export function calculateRatio({
  width,
  height,
}: {
  width: number;
  height: number;
}) {
  const commonFactor = gcd(width, height);

  return `${width / commonFactor}:${height / commonFactor}`;
}
