// Main Helper
export function twoDecimal(input) {   // only allow two decimal places
  return parseFloat(Math.round(input * 100) / 100).toFixed(2);
}