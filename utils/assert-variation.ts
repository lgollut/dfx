export function assertSliceVariation<T extends string>(
  variation: T,
  value: { variation: T },
): asserts variation is NonNullable<T> {
  if (value === undefined || value === null) {
    throw new Error(`${value} is not defined`);
  }

  if (value.variation !== variation) {
    throw new Error(`${value.variation} is not ${variation}`);
  }
}
