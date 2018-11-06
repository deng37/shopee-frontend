// Main Helper
export function twoDecimal(input) {   // only allow two decimal places
  return parseFloat(Math.round(input * 100) / 100).toFixed(2);
}

export function capitalize(input) {   // capitalize first letter of words
  return input.replace(/\b\w/g, function(l){ return l.toUpperCase() });
}