export function formatNumberToRupees(number) {
  if (isNaN(number) || number < 0 || number > 999999999) {
    return null;
  }

  number = parseInt(number);
  const formattedNumber = number.toLocaleString('en-IN', {
    maximumFractionDigits: 0,
    style: 'currency',
    currency: 'INR',
  });

  return formattedNumber;
}