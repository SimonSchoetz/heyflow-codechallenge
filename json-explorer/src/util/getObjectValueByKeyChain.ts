export const getObjectValueByKeyChain = (
  obj: any,
  keyChain: string
): string => {
  // Convert array indices to dot notation
  const keys = keyChain.replace(/\[(\d+)\]/g, '.$1').split('.');

  // Traverse the object with the keys
  const currentValue = keys.reduce((o, key) => {
    return key in o ? o[key] : undefined;
  }, obj);

  if (
    ['string', 'boolean', 'number'].includes(typeof currentValue) ||
    currentValue === null
  ) {
    return String(currentValue);
  }
  return 'undefined';
};
