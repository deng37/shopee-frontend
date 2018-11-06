// Naming the Currency Code From Restcountries API
import { mainConfig } from '../config/config';

export const getCurrencyName = async (currencyCode) => {
  try {
     const response = await fetch(mainConfig.API_CURRENCY_NAMING_URL + currencyCode + "?fields=currencies");
     const responseJson = await response.json();
     return trimNaming(responseJson);
   } catch (error) {
      console.error(error);
   }
}

function trimNaming(result) {
  return result[0].currencies[0].name;
}