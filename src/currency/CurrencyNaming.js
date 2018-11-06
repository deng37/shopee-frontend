// Naming the Currency Code From Restcountries API
import { mainConfig } from '../config/config';

export const getCurrencyName = async (currencyCode) => {
  try {
     const response = await fetch(mainConfig.API_CURRENCY_NAMING_URL + currencyCode + "?fields=currencies");
     const responseJson = await response.json();
     return trimNaming(responseJson, currencyCode);
   } catch (error) {
      console.error(error);
   }
}

function trimNaming(result, currencyCode) {
  for (var itr=0; itr<=result[0].currencies.length; itr++) {
    if (result[0].currencies[itr].code === currencyCode) return  result[0].currencies[itr].name
  }
  return result[0].currencies[0].name;
}