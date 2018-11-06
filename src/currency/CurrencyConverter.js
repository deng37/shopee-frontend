// Re-convert data into USD Base Currency
export function reconvertToUsd(result) {
  var currentBase = result.base;
  result.base = "USD";
  for (var rate in result.rates) {
    result.rates[rate] =  rate !== "USD" ? result.rates[rate] / result.rates['USD'] : result.rates[rate];
  }
  result.rates[currentBase] = 1 / result.rates['USD'];
  delete result.rates['USD']
  
  return result
}